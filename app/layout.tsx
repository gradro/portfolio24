import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Image from "next/image";

const opensans = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Personal porfolio - Gracjan Drozdek",
  description: "Explore a diverse portfolio of web development projects built with Next.js, TypeScript, Tailwind CSS, and HubSpot CMS. Discover innovative solutions and modern design from a skilled web developer and HubSpot CMS expert.",
  alternates: {
    canonical: './',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en" className="scroll-smooth">
      <body className={`${opensans.className}`}>
        <header className="site-header">
          <Header/>
        </header>
        <main id="main-content">
          {children}
        </main>
        <footer className="site-footer">

        </footer>
      </body>
    </html>
    </>
  );
}
