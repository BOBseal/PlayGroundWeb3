import React from 'react' ;
import Navba from '../comp/navnew';
const style ={
    wrapper : `text-center align-center`,
    bluetext:`text-6xl pt-6 text-[#000099] transitions-all hover:text-[#4d4dff] font-style: italic font-bold `,
    footText:`text-2xl pl-20 pr-20 text-center font-regular text-gray-600 `,
    underline:`hover:underline`
}

const HM =()=> {
    return (<div>  <div className='bg-red-300 h-auto m-auto shadow-lg shadow-gray-300 flex items-center justify-center p-2 hover:scale-105 ease-in duration-300 hover:bg-yellow-300'>  
    <Navba/> </div>
   <div className={style.wrapper}>
       <div className={style.underline}><div className=' hover:scale-105 ease-in duration-200'>
     <div className='pb-8'><div className={style.bluetext}>Welcome to BOB Site
     </div> </div> </div> </div>
     <footer className='pt-8'> 
     <div className={style.footText}>
       Welcome to My Site!
       Created with NextJS, Tailwind CSS and Web3 sdk
       </div> <div>This is My WEB DEVELOPEMENT PLAYGROUND </div><div>This is to check line change</div> 
     </footer>
   </div> </div>
    )
  }
  export default HM