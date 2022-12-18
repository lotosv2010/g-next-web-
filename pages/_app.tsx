import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import theme from '../utils/theme'

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
    <CSSReset />
    <Component {...pageProps} />
  </ChakraProvider>
}