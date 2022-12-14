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
    MainContainer:`pt-2 pb-8 flex items-center justify-center pl-8 pt-16`,
    ButtonBox:`flex w-40 h-16 bg-red-300 hover:bg-yellow-300 flex items-center justify-center hover:scale-105 ease-in duration-300`,
    boxtext:`flex font-semibold cursor-pointer hover:text-red-500 text-lg`,
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
    return (<div><div className='flex items-center justify-center pb-8 bg-red-300 h-auto m-auto shadow-xl shadow-gray-300 flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'> <Navba/></div>
    <div className={styl.MainContainer}>  <div className='grid grid-cols-3 gap-40 '>
      <a className={styl.ButtonBox}> <a className={styl.boxtext}> <button onClick={() => connectWithCoinbaseWallet()}>
          COINBASE
        </button> </a></a>
        <a  className={styl.ButtonBox}>  <a className={styl.boxtext}>  <button onClick={() => connectWithMetamask()}>METAMASK</button > </a> </a>
    <a className={styl.ButtonBox}> <a className={styl.boxtext}>     <button onClick={() => connectWithWalletConnect()}>
         WALLET-CONNECT
        </button> </a></a>
      </div></div> </div>
    );
  };

  export default BOBCONN