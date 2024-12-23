import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minter Prasetyo Rajagukguk - Portfolio",
  description: "Explore the professional portfolio of Minter Prasetyo Rajagukguk, showcasing expertise in web development with a collection of projects, achievements, and contact details.",
  authors: [{ name: "Minter Prasetyo Rajagukguk", url: "https://www.linkedin.com/in/minterrgg/" }],
  keywords: ["Minter Prasetyo Rajagukguk", "Mprxv0.1", "Portfolio", "Web Developer", "React", "Node.js", "Projects", "Contact"],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: "Minter Prasetyo Rajagukguk - Portfolio",
    description: "Explore the professional portfolio of Minter Prasetyo Rajagukguk, showcasing expertise in web development with a collection of projects, achievements, and contact details.",
    url: "https://www.linkedin.com/in/minterrgg/",
    siteName: "Minter Prasetyo Rajagukguk - Portfolio",
    type: "website",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/25866212?v=4",
        width: 1200,
        height: 630,
        alt: "Minter Prasetyo Rajagukguk Og Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Minter Prasetyo Rajagukguk - Portfolio",
    description: "Explore the professional portfolio of Minter Prasetyo Rajagukguk, showcasing expertise in web development with a collection of projects, achievements, and contact details.",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/25866212?v=4",
        alt: "Minter Prasetyo Rajagukguk Og Image",
      },
    ],
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
