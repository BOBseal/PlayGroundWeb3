
import Image from 'next/image'
import Head from 'next/head'
import Navba from './comp/navnew'
import { useAddress, useDisconnect, useMetamask, } from '@thirdweb-dev/react'
import { NextPage } from 'next'
import { useAmp } from 'next/amp'


export const config = { amp: 'hybrid' };
export const style={
  splitnavbar : `grid grid-cols-2 bg-gradient-to-bl w-screen from-[#ff1a1a] to-[#00ffff] w-screen h-16`,
  loginbutton : ``,
  claimbutton : ``,
  navbarcomponent:``,
  head:``,
  imgbox:``,
  imgholder:``,
  colorstyle:``,
};


const DropPG : NextPage=() =>{
    const isAMP = useAmp();
  const adr =useAddress();
  const discon = useDisconnect();
  const conn =useMetamask();
  return ( <> 
    <Head>
        <title>
            CLAIM BOB-NFTS
        </title> 
        <link rel='icon' href='/vercel.svg'/>
    </Head>

        <p className='flex-col'>
            <a className={style.splitnavbar}>
                  <b className='flex justify-left items-center'>
                      <Navba/>
                  </b>

                  <b className='flex justify-end pr-8 lg:pr-16'>
                        <b className='flex justify-end items-center'>
                        {adr && <p className=' text-xs font-bold text-[#00ffff]'>{adr.substring(0,4)}...{adr.substring(adr.length - 4)}</p>}
                        </b>
                      <button className='bg-gradient-to-tr  from-[#ff1a1a] to-[#00ffff] h-14 w-20 rounded-3xl cursor-pointer text-white hover:text-[#00ffff] ' onClick={()=>(adr ? discon() : conn())}>  
                      {adr? 'Log Out' : 'Log In'}
                      </button>
                  </b>
            </a>


            <p className='grid grid-cols-1 w-screen pt-8'>
              
                        <b className='flex justify-center pb-8 underline'>
                            <a className=' flex text-red-500'> BOB WALLPAPER COLLECTION </a>
                        </b>

                        <b className='flex justify-center'>
                             <a className='flex items-center align-center justify-center p-1 flex border-2 bg-gradient-to-br  from-[#ff1a1a] to-[#00ffff] rounded-2xl border-[#b30047]'> 
                               
                               <Image className='rounded-2xl border-2 border-red-400' src = '/99398032_p0.jpg' alt ="nft" height={180} width={180} /> 
                             
                             </a>
                        </b>

                        <b className='flex justify-center pt-8 lg:pt-12'>
                        <button className='bg-gradient-to-bl from-[#ff1a1a] to-[#00ffff] h-14 w-2/6 rounded-3xl cursor-pointer text-white hover:text-blue-700  felx text-lg lg:w-1/6 md:2/6'>  CLAIM NFT</button>
                        </b>
              
            </p>


        </p>
</>
)
};

export default DropPG