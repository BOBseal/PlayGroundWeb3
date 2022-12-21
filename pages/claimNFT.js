import { useAddress, useClaimNFT, useContract } from "@thirdweb-dev/react";

const CMGSLESS = ()=>{
    const {contract}= useContract( 0x07a266e1bA25007132B9919225E5cC9cc0042740 , "nft-drop");
    const {mutateAsync: claim, isLoading}= useClaimNFT(contract);
    const address = useAddress();

    const ClaimNFT = async()=> {
        try {
           const data = await claim ({quantity:1});
           alert (`NFT CLAIMED SUCCESSFULLY, token ID ${data[0].id.toString()}`);
        } catch (error) {
            console.log(error);
            alert("CLAIM FAILED");           
        }
    };

    return(
        <div>
          { address && <div onClick={ClaimNFT} disabled={isLoading}>
                CLAIM NFT
            </div> }
        </div>
    );
};

export default CMGSLESS