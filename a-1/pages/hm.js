import React, { useState, useEffect } from 'react' ;
import { useAmp } from 'next/amp';
import Navba from './comp/navnew';
const style ={
    wrapper : `text-center align-center`,
    bluetext:`text-6xl pt-6 text-[#000099] transitions-all hover:text-[#4d4dff] font-style: italic font-bold `,
    footText:`text-2xl pl-20 pr-20 text-center font-regular text-gray-600 `,
    underline:`hover:underline`
}
export const config = {amp:true}
const HM =()=> {
    const isAmp = useAmp();
    const [shadow, setShadow] = useState(false);
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
    return (
   <div className={style.wrapper}>
       <div className='bg-red-300 h-auto m-auto shadow-xl shadow-gray-300 flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Navba/> 
       {/*<Navbar/>*/}</div>
       <div className={style.underline}><div className=' hover:scale-105 ease-in duration-200'>
     <div className='pb-8'><div className={style.bluetext}>Welcome to BOB's Site
     </div> </div> </div> </div>
     <footer className='pt-8'> 
     <div className={style.footText}>
       Welcome to My Site!
       Created with NextJS, Tailwind CSS and Web3 sdk
       </div> <div>This is My WEB DEVELOPEMENT PLAYGROUND </div><div>This is to check line change</div> 
     </footer>
   </div>
    )
  }
  export default HM