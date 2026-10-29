import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

// ─── DATA ────────────────────────────────────────────────────────────────────

const grindingMedia = [
  {
    id: "01",
    name: "Zirconia Beads",
    subtitle: "ZR95 Series",
    description:
      "Ultra-fine crystallite structure, high density, uniform particle size and smooth surface. Non-standard grinding media can be customised according to customer requirements with good wear resistance and high strength, effectively reducing grinding process cost.",
    particleSizes: [
      { label: "ZR95 Nano Zirconia Beads", range: "Φ0.05 – Φ2.0 mm" },
      { label: "ZR95 High-purity Zirconia Beads", range: "Φ0.3 – Φ5.0 mm" },
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
    name: "Silicon Nitride Beads",
    subtitle: "Ultra-Wear-Resistant Series",
    description:
      "High-end grinding media with low density, low wear and high efficiency. Applicable across a wider range of grinding conditions with excellent cost performance — a premium alternative to zirconia beads.",
    particleSizes: [
      { label: "Ultra-wear-resistant Silicon Nitride Beads", range: "Φ0.1 – Φ3.0 mm" },
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
];

const ceramicParts = [
  {
    series: "A-ZR (Y8 Series)",
    color: "#d4c49a",
    description:
      "A composite stabilised zirconia ceramic material independently developed by NAMTPL. With superior performance, it is more suitable for ceramic accessories used in dry grinding processes.",
    products: ["Valve cores", "Plungers", "Classification wheels", "Agitation rods", "Wear liners"],
  },
  {
    series: "Y-ZR (3Y Series)",
    color: "#ffffff",
    description:
      "Yttrium-stabilised zirconia parts offering outstanding toughness and dimensional accuracy for precision grinding and milling applications.",
    products: ["Bead mill accessories", "Ball milling jars", "Turbines", "Nozzles", "Molds", "Cutting tools", "Shafts"],
  },
  {
    series: "PR-ZR (Yellow Zirconia Series)",
    color: "#e8b84b",
    description:
      "Yellow yttrium-stabilised zirconia — combining the toughness of 3Y-TZP with distinctive colour coding for easy part identification.",
    products: ["Valve cores", "Capstans", "Wire drawing drums"],
  },
  {
    series: "Alumina Ceramic Series",
    color: "#f0e8d8",
    description:
      "Products include 95 alumina and 99 alumina ceramic parts, offering excellent chemical resistance and electrical insulation properties.",
    products: ["Electronic substrates", "Mechanical seals", "Medical plungers", "Corrosion-resistant piping & valves"],
  },
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

      {/* ── Category 01 & 02 — Grinding Media ─────────────────────────────── */}
      <section className="bg-[#f5f5f7] py-20 ">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#86868b] mb-2">
            Category 01 &amp; 02
          </p>
          <h2 className="text-[32px] font-semibold tracking-tight text-[#1d1d1f] mb-10">
            Ceramic Grinding Media
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 ">
            {grindingMedia.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl bg-white border border-[#e8e8ed] overflow-hidden flex flex-col card-hover"
              >
                {/* Number badge */}
                <div className="relative aspect-[16/7] overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <span
                    className="absolute top-4 left-4 text-[48px] font-bold leading-none opacity-90"
                    style={{ color: product.accent }}
                  >
                    {product.id}
                  </span>
                </div>

                <div className="p-7 flex flex-col gap-6 flex-1 ">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-[#86868b] mb-1">
                      {product.subtitle}
                    </p>
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
                    <div className="flex flex-col gap-2">
                      {product.particleSizes.map((ps) => (
                        <div
                          key={ps.label}
                          className="flex items-center justify-between bg-[#f5f5f7] rounded-lg px-4 py-2.5"
                        >
                          <span className="text-[13px] text-[#1d1d1f] font-medium">{ps.label}</span>
                          <span
                            className="text-[13px] font-semibold ml-4 shrink-0"
                            style={{ color: "#004428" }}
                          >
                            {ps.range}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-[#86868b] mb-3">
                      Applications
                    </p>
                    <ul className="grid grid-cols-1 gap-1.5">
                      {product.apps.map((a) => (
                        <li
                          key={a}
                          className="text-[13px] text-[#6e6e73] flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#004428] mt-1.5 shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category 03 — Ceramic Parts ────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#86868b] mb-2">
            Category 03
          </p>
          <h2 className="text-[32px] font-semibold tracking-tight text-[#1d1d1f] mb-3">
            Ceramic Parts
          </h2>
          <p className="text-[16px] text-[#6e6e73] max-w-xl leading-relaxed mb-8">
            Precision ceramic components across Zirconia and Alumina material families — each
            engineered for specific performance requirements.
          </p>

          {/* Section image */}
          <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/9] card-hover">
            <img
              src="/images/ceramic_part.png"
              alt="NAMTPL Ceramic Parts — full product range"
              className="w-full h-full object-cover object-top "
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
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
        </div>
      </section>

      {/* ── Category 04 — Injection Molding ────────────────────────────────── */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#86868b] mb-2">
            Category 04
          </p>
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

              <div className="">
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
        <div className="max-w-[1200px] mx-auto px-6 text-center">
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
      </section>
    </>
  );
}