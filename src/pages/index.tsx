import Balance from 'components/balance'
import { GetStaticProps } from 'next'

const Home = () => (
  <div className='main'>
    <h1>
      This is a Next Application
    </h1>
    <Balance />
    <p>We are running in {process.env.NODE_ENV} mode</p>
  </div>
)

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}

export default Home
