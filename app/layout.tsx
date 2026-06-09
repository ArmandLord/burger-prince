import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Burger Prince",
  description: "Hamburguesas artesanales con sabor que te hace rey.",
  keywords: ["hamburguesas", "burger", "comida", "fast food", "Burger Prince"],
  openGraph: {
    title: "Burger Prince",
    description: "Hamburguesas artesanales con sabor que te hace rey.",
    type: "website",
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
