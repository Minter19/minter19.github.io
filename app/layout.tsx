import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { Viewport } from 'next'
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Minter Prasetyo Rajagukguk - Portfolio",
  description: "Explore the professional portfolio of Minter Prasetyo Rajagukguk, showcasing expertise in web development with a collection of projects, achievements, and contact details.",
  authors: [{ name: "Minter Prasetyo Rajagukguk", url: "https://www.linkedin.com/in/minterrgg/" }],
  keywords: ["Minter Prasetyo Rajagukguk", "Mprxv0.1", "Portfolio", "Web Developer", "React", "Node.js", "Projects", "Contact"],
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
      <meta name="google-site-verification" content="dbWz_bN6UzplkE11QfB2VZq75q-IPpyuPtJPfU0Sr8k" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-1B1NFLJE8Y');
        `}
      </Script>
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
