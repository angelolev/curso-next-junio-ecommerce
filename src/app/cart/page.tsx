"use client";
import { ShoppingCartContext } from "@/context";
import Image from "next/image";
import { useContext } from "react";

function CartPage() {
  const { cartItems } = useContext(ShoppingCartContext);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Carrito</h1>
      <ul className="grid grid-cols-1 gap-4">
        {cartItems.map((item) => (
          <div className="flex gap-4 items-center" key={item.id}>
            <Image
              className="max-w-[70px]"
              src={item.image}
              alt={item.title}
              width={70}
              height={70}
            />
            <h2>{item.title}</h2>
            <p className="font-bold">S/ {item.price}</p>
          </div>
        ))}
        <div className="flex justify-end">
          <p className="font-bold">
            Total: S/{" "}
            {cartItems.reduce((acc, item) => acc + Number(item.price), 0)}
          </p>
        </div>
      </ul>
    </div>
  );
}

export default CartPage;
