import Link from "next/link";
import { RiArrowRightLine, RiRecycleLine, RiLeafLine, RiSunLine, RiDropLine } from "react-icons/ri";

const initiatives = [
  {
    icon: <RiRecycleLine size={22} />,
    title: "Zirconia Bead Buyback",
    desc: "We buy back used Zirconia beads from customers, recovering and reprocessing material to reduce waste and lower lifecycle costs.",
  },
  {
    icon: <RiLeafLine size={22} />,
    title: "Eco-Friendly Materials",
    desc: "Advanced ceramics are inherently durable — longer product life means fewer replacements and less material consumption over time.",
  },
  {
    icon: <RiSunLine size={22} />,
    title: "Energy-Efficient Processes",
    desc: "Our manufacturing processes are optimized to minimize energy consumption while maintaining the highest quality standards.",
  },
  {
    icon: <RiDropLine size={22} />,
    title: "Reduced Industrial Waste",
    desc: "Precision manufacturing and tight quality controls minimize scrap and waste across our production operations.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#86868b] mb-4">Sustainability</p>
          <h1 className="text-[52px] font-semibold tracking-[-0.04em] text-[#1d1d1f] leading-[1.05] mb-6 max-w-2xl">
            Built for the long term.
          </h1>
          <p className="text-[19px] text-[#6e6e73] max-w-xl leading-relaxed">
            Sustainability is at the core of our innovation. From material recovery to energy-efficient manufacturing, we design with the future in mind.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f5f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="rounded-2xl overflow-hidden aspect-[21/7] card-hover">
            <img
              src="/images/sustainability.png"
              alt="Sustainability"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#86868b] mb-3">Initiatives</p>
          <h2 className="text-[32px] font-semibold tracking-tight text-[#1d1d1f] mb-10">Our commitments.</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {initiatives.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white border border-[#e8e8ed] card-hover">
                <div className="text-[#004428] mb-4">{item.icon}</div>
                <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyback Highlight */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#004428]/8 border border-[#004428]/20 mb-6 card-hover">
                <RiRecycleLine className="text-[#004428]" size={18} />
                <span className="text-[13px] font-semibold text-[#004428]">Buyback Program</span>
              </div>
              <h2 className="text-[32px] font-semibold tracking-tight text-[#1d1d1f] mb-5">
                We buy back your used Zirconia beads.
              </h2>
              <p className="text-[15px] text-[#6e6e73] leading-relaxed mb-5">
                When Zirconia grinding beads reach the end of their service life, don&apos;t discard them — return them to us. We recover, reprocess, and reintroduce the material into our production cycle.
              </p>
              <p className="text-[15px] text-[#6e6e73] leading-relaxed mb-8">
                This buyback program reduces your waste disposal costs, recovers material value, and supports a circular economy in advanced ceramics manufacturing.
              </p>
              <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#004428] rounded-full text-[14px] font-semibold hover:bg-[#8c2442] hover:text-white transition-all duration-200 card-hover">
                Learn more about the buyback program <RiArrowRightLine size={14} />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] card-hover">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop"
                alt="Recycling ceramics"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Green Tech */}
      <section className="bg-[#004428] py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[36px] font-semibold text-white tracking-tight mb-4">
            Supporting green technologies.
          </h2>
          <p className="text-[17px] text-white/70 max-w-lg mx-auto mb-8">
            Our Zirconia beads are used in lithium battery material processing — a core component of the clean energy transition.
          </p>
          <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#004428] rounded-full text-[14px] font-semibold hover:bg-[#8c2442] hover:text-white transition-all duration-200 card-hover">
            Explore Products <RiArrowRightLine size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
