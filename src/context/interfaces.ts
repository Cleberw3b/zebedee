export interface Balance {
    balance: number
}

export type BalanceActionTypes = 'updateBalance'

export interface BalanceActions {
    type: BalanceActionTypes
    payload?: any
}

export interface BalanceCtx {
    balanceCtx: Balance
    dispatch: React.Dispatch<BalanceActionTypes>
}
