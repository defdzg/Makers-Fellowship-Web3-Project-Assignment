const CONTRACT_ADDRESS = "0x6133704489d53eA6dAEC6d027c4776D7FbC6F2cB"
const META_DATA_URL = "ipfs://bafyreidts5yro2pylvjpxlp5agwvwd4uujngr5t3qkcez2wirv676aooua/metadata.json"
//const META_DATA_URL = "ipfs://bafyreiggglaiuthiyx46vgqk6jyklf4i2n25p54oikegi4dcy6sn6oamkq/metadata.json"
//const META_DATA_URL = "ipfs://bafyreifsgqxe44moec63xjbtarshripymsleoopvmpg5ej4ma3empgqazm/metadata.json"

/* mintNFT function is used in order to mint the NFT using the previous deployed
contract and the IPFS metadata-*/
async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });