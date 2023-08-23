"use server";

import { cookies } from "next/headers";
import prisma from "../../../prisma/prisma";

// const phone = cookies().get("USER-PHONE");

// const getOrCreateUser = async () => {
//   let user = await prisma.user.findUnique({
//     where: {
//       phone: phone?.value,
//     },
//   });

//   if (!user) {
//     user = await prisma.user.create({
//       data: {
//         phone: phone?.value as string,
//       },
//     });
//   }

//   return !!user;
// };

export async function addShipping(data: FormData) {
  // const user = await getOrCreateUser();
  // const shippingAddress = await prisma.shippingAddress.create({
  //   data: {
  //     User: { connect: { phone: phone?.value } },
  //     label: data.get("label") as string,
  //     firstName: data.get("firstName") as string,
  //     lastName: data.get("lastName") as string,
  //     emailAddress: data.get("email") as string,
  //     division: data.get("division") as string,
  //     district: data.get("district") as string,
  //     thana: data.get("thana") as string,
  //     postal: data.get("postal") as string,
  //     landMark: data.get("landMark") as string,
  //     roadNumber: data.get("road") as string,
  //     houseNumber: data.get("house") as string,
  //     flatNumber: data.get("flat") as string,
  //   },
  // });
  // return JSON.stringify(shippingAddress);
}
