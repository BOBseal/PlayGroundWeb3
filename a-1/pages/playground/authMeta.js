import {
    useMetamask,
    useWalletConnect,
    useCoinbaseWallet,
    useNetwork,
    useAddress,
    useDisconnect,
  } from '@thirdweb-dev/react';
import Link from 'next/link';
import AL from './afterLogin';
  
  export const ConnectW = () => {
    const connectWithCoinbaseWallet = useCoinbaseWallet();
    const connectWithMetamask = useMetamask();
    const connectWithWalletConnect = useWalletConnect();
    const disconnectWallet = useDisconnect();
    const address = useAddress();
    const network = useNetwork();
  
    // If a wallet is connected, show address, chainId and disconnect button
    if (address) {
      return ( <div>
        <div className='grid grid-cols-1 lg:grid-cols-1 gap-8 flex justify-center'>
          <button onClick={disconnectWallet}>Disconnect</button>
        </div> <AL/>
        </div>
      );
    }
  
    // If no wallet is connected, show connect wallet options
    return (
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
        <button onClick={() => connectWithCoinbaseWallet()}>
          Connect Coinbase Wallet
        </button>
        <button onClick={() => connectWithMetamask()}>Connect MetaMask</button>
        <button onClick={() => connectWithWalletConnect()}>
           WalletConnect
        </button>
      </div>
    );
  };