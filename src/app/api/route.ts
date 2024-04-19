import createPoolContract from "./actions/create-pool-contract"; 
import { ethers } from 'ethers';

import { NextResponse } from "next/server";




export async function GET(req: any, { params }: any) {
  try {
    const poolContract = await createPoolContract();
    const POOL_REVISION = await poolContract.POOL_REVISION();
    console.log(POOL_REVISION);
    await poolContract.on("Supply", (reserve, user, onBehalfOf, amount, referralCode, event) => {
      console.log("Supply event:", event);
    });
    const hello ="hello from backend";
    console.log(hello);
    return NextResponse.json(hello);
  } catch (error) {
    console.log("Prisma Error: ", error);
    return NextResponse.json(error);
  }
}