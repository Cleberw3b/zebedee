
export interface WalletInfo {
    unit: string
    balance: number
}

export type BalanceActionType = 'updateBalance'

export interface BalanceActions {
    type: BalanceActionType
    payload: WalletInfo
}

export interface WalletCtx {
    walletInfo: WalletInfo
    dispatch: React.Dispatch<BalanceActions>
}
