"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { RiArrowRightLine, RiCheckLine, RiShieldCheckLine, RiFlaskLine, RiGlobalLine, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const heroSlides = [
  {
    img: "/images/ceramics.jpg",
    alt: "Advanced ceramics",
    badge: "Ceramic Grinding Media",
    title: ["Precision-milled", "zirconia beads."],
    desc: "Ultra-fine, high-density zirconia beads engineered for consistent dispersion and superior milling efficiency.",
    href: "/products/zirconia-beads",
    objectPosition: "center",
    fit: "cover",
    zoom: true,
  },
  {
    img: "/images/silicon_nitride.png",
    alt: "Silicon nitride grinding media",
    badge: "Silicon Nitride Beads",
    title: ["Built for extreme", "wear resistance."],
    desc: "Low-density, high-efficiency grinding media engineered for the most demanding industrial conditions.",
    href: "/products/silicon-nitride-beads",
    objectPosition: "center",
    fit: "cover",
    zoom: true,
  },
  {
    img: "/images/alumina_ceramic_ball.jpg",
    alt: "Alumina ceramic balls",
    badge: "Alumina Ceramic Balls",
    title: ["High-hardness", "alumina balls."],
    desc: "Cost-effective 92% alumina grinding media offering excellent wear resistance and a low breakage rate.",
    href: "/products/alumina-ceramic-balls",
    objectPosition: "center",
    fit: "cover",
    zoom: true,
  },
  {
    // fit: "contain" — the whole image is always shown, no cropping on any
    // side. object-contain never crops; any leftover space is filled by the
    // section's dark background (bg-[#0c0c0c]) instead of cutting content.
    img: "/images/ceramic_part_wide.png",
    alt: "Precision ceramic parts",
    badge: "Ceramic Parts",
    title: ["Ceramics that", "outperform."],
    desc: "Precision-engineered zirconia and alumina components, machined to exacting tolerances for critical applications.",
    href: "/products#ceramic-parts",
    objectPosition: "center",
    fit: "contain",
    zoom: false,
  },
  {
    // fit: "contain" — same as above: full image always visible, top to
    // bottom, no cropping. zoom stays off too, since the kenburns scale
    // animation would push edges out of frame again.
    img: "/images/injection_molding_wide.png",
    alt: "Injection moulded ceramic components",
    badge: "CIM Components",
    title: ["Complex geometries.", "Mass produced."],
    desc: "Advanced ceramic injection moulding delivers intricate, high-volume parts with biocompatible, wear-resistant properties.",
    href: "/products#injection-molding",
    objectPosition: "center",
    fit: "contain",
    zoom: false,
  },
];

// Each offering now carries an `href` pointing to the matching product page
// (or a section anchor on /products) so the "Core offerings" cards are
// clickable and navigate to the right place.
const offerings = [
  {
    title: "Ceramic Grinding Media",
    subtitle: "Zirconia Beads",
    desc: "High-density, ultra-fine zirconia beads for precision milling and dispersion.",
    img: "/images/ceramics.jpg",
    href: "/products/zirconia-beads",
  },
  {
    title: "Ceramic Grinding Media",
    subtitle: "Silicon Nitride Beads",
    desc: "Low-density, high-efficiency grinding media for demanding conditions.",
    img: "/images/silicon_nitride.png",
    href: "/products/silicon-nitride-beads",
  },
  {
    title: "Ceramic Grinding Media",
    subtitle: "Alumina Ceramic Beads",
    desc: "High-hardness 92% alumina beads with excellent wear resistance and low breakage rate.",
    img: "/images/alumina_ceramic_ball.jpg",
    href: "/products/alumina-ceramic-beads",
  },
  {
    title: "Zirconia & Alumina Ceramic Parts",
    subtitle: "Ceramic Parts",
    desc: "Precision-engineered components across Zirconia and Alumina series.",
    img: "/images/ceramic_part.png",
    href: "/products#ceramic-parts",
  },
  {
    title: "Injection Molding Ceramic Parts",
    subtitle: "CIM Components",
    desc: "Complex, mass-producible ceramic geometries via advanced CIM technology.",
    img: "/images/injection_molding.png",
    href: "/products#injection-molding",
  },
];

const reasons = [
  { icon: <RiCheckLine size={18} />, text: "Custom Engineering Solutions" },
  { icon: <RiShieldCheckLine size={18} />, text: "ISO 9001:2015 Certified" },
  { icon: <RiFlaskLine size={18} />, text: "Strong R&D & Innovation Focus" },
  { icon: <RiGlobalLine size={18} />, text: "Global Industry Applications" },
];

