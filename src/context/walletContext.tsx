import { useReducer, createContext, FC } from 'react'
import { authReducer } from './walletReducer'
import { WalletInfo, WalletCtx } from './interfaces'

export const walletInitialState: WalletInfo = {
    unit: 'sats',
    balance: 0
}

const initialContext: WalletCtx = {
    walletInfo: walletInitialState,
    dispatch: () => { return }
}

export const walletContext = createContext<WalletCtx>(initialContext)
export const WalletProvider = walletContext.Provider

const WalletInfoProvider: FC = ({ children }) => {

    const [walletInfo, dispatch] = useReducer(authReducer, walletInitialState)

    return (
        <WalletProvider value={{ walletInfo, dispatch }}>
            {children}
        </WalletProvider >
    )
}

export default WalletInfoProvider
