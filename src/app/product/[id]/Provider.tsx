"use client";

import { useState } from "react";
import ProductOverview from "./Overview";
import ProductFeature from "./(options)/Feature";
import ProductSpecification from "./(options)/Specification";
import ProductReview from "./(options)/Review";
import ProductPolicy from "./(options)/Policy";
import ProductNavigation from "./Navigation";
import RelatedProducts from "./RelatedProducts";
import { Product } from "@prisma/client";

export default function Provider({ id, product }: { id: string; product: Product }) {
  const [activeTab, setActiveTab] = useState("overview");

  const getActivePage = () => {
    if (activeTab === "overview") {
      return <ProductOverview product={product} />;
    } else if (activeTab === "feature") {
      return <ProductFeature />;
    } else if (activeTab === "specification") {
      return <ProductSpecification />;
    } else if (activeTab === "review") {
      return <ProductReview />;
    } else return <ProductPolicy />;
  };

  return (
    <>
      <ProductNavigation id={id} name={product.name} activeTab={activeTab} setActiveTab={setActiveTab} />
      {getActivePage()}
    </>
  );
}
