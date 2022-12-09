import { useAddress } from "@thirdweb-dev/react"
import { useMetamask } from "@thirdweb-dev/react"
import PG from "./pg";

const AUTHH =()=>{
    const connectMeta = useMetamask ();
    const addr = useAddress();
    const Au =()=> {
        return( 
            <div onClick={connectMeta}> Connect </div>
        )
    }
    return <> {addr ? <PG/> : Au()}</>
}
export default AUTHH