import '../styles/globals.css'
import { Source_Code_Pro } from 'next/font/google'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

