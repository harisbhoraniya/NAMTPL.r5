"use client";

import { useState } from "react";
import Link from "next/link";
import { RiArrowRightLine, RiArrowDownSLine } from "react-icons/ri";
import ImageSlider from "@/components/ImageSlider";

// ─── DATA ────────────────────────────────────────────────────────────────────

const grindingMedia = [
  {
    id: "01",
    slug: "zirconia-beads",
    name: "Zirconia Beads",
    subtitle: "ZR95 Series",
    description:
      "Ultra-fine crystallite structure, high density, uniform particle size and smooth surface, with good wear resistance and high strength.",
    particleSizes: [
      { label: "ZR95 Nano Zirconia Beads", range: "0.05mm- 2.00mm" },
      { label: "ZR95 High-purity Zirconia Beads", range: "0.30mm- 5.00mm" },
    ],
    apps: [
      "Lithium iron phosphate battery materials",
      "Silicon electrode materials",
      "Electronic & magnetic materials",
      "Carbon nanotubes & graphite",
      "Paints, inks & coatings",
      "Food, medical care & cosmetics",
    ],
    img: "/images/ceramics.jpg",
    accent: "#c8a96e",
  },
  {
    id: "02",
    slug: "silicon-nitride-beads",
    name: "Silicon Nitride Beads",
    subtitle: "Ultra-Wear-Resistant Series",
    description:
      "High-end grinding media with low density, low wear and high efficiency — a premium, cost-effective alternative to zirconia beads.",
    particleSizes: [
      { label: "Ultra-wear-resistant Silicon Nitride Beads", range: "0.10mm- 3.00mm" },
    ],
    apps: [
      "Silicon nitride powder & raw materials",
      "High-purity materials",
      "New energy & photovoltaic materials",
      "Biomedicine",
      "Semiconductors & electronic materials",
    ],
    img: "/images/silicon_nitride.png",
    accent: "#6e8fa8",
  },
  {
    id: "03",
    slug: "alumina-ceramic-beads",
    name: "Alumina Ceramic Beads",
    subtitle: "92% Alumina Series",
    description:
      "Manufactured from premium 92% alumina raw materials with high hardness, excellent wear resistance and a low breakage rate.",
    particleSizes: [
      { label: "92% Alumina Ceramic Beads", range: "1.00mm- 100.00mm" },
    ],
    apps: [
      "Ceramic & porcelain industries",
      "Ball mills & attrition mills",
      "Mining & mineral processing",
      "Paints, inks & pigments",
      "Cement & building materials",
      "Chemical processing",
    ],
    img: "/images/alumina_ceramic_ball.jpg",
    accent: "#d9d3c4",
  },
];

const ceramicParts = [
  {
    series: "A-ZR (Y8 Series)",
    slug: "a-zr-y8-series",
    color: "#d4c49a",
    img: "/images/ceramic-parts-a-zr-y8-series.jpg",
    description:
      "The Y8 series is a composite stabilized zirconia ceramic material independently developed by us. ",
    products: ["Valve cores", "Plungers", "Classification wheels", "Agitation rods", "etc."],
  },
  {
    series: "Y-ZR (3Y Series)",
    slug: "y-zr-3y-series",
    color: "#ffffff",
    img: "/images/ceramic-parts-y-zr-3y-series.jpg",
    description:
      "The 3Y series is yttrium stable zirconia part.",
    products: ["Zirconia ceramic accessories for bead mills", "Ball milling jars", "Turbines", "Nozzles", "etc."],
  },
  {
    series: "PR-ZR (Yellow Zirconia Series)",
    slug: "pr-zr-yellow-zirconia-series",
    color: "#e8b84b",
    img: "/images/ceramic-parts-pr-zr-yellow-series.jpg",
    description:
      "The yellow zirconia series is yellow yttrium stable zirconia part.",
    products: ["Valve cores", "Capstans", "Bushings", "Wire drawing drums", "etc."],
  },
  {
    series: "Alumina Ceramic Series",
    slug: "alumina-ceramic-series",
    color: "#f0e8d8",
    img: "/images/ceramic-parts-alumina-series.jpg",
    description:
      "Alumina ceramic series products include 95 alumina and 99 alumina ceramic parts.",
    products: ["Electronic substrates", "Mechanical seals", "Medical plungers", "Corrosion-resistant piping & valves", "etc."],
  },
];

// Extra standalone slide(s) appended to the series slider below (not tied to
// a single series card — e.g. a group/assortment shot). Add more objects
// here for further slides.
const extraCeramicPartsSlides = [
  {
    img: "/images/ceramic-parts-assorted.png",
    label: "Assorted Ceramic Parts",
  },
  {
    img: "/images/ceramic-parts-valve-exploded.jpg",
    label: "Ball Valve — Exploded View",
  },
];

