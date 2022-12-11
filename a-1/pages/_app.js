import { ChainId, ThirdwebProvider , useContract } from '@thirdweb-dev/react';
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.activeChainId}
    chainRpc={{[ChainId.activeChainId]: process.env.RPC_URL}}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp

