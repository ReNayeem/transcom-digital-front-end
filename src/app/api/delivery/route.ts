import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";

export async function POST(request: NextRequest) {
  const { productIds, phone, deliveryTime } = await request.json();
  const user = await prisma.user.findUnique({
    where: { phone: phone },
  });

  if (!user) {
    throw new Error("User not found with the provided phone");
  }

  try {
    const order = await prisma.order.create({
      data: {
        userId: user.id,
        preferDeliveryTime: deliveryTime,
        products: {
          connect: productIds.map((productId: any) => ({ id: productId })),
        },
      },
    });

    return NextResponse.json(order);
  } catch (err) {
    return new Error("Something went wrong");
  } finally {
    prisma.$disconnect();
  }
}
