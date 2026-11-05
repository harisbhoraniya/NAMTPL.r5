import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

// NOTE: per feedback doc, industry descriptions and products lists below
// are pending review/confirmation with DNG — placeholders kept until finalized.
const industries = [
  {
    name: "Paint & Coating",
    img: "/images/paint_coating_new.jpg",
    desc: "Ceramic grinding media enables uniform pigment dispersion and improved product quality. Our Zirconia beads are optimized for the specific viscosities and abrasiveness of paint formulations.",
  },
  {
    name: "Semiconductors & Electronics",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop",
    desc: "High-purity ceramics for precision electronic applications. Our components meet stringent cleanliness, thermal stability, and dimensional requirements for semiconductor and electronic manufacturing.",
  },
  {
    name: "Medical & Biotech",
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80&auto=format&fit=crop",
    desc: "Biocompatible ceramic components for medical devices and healthcare applications, offering excellent strength, wear resistance, chemical stability, and compatibility with demanding environments.",
  },
  {
    name: "Oil & Gas",
    img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80&auto=format&fit=crop",
    desc: "Extreme wear and chemical resistance in harsh environments. Our ceramic components maintain dimensional stability under high pressure, temperature, and abrasive media.",
  },
  {
    name: "Textile",
    img: "/images/textile.jpg",
    desc: "Smooth, wear-resistant ceramic guides and eyelets for yarn and fiber processing. Low friction surfaces reduce fiber breakage and extend equipment life.",
  },
  {
    name: "Valves & Fluid Control",
    img: "/images/valve.jpg",
    desc: "Advanced technical ceramics provide excellent wear, corrosion, erosion, and chemical resistance for demanding valve and fluid-control applications. Precision ceramic components help maintain reliable sealing and dimensional stability in harsh operating conditions.",
  },
  {
    name: "Dental & Oral Care",
    img: "/images/dental_oral.jpg",
    desc: "High-performance zirconia ceramics are used in advanced dental applications due to their excellent strength, biocompatibility, wear resistance, and natural aesthetic appearance. Precision ceramic solutions support reliable and long-lasting dental restorations.",
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
              className={`card-hover rounded-2xl bg-white border border-[#e8e8ed] overflow-hidden grid lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={`aspect-[16/9] overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img src={ind.img} alt={ind.name} className="w-full h-full object-cover" />
              </div>
              <div className={`p-8 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h2 className="text-[26px] font-semibold text-[#1d1d1f] tracking-tight mb-3">{ind.name}</h2>
                <p className="text-[15px] text-[#6e6e73] leading-relaxed">{ind.desc}</p>
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