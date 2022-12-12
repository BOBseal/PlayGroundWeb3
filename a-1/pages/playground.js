import React, { useState, useEffect } from 'react'
import { useAmp } from 'next/amp'
import BOBCONN from './comp/auth'
import { useAddress, useDisconnect } from '@thirdweb-dev/react';


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
            <div onClick={discon}>
               <a className='flex align-center justify-center text-center font-bold cursor-pointer hover:text-blue-400'> Disconnect</a>
            </div>
            <div> You Are Now In BOB's Domain</div>
            </div>
        )
    }

    return (
        <BOBCONN/>
    )
};
export default PagePlay
