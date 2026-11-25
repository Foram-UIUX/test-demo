"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Laminates", href: "/laminates" },
    { name: "Collections", href: "/collections" },
    { name: "Applications", href: "/applications" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-secondary/30 shadow-sm">
      <div className="container mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="text-2xl font-semibold tracking-tight text-primary flex items-center shrink-0">
          AURORA<span className="text-accent">.</span>
        </Link>

        {/* Desktop Navigation (Visible on lg and larger) */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors py-1 relative ${
                  active ? "text-accent font-semibold" : "text-charcoal/80 hover:text-accent"
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center bg-primary text-background px-6 py-2.5 text-sm font-medium hover:bg-charcoal transition-colors border border-transparent shadow-sm"
          >
            Visit Showroom
          </Link>
        </div>

        {/* Mobile / Tablet Menu Button (Visible below lg) */}
        <button
          className="lg:hidden p-2 text-charcoal hover:text-accent transition-colors focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile / Tablet Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-secondary/30 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="container mx-auto px-6 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base font-medium py-2 px-3 rounded transition-colors flex items-center justify-between ${
                    active ? "bg-secondary/20 text-accent font-semibold" : "text-charcoal hover:bg-secondary/10"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{link.name}</span>
                  {active && <span className="text-xs bg-accent text-white px-2 py-0.5 rounded-full">Active</span>}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-secondary/30">
              <Link
                href="/contact"
                className="flex items-center justify-center bg-primary text-background px-6 py-3.5 text-sm font-medium hover:bg-charcoal transition-colors w-full text-center shadow-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Visit Showroom <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
