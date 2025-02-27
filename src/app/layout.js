import { Geist, Geist_Mono, Tinos } from "next/font/google";
import "./globals.css";
import { Weight } from "lucide-react";
import Head from "next/head";
import Navbar from "@/components/header/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tinos = Tinos({
  variable: "--font-tino-serif",
  subsets: ["latin"],
  weight: "400", // Ensure correct weight is used
});

export const metadata = {
  title: "Talitha",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tinos.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
