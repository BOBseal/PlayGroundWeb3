import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { ChainId } from '@thirdweb-dev/sdk'

const id = ChainId.Mumbai

export default function App({ Component, pageProps }: AppProps) {
  return (<ThirdwebProvider desiredChainId={id} 
    sdkOptions={{gasless : { openzeppelin: { relayerUrl :
      'https://api.defender.openzeppelin.com/autotasks/a6b4a873-d6dd-4428-97d3-8439a611ca08/runs/webhook/106c6781-828e-4cdb-b52a-a701e67bc1b3/P65B1JiFmaawTzrPQteThi'
            
      ,},},}}
  >
     <Component {...pageProps} />
  </ThirdwebProvider> ) 
} ;
