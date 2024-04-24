import createContract from "./create-contract"; 
import { ethers } from 'ethers';
import axios from 'axios';

import { NextResponse } from "next/server";
  
export async function GET(req: any, { params }: any) {
    const contractAddress = process.env.SEPOLIA_SINDICATE_ADDRESS;
    const sepoliaRPC = process.env.SEPOLIA_ETH_RPC;

    
}