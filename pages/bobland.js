import { useContract , useDisconnect , useContractData , useContractCall, useAddress, } from '@thirdweb-dev/react'
import BOBCONN from './comp/auth';
import React from 'react'
import Navigator from './comp/navnewlotpage';
import Head from 'next/head';
import LOADINGPROMPT from './comp/loading';

function bobland() {
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
    <div className='min-h-screen min-w-screen'>
     < Head>
        <title>Phantom Lottery | WEB3 Lottery </title>
        <meta name="description" content="A Lottery Feature by BOB on the Fantom Blockchain" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      
      <div className=''>
       <div className=''> 
          <div className='flex  pb-8 bg-red-300 h-auto m-auto shadow-xl shadow-gray-300 items-center  p-4 '>
           <div className=' pl-4 lg:pl-8 flex justify-left'> <Navigator/> </div>
          </div>

      <div className='underline underline-offset-4'>
          <div className='pl-8 pt-8 text-blue-400 flex text-center align-middle justify-center text-2xl font-bold font-serif lg:text-4xl'>
          TITLE HEAD CRYPTO LOTTERY
          </div>
        </div>
<div>
      <div className='pt-2 lg:pt-8  pr-8 flex items-center justify-end hover:transition ease-in-out duration-300 lg:pr-24 '> <div onClick={discon}>
              <div className='flex w-32 h-14 lg:w-40 lg:h-16  bg-red-300 hover:bg-yellow-300  items-center justify-center rounded-2xl border-2 border-red-900 hover:border-red-500'> <div className='flex font-semibold cursor-pointer hover:text-red-500 text-md lg:text-xl font-serif'> DISCONNECT</div></div>
            </div> </div> 


            <div>
                <div className='flex items-center justify-end pr-12  pb-2 lg:pb-8 lg:pr-32 '>  
                <div className='flex items-center text-sm text-emerald-300'>  User: {addr?.substring(0,4)}...{addr?.substring(addr.length, addr.length -4)}</div>
                </div>
            </div>
            </div>
      </div>

<div className='w-screen'>

<div className='grid grid-cols-2 gap-8 h-72  pl-16 pr-16 pb-8 lg:pl-24 lg:pr-24 lg:gap-24 lg:h-96 '>
       <div className='flex justify-center bg-red-300/40 h-full w-11/12 lg:w-9/12 rounded-lg border-2 border-red-700 '>

          <div className='flex flex-col text-center divide-y-2 divide-red-600'>
            <div className='h-1/2 grid flex-col md:grid-cols-2 underline'>
             <div className='font-semibold'> PizePool : </div>
             <div className='font-semibold'>Tickets Left :</div>
            </div>

            <div className='h-1/2'>
             <div className='pb-2 lg:pb-8 md:pb-4 pt-2 underline font-semibold'> Next Draw In</div>
             <div className='grid flex-col lg:grid-cols-3 lg:gap-4 md:grid-cols-3 md:gap-2'>

              <div className='flex justify-left'>Hours</div>
              <div className='flex justify-left'> Minutes</div>
              <div className='flex justify-left'> seconds</div>

             </div>
            </div>
          </div>

       </div>

       <div className='flex justify-center bg-red-300/40 h-full  w-11/12 lg:w-9/12 rounded-lg border-2 border-red-700'>

        <div>
          LLOTTERY BOX
        </div>

       </div>


     </div>
</div>
    </div>
    </div>
  )
}

export default bobland