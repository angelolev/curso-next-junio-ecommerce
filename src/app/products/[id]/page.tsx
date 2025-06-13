import ButtonRedirect from "@/components/common/ButtonRedirect";
import { products } from "@/data/products";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export const revalidate = 3600;

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((product) => product.id === id);

  console.log(product, "producto filtrado");

  return (
    <div>
      <h1>Id de producto</h1>
      <ButtonRedirect />
    </div>
  );
}
