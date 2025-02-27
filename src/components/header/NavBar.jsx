"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react"; // Icons
import Image from "next/image";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 30) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 w-full bg-background text-black dark:bg-background dark:text-foreground p-4 sm:px-24 sm:py-5 z-50 border-b-[1px] border-neutral-600 flex items-center justify-between"
    >
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo.png"
          width={60}
          height={60}
          alt="logo"
          className="w-auto h-auto"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 px-6 items-center">
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center hover:underline"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Talitha <ChevronDown size={16} className="ml-1" />
          </motion.button>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={
              dropdownOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
            }
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`absolute left-0 mt-2 w-48 bg-background border border-gray-200 shadow-md rounded-md ${dropdownOpen ? "block" : "hidden"}`}
          >
            <Link
              href="/talitha-investment"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Talitha Investment Holdings
            </Link>
            <Link
              href="/talitha-pharma"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Talitha Pharma
            </Link>
            <Link
              href="/talitha-red"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Talitha RED Academy
            </Link>
            <Link
              href="/talitha-pharma-online"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Talitha Pharma Online
            </Link>
          </motion.div>
        </div>
        <Link href="#about" className="hover:underline">
          About
        </Link>
        <Link href="#products" className="hover:underline">
          Products
        </Link>
        <Link href="#news" className="hover:underline">
          News/Blog
        </Link>
      </div>

      {/* Contact Button */}
      <div className="hidden md:block">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            href="#contact"
            className="bg-talithaRed text-white px-4 py-2 rounded-full hover:bg-red-800 transition-all duration-300 ease-in-out"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden px-6" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />} {/* Toggle icon */}
      </button>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className={`absolute top-16 left-0 w-full bg-black bg-opacity-90 text-white flex flex-col gap-4 p-6 md:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center hover:underline"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Talitha <ChevronDown size={16} className="ml-1" />
          </motion.button>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={
              dropdownOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
            }
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`mt-4 bg-white text-black rounded-md ${dropdownOpen ? "block" : "hidden"}`}
          >
            <Link
              href="/talitha-investment"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Talitha Investment Holdings
            </Link>
            <Link
              href="/talitha-pharma"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Talitha Pharma
            </Link>
            <Link
              href="/talitha-red"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Talitha RED Academy
            </Link>
            <Link
              href="/talitha-pharma-online"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Talitha Pharma Online
            </Link>
          </motion.div>
        </div>
        <Link
          href="#about"
          className="hover:underline"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          href="#products"
          className="hover:underline"
          onClick={() => setIsOpen(false)}
        >
          Products
        </Link>
        <Link
          href="#news"
          className="hover:underline"
          onClick={() => setIsOpen(false)}
        >
          News/Blog
        </Link>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            href="#contact"
            className="bg-talithaRed text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-all duration-300 ease-in-out text-center"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}
