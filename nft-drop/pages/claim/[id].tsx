
import Head from 'next/head'
import Navba from './comp/navnew'
import { useAddress, useDisconnect, useMetamask, useClaimNFT, useContract ,useMintNFT, useNFTDrop } from '@thirdweb-dev/react'
import { COLLECTION } from '../../typings'
import type { GetServerSideProps, NextPage } from 'next'
import { sanityClient,urlFor } from '../../sanity'
import { useEffect, useState } from 'react'
import collection from '../../schemas/collection'
import { BigNumber } from 'ethers'


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
  const [claimedSupply, setClaimedSupply] = useState<number>(0);
  const [totalSupply , settotalSupply] = useState<BigNumber>();
  const [loading ,setLoading ] = useState(true);
  const adr =useAddress();
  const discon = useDisconnect();
  const conn =useMetamask();
  const NFTdrop = useContract("0xd4D89Db04e7926585305BC99B07330E7BBffa9a4", "nft-drop").contract;

useEffect ( ()=> {
if (!NFTdrop) return;
const fetchNFTdropData =async () => {
  setLoading(true);
  const claimed = await NFTdrop.getAllClaimed();
  const total = await NFTdrop.totalSupply();
  setClaimedSupply ( claimed.length);
  settotalSupply (total)
  setLoading(false);
}
fetchNFTdropData();
},[NFTdrop]

)


const MintNFT = ()=> {
  if (!NFTdrop || !adr) return ;

  const quantity =1;

  NFTdrop.claimTo(adr , quantity).then((tx) => {
    const reciept = tx[0].receipt
    const CmdTknId = tx[0].id
  }).catch(err=> {
    console.log(err)
  }).finally(()=> {
    setLoading(false);
  })
}


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
                        {loading?(
                           <div className='animate-pulse flex justify-center pt-4'>
                           NFT Supply Data Loading...
                         </div>

                        ) : (
                          <div className='flex justify-center pt-4'>
                          {claimedSupply}/{totalSupply?.toString()} Claimed
                        </div>
                        )
                        
                      }

                        <b className='flex justify-center pt-8 lg:pt-12'>
                        <button disabled={loading || claimedSupply === totalSupply?.toNumber() || !adr} className='bg-gradient-to-bl from-[#ff1a1a] to-[#00ffff] h-14 w-2/6 rounded-3xl cursor-pointer text-white hover:text-blue-700  felx text-lg lg:w-1/6 md:2/6 disabled:bg-gray-400' onClick={MintNFT}>  CLAIM NFT</button>
                        
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