import type { NextPage } from 'next'

import Head from 'next/head'
import Link from 'next/link'

const styl= {
    pagecontainer: `flex align-center justify-center text-cyan-500` ,
  }

const Home : NextPage = () => {
  return(
    <>
    <Head>
      <title>
        BOB Collection - Home
      </title> <link rel='icon' href='/vercel.svg'/>
    </Head>

     <h1><Link href={'./claim/a'}>
       <div  className={styl.pagecontainer}>HELLLLO</div></Link>
      </h1>
    </>
  )
}
export default Home