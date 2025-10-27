"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/product" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className=" border-b border-gray-200 bg-white sticky top-0 z-50">
      <Container className="flex justify-between py-4">
        <Logo />
        <nav className="hidden md:flex gap-6 items-center justify-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-primary font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="sm" className="hidden md:flex">
            <User className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="sm" className="relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </Button>
          <Button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            size="sm"
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </Container>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className=" fixed inset-x-0 top-16 md:hidden border-t border-gray-200 bg-white">
          <Container className="flex flex-col gap-2 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
