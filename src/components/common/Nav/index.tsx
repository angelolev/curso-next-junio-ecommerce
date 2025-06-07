import Link from "next/link";
import CartIcon from "../CartIcon";

export default function Nav() {
  return (
    <nav className="py-6 border-b border-gray-200 mb-6">
      <ul className="flex gap-6 justify-end">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart" className="relative">
          <CartIcon />
          <span className="bg-red-400 text-white px-2 py-1 rounded-full text-sm absolute -top-5  -right-3">
            0
          </span>
        </Link>
      </ul>
    </nav>
  );
}
