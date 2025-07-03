import { Lato } from "next/font/google";
import "./globals.css";
import Nav from "@/components/common/Nav";
import { ShoppingCartProvider } from "@/context";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased container mx-auto ${lato.className}`}>
        <ShoppingCartProvider>
          <Nav />
          {children}
        </ShoppingCartProvider>
      </body>
    </html>
  );
}
