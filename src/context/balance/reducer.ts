import { getWalletDetails } from 'utils/zebedeeApi'
import { normalizeBalanceToSatoshi } from 'utils/zebedeeUtil'
import { Balance, BalanceActions } from '../interfaces'

const getBalance = ( state: Balance ): Balance => {
    console.info( Date.now() + ' Signing in...' )
    const walletDetails = getWalletDetails()
    const satoshiBalance = normalizeBalanceToSatoshi( walletDetails )
    return { balance: satoshiBalance ? satoshiBalance : 0 }
}

export const balanceReducer: React.Reducer<Balance, BalanceActions> = ( state, action ) => {
    switch ( action.type ) {
        case 'updateBalance':
            return getBalance( state )
        default:
            return state
        // throw new Error();
    }
}
