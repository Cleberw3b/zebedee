import Balance from 'components/balance'
import WithdrawCharge from 'components/withdrawCharge'
import { GetStaticProps } from 'next'
import { FC } from 'react'
import { ZEBEDEE_API_KEY } from 'utils/consts'
import { GameKey } from 'utils/zebedeeInterfaces'

const Home: FC<GameKey> = ({ gameKey }) => (
  <div className='main'>
    <h1>
      <Balance gameKey={gameKey} />
    </h1>
    <WithdrawCharge gameKey={gameKey} />
  </div>
)

export const getStaticProps: GetStaticProps = async () => {

  const gameKey = ZEBEDEE_API_KEY

  return {
    props: {
      gameKey
    }
  }
}

export default Home
