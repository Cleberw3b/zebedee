import { WalletInfo, BalanceActions } from './interfaces'

const updateBalance = (state: WalletInfo,) => {
    return state
}

export const authReducer: React.Reducer<WalletInfo, BalanceActions> = (state, action) => {
    switch (action.type)
    {
        case 'updateBalance':
            return updateBalance(action.payload)
        default:
            return state
        // throw new Error();
    }
}
