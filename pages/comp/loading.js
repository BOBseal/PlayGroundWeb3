
import React from 'react'

export default function LOADINGPROMPT() {
  return (<div>

    <div className='flex items-center justify-center w-screen h-screen flex-col bg-gradient-to-tr from-cyan-300/40 to-purple-300/40'>
        <div className='cursor-pointer'>
        <div className='text-4xl font-serif font-bold hover:animate-pulse hover:text-yellow-400 hover:scale-105 ease-in-out duration-100'>LOADING THE PAGE </div>


       <div className='flex flex-col items-center align-middle pt-12'>

        <div className='text-xl font-serif font-semibold animate-pulse hover:text-yellow-300 hover:scale-110 ease-in-out duration-100'>Please Wait</div>
        <div className='flex grid-cols-3 hover:scale-150 ease-in-out duration-100'>
        <div className='text-5xl animate-bounce text-red-500'>.</div>
        <div className='text-5xl animate-bounce text-yellow-500'>.</div>
        <div className='text-5xl animate-bounce text-green-500'>.</div>
        </div>
        </div>
    </div>   
    </div>
    </div>
  )
}
