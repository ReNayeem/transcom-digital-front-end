import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      include: {
        brands: {
          include: {
            products: true,
          },
        },
      },
    });

    return NextResponse.json(categories);
  } catch (err) {
    return new Error("Can't fetch categories");
  } finally {
    prisma.$disconnect();
  }
}
