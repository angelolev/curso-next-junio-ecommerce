"use client";

import Link from "next/link";
import CartIcon from "../CartIcon";
import { useContext } from "react";
import { ShoppingCartContext } from "@/context";

function CartButton() {
  const { cartItems } = useContext(ShoppingCartContext);

  return (
    <Link href="/cart" className="relative">
      <CartIcon />
      <span className="bg-red-400 text-white px-2 py-1 rounded-full text-sm absolute -top-5  -right-3">
        {cartItems.length}
      </span>
    </Link>
  );
}

export default CartButton;
