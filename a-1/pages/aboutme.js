import React, { useState, useEffect } from 'react'
import { useAmp } from 'next/amp'


export const config = {amp:true}
const AboutME = () => {
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
        
    <div> 
        <div className=''>
          <div>  ABOUT ME : </div>
        </div>
        <div> 
            I am a Student !!!! I am very Interested in WEB Developement and is Self-Learning JS and its frameworks like NEXT.JS
        </div>
    </div>

    )
};
export default AboutME
