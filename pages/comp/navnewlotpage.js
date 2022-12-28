import { useContract , useDisconnect , useContractData , useContractCall, useAddress, } from '@thirdweb-dev/react'
import Link from 'next/link'
import { useState } from 'react'

function MobileNav({open, setOpen}) {
    const contract = useContract( 0x9Be4c9456f9BB39C63C3F068068E45cd8e4a522A , "custom")
    //const contData = useContractData();
    return (
        <div className={`absolute top-0 left-0 h-1/2 w-screen bg-gradient-to-bl from-red-300 to-cyan-100 border-b-8 border-gray-600 transform ${open ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter  `}>
           <div className='flex justify-center'>
            <div className="flex flex-col justify-center items-center mt-28 rounded-3xl border-2 w-5/6 lg:w-2/6 bg-gradient-to-tl from-red-300 to-cyan-200/70">
            <Link  href= './'> <div className='text-2xl font-bold text-red-500 my-4 hover:scale-105 ease-in duration-300 hover:text-blue-600'>  HOME </div> </Link>
                <Link  href= './playground' > <div className='text-2xl font-bold text-red-600 my-4 hover:scale-105 ease-in duration-300 hover:text-blue-600'>  PLAYGROUND </div> </Link>
                <div className='text-2xl font-bold text-red-700 my-4 hover:scale-105 ease-in duration-300 hover:text-blue-600'>  BUY TICKETS </div>
                
            </div>  
            </div>
        </div>
    )
}


export default function Navigator() {

    const [open, setOpen] = useState(false)
    return (
        <nav>
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-11/12 flex justify-end items-center">
                <div className="group z-50 relative w-6 h-6 mt-10 cursor-pointer flex-col justify-between items-center flex" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                </div>
            </div>
        </nav>
    )
}