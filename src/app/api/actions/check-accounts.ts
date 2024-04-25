import createContract from "./create-contract";
import sindicateABI from "@/../ABI/sindicate.json";
import fs from "fs";
import path from "path";
import { promisify } from "util";

const readFileAsync = promisify(fs.readFile);

import { ethers } from "ethers";
import axios from "axios";

import { NextResponse } from "next/server";

/* Check accounts for all addresses for a specific accet in a specific blockchain
 Params
* ListOfHolders (a rute 'addresses/listOfHolders/polygon/NoStable...')
* assetAddress' - no obligatory - 
* ChainID
* RPC
* SindicateAddress
 Returns
* three .csv? .md? files in a ChainID/Name Folder with the assetDebtName + Condition.csv
* e.g. PolygonWethDebt_HF105.csv
* Console returns:progress 0% to 1005 and then total address in each files
* e.g
* Progress:100%
  PolygonWethDebt_HF99.csv : 0 addresses updated - 0 news
  PolygonWethDebt_HF105.csv : 30 addreses updated - 2 news
  PolygonWethDebt_HF110.csv : 10 addreses updated - 7 newsp
*/
export default async function checkAccounts() {
  const contractAddress = process.env.SEPOLIA_SINDICATE_ADDRESS;
  const url = process.env.SEPOLIA_ETH_RPC;
  const ABI = sindicateABI.result;

  const sindicate = await createContract({
    contractAddress,
    url,
    ABI,
  });

  // Leer el archivo direcciones.json
  const direccionesPath = path.join(
    __dirname,
    "../../../../../src/addresses/listOfHolders/direcciones2.json"
  );
  const direccionesData = await readFileAsync(direccionesPath, "utf8");
  const direcciones = JSON.parse(direccionesData);
  // Pasar cada vector de direcciones al método sindicate.check()
  for (const addressGroup of direcciones) {
    // console.log(addressGroup);
    const listOfLowHealtFactor = await sindicate.check(addressGroup);
    console.log("listOfLowHealtFactor: ", listOfLowHealtFactor);
  }
  console.log("finish");
  // scheme for listOfLowHealtFactor
  // [(address, amount),...]
  // if (hf <= 1 ()) {write}
  // if (hf <= 1.05 & hf > 1){}
  // if (hf <= 1.1 & valueOf(hf.amount) > Nusd){}
}
