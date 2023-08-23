import { Product } from "@prisma/client";
import prisma from "../../../../../prisma/prisma";
import RelatedProducts from "./RelatedProducts";
import Provider from "./Provider";

export const revalidate = 60;

const getProduct = async (id: string) => {
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
    include: {
      brand: {
        include: {
          category: true,
        },
      },
    },
  });

  return product;
};

export default async function Home({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  return (
    <>
      <Provider id={params.id} product={product as Product} />
      <RelatedProducts id={params.id} />
    </>
  );
}
