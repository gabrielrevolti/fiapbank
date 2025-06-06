import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Fiap Bank",
  description: "Melhor banco do Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}>
        
        <main className="min-h-screen">
          <Header/>
          {children}
        </main>
      </body>
    </html>
  );
}
