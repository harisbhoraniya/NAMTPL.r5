"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  // { href: "/technology", label: "Technology" },
  { href: "/industries", label: "Industries" },
  { href: "/quality", label: "Quality" },
  // { href: "/sustainability", label: "Sustainability" },
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
      <nav className="max-w-[1400px] mx-auto px-6 h-[76px] flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img src="/images/logo.png" alt="NAEPL Logo" className="h-14 w-auto object-contain" />

        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-0 flex-nowrap">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href} className="shrink-0">
                <Link
                  href={l.href}
                  className={`px-3 py-2 text-[14px] font-medium rounded-md transition-colors duration-200 whitespace-nowrap ${active ? "text-[#004428]" : "text-[#6e6e73] hover:text-[#8c2442]"
                    }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center px-5 py-2.5 text-[14px] font-medium rounded-full border border-[#004428] text-[#004428] hover:bg-[#8c2442] hover:border-[#8c2442] hover:text-white transition-all duration-200 whitespace-nowrap"
          >
            Get a Quote
          </Link>

          {/* N Gandhi Group site link — same size as Get a Quote button */}
          <a
            href="https://www.ngandhi.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit N Gandhi Group website"
            className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-[#f5f5f7] border-2 border-[#e67e22] hover:bg-[#e67e22] transition-all duration-200 shrink-0"
          >
            <img
              src="/images/ngandhi-group-logo.png"
              alt="N Gandhi Group"
              className="h-5 w-auto object-contain"
            />
          </a>
          <button
            className="lg:hidden p-1.5 text-[#1d1d1f]"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <RiCloseLine size={28} /> : <RiMenuLine size={28} />}
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
              className={`block py-3.5 text-[17px] border-b border-[#f5f5f7] last:border-0 ${pathname === l.href ? "text-[#004428] font-medium" : "text-[#6e6e73] hover:text-[#8c2442]"
                }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 block text-center py-2.5 text-[15px] font-medium rounded-full border border-[#004428] text-[#004428]"
          >
            Get a Quote
          </Link>
          <a
            href="https://www.ngandhi.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 py-2.5 text-[15px] font-medium rounded-full border border-[#e8e8ed] text-[#1d1d1f]"
          >
            <img
              src="/images/ngandhi-group-logo.png"
              alt="N Gandhi Group"
              className="h-5 w-5 object-contain"
            />
            Visit N Gandhi Group
          </a>
        </div>
      )}
    </header>
  );
}