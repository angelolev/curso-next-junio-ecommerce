"use client";
import { ProductProps } from "@/types/product";
import { use } from "react";
import ProductCard from "../ProductCard";

export default function ProductsClient({
  products,
}: {
  products: Promise<ProductProps[]>;
}) {
  const allProducts = use(products);

  return (
    <ul>
      <div className="list grid grid-cols-1 gap-4 items-end md:grid-cols-2 lg:grid-cols-4">
        {allProducts?.map((product: ProductProps) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </ul>
  );
}
