import "./globals.css";
import Nav from "@/components/common/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased container mx-auto`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
