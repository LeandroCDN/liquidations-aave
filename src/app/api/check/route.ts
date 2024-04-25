import checkAccounts from "../actions/check-accounts";

import { NextResponse } from "next/server";

export async function GET(req: any) {
  try {
    console.log("hola");
    await checkAccounts();
    return NextResponse.json("hello");
  } catch (error) {
    console.log("Prisma Error: ", error);
    return NextResponse.json(error);
  }
}
