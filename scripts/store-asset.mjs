import { NFTStorage, File } from "nft.storage"
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

// NFT.STORAGE API Key reading
const API_KEY = process.env.NFT_STORAGE_API_KEY

/* storeAsset function creates a new client connection to NFT.Storage 
to create the metadata and upload the NFT asset to IFPS.*/
async function storeAsset() {
   const client = new NFTStorage({ token: API_KEY })
   const metadata = await client.store({
       
       // First photography metadata
       /*name: 'Los Cabos',
       description: 'Cabo San Lucas, Baja California Sur. 2017.',
       image: new File(
           [await fs.promises.readFile('assets/los-cabos.png')],
           'los-cabos/png',
           { type: 'image/png' }
       ),*/

       // Second photography metadata
       /*name: 'El Arco',
       description: 'El Arco del Cabo San Lucas, Baja California Sur. 2017.',
       image: new File(
           [await fs.promises.readFile('assets/el-arco.png')],
           'el-arco/png',
           { type: 'image/png' }
       ),*/
    
       // Third photography metadata
       name: 'Cabo Pulmo',
       description: 'Parque Nacional Cabo Pulmo, Baja California Sur. 2017.',
       image: new File(
           [await fs.promises.readFile('assets/cabo-pulmo.png')],
           'cabo-pulmo/png',
           { type: 'image/png' }
       ),

   })
   // Display in CLI the URL where the NFT was stored
   console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url)
}

storeAsset()
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });