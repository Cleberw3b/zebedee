import { WalletDetailResponse } from './zebedeeInterfaces'

export const normalizeBalanceToSatoshi = ( walletDetails: WalletDetailResponse ): number | null => {
    if ( walletDetails.data?.unit === 'msats' )
        return walletDetails.data?.balance * .0001
    else if ( walletDetails.data?.unit === 'sats' )
        return walletDetails.data?.balance
    else if ( walletDetails.data?.unit === 'btc' )
        return walletDetails.data?.balance * 10000000
    else
        return null
}
