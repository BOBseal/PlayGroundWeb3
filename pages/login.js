import { ChainId } from "@thirdweb-dev/sdk";
import BOBCONN from "./comp/auth";
import { useUser } from "@thirdweb-dev/react";
import { useLogin } from "@thirdweb-dev/react";
import Navba from "./comp/navnew";
import { useAddress } from "@thirdweb-dev/react";


export default function Login() {
    const add = useAddress();
    const login = useLogin(); 
    return (
      <div> <>
      <Navba/>
      </>
        {add ? (
          <div className="flex items-center justify-center flex-col"> 
            <p>LOGIN HERE TO GO TO BOBLAND</p>
  
            <button onClick={login}>Sign In</button>
          </div>
        ) : (
          <>
           <BOBCONN/>
          </>
        )}
      </div>
    );
  }