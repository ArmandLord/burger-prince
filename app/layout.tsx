import type { Metadata, Viewport } from "next";
import { Anton, Poppins } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "Burger Prince — Hamburguesas Premium",
  description:
    "Hamburguesas artesanales con sabor que te hace rey. Clásica, Hawaiana, Especial, Arrachera, Chicken Burger y más. ¡Pide ya!",
  keywords: [
    "hamburguesas",
    "burger",
    "comida rápida",
    "fast food premium",
    "Burger Prince",
    "arrachera",
    "chicken burger",
    "alitas",
  ],
  openGraph: {
    title: "Burger Prince — El sabor que te hace rey",
    description:
      "Hamburguesas artesanales con ingredientes de calidad. Clásica $75, Hawaiana $80, Arrachera $100 con papas.",
    type: "website",
    locale: "es_MX",
    siteName: "Burger Prince",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burger Prince — El sabor que te hace rey",
    description: "Hamburguesas artesanales con sabor que te hace rey.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${poppins.variable} h-full`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
