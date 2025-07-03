"use client";

import { ProductProps } from "@/types/product";
import { useContext } from "react";
import { ShoppingCartContext } from "@/context";
import styles from "./button.module.css";

function ButtonAddToCart({ product }: { product: ProductProps }) {
  const { addToCart } = useContext(ShoppingCartContext);

  return (
    <button onClick={() => addToCart(product)} className={styles.button}>
      Agregar al carrito
    </button>
  );
}

export default ButtonAddToCart;
