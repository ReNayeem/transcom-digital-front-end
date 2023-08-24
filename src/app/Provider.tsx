"use client";

import React from "react";
import { useState } from "react";
import { Product } from "@prisma/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartContext } from "@/contexts/useCart";

export default function Provider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Header />
      <div className="display-height">{children}</div>
      <Footer />
    </CartContext.Provider>
  );
}
