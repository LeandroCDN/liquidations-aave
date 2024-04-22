import createPoolContract from "./actions/create-pool-contract"; 
import { ethers } from 'ethers';
import axios from 'axios';

import { NextResponse } from "next/server";




export async function GET(req: any, { params }: any) {
  try {
    const poolContract = await createPoolContract();
    const POOL_REVISION = await poolContract.POOL_REVISION();
    console.log(POOL_REVISION);
    // Get Supply events from RPC
    // await poolContract.on("Supply", (reserve, user, onBehalfOf, amount, referralCode, event) => {
    //   console.log("Supply event:", event);
    // });


    // Get Events from scan apykey
    // Obtener el apiKey de .env
    const apiKey = process.env.POLYGON_API_KEY;

    // Crear la URL de la API de Polygonscan
    const apiUrl = 'https://api.polygonscan.com/api';
    
    // Parámetros para la solicitud a la API de Polygonscan
    const params = {
      module: 'logs',
      action: 'getLogs',
      fromBlock: '5000000',
      toBlock: '6000000',
      address: '0x0000000000000000000000000000000000001010',
      topic0: '0x4dfe1bbbcf077ddc3e01291eea2d5c70c2b422b415d95645b9adcfd678cb1d63',
      topic0_1_opr: 'and',
      topic1: '0x0000000000000000000000000000000000000000000000000000000000001010',
      apikey: apiKey
    };
    const response = await axios.get(apiUrl, { params });

    console.log(response.data);

    const hello ="hello from backend";
    console.log(hello);
    return NextResponse.json(hello);
  } catch (error) {
    console.log("Prisma Error: ", error);
    return NextResponse.json(error);
  }
}