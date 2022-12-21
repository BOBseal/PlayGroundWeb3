import Link from 'next/link'
import { useState } from 'react'

function MobileNav({open, setOpen}) {
    return (<a>
        <div className={`absolute top-0 left-0 h-screen w-1/3 bg-gradient-to-tr from-[#f2f2f2] to-[#8c8c8c] lg:w-1/6 md:w-1/5 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter  `}>
           
            <div className="flex flex-col justify-center items-center mt-28">
          <Link href={'/'}> <div className='cursor-pointer hover:text-gray-600'>HOME</div> </Link>
                
            </div>  
        </div>{ /*<div className='h-1/6 bg-blue-400'>
            </div>*/ }</a>
    )
}


     const Navba =() =>{

    const [open, setOpen] = useState(false)
    return (
        <nav>
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-8 flex justify-end items-center ">
                <div className="group z-50 relative w-6 h-6 mt-10 cursor-pointer flex-col justify-between items-center align-center flex" onClick={() => {
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
export default Navba