import { useAddress } from '@thirdweb-dev/react'
import Head from 'next/head'
import Link from 'next/link'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
//import AboutME from './aboutme'
//import Link from 'next/link'
import HM from './hm'
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
