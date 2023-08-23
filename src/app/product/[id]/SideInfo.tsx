import calculatePriceAfterDiscount from "@/utils/calculate-price-after-discount";
import { numberSeparator } from "@/utils/number-separator";
import AddToCart from "../../(components)/AddToCart";
import prisma from "../../../../../prisma/prisma";
import { Product } from "@prisma/client";

export const revalidate = 30;

const getProductOverview = async (id: string) => {
  const res = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });

  return res;
};

export default async function SideInfo({ id }: { id: string }) {
  const product = await getProductOverview(id);

  return (
    <div className="col-lg-4 text-end d-none d-lg-block">
      <div className="row align-items-center justify-content-end">
        <div className="col-5">
          <div className="product-price text-start">
            <del className="text-red">&#2547; {numberSeparator(Number(product?.price))}</del>
            <br />
            <span className="fw-bold">
              &#2547; {numberSeparator(calculatePriceAfterDiscount(product?.price!!, product?.discount!!))}
            </span>
          </div>
        </div>
        <div className="col-7">
          <AddToCart product={product as Product} />
        </div>
      </div>
    </div>
  );
}
