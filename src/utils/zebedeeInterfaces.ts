
export interface GameKey {
  gameKey: string
}

export interface DefaultZebedeeResponse {
  message: string
}

export interface WalletDetails {
  unit: string
  balance: number
}

export interface WalletDetailResponse extends DefaultZebedeeResponse {
  data?: WalletDetails
}

export type AmountDescription = {
  amount: number
  description: string
}

export type RequestType = 'withdraw' | 'charge'

export interface WithdrawRequest extends AmountDescription { }

export interface ChargeRequest extends AmountDescription { }

export interface WithdrawResponse {
  id: string
  createdAt: string
  description: string
  amount: number
  unit: 'msats' | 'sats'
  callbackUrl: string | null
  internalId: string | null
  status: 'peding' | string
  expiresAt: string
  callback: string | null
  invoice: {
    request: string
    fastRequest: string
    uri: string
    fastUri: string
  }
}
export interface WithdrawRequestResponse extends DefaultZebedeeResponse {
  data?: WithdrawResponse
}

export interface ChargeResponse {
  id: string
  createdAt: string
  description: string
  amount: number
  callbackUrl: string | null
  internalId: string | null
  status: 'peding' | string
  invoice: {
    expiresAt: string,
    request: string
  }
}

export interface ChargeRequestResponse extends DefaultZebedeeResponse {
  data?: ChargeResponse
}
