import { useAddress } from '@thirdweb-dev/react';
import Head from 'next/head';
import HM from './hm';
const style ={
  wrapper : `text-center align-center`,
  bluetext:`text-6xl pt-6 text-[#000099] transitions-all hover:text-[#4d4dff] font-style: italic font-bold `,
  footText:`text-2xl pl-20 pr-20 text-center font-regular text-gray-600 `,
  underline:`hover:underline`
}
export default function Home() {
  const add = useAddress();
  console.log(add)
  return (
    <div> 
      <Head>
        <title>BOBSEAL | Bishal Bhuyan</title>
        <meta name="description" content="Chuckes! I am a Danger" />
        <link rel="icon" href="/logo.ico" />
      </Head>
       <HM/> 
       {/*<AUTHH/>*/}
       </div>
  )
}

