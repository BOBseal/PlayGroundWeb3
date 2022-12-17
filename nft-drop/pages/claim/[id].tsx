
import Image from 'next/image'
import Head from 'next/head'
import Navba from './comp/navnew'
import { useAddress, useDisconnect, useMetamask, } from '@thirdweb-dev/react'
import { NextPage } from 'next'



const DropPG : NextPage=() =>{
  const adr =useAddress();
  const discon = useDisconnect();
  const conn =useMetamask();
  return ( <div> 
    <Head>
        <title>
            CLAIM BOB-NFTS
        </title> 
        <link rel='icon' href='/vercel.svg'/>
    </Head>
<div className='flex-col'>
<a className=' flex h-16 bg-gradient-to-bl  from-[#ff1a1a] to-[#00ffff] items-center text-center justify-center font-semibold lg:font-bold lg:text-3xl' >
    <div className=' '>
        <div className='pb-8'>
           <a> <Navba/></a>
        </div>
    </div>
</a>
<a className='flex h-screen bg-[#ccfff5] flex-col'>
   <b className='flex items-center text-center align-center justify-end'> <div className='flex items-end text-center align-center justify-end pt-4 pr-8 flex-col lg:pr-16'>
    {adr && <p className='flex text-center align-center items-center text-xs pr-1 font-bold text-[#751aff]'>{adr.substring(0,4)}...{adr.substring(adr.length - 4)}</p>}
      <button className='bg-gradient-to-bl  from-[#ff1a1a] to-[#00ffff] h-14 w-20 rounded-3xl cursor-pointer text-white hover:text-purple-800 felx text-lg font-bold ' onClick={()=>(adr ? discon() : conn())}>  
      {adr? 'Log Out' : 'Log In'}
      </button></div> </b>
<a className='flex items-center align-center justify-center p-4 flex-col '> 
<div className='pb-4'> 
    BOB WALLPAPER COLLECTION 
    </div>
<b className='flex items-center align-center justify-center p-2 flex border-2 bg-gradient-to-br  from-[#ff1a1a] to-[#00ffff] rounded-xl border-[#b30047]  '>
 <Image className='rounded-xl border-2 border-red-400' src = '/99398032_p0.jpg' alt ="nft" height={180} width={180} /> 
</b><div className=''> </div></a> 
<b className='flex items-center align-center justify-center p-2 bg-[#ccfff5] font-bold lg:p-8'>
  <button className='bg-gradient-to-bl from-[#ff1a1a] to-[#00ffff] h-14 w-2/6 rounded-3xl cursor-pointer text-white hover:text-blue-700  felx text-lg lg:w-2/5'>  CLAIM NFT</button>
</b>
</a>

</div></div>
)
}

export default DropPG