import {
    useMetamask,
    useWalletConnect,
    useCoinbaseWallet,
    useAddress,
    useDisconnect,
  } from '@thirdweb-dev/react';
import Navba from './navnew';
import Head from 'next/head';


  const styl={
    MainContainer:`pt-2 pb-8 flex items-center justify-center pl-2 lg:pl-8 pt-16`,
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
    return (<div>
      < Head>
        <title>WEB3 Authentication</title>
        <meta name="description" content="Connect with Web3 Wallet" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      
      
      <div className='flex items-center justify-center pb-8 bg-red-300 h-auto m-auto shadow-xl shadow-gray-300 p-4 hover:scale-105 ease-in duration-300'> <Navba/></div>
      <div className='flex pt-12 justify-center text-2xl lg:text-4xl underline underline-offset-2 text-red-600 font-extrabold font-serif md:text-3xl'>
      OOPS YOU'RE NOT CONNECTED!
      </div>
        <div className='flex pt-2 justify-center text-lg text-emerald-600 font-semibold'>
          Connect Now
        </div>
    <div className={styl.MainContainer}>  <div className='grid grid-cols-2 gap-8 lg:grid-cols-3 md:grid-cols-3 md:gap-16 lg:gap-24'>
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