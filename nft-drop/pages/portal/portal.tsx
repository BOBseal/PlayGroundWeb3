import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import { getUser } from "../../auth.config"
import Navbaas from './comps/navnewz'
import { useAddress } from "@thirdweb-dev/react"
import { ThirdwebSDK } from "@thirdweb-dev/sdk"
import { AppProps } from "next/dist/shared/lib/router/router"
import checkBalance from "../../utils/checkBalance"
import { sanityClient } from "../../sanity"
import { COLLECTION, GATE } from "../../typings"

interface Props {
    hp : GATE[]
    collections : COLLECTION[]
}

 const Portal= ({ collections}: Props)=>{ 

    //div= parent p=children a>b>c tags children of children and div again for children
    return(

            <div>
                <Head>
                    <title>
                    MAGIC PORTAL
                    </title> <link rel='icon' href='/99398032_p0.jpg'/>
                </Head>


                <p className="flex flex-col">
                    <a className=" flex grid grid-cols-2 items-center ">
                        <b>
                            <Navbaas/>
                        </b>

                        <b className="flex justify-end pt-8">
                            Login
                        </b>

                    </a>

                    <a>
                        Header/title Content Title
                    </a>

                    <a>
                        Content ---conclusion
                    </a>

                    <a>
                        footer
                    </a>

                </p>


            </div>

    )

}
export default Portal

export const getServerSideProps : GetServerSideProps = async (context) =>{
    const query = `*[_type == "gatedpage"]{
        _id,
        name,
        pageurl,
          slug{current},
}`
    const user = await getUser(context.req);

    if (!user) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }


    const PRIVEYKEY = process.env.PRIIVATE_KEY;
    if(!PRIVEYKEY){
        throw new Error("YOU need to add an Priv key var in .env");
    }
    const sdk =ThirdwebSDK.fromPrivateKey (process.env.PRIIVATE_KEY ,"mumbai");
    const hasNFT = await checkBalance(sdk , user.address);
    if (!hasNFT) {
        return {
            redirect: {
                destination: `/`,
                permanent: false,
            },
        };
    }
    const gatedpage = await sanityClient.fetch(query)
    return {
        props: {gatedpage},
    }
    
}