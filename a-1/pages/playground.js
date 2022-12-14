import React, { useState, useEffect } from 'react'
import { useAmp } from 'next/amp'
import BOBCONN from './comp/auth'
import { useAddress, useDisconnect } from '@thirdweb-dev/react';
import Navba from './comp/navnew';
import Link from 'next/link';


export const config = {amp:true}
const PagePlay = () => {
    const isAmp = useAmp();
    const adr = useAddress();
    const discon = useDisconnect();
    const [shadow, setShadow] = useState(false);
  
    useEffect(() => {
      const handleShadow = () => {
        if (window.scrollY >= 90) {
          setShadow(true);
        } else {
          setShadow(false);
        }
      };
      window.addEventListener('scroll', handleShadow);
    }, []);
    if (adr) {
        return( <div> 
         <div className='bg-red-300 h-auto m-auto shadow-xl shadow-gray-300 flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 hover:bg-yellow-300'>  
          <Navba/>
           </div> <r className='grid grid-cols-2'> <a className='pt-2 pb-8 flex items-center justify-left pl-8 hover:scale-105 ease-in duration-300'>
          <Link href={'./aboutme'}> <b className='flex w-40 h-16 bg-red-300 hover:bg-yellow-300 flex items-center justify-center'>
                <c className='flex font-semibold cursor-pointer hover:text-red-500 text-xl'>ABOUT ME</c>
             </b></Link>
           </a>
           <a className='pt-2 pb-8 flex items-center justify-end pr-8 hover:scale-105 ease-in duration-300 '> <div onClick={discon}>
              <b className='flex w-40 h-16 bg-red-300 hover:bg-yellow-300 flex items-center justify-center'> <a className='flex font-semibold cursor-pointer hover:text-red-500 text-xl'> DISCONNECT</a></b>
            </div> </a></r>
            <div> You Are Now In BOB's Domain</div>
            </div>
        )
    }

    return (
        <BOBCONN/>
    )
};
export default PagePlay
