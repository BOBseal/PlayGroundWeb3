import { useAddress } from "@thirdweb-dev/react"
import { useMetamask } from "@thirdweb-dev/react"
import PG from "./pg";
const style={
    ww : `text-center`
}
const AUTHH =()=>{
    const connectMeta = useMetamask ();
    const addr = useAddress();
    const Au =()=> {
        return( 
           <div className={style.ww}> <div onClick={connectMeta}> Connect </div></div>
        )
    }
    return <> {addr ? <PG/> : Au()}</>
}
export default AUTHH