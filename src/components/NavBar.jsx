"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icons for the hamburger menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true); // Hide when scrolling down
      } else {
        setHidden(false); // Show when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-100%" : "0%" }} // Hide navbar when scrolling down
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white p-4 z-50 flex justify-between items-center"
    >
      {/* Logo */}
      <h1 className="text-xl font-bold px-6">My Company</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 px-6">
        <Link href="#about" className="hover:underline">About</Link>
        <Link href="#services" className="hover:underline">Services</Link>
        <Link href="#contact" className="hover:underline">Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden px-6" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />} {/* Toggle icon */}
      </button>

      {/* Mobile Menu (Framer Motion Animation) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-16 left-0 w-full bg-black bg-opacity-90 text-white flex flex-col gap-4 p-6 md:hidden"
          >
            <Link href="#about" className="hover:underline" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="#services" className="hover:underline" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="#contact" className="hover:underline" onClick={() => setIsOpen(false)}>Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
