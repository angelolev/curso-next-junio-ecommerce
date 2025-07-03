import Link from "next/link";
import { ProductProps } from "@/types/product";
import Image from "next/image";

export default function ProductCard({ title, price, image, id }: ProductProps) {
  return (
    <div className="flex flex-wrap items-center flex-col">
      <div className="product-image">
        <Image
          src={image}
          alt={title}
          className="max-w-[120px]"
          width={120}
          height={120}
        />
      </div>
      <div className="product-information">
        <Link
          href={`/products/${id}`}
          className="inline-block text-lg whitespace-nowrap overflow-hidden overflow-ellipsis w-[220px]"
        >
          {title}
        </Link>
        <p className="font-bold text-[22px]">${price}</p>
      </div>
    </div>
  );
}
