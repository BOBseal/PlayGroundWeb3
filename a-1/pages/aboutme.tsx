import React, { useState, useEffect } from 'react'
import { useAmp } from 'next/amp'
import Navba from './comp/navnew';
import { useAddress } from '@thirdweb-dev/react';
import Link from 'next/link';

export const config = {amp:true}
const AboutME = () => {
 const useamp=useAmp();
  const add = useAddress();
    return (<div> <div className='bg-red-300 h-auto m-auto shadow-xl shadow-gray-300 flex items-center justify-center p-2 hover:scale-105 ease-in duration-300 hover:bg-yellow-300 '> <Navba/></ div >
      <div>
      <div className='pt-8'> Myself BOB and I welcome you!!</div>
      </div>
      </div>
    )
}
export default AboutME
