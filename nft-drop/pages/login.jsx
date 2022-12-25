import React,{useState , useEffect } from "react";
import { useAddress , useMetamask , useContract , useNetwork , useNetworkMismatch , useLogin ,useDisconnect } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { getUser } from "../auth.config";
import Head from "next/head";
import { ChainId } from "@thirdweb-dev/sdk";
import Navbaas from "./portal/comps/navnewz";

export default function Login(){
    const adr = useAddress();
    const conn = useMetamask();
    const discon = useDisconnect();
    const [, switchNetowrk]= useNetwork();
    const NetworkMismatch =useNetworkMismatch();
    const contracct = useContract(process.env.CONTRACT_ADDRESS_NFTS, 'nft-drop');
    const login = useLogin();

    return(
        <div>

            {adr ? (
            <div className="flex flex-col items-center">
                <> Navbar</>
                < a className='flex items-center justify-center h-screen'>
               
                <button onClick={login}> 
                        Sign In to go BOBLAND
                </button>
                </a></div>
            ) :(
                <div className=""> 
                <a className ='h-screen w-screen flex items-center flex-col'>
                <p className="pb-24 pt-24 lg:pb-40 lg:pt-32">
                Oops Looks Like Youre Not Connected with Metamask!! 
                </p>
                <button className='bg-gradient-to-tr  from-[#ff1a1a] to-[#00ffff] h-1/5 w-3/4 font-bold text-4xl rounded-full cursor-pointer text-white hover:text-gray-200 lg:w-1/3 lg:h-28' onClick={()=> conn()}>  
                       CONNECT NOW
                      </button></a>
                </div>
            )
        
        }

        </div>
    );
}