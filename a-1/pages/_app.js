import { ChainId, ThirdwebProvider , useContract } from '@thirdweb-dev/react';
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.activeChainId}
    sdkOptions={{gasless:{openzeppelin : {relayerUrl : " https://api.defender.openzeppelin.com/autotasks/a6b4a873-d6dd-4428-97d3-8439a611ca08/runs/webhook/106c6781-828e-4cdb-b52a-a701e67bc1b3/P65B1JiFmaawTzrPQteThi" ,},}, }}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp

