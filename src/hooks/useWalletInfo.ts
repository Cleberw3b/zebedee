import { useContext, useEffect, useState } from 'react'
import { walletContext, walletInitialState } from 'context/walletContext'
import { getWalletDetails } from 'utils/zebedeeApi'
import { normalizeWalletToSatoshi } from 'utils/zebedeeUtil'

// This hook is responsable for fetch the balance and update the wallet context
export default function useWalletInfo(gameKey: string) {
    const [myWallet, setWalletInfo] = useState(walletInitialState)
    const { walletInfo, dispatch } = useContext(walletContext)

    const updateBalance = async () => {
        setWalletInfo(normalizeWalletToSatoshi(await getWalletDetails(gameKey)))
    }

    useEffect(() => {

        const timeInterval = 10

        updateBalance()

        // It is necessary since I couldn't use a websockt
        const interval = setInterval(() => {
            updateBalance()
        }, timeInterval * 1000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (walletInfo.balance !== myWallet.balance)
        {
            dispatch({
                type: 'updateBalance',
                payload: myWallet
            })
            setWalletInfo(myWallet)
        }
    }, [myWallet])

    return { myWallet, updateBalance }
}
