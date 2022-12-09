import { useAddress } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const claimNFT= async()=>{
    const sdk = new ThirdwebSDK("mumbai");
const contract = await sdk.getContract("0x07a266e1bA25007132B9919225E5cC9cc0042740", "nft-drop");
    const address = useAddress();
    const quantiy = 1;
    const tx = await contract.claimTo(address, quantity);
    const receipt = tx[0].receipt; // the transaction receipt
    const claimedTokenId = tx[0].id; // the id of the NFT claimed
    const claimedNFT = await tx[0].data();
    const isAmp = useAmp();
    const lgout = useDisconnect();
  //  const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    //const [navBg, setNavBg] = useState('#ecf0f3');
    //const [linkColor, setLinkColor] = useState('#1f2937'); 
    const handleNav = () => {
    setNav(!nav);
    };
  
    useEffect(() => {
      const handleShadow = () => {
        if (window.scrollY >= 90) {
          setShadow(true);
        } else {
          setShadow(false);
        }
      };
      window.addEventListener('scroll', handleShadow);
    }, []);

    return (<fiv> ddd</fiv>
    )
}
export default claimNFT