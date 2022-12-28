import { useContract , useDisconnect , useAddress, } from '@thirdweb-dev/react'
import BOBCONN from './comp/auth';
import Navigator from './comp/navnewlotpage';
import Head from 'next/head';
//import LOADINGPROMPT from './comp/loading';
//import {useContractData , useContractCall,} from '@thirdweb-dev/react'

function Bobland() {
  const discon = useDisconnect();
  const addr = useAddress();
  const {contract, isLoading} = useContract( 0x9Be4c9456f9BB39C63C3F068068E45cd8e4a522A , "custom");
  
  
  console.log(contract)
  console.log(isLoading)
 { /*if (isLoading) return <>
        < Head>
        <title>Phantom Lottery Loading </title>
        <meta name="description" content="A Lottery Feature by BOB on the Fantom Blockchain" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <LOADINGPROMPT/>
 </>;*/}

  if (!addr) return  <BOBCONN/>;
  
  return ( 
    <div className='max-h-screen max-w-screen'>
     < Head>
        <title>Phantom Lottery | WEB3 Lottery </title>
        <meta name="description" content="A Lottery Feature by BOB on the Fantom Blockchain" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      
       <div className=''> 
          <div className='flex  pb-2 bg-red-300 h-auto m-auto shadow-xl shadow-gray-300 items-center  p-4 justify-center'>
           <div className=' pl-4 lg:pl-8 flex justify-center'> <Navigator/> </div>
          </div>

      <div className='underline underline-offset-4'>
          <div className='pl-8 pt-8 text-blue-400 flex text-center align-middle justify-center text-2xl font-bold font-serif lg:text-4xl'>
          TITLE HEAD CRYPTO LOTTERY
          </div>
        </div>
<div>
      <div className='pt-2 lg:pt-8  pr-8 flex items-center justify-end hover:transition ease-in-out duration-300 lg:pr-24 '> <div onClick={discon}>
              <div className='flex w-32 h-14 lg:w-40 lg:h-16  bg-red-300 hover:bg-yellow-300  items-center justify-center rounded-full border-2 border-red-900 hover:border-red-500'> <div className='flex font-semibold cursor-pointer hover:text-red-500 text-md lg:text-xl font-serif'> DISCONNECT</div></div>
            </div> </div> 


            <div>
                <div className='flex items-center justify-end pr-12  pb-2 lg:pb-8 lg:pr-32 '>  
                <div className='flex items-center text-sm text-emerald-300'>  User: {addr?.substring(0,4)}...{addr?.substring(addr.length, addr.length -4)}</div>
                </div>
            </div>
            </div>
</div>
<div className='w-screen h-screen items-center grid flex-col gap-2 lg:grid-cols-2 pl-6 md:pl-8 lg:pl-12'>
    
            <div className='bg-red-200 h-64 w-11/12  lg:h-1/2 rounded-2xl border-x-2 border-gray-600'>
                <div className='flex items-center justify-center pt-4 text-xl font-semibold h-8 lg:h-16 cursor-grab'> 
                  <div className='flex items-center w-4/6 justify-center shadow-md rounded-full hover:scale-105 ease-out duration-200 bg-gradient-to-bl from-red-400/50 to-red-100 border-2 border-gray-500 font-serif'>LOTTERY DETAILS </div>
                </div>

            </div>


            <div className='bg-blue-200 h-64 w-11/12 lg:h-1/2 rounded-2xl border-x-2 border-gray-600'>
                <div className='flex items-center justify-center pt-4 text-xl font-semibold h-8 lg:h-16 cursor-grab'> 
                  <div className='flex items-center w-4/6 justify-center shadow-md rounded-full hover:scale-105 ease-out duration-200 bg-gradient-to-bl from-blue-400/50 to-blue-100 border-2 border-gray-500 font-serif'>PARTICIPATE </div>
                </div>

            </div>
    
</div>
    
    </div>
  )
}

export default Bobland