// Note: images below are intentionally unchanged per client request — only labels/layout updated.
const industries = [
  { name: "Paint & Coating", img: "/images/paint_coating_new.jpg" },
  { name: "Semiconductors & Electronics", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&auto=format&fit=crop" },
  { name: "Medical & Biotech", img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80&auto=format&fit=crop" },
  { name: "Oil & Gas", img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80&auto=format&fit=crop" },
  { name: "Textile", img: "/images/textile.jpg" },
  { name: "Valve", img: "/images/valve.jpg" },
  { name: "Dental", img: "/images/dental_oral.jpg" },
];

function useAutoSlide(length: number, interval = 8000) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % length), interval);
    return () => clearInterval(t);
  }, [length, interval]);
  return [index, setIndex] as const;
}

export default function HomePage() {
  const [heroIndex, setHeroIndex] = useAutoSlide(heroSlides.length);
  const indScrollRef = useRef<HTMLDivElement>(null);

  const scrollIndustries = (dir: 1 | -1) => {
    const el = indScrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[88vh] min-h-[600px] flex items-center overflow-hidden bg-[#0c0c0c]">
        {heroSlides.map((s, i) => (
          <img
            key={s.img}
            src={s.img}
            alt={s.alt}
            style={{ objectPosition: s.objectPosition || "center" }}
            className={`absolute inset-0 w-full h-full ${s.fit === "contain" ? "object-contain" : "object-cover"} transition-opacity duration-1000 ${
              i === heroIndex ? `opacity-100 ${s.zoom ? "kenburns" : ""}` : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="relative w-full px-6 sm:px-10 lg:px-16 py-24">
          <div key={heroIndex} className="fade-up max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
              <span className="text-[13px] font-bold text-[#4ade80] uppercase tracking-widest">
                {heroSlides[heroIndex].badge}
              </span>
            </div>
            <h1 className="text-[44px] sm:text-[72px] lg:text-[84px] leading-[1.02] font-bold tracking-[-0.03em] text-white mb-6">
              {heroSlides[heroIndex].title[0]}<br />
              <span className="text-[#4ade80]">{heroSlides[heroIndex].title[1]}</span>
            </h1>
            <p className="text-[20px] sm:text-[22px] text-white/80 leading-relaxed max-w-2xl mb-10">
              {heroSlides[heroIndex].desc}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={heroSlides[heroIndex].href}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1d1d1f] text-[15px] font-medium rounded-full hover:bg-[#8c2442] hover:text-white transition-colors duration-200"
              >
                Explore Products <RiArrowRightLine size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white text-[15px] font-medium rounded-full hover:border-white hover:bg-white/10 transition-colors duration-200"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {heroSlides.map((s, i) => (
              <button
                key={s.img}
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setHeroIndex(i)}
                className={`h-1.5 rounded-full transition-all ${i === heroIndex ? "bg-white w-6" : "bg-white/40 w-1.5"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#86868b] mb-4">About Us</p>
            <h2 className="text-[36px] font-semibold tracking-tight text-[#1d1d1f] mb-5">
              Setting the standard in advanced ceramics.
            </h2>
            <p className="text-[17px] text-[#6e6e73] leading-relaxed mb-6">
              N Gandhi Advance Material Technology Pvt. Ltd. (NAMTPL), part of the N Gandhi Group, specialises in advanced technical ceramics — from high-density zirconia and silicon nitride grinding media to precision-engineered ceramic parts and injection-moulded components. Our products are trusted across battery materials, electronics, paints & coatings, pharmaceuticals, and mineral processing, delivering superior wear resistance, dimensional accuracy and consistent performance for the most demanding industrial applications.
            </p>
            <Link href="/about" className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#004428] hover:text-[#8c2442] transition-colors">
              Learn more <RiArrowRightLine size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Offerings — 3 on top row, 2 centered below */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.05]"
          style={{ backgroundImage: "url('/images/ceramics.jpg')" }}
        />
        <div className="relative max-w-[1200px] mx-auto px-6">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#86868b] mb-3">Products</p>
          <h2 className="text-[36px] font-semibold tracking-tight text-[#1d1d1f] mb-12">Core offerings.</h2>

          {/* Top row: first 3 offerings */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 max-w-[900px] mx-auto">
            {offerings.slice(0, 3).map((item) => (
              <Link
                href={item.href}
                key={item.subtitle}
                className="card-hover rounded-xl border border-[#e8e8ed] bg-[#fbfbfd] overflow-hidden block"
              >
                <div className="w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.subtitle}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#86868b] mb-1">{item.title}</p>
                  <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-1.5 tracking-tight">{item.subtitle}</h3>
                  <p className="text-[13px] text-[#6e6e73] leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom row: remaining 2 offerings, centered */}
          <div className="grid sm:grid-cols-2 gap-5 max-w-[600px] mx-auto">
            {offerings.slice(3, 5).map((item) => (
              <Link
                href={item.href}
                key={item.subtitle}
                className="card-hover rounded-xl border border-[#e8e8ed] bg-[#fbfbfd] overflow-hidden block"
              >
                <div className="w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.subtitle}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#86868b] mb-1">{item.title}</p>
                  <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-1.5 tracking-tight">{item.subtitle}</h3>
                  <p className="text-[13px] text-[#6e6e73] leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/products" className="inline-flex items-center gap-2 text-[14px] font-medium text-[#004428] hover:text-[#8c2442] transition-colors">
              View all products <RiArrowRightLine size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-[#f5f5f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-widest text-[#86868b] mb-3">Why Us</p>
              <h2 className="text-[36px] font-semibold tracking-tight text-[#1d1d1f] mb-8">
                Built on precision.<br />Backed by trust.
              </h2>
              <ul className="space-y-4">
                {reasons.map((r) => (
                  <li key={r.text} className="flex items-center gap-3">
                    <span className="text-[#004428]">{r.icon}</span>
                    <span className="text-[15px] text-[#1d1d1f]">{r.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/*
              NOTE: /images/why_us.jpg is an infographic with text labels
              anchored near every edge/corner ("Backed by trust", "Healthcare",
              "ISO 9001:2015 Certified", etc). object-cover would risk cropping
              those labels on any aspect-ratio mismatch, so this uses
              object-contain + a matching dark background instead — the full
              graphic is always visible.
            */}
            <div className="rounded-2xl overflow-hidden aspect-[4/3] card-hover bg-[#0b1220]">
              <img
                src="/images/why_us.jpg"
                alt="Precision ceramic manufacturing"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      {/* Industries */}
<section className="py-20 bg-white overflow-hidden">
  <div className="max-w-[1200px] mx-auto px-6 text-center mb-10">
    <p className="text-[12px] font-semibold uppercase tracking-widest text-[#86868b] mb-3">Industries</p>
    <h2 className="text-[36px] font-semibold tracking-tight text-[#1d1d1f]">Industries we serve.</h2>
  </div>

  <div className="relative w-full overflow-hidden">
    {/* fade edges so the marquee doesn't hard-cut at the section boundary */}
    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

    <div className="flex gap-4 w-max marquee-track">
      {[...industries, ...industries].map((ind, i) => (
        <div
          key={`${ind.name}-${i}`}
          className="card-hover group relative rounded-xl overflow-hidden aspect-[3/4] shrink-0 w-[220px] sm:w-[240px]"
        >
          <img
            src={ind.img}
            alt={ind.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent" />
          <p className="absolute bottom-3 left-3 right-3 text-white text-[13px] font-semibold">{ind.name}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="max-w-[1200px] mx-auto px-6 mt-8 text-center">
    <Link href="/industries" className="inline-flex items-center gap-2 text-[14px] font-medium text-[#004428] hover:text-[#8c2442] transition-colors">
      Explore industries <RiArrowRightLine size={14} />
    </Link>
  </div>

  <style jsx>{`
    .marquee-track {
      animation: marquee-scroll 32s linear infinite;
    }
    .marquee-track:hover {
      animation-play-state: paused;
    }
    @keyframes marquee-scroll {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }
  `}</style>
</section>

      {/* CTA */}
      <section className="py-20 bg-[#004428]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-12 items-center text-center">
            {/* Left — existing content */}
            <div>
              <h2 className="text-[40px] font-semibold tracking-tight text-white mb-4">
                Looking for the right ceramic solution?
              </h2>
              <p className="text-[17px] text-white/70 mb-8 max-w-md mx-auto">
                Talk to our team about your specific material and component requirements.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#004428] text-[15px] font-semibold rounded-full hover:bg-[#8c2442] hover:text-white transition-all duration-200 card-hover"
              >
                Contact Us <RiArrowRightLine size={16} />
              </Link>
            </div>

            {/* Middle — vertical divider (hidden on mobile) */}
            <div className="hidden md:block w-px h-32 bg-white/20 mx-auto" />

            {/* Right — View Catalogue */}
            <div>
              <h2 className="text-[40px] font-semibold tracking-tight text-white mb-4">
                Want to see everything we make?
              </h2>
              <p className="text-[17px] text-white/70 mb-8 max-w-md mx-auto">
                Download our full catalogue for detailed specifications on every product.
              </p>
              <Link
                href="/catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/50 text-white text-[15px] font-semibold rounded-full hover:bg-white hover:text-[#004428] transition-all duration-200 card-hover"
              >
                View Catalogue <RiArrowRightLine size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}