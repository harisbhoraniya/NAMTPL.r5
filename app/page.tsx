import Link from "next/link";
import { RiArrowRightLine, RiCheckLine, RiShieldCheckLine, RiFlaskLine, RiGlobalLine, RiRecycleLine } from "react-icons/ri";

const offerings = [
  { title: "Ceramic Grinding Media", desc: "Zirconia & Silicon Nitride beads for precision milling." },
  { title: "Injection Molded Parts", desc: "Complex ceramic geometries via advanced CIM technology." },
  { title: "Zirconia & Alumina Parts", desc: "High-performance technical ceramic components." },
  { title: "Custom Ceramics", desc: "Engineered solutions tailored to your specifications." },
];

const reasons = [
  { icon: <RiRecycleLine size={18} />, text: "Zirconia Bead Buyback Program" },
  { icon: <RiCheckLine size={18} />, text: "Custom Engineering Solutions" },
  { icon: <RiShieldCheckLine size={18} />, text: "ISO 9001:2015 Certified" },
  { icon: <RiFlaskLine size={18} />, text: "Strong R&D & Innovation Focus" },
  { icon: <RiGlobalLine size={18} />, text: "Global Industry Applications" },
];

const industries = [
  { name: "Paint & Coatings", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop" },
  { name: "Semiconductors", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&auto=format&fit=crop" },
  { name: "Medical & Biotech", img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80&auto=format&fit=crop" },
  { name: "Oil & Gas", img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80&auto=format&fit=crop" },
  { name: "Textile", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
          style={{ backgroundImage: "url('/images/ceramics.jpg')" }}
        />
        <div className="relative max-w-[1200px] mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f5f7] border border-[#e8e8ed] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#004428]" />
              <span className="text-[12px] font-medium text-[#6e6e73] uppercase tracking-wider">Advanced Material Technology</span>
            </div>
            <h1 className="text-[56px] leading-[1.05] font-semibold tracking-[-0.04em] text-[#1d1d1f] mb-6">
              Ceramics that<br />
              <span className="text-[#004428]">outperform.</span>
            </h1>
            <p className="text-[19px] text-[#6e6e73] leading-relaxed max-w-md mb-10">
              Precision-engineered ceramic solutions designed for durability, efficiency, and innovation across demanding industries.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1d1d1f] text-white text-[15px] font-medium rounded-full hover:bg-[#8c2442] transition-colors duration-200"
              >
                Explore Products <RiArrowRightLine size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#d2d2d7] text-[#1d1d1f] text-[15px] font-medium rounded-full hover:border-[#8c2442] hover:text-[#8c2442] transition-colors duration-200"
              >
                Get a Quote
              </Link>
            </div>
          </div>
          <div className="hidden lg:block fade-up delay-2">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] card-hover">
              <img
                src="/images/ceramics.jpg"
                alt="Advanced ceramics"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[rgba(0,68,40,0.15)]" />
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#86868b] mb-4">About Us</p>
            <h2 className="text-[36px] font-semibold tracking-tight text-[#1d1d1f] mb-5">
              Engineering excellence in advanced ceramics.
            </h2>
            <p className="text-[17px] text-[#6e6e73] leading-relaxed mb-6">
              Part of N Gandhi Enterprises, we specialize in advanced ceramic materials and components that power next-generation industries. Backed by decades of expertise in precision engineering and materials science.
            </p>
            <Link href="/about" className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#004428] hover:text-[#8c2442] transition-colors">
              Learn more <RiArrowRightLine size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#86868b] mb-3">Products</p>
          <h2 className="text-[36px] font-semibold tracking-tight text-[#1d1d1f] mb-12">Core offerings.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {offerings.map((item) => (
              <div key={item.title} className="card-hover p-6 rounded-2xl border border-[#e8e8ed] bg-[#fbfbfd]">
                <div className="w-8 h-8 rounded-lg bg-[#004428]/10 mb-4 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#004428]" />
                </div>
                <h3 className="text-[16px] font-semibold text-[#1d1d1f] mb-2 tracking-tight">{item.title}</h3>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">{item.desc}</p>
              </div>
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
            <div className="rounded-2xl overflow-hidden aspect-[4/3] card-hover">
              <img
                src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=900&q=80&auto=format&fit=crop"
                alt="Quality ceramics"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#86868b] mb-3">Industries</p>
          <h2 className="text-[36px] font-semibold tracking-tight text-[#1d1d1f] mb-10">Industries we serve.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((ind) => (
              <div key={ind.name} className="card-hover group relative rounded-xl overflow-hidden aspect-[3/4]">
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
          <div className="mt-8 text-center">
            <Link href="/industries" className="inline-flex items-center gap-2 text-[14px] font-medium text-[#004428] hover:text-[#8c2442] transition-colors">
              Explore industries <RiArrowRightLine size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#004428]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[40px] font-semibold tracking-tight text-white mb-4">
            Ready to engineer better?
          </h2>
          <p className="text-[17px] text-white/70 mb-8 max-w-md mx-auto">
            Talk to our team about your specific ceramic requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#004428] text-[15px] font-semibold rounded-full hover:bg-[#8c2442] hover:text-white transition-all duration-200 card-hover"
          >
            Contact Us <RiArrowRightLine size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
