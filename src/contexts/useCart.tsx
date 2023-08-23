import { createContext, useContext } from "react";
import { Product } from "@prisma/client";

interface cartContextInterface {
  cart: Product[];
  setCart: (arg0: Product[]) => void;
}

export const CartContext = createContext<cartContextInterface>({
  cart: [],
  setCart: () => {},
});

export default function useCart() {
  const { cart } = useContext(CartContext);

  const subTotal = (): number => {
    let count = 0;
    cart.forEach((item) => {
      count += item.salePrice;
    });

    return count;
  };

  const total = () => {
    let count = 0;
    cart.forEach((item) => {
      if (item.offerPrice) {
        count += item.offerPrice;
      }
    });

    return count;
  };

  const totalSaving = () => {
    return subTotal() - total();
  };

  return { cart, subTotal, total, totalSaving };
}
