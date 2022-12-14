import React, { useState, useEffect } from 'react'
import { useAmp } from 'next/amp'
import Navba from './comp/navnew';
import { useAddress } from '@thirdweb-dev/react';
import BOBCONN from './comp/auth';
import Link from 'next/link';


export const config = {amp:true}
const AboutME = () => {
  const add = useAddress();
    return (<div> <> <Navba/></>
      <div>
      <Link href={'./'}> <div > Return Home</div> </Link>
      <div> Myself BOB and I welcome you!!</div>
      </div>
      </div>
    )
}
export default AboutME
