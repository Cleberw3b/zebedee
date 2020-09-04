import { FC, useState, useEffect } from 'react'
import { getWalletDetails } from 'utils/zebedeeApi'
import { normalizeBalanceToSatoshi } from 'utils/zebedeeUtil'

const Balance: FC = () => {
    const [balance, setBalance] = useState( 0 )

    useEffect( () => {
        const myWallet = async () => {
            const walletDetails = await getWalletDetails()
            const satoshiBalance = normalizeBalanceToSatoshi( walletDetails )
            setBalance( satoshiBalance ? satoshiBalance : 0 )
        }
        myWallet()

        // return () => setBalance( 0 )
    }, [] )

    return (
        <div className='balance'>
            {balance}
        </div>
    )
}

export default Balance
