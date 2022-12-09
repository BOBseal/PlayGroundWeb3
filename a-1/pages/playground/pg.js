import React, { useState, useEffect } from 'react'
import { useAmp } from 'next/amp'
import AUTHH from './authMeta';


export const config = {amp:true}
const PG = () => {
    const isAmp = useAmp();
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
    return(

 <div> you are logged in to BOB site </div>

    )
};
export default PG