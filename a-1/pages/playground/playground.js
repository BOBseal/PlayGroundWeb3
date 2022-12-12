import React, { useState, useEffect } from 'react'
import { useAmp } from 'next/amp'
import { ConnectW } from './authMeta';
import { useAddress } from '@thirdweb-dev/react';
import { ClaimButton } from './claimnft';
 
export const config = {amp:true}
const Playground = () => {
    const isAmp = useAmp();
    const adr = useAddress();
  //  const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    //const [navBg, setNavBg] = useState('#ecf0f3');
    //const [linkColor, setLinkColor] = useState('#1f2937'); 
    const handleNav = () => {
    setNav(!nav);
    };
  
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
    return (<ConnectW/>)
};
export default Playground