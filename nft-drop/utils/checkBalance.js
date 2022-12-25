

 export default async function checkBalance (sdk , address) {
    const cont =sdk.useContract("0x07a266e1bA25007132B9919225E5cC9cc0042740");
    const balance = await cont.balanceOf(address);
    return balance.gt(0);
}