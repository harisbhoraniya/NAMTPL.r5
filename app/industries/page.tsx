import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

const industries = [
  {
    name: "Paint & Coatings",
    img: "/images/paint.png",
    desc: "Ceramic grinding media enables uniform pigment dispersion and improved product quality. Our Zirconia beads are optimized for the specific viscosities and abrasiveness of paint formulations.",
    products: ["Zirconia Beads (Y-ZR Series)", "Silicon Nitride Beads"],
  },
  {
    name: "Semiconductors & Electronics",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop",
    desc: "High-purity ceramics for precision electronic applications. Our components meet the stringent cleanliness and dimensional requirements of semiconductor manufacturing environments.",
    products: ["Alumina Substrates (99%)", "Zirconia Precision Parts", "CIM Components"],
  },
  {
    name: "Medical & Healthcare",
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80&auto=format&fit=crop",
    desc: "Biocompatible ceramic components for medical devices. Our materials meet stringent biocompatibility standards for implantable and contact applications.",
    products: ["Biocompatible Zirconia", "Alumina Medical Parts", "CIM Medical Components"],
  },
  {
    name: "Oil & Gas",
    img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80&auto=format&fit=crop",
    desc: "Extreme wear and chemical resistance in harsh environments. Our ceramic components maintain dimensional stability under high pressure, temperature, and abrasive media.",
    products: ["Valve Cores & Seats", "Plungers & Nozzles", "Wear-Resistant Components"],
  },
  {
    name: "Textile",
    img: "/images/textile.jpg",
    desc: "Smooth, wear-resistant ceramic guides and eyelets for yarn and fiber processing. Low friction surfaces reduce fiber breakage and extend equipment life.",
    products: ["Ceramic Thread Guides", "Wear Parts", "Custom Textile Components"],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#86868b] mb-4">Industries</p>
          <h1 className="text-[52px] font-semibold tracking-[-0.04em] text-[#1d1d1f] leading-[1.05] mb-6 max-w-2xl">
            Where performance matters.
          </h1>
          <p className="text-[19px] text-[#6e6e73] max-w-xl leading-relaxed">
            Our ceramic solutions serve industries where materials are pushed to their limits.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1200px] mx-auto px-6 space-y-6">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className={`card-hover rounded-2xl bg-white border border-[#e8e8ed] overflow-hidden grid lg:grid-cols-2 ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
            >
              <div className={`aspect-[16/9] lg:aspect-auto overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img src={ind.img} alt={ind.name} className="w-full h-full object-cover" />
              </div>
              <div className={`p-8 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#004428] mb-2">
                  Industry {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-[26px] font-semibold text-[#1d1d1f] tracking-tight mb-3">{ind.name}</h2>
                <p className="text-[15px] text-[#6e6e73] leading-relaxed mb-5">{ind.desc}</p>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-[#86868b] mb-2">Relevant Products</p>
                  <ul className="space-y-1">
                    {ind.products.map((p) => (
                      <li key={p} className="text-[13px] text-[#6e6e73] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#004428] shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white border-t border-[#e8e8ed]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h3 className="text-[28px] font-semibold text-[#1d1d1f] mb-3">Don&apos;t see your industry?</h3>
          <p className="text-[16px] text-[#6e6e73] mb-6">
            We develop custom ceramic solutions for unique application requirements.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1d1d1f] text-white rounded-full text-[14px] font-medium hover:bg-[#8c2442] transition-colors card-hover">
            Talk to Us <RiArrowRightLine size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
