import Link from "next/link";
import { RiPhoneLine, RiMailLine, RiGlobalLine, RiMapPinLine } from "react-icons/ri";
import Logo from "./Logo";

const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  // { label: "Technology", href: "/technology" },
  { label: "Industries", href: "/industries" },
  { label: "Quality", href: "/quality" },
  // { label: "Sustainability", href: "/sustainability" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#e8e8ed]">
      <div className="max-w-[1200px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + Brand */}
          <div>
            <div className="mb-4">
              <img src="/images/logo.png" alt="NAMTPL Logo" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-[14px] text-[#6e6e73] leading-relaxed max-w-xs">
              Advanced ceramic materials and components for high-performance
              industrial applications, engineered for durability, precision,
              and long-term reliability.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#86868b] mb-4">Navigation</p>
            <ul className="space-y-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-[#6e6e73] hover:text-[#8c2442] transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#86868b] mb-4">Contact</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <RiPhoneLine className="text-[#004428] shrink-0" size={15} />
                <a href="tel:+91 22-68380200" className="text-[14px] text-[#6e6e73] hover:text-[#8c2442] transition-colors">
                  +91 22-68380200 (100 lines)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <RiMailLine className="text-[#004428] shrink-0" size={15} />
                <a href="mailto:enquirymatl@ngandhi.com" className="text-[14px] text-[#6e6e73] hover:text-[#8c2442] transition-colors">
                  enquirymatl@ngandhi.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <RiGlobalLine className="text-[#004428] shrink-0" size={15} />
                <a href="https://www.ngandhi.com" target="_blank" rel="noopener noreferrer" className="text-[14px] text-[#6e6e73] hover:text-[#8c2442] transition-colors">
                  www.ngandhi.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <RiMapPinLine className="text-[#004428] mt-0.5 shrink-0" size={15} />
                <a
                  href="https://maps.app.goo.gl/Gqyn1kDVDPgzPoP59"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-[#6e6e73] leading-relaxed hover:text-[#8c2442] transition-colors"
                >
                  104,1st Floor,<br />
C Wing ,Marathon Futurex,<br />
N M Joshi Marg,<br />
Lower Parel (E),<br />
Mumbai - 400013,<br />
Maharashtra, India.
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#d2d2d7] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#86868b]">
            © {new Date().getFullYear()} N Gandhi Advance Material Technology Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-[12px] text-[#86868b]">ISO 9001:2015 Certified</p>
        </div>
      </div>
    </footer>
  );
}