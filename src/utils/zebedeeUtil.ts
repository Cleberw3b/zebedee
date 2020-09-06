import { EventEmitter } from 'events'
import { WalletDetails } from './zebedeeInterfaces'

export const normalizeWalletToSatoshi = (walletDetails: WalletDetails): WalletDetails => {
  if (walletDetails.unit === 'msats')
    return { balance: walletDetails.balance * .0001, unit: 'sats' }
  else if (walletDetails.unit === 'sats')
    return { balance: walletDetails.balance, unit: 'sats' }
  else if (walletDetails.unit === 'btc')
    return { balance: walletDetails.balance * 10000000, unit: 'sats' }
  else
    return { balance: 0, unit: 'sats' }
}

// Works only on server side
const zebedeeEventEmitter: EventEmitter = new EventEmitter()

zebedeeEventEmitter.on('withdrawSucess', () => {
  console.log('withdrawSucess')
})

zebedeeEventEmitter.on('chargeSucess', () => {
  console.log('chargeSucess')
})

export { zebedeeEventEmitter }
