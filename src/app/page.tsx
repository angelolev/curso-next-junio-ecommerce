import ProductCard from "@/components/products/ProductCard";
// import ProductsFetchClient from "@/components/products/ProductsFetchClient";
import { getProducts } from "@/lib/db";
// import ProductsClient from "@/components/products/ProductsClient";
import { ProductProps } from "@/types/product";
// import { Suspense } from "react";

// async function getProducts() {
//   const res = await fetch("https://fakestoreapi.com/products", {
//     cache: "no-store",
//   });
//   const products = await res.json();
//   return products;
// }

export default async function Home() {
  const products = await getProducts();
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    //   <ProductsClient products={products} />
    // </Suspense>
    <div>
      <div className="list grid grid-cols-1 gap-4 items-end md:grid-cols-2 lg:grid-cols-4">
        {products?.map((product: ProductProps) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
