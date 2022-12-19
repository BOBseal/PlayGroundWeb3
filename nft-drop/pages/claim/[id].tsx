
import Head from 'next/head'
import Navba from './comp/navnew'
import { useAddress, useDisconnect, useMetamask, } from '@thirdweb-dev/react'
import { COLLECTION } from '../../typings'
import type { GetServerSideProps, NextPage } from 'next'
import { sanityClient,urlFor } from '../../sanity'


export const style={
  splitnavbar : `grid grid-cols-2 bg-gradient-to-bl from-[#ff1a1a] to-[#00ffff] w-screen h-16 shadow-md shadow-gray-400`,
  a : ``,
  b : ``,
  c :``,
  d :``,
  e :``,
  f :``,
  g :``,
};

interface Props{
  collections:COLLECTION[]
};

const DropPG =({collections} : Props) =>{
  const adr =useAddress();
  const discon = useDisconnect();
  const conn =useMetamask();
  return ( <div> <div>
    <Head>
        <title>
            CLAIM BOB-NFTS
        </title> 
        <link rel='icon' href='/vercel.svg'/>
    </Head>

        <p className='flex-col'>
            <a className={style.splitnavbar}>
                  <b className='flex justify-left align-center items-center'>
                     <a className='pb-8'> <Navba/></a>
                  </b>

                  <b className='flex justify-end pr-8 py-1 lg:pr-16'>
                        <b className='flex justify-end items-center'> <div className=''>
                        {adr && <p className=' text-xs font-bold text-[#00ffff] pb-6'>{adr.substring(0,4)}...{adr.substring(adr.length - 4)}</p>}
                        </div> </b>
                      <button className='bg-gradient-to-tr  from-[#ff1a1a] to-[#00ffff] h-14 w-20  rounded-3xl cursor-pointer text-white hover:text-[#00ffff] ' onClick={()=>(adr ? discon() : conn())}>  
                      {adr? 'Log Out' : 'Log In'}
                      </button>
                  </b>
            </a>


            <p className='grid grid-cols-1 w-screen pt-8'> {collections.map(collection =>(  <div key={collection._id}>
              
                        <b className='flex justify-center pb-8 underline'>
                       <div> <a className='font-semibold flex text-black-400 cursor-pointer text-xl lg:text-4xl'> {collection.nftCollectionName}</a></div>
                        </b>

                        <b className='flex justify-center'>
                             <a className='flex items-center align-center justify-center p-1 flex border-2 bg-gradient-to-br  from-[#ff1a1a] to-[#00ffff] rounded-2xl border-[#b30047]'> 
                               
                              <div className='w-48 lg:w-96 cursor-pointer'> <img className='' src={urlFor(collection.mainimage).url()} alt=""  /> </div>
                             
                             </a>
                        </b>

                        <b className='flex justify-center pt-8 lg:pt-12'>
                        <button className='bg-gradient-to-bl from-[#ff1a1a] to-[#00ffff] h-14 w-2/6 rounded-3xl cursor-pointer text-white hover:text-blue-700  felx text-lg lg:w-1/6 md:2/6'>  CLAIM NFT</button>
                        
                        </b>
              
            </div>))} 
              </p> 


        </p>
        
        </div>
</div>
)
};

export default DropPG
export const getServerSideProps : GetServerSideProps = async()=>{
  const query =`*[_type == "collection"]{
    _id,
    title,
    address,
      description,
      nftCollectionName,
      mainimage{asset},
  previewimage{asset},
  slug{current},
  creator-> {
    _id,
    name,
    address,
    slug{current},
  },
}`

const collections = await sanityClient.fetch(query)
console.log(collections)
return {
  props: {collections}
}
}