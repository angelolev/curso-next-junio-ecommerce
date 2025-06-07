import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div>
      <div className="list grid grid-cols-1 gap-4 items-end md:grid-cols-2 lg:grid-cols-4">
        {products?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
