

export default async function checkBalance(sdk, address) {
  const editionDrop = sdk.getEditionDrop(
    process.env.EDITION_ADDR, // replace this with your contract address
  );

  const balance = await editionDrop.balanceOf(address, 0);

  // gt = greater than
  return balance.gt(0);
}