import { ThirdwebAuth } from "@thirdweb-dev/auth/next";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  privateKey: (process.env.NFT_WALLET_PRIVATE_KEY),
  domain: "bob.app",
});