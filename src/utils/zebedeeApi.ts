import axios from 'axios'
import { ZEBEDEE_API_KEY, ZEBEDEE_URL } from './consts'
import { WalletDetailResponse } from './zebedeeInterfaces'

export const setHeader = ( headers?: {}, apikey: string = ZEBEDEE_API_KEY ) => {
  return {
    ...headers,
    'Content-Type': 'application/json',
    apikey
  }
}

export const getWalletDetails = async (): Promise<WalletDetailResponse> => {
  try {

    const response = await axios.get<WalletDetailResponse>(
      ZEBEDEE_URL + '/v0/wallet',
      {
        headers: setHeader()
      }
    )

    console.log( response )

    return response.data

  } catch ( error ) {
    console.error( error )
    return { message: error.message }
  }
}
