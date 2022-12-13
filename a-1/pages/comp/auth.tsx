import {
    useMetamask,
    useWalletConnect,
    useCoinbaseWallet,
    useAddress,
    useDisconnect,
  } from '@thirdweb-dev/react';
import Link from 'next/link';
import Navba from './navnew';


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
    return (<div ><div className='flex items-center justify-center pb-8 bg-red-300 h-auto m-auto shadow-xl shadow-gray-300 flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'> <Navba/></div>
      <div className='grid grid-cols-3 gap-4 pt-8'>
        <button onClick={() => connectWithCoinbaseWallet()}>
          COINBASE CONNECT 
        </button>
        <button onClick={() => connectWithMetamask()}>METAMASK CONNECT</button>
        <button onClick={() => connectWithWalletConnect()}>
         WALLET-CONNECT
        </button>
      </div></div>
    );
  };

  export default BOBCONN