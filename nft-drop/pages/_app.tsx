import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { ChainId } from '@thirdweb-dev/sdk'
import { debugPort } from 'process';

const id = ChainId.FantomTestnet;

export default function App({ Component, pageProps }: AppProps) {
  return (<ThirdwebProvider desiredChainId={id} 
    authConfig={{
        authUrl: '/api/auth',
        domain : 'bobs-nft.app',
        loginRedirect: "/portal/pp",
    }}
    sdkOptions={{gasless : { openzeppelin: { relayerUrl :
      'https://api.defender.openzeppelin.com/autotasks/67260c6f-164b-4900-9f4c-381f7e6551ff/runs/webhook/106c6781-828e-4cdb-b52a-a701e67bc1b3/46pkNoBMVnEJTQcwmq5mar'
            
      ,},},}}
  >
     <Component {...pageProps} />
  </ThirdwebProvider> ) 
} ;
