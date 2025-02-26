import type { Metadata } from "next";
import { Geist, Geist_Mono, Satisfy, Red_Rose } from "next/font/google";
import "./globals.css";
import CustomLayout from "@/components/CustomLayout";

const sati = Satisfy({
  variable: "--font-sati",
  subsets: ["latin"],
  weight: "400",
});

const redRose = Red_Rose({
  variable: "--font-sati",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cadastru",
  description: "Cadastru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redRose.variable} ${sati.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomLayout>{children}</CustomLayout>
      </body>
    </html>
  );
}
