import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";

export async function GET() {
  try {
    const products = await prisma.product.findMany();

    return NextResponse.json(products);
  } catch (err) {
    return new Error("Can't fetch products");
  } finally {
    prisma.$disconnect();
  }
}
