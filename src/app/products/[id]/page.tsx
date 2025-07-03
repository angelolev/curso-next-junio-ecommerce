import { getProductById, getProducts } from "@/lib/db";
import styles from "./products.module.css";
import ButtonAddToCart from "@/components/common/ButtonAddToCart";
import Image from "next/image";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export const revalidate = 3600;

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(Number(id));

  return (
    <section className={styles.container}>
      <div className="product-image">
        {/* <img
          className={styles.image}
          src={product?.image || ""}
          alt={product?.title || ""}
        /> */}
        <Image
          src={product?.image || ""}
          alt={product?.title || ""}
          width={200}
          height={200}
        />
      </div>
      <div className="product-information">
        <h1 className={styles.title}>{product?.title}</h1>
        <p className={styles.price}>S/ {product?.price}</p>
        <p className={styles.description}>{product?.description}</p>
        {product && <ButtonAddToCart product={product} />}
      </div>
    </section>
  );
}
