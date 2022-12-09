import React, { useState, useEffect } from 'react' 
import Navbar from './comp/navbar';
import Link from 'next/link';
const style ={
    wrapper : `text-center align-center`
}

const HM =()=> {

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
    return (
   <div className={style.wrapper}>
       <div className='bg-cyan-300 h-auto m-auto shadow-xl shadow-cyan-300 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>  <Navbar/></div>
       <div className={style.underline}><div className=' hover:scale-105 ease-in duration-200'>
     <div className='pb-8'><div className={style.bluetext}>Welcome to BOB's Site
     </div> </div> </div> </div>
     <div className ='grid grid-cols-2 lg:grid-cols-2 gap-8 flex justify-center'>
       <Link href={"./aboutme"}><button className='flex  w-5/6 h-auto m-auto rounded-xl shadow-lg shadow-gray-400 rounded-xl flex items-center justify-center p-3 hover:scale-105 ease-in duration-300 font-bold'> ABOUT ME</button></Link>
    <Link href ={"./"}> <div className=' flex w-5/6 h-auto m-auto rounded-xl shadow-lg shadow-gray-400 rounded-xl flex items-center justify-center p-3 hover:scale-105 ease-in duration-300 font-bold'> My Playground
    </div>  </Link> </div>
     <footer className='pt-8'> 
     <div className={style.footText}>
       Welcome to My Site!
       Created with NextJS Typescript And Tailwind CSS 
       </div> <div>This is My WEB DEVELOPEMENT PLAYGROUND </div><div>This is to check line change</div> 
     </footer>
   </div>
    )
  }
  export default HM