"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/technology", label: "Technology" },
  { href: "/industries", label: "Industries" },
  { href: "/quality", label: "Quality" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "navbar-blur border-b border-[#e8e8ed]" : "bg-white"
        }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 h-[52px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img src="/images/logo.png" alt="NAEPL Logo" className="h-10 w-auto object-contain" />

        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-0">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`px-3 py-1 text-[13px] font-medium rounded-md transition-colors duration-200 ${active ? "text-[#004428]" : "text-[#6e6e73] hover:text-[#8c2442]"
                    }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center px-4 py-1.5 text-[13px] font-medium rounded-full border border-[#004428] text-[#004428] hover:bg-[#8c2442] hover:border-[#8c2442] hover:text-white transition-all duration-200"
          >
            Get a Quote
          </Link>
          <button
            className="lg:hidden p-1 text-[#1d1d1f]"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <RiCloseLine size={22} /> : <RiMenuLine size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[#e8e8ed] px-6 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-[15px] border-b border-[#f5f5f7] last:border-0 ${pathname === l.href ? "text-[#004428] font-medium" : "text-[#6e6e73] hover:text-[#8c2442]"
                }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 block text-center py-2 text-[14px] font-medium rounded-full border border-[#004428] text-[#004428]"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
