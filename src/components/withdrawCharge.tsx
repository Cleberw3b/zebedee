import { walletContext } from 'context/walletContext'
import useAlertDialog from 'hooks/alert'
import useQRCodeDialog from 'hooks/qrcode'
import useWalletInfo from 'hooks/useWalletInfo'
import { FC, useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { requestAPI } from 'utils/zebedeeApi'
import { GameKey } from 'utils/zebedeeInterfaces'
import InputNumber from './formComponent/inputNumber'
import InputText from './formComponent/inputText'
import SubmitButton from './formComponent/submitButton'

const WithdrawCharge: FC<GameKey> = ({ gameKey }) => {

  // Component names to make easier handle
  const inputAmountName = 'amount'
  const inputDescriptionName = 'description'

  // Using react hooks API to save states and interact with others isolated compenents
  const { walletInfo } = useContext(walletContext)
  const [qrCodeString, setQRCodeString] = useState('')
  const { register, errors, handleSubmit } = useForm()
  const { openDialog, Alert } = useAlertDialog()
  const { openQRCodeDialog, QRCodeAlert } = useQRCodeDialog()
  const { updateBalance } = useWalletInfo(gameKey)

  // Not working due to different scope between server side and frontend
  // Unsuccessful try since it does not work in front end anyways (just understood it right know)
  // zebedeeEventEmitter.on('withdrawSucess', () => {
  //   updateBalance()
  // })

  // zebedeeEventEmitter.on('chargeSucess', () => {
  //   updateBalance()
  // })

  // Handles withdraw
  const withdraw = async (data: any) => {

    const amount = data[`${inputAmountName}`] * 1000
    const description = data[`${inputDescriptionName}`]

    if (amount < 10 * 1000)
      return openDialog('Withdraw Fail', 'The minimum Withdrawal amount supported is 10 satoshis')

    if (amount > walletInfo.balance * 1000)
      return openDialog('Withdraw Fail', 'Insuficient funds, you have walletInfo.balance satoshis')

    try
    {
      const response = await requestAPI('withdraw', gameKey, { amount, description })

      if (response)
      {
        setQRCodeString(response.invoice.request)

        openQRCodeDialog()

        openDialog('Withdraw', `You requested ${response?.amount} withdraw. \n Invoice: ${response?.invoice.request}`)
      }
    } catch (error)
    {
      openDialog('Withdraw error', 'Could not communicate with server')
    }
  }

  // Handles charge
  const charge = async (data: any) => {

    const amount = data[`${inputAmountName}`] * 1000
    const description = data[`${inputDescriptionName}`]

    if (amount < 10 * 1000)
      return openDialog('Withdraw Fail', 'The minimum Withdrawal amount supported is 10 satoshis')

    try
    {
      const response = await requestAPI('charge', gameKey, { amount, description })

      if (response)
      {
        setQRCodeString(response.invoice.request)

        openQRCodeDialog()

        openDialog('Charge', `Your invoice is ${response?.invoice.request}`)
      }
    } catch (error)
    {
      openDialog('Withdraw error', 'Could not communicate with server')
    }
  }

  useEffect(() => {
    if (errors[`${inputAmountName}`])
      openDialog('Withdraw Fail', 'Ammount must be a number and greater than zero.')

  }, [errors[`${inputAmountName}`]])

  return (
    <div className='withdraw-charge'>
      <form className='default-form' noValidate onSubmit={e => e.preventDefault()}>
        <InputNumber register={register} name={inputAmountName} />
        <InputText register={register} errors={errors} name={inputDescriptionName} required={false} />
        <SubmitButton name={'Withdraw'} triggerAction={handleSubmit(withdraw)} />
        <SubmitButton name={'Charge'} triggerAction={handleSubmit(charge)} />
        <Alert />
        <QRCodeAlert qrcodeString={qrCodeString} />
      </form>
    </div>
  )
}

export default WithdrawCharge