// Additional gallery of individual ceramic part photos — rendered in its own
// slider below the series slider. Edit labels as needed.
const moreCeramicPartsSlides = [
  { img: "/images/ceramic-parts-tube.jpg", label: "Ceramic Tube" },
  { img: "/images/ceramic-parts-bracket.jpg", label: "Bracket Component" },
  { img: "/images/ceramic-parts-bushings.jpg", label: "Cylindrical Bushings" },
  { img: "/images/ceramic-parts-nozzle.jpg", label: "Nozzle / Spray Cone" },
  { img: "/images/ceramic-parts-housing-set.jpg", label: "Valve Housing & Fittings" },
  { img: "/images/ceramic-parts-ball-cores-1.jpg", label: "Ball Valve Cores" },
  { img: "/images/ceramic-parts-ball-cores-2.jpg", label: "Ball Valve Cores — Set" },
  { img: "/images/ceramic-parts-ball-cores-black.jpg", label: "Ball Valve Cores — Studio" },
  { img: "/images/ceramic-parts-yellow-sleeve.jpg", label: "Yellow Wear Sleeve" },
  { img: "/images/ceramic-parts-yellow-rings.jpg", label: "Yellow Ceramic Rings" },
  { img: "/images/ceramic-parts-turbine.jpg", label: "Turbine Impeller" },
  { img: "/images/ceramic-parts-steel-sleeves.jpg", label: "Steel-Sleeved Ceramic Liners" },
  { img: "/images/ceramic-parts-shafts.jpg", label: "Ceramic-Coated Shafts" },
  { img: "/images/ceramic-parts-crucibles.jpg", label: "Ceramic Crucibles with Lids" },
  { img: "/images/ceramic-parts-flat-blade.jpg", label: "Flat Ceramic Blade" },
  { img: "/images/ceramic-parts-curved-brackets.jpg", label: "Curved Ceramic Brackets" },
];

// Technical parameters — catalogue page 06 comparison table.
// Shared across A-ZR, Y-ZR and PR-ZR (Alumina has no published values here).
const technicalParamsRows = [
  { label: "Zirconium Dioxide (Hf) Content", standard: "GB/T 21114-2019", values: ["89±0.5%", "94.5±0.5%", "94±0.5%"] },
  { label: "Density (g/cm³)", standard: "GB/T 25995-2010", values: ["≥5.9", "≥6.0", "≥6.0"] },
  { label: "Water absorption (%)", standard: "GB/T 3299-2011", values: ["<0.05", "<0.05", "<0.05"] },
  { label: "Thermal conductivity (20°C)", standard: "ASTME 1269 / ASTME 1461", values: ["3±0.5", "3±0.5", "3±0.5"] },
  { label: "Thermal expansivity (40-400°C)", standard: "GB/T 16535-2008", values: ["11±0.2", "11±0.2", "11±0.2"] },
  { label: "Vickers Hardness (HV)", standard: "GB/T 16534-2009", values: ["≥1200", "≥1200", "≥1200"] },
  { label: "Bending Strength (MPa)", standard: "GB/T 6569-2006", values: ["≥950", "≥900", "≥850"] },
  { label: "Fracture Toughness (MPa.m)", standard: "JISR 1607-2010", values: ["≥11", "≥10", "≥8"] },
  { label: "Impact toughness (KJ/m²)", standard: "GB/T 14389-1993", values: ["≥20", "≥20", "≥20"] },
  { label: "Compressive strength (MPa)", standard: "GB/T 8489-2006", values: ["≥2800", "≥2800", "≥2800"] },
  { label: "Modulus Of Elasticity (GPa)", standard: "GB/T 10700-2006", values: ["≥210", "≥200", "≥200"] },
];

