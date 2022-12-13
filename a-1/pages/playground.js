import React, { useState, useEffect } from 'react'
import { useAmp } from 'next/amp'
import BOBCONN from './comp/auth'
import { useAddress, useDisconnect } from '@thirdweb-dev/react';
import Navba from './comp/navnew';


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
         <dic className=''>  <div className='bg-red-300 h-auto m-auto shadow-xl shadow-gray-300 flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>   <Navba/>
           </div>
            <div onClick={discon}>
               <a className='flex font-bold cursor-pointer hover:text-blue-400'> Disconnect</a>
            </div></dic> 
            <div> You Are Now In BOB's Domain</div>
            </div>
        )
    }

    return (
        <BOBCONN/>
    )
};
export default PagePlay
