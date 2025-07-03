import Link from "next/link";
import CartButton from "../CartButton";

export default function Nav() {
  return (
    <nav className="py-6 border-b border-gray-200 mb-6">
      <ul className="flex gap-6 justify-end">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <CartButton />
      </ul>
    </nav>
  );
}
