import axios from 'axios'
import { ZEBEDEE_URL } from './consts'
import {
  AmountDescription, ChargeRequestResponse, ChargeResponse, RequestType,
  WalletDetailResponse, WalletDetails, WithdrawRequestResponse, WithdrawResponse
} from './zebedeeInterfaces'

export const setHeader = (gameKey: string, headers?: {}) => {
  return {
    ...headers,
    'Content-Type': 'application/json',
    apikey: gameKey
  }
}

export const getWalletDetails = async (gameKey: string): Promise<WalletDetails> => {
  try
  {
    const response = await axios.get<WalletDetailResponse>(
      ZEBEDEE_URL + '/v0/wallet',
      { headers: setHeader(gameKey) }
    )

    return response.data.data ? response.data.data : { unit: '', balance: 0 }

  } catch (error)
  {
    console.error(error)
    return { unit: 'msats', balance: 0 }
  }
}

export const requestAPI = async (
  type: RequestType,
  gameKey: string,
  { description, amount }: AmountDescription
): Promise<ChargeResponse | WithdrawResponse | null> => {
  let response
  try
  {
    switch (type)
    {
      case 'withdraw':
        response = await axios.post<WithdrawRequestResponse>(
          ZEBEDEE_URL + '/v0/withdrawal-requests',
          { expriesIn: 300, description, amount, callbackUrl: 'https://zebedee.cleberw3b.vercel.app/withdrawSucess' },
          { headers: setHeader(gameKey) }
        )
        if (response && response.data && response.data.data)
          return response.data.data
        return null
        break
      case 'charge':
        response = await axios.post<ChargeRequestResponse>(
          ZEBEDEE_URL + '/v0/charges',
          { expriesIn: 300, description, amount, callbackUrl: 'https://zebedee.cleberw3b.vercel.app/chargeSucess' },
          { headers: setHeader(gameKey) }
        )
        if (response && response.data && response.data.data)
          return response.data.data
        return null
        break
      default:
        return null
        break
    }
  } catch (error)
  {
    console.error(error)
    return null
  }
}
