import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar"; // <-- Importamos
import Footer from "@/components/Footer"; // <-- Importamos
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DeviceStore",
  description: "Tu tienda de tecnología favorita",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased flex flex-col min-h-screen">

        {/* Banner de anuncio superior */}
        <div className="bg-primary text-white text-sm font-medium py-2 text-center w-full px-4">
          Free Shipping on all orders over $50! Shop now and save.
        </div>

        <Navbar />

        {/* Aquí se renderizará el contenido de cada página (Inicio, Carrito, etc.) */}
        <div className="flex-grow">
          {children}
        </div>

        <Footer />

      </body>
    </html>
  );
}