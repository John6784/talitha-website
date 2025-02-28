import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <Image src="/logo.png" width={150} height={50} alt="Talitha Logo" priority className="w-auto h-auto"/>
          {/* <p className="mt-2 text-sm text-gray-400">Empowering businesses for a better future.</p> */}
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col text-center md:text-left">
          <h4 className="font-semibold text-lg">Our Divisions</h4>
          <Link href="/talitha-investment-holdings" className="text-gray-400 hover:text-white">Talitha Investment Holdings</Link>
          <Link href="/talitha-pharma" className="text-gray-400 hover:text-white">Talitha Pharma</Link>
          <Link href="/talitha-red-academy" className="text-gray-400 hover:text-white">Talitha RED Academy</Link>
          <Link href="/talitha-pharma-online" className="text-gray-400 hover:text-white">Talitha Pharma Online</Link>
        </div>

        {/* Contact & Socials */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="font-semibold text-lg">Contact Us</h4>
          <p className="text-gray-400">Email: info@talitha.com</p>
          <p className="text-gray-400">Address: 123 Business St, City, Country</p>
          <div className="flex gap-4 mt-4">
            <Link href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></Link>
            <Link href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></Link>
            <Link href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></Link>
            <Link href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></Link>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-8">© {new Date().getFullYear()} Talitha Investment Holdings. All rights reserved.</div>
    </footer>
  );
}
