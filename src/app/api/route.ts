import { NextApiRequest, NextApiResponse} from 'next';
import { NextResponse } from "next/server";


export async function GET(req: any, { params }: any) {
  try {
    const hello ="hello from backend";
    console.log(hello);
    return NextResponse.json(hello);
  } catch (error) {
    console.log("Prisma Error: ", error);
    return NextResponse.json(error);
  }
}