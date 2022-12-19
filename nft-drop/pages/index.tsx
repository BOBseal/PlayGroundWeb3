import type { GetServerSideProps, NextPage } from 'next'
import { sanityClient, urlFor } from '../sanity'
import Head from 'next/head'
import Link from 'next/link'
import { COLLECTION } from '../typings'
import Navba from './claim/comp/navnew'

const styl= {
    pagecontainer: `flex align-center justify-center text-cyan-500` ,
  }

  interface Props{
    collections:COLLECTION[]
  }

const Home = ({collections}:Props) => {
  return(
<a>
    <Head>
      <title>
        BOB Collection - Home
      </title> <link rel='icon' href='/vercel.svg'/>
    </Head>

    <p>
      <div className='grid grid-cols-2 bg-gradient-to-bl from-[#ff1a1a] to-[#00ffff] w-screen h-16 shadow-md shadow-gray-400'>
      <Navba/>
      </div>
       <h1 className='h-16 flex items-center justify-center lg:h-24'>
       BOB NFT MARKET | premium bob listings !
      </h1>
      <main className='flex justify-center h-screen'> <main className='bg-gray-200/20 w-3/5 h-4/5 flex shadow-lg shadow-gray-200/10 items-center justify-center rounded-xl lg:rounded-2xl'>
      <div className=''>{collections.map(collection =>(
        <div className='flex items-center align-center cursor-pointer flex-col'>
         <Link href={`/claim/${collection.slug.current}`}>
          <a className=' flex items-center justify-center pb-14 lg:pb-16'>  
            <img className='w-48 rounded-2xl lg:w-80 md:w-64 ' src={urlFor(collection.mainimage).url()} alt=""/></a>
            <a className='flex justify-center text-center flex-col'>
            <h2>{collection.title}</h2>
            <a className='flex justify-center text-center flex-col'>
              {collection.description}
            </a>
          </a> </Link>
        </div> 
      ))} </div>
     </main> </main>
   </p>
</a>
  )
}
export default Home

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