import ButtonRedirect from "@/components/common/ButtonRedirect";

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Id de producto: {params.id}</h1>
      <ButtonRedirect />
    </div>
  );
}
