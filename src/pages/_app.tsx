import { NextPageContext } from 'next'
import { AppProps, AppContext } from 'next/app'
import Layout from 'components/layout/layout'
import WalletInfoProvider from 'context/walletContext'
import '../../public/styles/theme.scss'

// Will be called once for every metric that has to be reported.
// These metrics can be sent to any analytics service
export function reportWebVitals(metric: any) {
  console.log(metric)
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletInfoProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WalletInfoProvider>
  )
}

MyApp.getInitialProps = async (props: AppContext) => {

  const { Component, ctx }: AppContext = props
  const { req, res }: NextPageContext = ctx

  let pageProps: any = {}
  if (Component.getInitialProps)
    pageProps = await Component.getInitialProps(ctx)

  return { pageProps }
}

export default MyApp