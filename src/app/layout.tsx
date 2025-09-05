import type { Metadata } from "next";
import { Autour_One, Montserrat, Poppins } from "next/font/google";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "OH",
  description:
    "Una tienda online de productos de moda y accesorios deportivos, casuales y urbanos.",
};

const autourOne = Autour_One({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${autourOne} ${montserrat} ${poppins} antialiased min-h-screen flex flex-col`}
      >
        <main className="flex-1">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
