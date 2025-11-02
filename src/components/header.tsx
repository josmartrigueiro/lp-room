"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

const menuItems = [
  { name: "Início", href: "/#hero" },
  { name: "O que é o Room", href: "/#about-room" },
  { name: "Pastores", href: "/#who-are-shepherds" },
  { name: "Conteúdos", href: "/#inside-room" },
  { name: "Dúvidas", href: "/#faq" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    if (href === "/#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`w-full user-select-none isolate fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm bg-background/50 ${
        isScrolled
          ? "border-b border-border/10 shadow-lg shadow-[#181136]/20"
          : "border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width="144"
              height="94"
              priority
            />
          </Link>

          <nav className="hidden md:flex space-x-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
                onClick={(e) => {
                  if (item.href === "/#hero") {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Button size="lg" className="md:flex hidden">
            <Link href="/#contact-us">Garanta já</Link>
          </Button>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 z-50 relative md:hidden"
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <Menu size={24} className="text-primary" />
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-full h-screen bg-background z-[60] flex flex-col justify-center items-center"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-800 hover:text-gray-600 focus:outline-none"
                aria-label="Close menu"
                type="button"
              >
                <X size={32} className="text-primary" />
              </button>
              <nav className="flex flex-col space-y-3">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="font-sans text-3xl text-gray-600 hover:text-primary p-3 inline-block transition-colors"
                      onClick={(e) => {
                        if (item.href === "/#hero") {
                          e.preventDefault();
                          handleLinkClick(item.href);
                        } else {
                          setIsOpen(false);
                        }
                      }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
