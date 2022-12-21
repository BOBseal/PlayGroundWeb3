
import React from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useLogout } from "@thirdweb-dev/react";
import { getUser } from "../auth.config";
import checkBalance from "./comp/checkbalance";

const BOBLand = ()=> {
    const logout = useLogout();

    return (
      <div>
        <h1>Restricted Access Page</h1>
        <p>Thanks for being a member of our NFT community!</p>
  
        <button onClick={logout}>Logout</button>
      </div>
    );
    
};
export default BOBLand

export async function getServerSideProps(context) {
    const user = await getUser(context.req);
  
    if (!user) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
  
    // Instantiate our SDK
    const sdk = ThirdwebSDK.fromPrivateKey(
        process.env.NFT_WALLET_PRIVATE_KEY,"mumbai"
    );
  
    // Check to see if the user has an NFT
    const hasNft = await checkBalance(sdk, user.address);
  
    // If they don't have an NFT, redirect them to the login page
    console.log("User", user.address, "doesn't have an NFT! Redirecting...");
    if (!hasNft) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  
    // Finally, return the props
    return {
      props: {},
    };
  }