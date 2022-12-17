import React from 'react';
import BOBCONN from './comp/auth'
import { useAddress, useDisconnect } from '@thirdweb-dev/react';
import Navba from './comp/navnew';
import Link from 'next/link';
import CMGSLESS from './claimNFT';


const PagePlay = () => {
    const adr = useAddress();
    const discon = useDisconnect();
    if (adr) {
        return( <div className=''> 
         <div className='bg-red-300 h-auto m-auto shadow-lg shadow-gray-300 flex items-center justify-center p-2 hover:scale-105 ease-in duration-300 hover:bg-yellow-300'>  
          <Navba/>
           </div> <r className='grid grid-cols-3 gap-8'> <a className='pt-8 pb-8 flex items-center justify-left pl-8 hover:scale-105 ease-in duration-300'>
          <Link href={'./aboutme'}> <b className='flex w-40 h-16 bg-red-300 hover:bg-yellow-300 flex items-center justify-center rounded-2xl'>
                <c className='flex font-semibold cursor-pointer hover:text-red-500 text-xl'>ABOUT ME</c>
             </b></Link>
           </a>
           <a className='pt-8 pb-8 flex items-center justify-center hover:scale-105 ease-in duration-300 '> <div onClick={discon}>
              <b className='flex w-40 h-16 bg-red-300 hover:bg-yellow-300 flex items-center justify-center rounded-2xl'> <a className='flex font-semibold cursor-pointer hover:text-red-500 text-xl'> DISCONNECT</a></b>
            </div> </a> 
            
            <a className='pt-8 pb-8 flex items-center justify-end pr-8 hover:scale-105 ease-in duration-300  '> 
              <b className='flex w-40 h-16 bg-red-300 hover:bg-yellow-300 flex items-center justify-center rounded-2xl'> <a className='flex font-semibold cursor-pointer hover:text-red-500 text-xl'> <CMGSLESS/></a></b>
                 </a>
            </r>
            <div> FREE NFTS FOR MY PERSONAL COLLECTION COMING SOON</div>
            </div>
        )
    }

    return (
        <BOBCONN/>
    )
};
export default PagePlay
