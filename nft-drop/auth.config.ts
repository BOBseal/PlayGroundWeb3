import {ThirdwebAuth} from '@thirdweb-dev/auth/next';
//import { domain } from './pages/_app';

export const {ThirdwebAuthHandler ,getUser} = ThirdwebAuth({
    privateKey:process.env.PRIIVATE_KEY!,
    domain: "bobs-nft.app",
});
