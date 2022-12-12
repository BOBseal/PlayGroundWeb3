import { useAddress, useMetamask, useContract ,useNFTDrop } from '@thirdweb-dev/react';

export const ClaimButton = () => {
  const connectWithMetamask = useMetamask();
  const { contract } = useContract("0x07a266e1bA25007132B9919225E5cC9cc0042740", "nft-drop")
  const address = useAddress();
  return (
    <div>
      {address ? (
        <button onClick={() => contract?.claim()}>Claim 1</button>
      ) : (
        <button onClick={connectWithMetamask}>Connect Wallet</button>
      )}
    </div>
  );
};