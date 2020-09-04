import { useReducer, createContext, FC } from 'react'
import { balanceReducer } from './reducer'
import { Balance, BalanceCtx } from '../interfaces'

const balanceInitialState: Balance = {
    balance: 0,
}

const initialContext: BalanceCtx = {
    balanceCtx: balanceInitialState,
    dispatch: () => { return }
}

export const balanceContext = createContext<BalanceCtx>( initialContext )
export const AuthProvider = balanceContext.Provider

const BalanceProvider: FC = ( { children } ) => {

    const [balance, dispatch] = useReducer( authReducer, balanceInitialState )

    return (
        <AuthProvider value={{ balance, dispatch }}>
            {children}
        </AuthProvider >
    )
}

export default BalanceProvider
