"use client";
import { ProductProps } from "@/types/product";
import { createContext, useEffect, useState } from "react";

interface ShoppingCartContextType {
  cartItems: ProductProps[];
  setCartItems: React.Dispatch<React.SetStateAction<ProductProps[]>>;
  addToCart: (product: ProductProps) => void;
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>(
  {} as ShoppingCartContextType
);

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<ProductProps[]>([]);

  const addToCart = (product: ProductProps) => {
    const newCartItems = [...cartItems, product];
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, setCartItems, addToCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
