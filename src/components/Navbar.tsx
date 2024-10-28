'use client'; // Ensure this is a client component since it uses client-side state and hooks

import { Content } from "@prismicio/client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PrismicNextLink } from "@prismicio/next";
import { ShoppingCart } from "lucide-react";
import { Menu, X } from "lucide-react";
import { asLink } from "@prismicio/helpers";
import { usePathname } from 'next/navigation'; // For current path detection
import Link from "next/link";

type NavBarProps = {
  settings: Content.SettingsDocument;
};

export default function NavBar({ settings }: NavBarProps) {
  const pathname = usePathname(); // Get current page path
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state
  const [mounted, setMounted] = useState(false); // To ensure consistent rendering on client-side
  
  useEffect(() => {
    setMounted(true); // Set to true after component mounts
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle mobile menu

  return (
    <motion.div 
      className="flex items-center justify-between px-6 py-4 bg-[#F7BAC8] shadow-md top-0 z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background animation */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "linear-gradient(135deg, #F7BAC8, #E0D3EA)",
            "linear-gradient(135deg, #E0D3EA, #B8E0D2)",
            "linear-gradient(135deg, #B8E0D2, #D6E5FA)",
            "linear-gradient(135deg, #D6E5FA, #F7BAC8)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Logo */}
      <Link href="/" className="flex items-center z-10">
        <Image
          src="/logo.svg"
          alt="Guada logo"
          width={40}
          height={40}
          className="mr-2"
        />
        <motion.span 
          className="text-2xl font-bold text-gray-800"
          whileHover={{ scale: 1.05 }}
        >
          Guada
        </motion.span>
      </Link>

      {/* Navigation for Desktop */}
      <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
        <ul className="flex space-x-6">
          {settings?.data?.navigation?.map((item) => (
            <motion.li key={item.label} whileHover={{ scale: 1.05 }}>
              <PrismicNextLink 
                field={item.link}
                className={`font-bold text-gray-800 relative group ${
                  pathname === asLink(item.link) ? "border-b-2 border-white" : ""
                }`}
              >
                <span className="relative">
                  {item.label}
                  <motion.span 
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-gray-800"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </PrismicNextLink>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Cart Icon */}
      <Link href="/cart" className="z-10">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 bg-white bg-opacity-20 rounded-full"
        >
          <ShoppingCart size={24} className="text-gray-800" />
          <span className="sr-only">Cart</span>
        </motion.div>
      </Link>

      {/* Hamburger menu button for mobile */}
      <button onClick={toggleMenu} className="md:hidden z-10 text-gray-800">
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-[#F7BAC8] py-4 z-20 shadow-md">
          <ul className="flex flex-col items-center">
            {settings?.data?.navigation?.map((item) => (
              <PrismicNextLink
                key={item.label}
                field={item.link}
                className={`block px-4 py-2 font-bold transition-all duration-300 ${
                  pathname === asLink(item.link)
                    ? "text-white border-l-4 border-white pl-3"
                    : "text-gray-800 hover:text-white hover:border-l-4 hover:border-white hover:pl-3"
                }`}
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {item.label}
              </PrismicNextLink>
            ))}
          </ul>
        </nav>
      )}
    </motion.div>
  );
}
