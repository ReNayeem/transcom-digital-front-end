"use client";

import React from "react";
import { useState } from "react";
import { Product } from "@prisma/client";
import Header from "@/components/Header";
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";
import { CartContext } from "@/contexts/useCart";

export default function Provider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Header />
      <Header2 />
      <div className="display-height">{children}</div>
      <Footer />
    </CartContext.Provider>
  );
}