const cimAdvantages = [
  {
    title: "High Design Freedom",
    body: "Internal threads, inverted buckles, small apertures and complex 3-D shapes achievable in a single process.",
  },
  {
    title: "Precision Tolerances",
    body: "Dimensional tolerance accuracy of ±0.5 %; higher accuracy achievable with secondary processing.",
  },
  {
    title: "Excellent Material Properties",
    body: "High density, high strength, high fracture toughness and high hardness — inherent to the ceramic material.",
  },
  {
    title: "Mass Production Ready",
    body: "CIM enables consistent, high-volume output of small, advanced ceramic components at competitive cost.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  const [showCeramicPartsDetails, setShowCeramicPartsDetails] = useState(false);

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="bg-white pt-16 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#86868b] mb-4">
            Product Range
          </p>
          <h1 className="text-[52px] font-semibold tracking-[-0.04em] text-[#1d1d1f] leading-[1.05] mb-6 max-w-2xl">
            Engineered for performance.
          </h1>
          <p className="text-[19px] text-[#6e6e73] max-w-2xl leading-relaxed">
            N Gandhi Advance Material Technology Pvt. Ltd. (NAMTPL) delivers advanced ceramic grinding
            media, precision-moulded parts and injection-moulded components — empowering industries
            with cleaner, smarter and more sustainable solutions.
          </p>
        </div>
      </section>

      {/* ── Grinding Media ─────────────────────────────────────────────────── */}
      <section id="grinding-media" className="bg-[#f5f5f7] py-20 scroll-mt-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-semibold tracking-tight text-[#1d1d1f] mb-10">
            Ceramic Grinding Media
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {grindingMedia.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl bg-white border border-[#e8e8ed] overflow-hidden flex flex-col card-hover h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-7 flex flex-col gap-6 flex-1">
                  <div className="h-[110px] sm:h-[95px]">
                    <h3 className="text-[22px] font-semibold text-[#1d1d1f] tracking-tight">
                      {product.name}
                    </h3>
                    <p className="text-[14px] text-[#6e6e73] leading-relaxed mt-3">
                      {product.description}
                    </p>
                  </div>

                  {/* Particle sizes */}
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-[#86868b] mb-3">
                      Particle Size
                    </p>
                    <div className="flex flex-col gap-2 min-h-[100px]">
                      {product.particleSizes.map((ps) => (
                        <div
                          key={ps.label}
                          className="flex items-center justify-between gap-3 bg-[#f5f5f7] rounded-lg px-4 py-2.5 overflow-hidden"
                        >
                          <span className="text-[13px] text-[#1d1d1f] font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                            {ps.label}
                          </span>
                          <span
                            className="text-[13px] font-semibold shrink-0 whitespace-nowrap"
                            style={{ color: "#004428" }}
                          >
                            {ps.range}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* View details */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1d1d1f] text-white text-[13px] font-medium rounded-full hover:bg-[#8c2442] transition-colors"
                  >
                    View Details <RiArrowRightLine size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ceramic Parts ──────────────────────────────────────────────────── */}
      <section id="ceramic-parts" className="bg-white py-20 scroll-mt-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-semibold tracking-tight text-[#1d1d1f] mb-3">
            Ceramic Parts
          </h2>
          <p className="text-[16px] text-[#6e6e73] max-w-xl leading-relaxed mb-8">
            Precision ceramic components across Zirconia and Alumina material families — each
            engineered for specific performance requirements.
          </p>

          {/* Section image slider — one slide per series, plus any extra standalone slides */}
          <ImageSlider
            slides={[
              ...ceramicParts.map((p) => ({ img: p.img, label: p.series })),
              ...extraCeramicPartsSlides,
              ...moreCeramicPartsSlides,
            ]}
          />

          {/* 4 cards — no per-card button anymore */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ceramicParts.map((p) => (
              <div
                key={p.series}
                className="rounded-2xl border border-[#e8e8ed] bg-[#fbfbfd] p-6 flex flex-col gap-4 card-hover"
              >
                {/* Color swatch */}
                <div className="flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded-full border border-[#e8e8ed] shrink-0"
                    style={{ background: p.color }}
                  />
                  <h3 className="text-[14px] font-semibold text-[#1d1d1f] leading-tight">
                    {p.series}
                  </h3>
                </div>
                <p className="text-[12px] text-[#6e6e73] leading-relaxed">{p.description}</p>
                <div className="mt-auto">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#86868b] mb-2">
                    Representative Products
                  </p>
                  <ul className="flex flex-col gap-1">
                    {p.products.map((prod) => (
                      <li
                        key={prod}
                        className="text-[12px] text-[#6e6e73] flex items-start gap-1.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#004428] mt-1.5 shrink-0" />
                        {prod}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Single shared "View Details" button below all 4 cards */}
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowCeramicPartsDetails((v) => !v)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1d1d1f] text-white text-[14px] font-medium rounded-full hover:bg-[#8c2442] transition-colors"
            >
              View Details
              <RiArrowDownSLine
                size={16}
                className={`transition-transform ${showCeramicPartsDetails ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {/* Shared technical parameters comparison table */}
          {showCeramicPartsDetails && (
            <div className="mt-8 rounded-2xl border border-[#e8e8ed] bg-[#fbfbfd] p-6 overflow-x-auto">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#86868b] mb-5">
                Technical Parameters Of Zirconia Ceramic Parts
              </p>
              <table className="w-full text-left border-collapse min-w-[720px]">
                <thead>
                  <tr>
                    <th className="bg-[#004428] text-white text-[12px] font-semibold px-4 py-3 whitespace-nowrap">
                      Detection Indicator
                    </th>
                    <th className="bg-[#004428] text-white text-[12px] font-semibold px-4 py-3 whitespace-nowrap">
                      A-ZR (Y8 series)
                    </th>
                    <th className="bg-[#004428] text-white text-[12px] font-semibold px-4 py-3 whitespace-nowrap">
                      Y-ZR (3Y series)
                    </th>
                    <th className="bg-[#004428] text-white text-[12px] font-semibold px-4 py-3 whitespace-nowrap">
                      PR-ZR (Yellow zirconia)
                    </th>
                    <th className="bg-[#004428] text-white text-[12px] font-semibold px-4 py-3 whitespace-nowrap">
                      Detection Standard
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {technicalParamsRows.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-[#f5f5f7]"}>
                      <td className="text-[13px] font-medium text-[#1d1d1f] px-4 py-2.5 border-t border-[#e8e8ed] whitespace-nowrap">
                        {row.label}
                      </td>
                      {row.values.map((v, j) => (
                        <td
                          key={j}
                          className="text-[13px] font-semibold px-4 py-2.5 border-t border-[#e8e8ed] whitespace-nowrap"
                          style={{ color: "#004428" }}
                        >
                          {v}
                        </td>
                      ))}
                      <td className="text-[12px] text-[#86868b] px-4 py-2.5 border-t border-[#e8e8ed] whitespace-nowrap">
                        {row.standard}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-[12px] text-[#86868b] mt-4">
                Alumina Ceramic Series specifications are available on request — please contact our
                engineering team for detailed data.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Injection Molding ─────────────────────────────────────────────── */}
      <section id="injection-molding" className="bg-[#f5f5f7] py-20 scroll-mt-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-semibold tracking-tight text-[#1d1d1f] mb-3">
            Injection Molding Ceramic Parts
          </h2>
          <p className="text-[16px] text-[#6e6e73] max-w-2xl leading-relaxed mb-12">
            Using the advanced Ceramic Injection Molding (CIM) process, we mass-produce small,
            precise, and complex three-dimensional ceramic products. Custom parts available in
            different materials, colours and properties — with biocompatibility, good wear resistance,
            high strength and rich colour options.
          </p>

          {/* 2-col layout: image + advantages */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] card-hover">
              <img
                src="/images/injection_molding.png"
                alt="CIM ceramic parts"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#86868b]">
                Technological Advantages
              </p>
              {cimAdvantages.map((adv) => (
                <div
                  key={adv.title}
                  className="rounded-xl bg-white border border-[#e8e8ed] px-5 py-4 card-hover"
                >
                  <p className="text-[14px] font-semibold text-[#1d1d1f] mb-1">{adv.title}</p>
                  <p className="text-[13px] text-[#6e6e73] leading-relaxed">{adv.body}</p>
                </div>
              ))}

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1d1d1f] text-white rounded-full text-[14px] font-medium hover:bg-[#8c2442] transition-colors card-hover"
                >
                  Request a Quote <RiArrowRightLine size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-[#e8e8ed]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-10 items-center text-center">
            {/* Left — existing content */}
            <div>
              <h3 className="text-[28px] font-semibold text-[#1d1d1f] mb-3">
                Need custom specifications?
              </h3>
              <p className="text-[16px] text-[#6e6e73] mb-6">
                Our engineering team can develop ceramic components tailored to your exact material,
                geometry and performance requirements.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1d1d1f] text-white rounded-full text-[14px] font-medium hover:bg-[#8c2442] transition-colors card-hover"
              >
                Request a Quote <RiArrowRightLine size={14} />
              </Link>
            </div>

            {/* Middle — vertical divider (hidden on mobile) */}
            <div className="hidden md:block w-px h-32 bg-[#e8e8ed] mx-auto" />

            {/* Right — View Catalogue */}
            <div>
              <h3 className="text-[28px] font-semibold text-[#1d1d1f] mb-3">
                Explore our full catalogue
              </h3>
              <p className="text-[16px] text-[#6e6e73] mb-6">
                Browse our complete range of grinding media, ceramic parts and CIM components
                with detailed specifications.
              </p>
              <Link
                href="/catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1d1d1f] border border-[#1d1d1f] rounded-full text-[14px] font-medium hover:bg-[#1d1d1f] hover:text-white transition-colors card-hover"
              >
                View Catalogue <RiArrowRightLine size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}