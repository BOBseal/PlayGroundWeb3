import React from 'react';
import BOBCONN from './comp/auth'
import { useAddress, useDisconnect } from '@thirdweb-dev/react';
import Navba from './comp/navnew';
import Link from 'next/link';
import Head from 'next/head';



const PagePlay = () => {
    const adr = useAddress();
    const discon = useDisconnect();
    if (adr) {
        return( <div className=''> 
        < Head>
        <title>PlayGround | WEB3 Arena</title>
        <meta name="description" content="A Web3 Portal by BOB" />
        <link rel="icon" href="/logo.ico" />
      </Head>


         <div className='w-full bg-red-300 h-auto m-auto shadow-lg shadow-gray-300 flex items-center justify-center p-2 hover:scale-105 ease-in duration-300 hover:bg-yellow-300'>  
          <Navba/>
           </div> <r className='grid grid-cols-2 gap-8'> <a className='pt-8 pb-8 flex items-center justify-left pl-8 hover:scale-105 ease-in duration-300'>
          <Link href={'./aboutme'}> <b className='flex w-40 h-16 bg-red-300 hover:bg-yellow-300  items-center justify-center rounded-2xl  border-2 border-red-900 hover:border-red-500'>
                <c className='flex font-semibold cursor-pointer hover:text-red-500 text-xl font-serif'>ABOUT ME</c>
             </b></Link>
           </a>
           <a className='pt-8 pb-8 pr-8 flex items-center justify-end hover:scale-105 ease-in duration-300 '> <div onClick={discon}>
              <b className='flex w-40 h-16 bg-red-300 hover:bg-yellow-300 items-center justify-center rounded-2xl border-2 border-red-900 hover:border-red-500'> <a className='flex font-semibold font-serif cursor-pointer hover:text-red-500 text-xl'> DISCONNECT</a></b>
            </div> </a> 
            </r>
            <div className='flex flex-col'> 
                <div className='flex items-center justify-center pb-8 font-extrabold text-lg text-cyan-700 lg:text-4xl md:text-3xl underline underline-offset-2 font-serif'>
                    DID YOU KNOW I ORGANISE CRYPTO LOTTERY!! 
                </div>

                <div className='flex items-center justify-center' >
                  <button className='w-40 h-20 bg-red-300 font-semibold rounded-full hover:bg-yellow-400 hover:scale-105 ease-in duration-300 hover:text-xl hover:w-48 font-serif border-2 border-blue-600 hover:border-red-500 ' > 
                         <Link href='./bobland'>   GO TO LOTTERY</Link>
                  </button>
                </div>

            </div>
            </div>
        )
    }

    return (
        <BOBCONN/>
    )
};
export default PagePlay
