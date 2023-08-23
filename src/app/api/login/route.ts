import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";

export async function POST(request: NextRequest) {
  const { phone } = await request.json();

  try {
    const connect = await prisma.user.findUnique({
      where: {
        phone: phone,
      },
    });

    if (connect) {
      return NextResponse.json(connect);
    } else {
      const create = await prisma.user.create({
        data: {
          phone: phone,
        },
      });

      return NextResponse.json(create);
    }
  } catch (err) {
    return new Error("Something went wrong");
  } finally {
    await prisma.$disconnect();
  }
}
