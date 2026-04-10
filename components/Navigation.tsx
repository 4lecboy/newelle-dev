"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileOpen(false);
    const element = document.querySelector(`#${id}`);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-panel-border"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          {isHomePage ? (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-2xl font-bold text-primary font-mono"
            >
              &lt;Newelle Dev/&gt;
            </a>
          ) : (
            <Link href="/" className="text-2xl font-bold text-primary font-mono">
              &lt;Newelle Dev/&gt;
            </Link>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              isHomePage ? (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.id)}
                  className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ) : (
                <Link
                  key={link.label}
                  href={`/#${link.id}`}
                  onClick={() => setIsMobileOpen(false)}
                  className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ),
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileOpen ? "auto" : 0,
            opacity: isMobileOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) =>
              isHomePage ? (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left font-mono text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 px-4 py-2 rounded-lg transition-all"
                >
                  <span className="text-primary mr-2">&gt;</span>
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  href={`/#${link.id}`}
                  onClick={() => setIsMobileOpen(false)}
                  className="block w-full text-left font-mono text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 px-4 py-2 rounded-lg transition-all"
                >
                  <span className="text-primary mr-2">&gt;</span>
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
