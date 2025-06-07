"use client";
import { useRouter } from "next/navigation";

export default function ButtonRedirect() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push("/");
      }}
    >
      Volver al inicio
    </button>
  );
}
