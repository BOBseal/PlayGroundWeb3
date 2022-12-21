import { ChainId, ThirdwebProvider , useContract } from '@thirdweb-dev/react';
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.activeChainId}
    authConfig={{
      domain: "bob.app",
      authUrl: '/api/auth',
      loginRedirect: "/playground",
    }}
    sdkOptions={{gasless:{openzeppelin : {relayerUrl : process.env.RURL ,},}, }}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}


export default MyApp

