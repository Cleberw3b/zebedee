import useWalletInfo from 'hooks/useWalletInfo'
import { FC } from 'react'
import { GameKey } from 'utils/zebedeeInterfaces'

const Balance: FC<GameKey> = ({ gameKey }) => {
    const { myWallet } = useWalletInfo(gameKey)

    return (
        <div className='balance'>
            Balance: {myWallet.balance} {myWallet.balance <= 1 ? 'satoshi' : 'satoshis'}
        </div>
    )
}

export default Balance
