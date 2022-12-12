import {
    useMetamask,
    useWalletConnect,
    useCoinbaseWallet,
    useAddress,
    useDisconnect,
  } from '@thirdweb-dev/react';


  const styl={
    MainContainer:``,
    ButtonBox:``,
    ConnectPageUI:``,
  }
  
  const BOBCONN = () => {
    const connectWithCoinbaseWallet = useCoinbaseWallet();
    const connectWithMetamask = useMetamask();
    const connectWithWalletConnect = useWalletConnect();
    const disconnectWallet = useDisconnect();
    const address = useAddress();
  
    // If a wallet is connected, show address, chainId and disconnect button
    if (address) {
      return (
        <div>
          <button onClick={disconnectWallet}>Disconnect</button>
        </div>
      );
    }
  
    // If no wallet is connected, show connect wallet options
    return (
      <div>
        <button onClick={() => connectWithCoinbaseWallet()}>
          COINBASE CONNECT 
        </button>
        <button onClick={() => connectWithMetamask()}>METAMASK CONNECT</button>
        <button onClick={() => connectWithWalletConnect()}>
         WALLET-CONNECT
        </button>
      </div>
    );
  };

  export default BOBCONN