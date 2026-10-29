import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

const advantages = [
  { title: "Complex 3D Geometries", desc: "Produce intricate shapes impossible with traditional machining — undercuts, internal channels, and micro features." },
  { title: "High Dimensional Accuracy", desc: "Tolerance of ±0.5% ensures consistent, repeatable parts across large production runs." },
  { title: "Mass Production", desc: "Scalable from prototype to high-volume production without compromising quality." },
  { title: "Superior Mechanical Properties", desc: "High density, hardness, and wear resistance inherent to the CIM process." },
];

const materialBenefits = [
  { label: "Density", value: "≥ 6.0 g/cm³ (Zirconia)" },
  { label: "Hardness", value: "1200+ HV" },
  { label: "Wear Resistance", value: "Exceptional" },
  { label: "Biocompatibility", value: "Certified" },
  { label: "Tolerance", value: "±0.5%" },
  { label: "Surface Finish", value: "Ra < 0.1 μm" },
];

const processSteps = [
  { step: "01", title: "Feedstock Preparation", desc: "Ceramic powder blended with binder system to create injectable feedstock." },
  { step: "02", title: "Injection Molding", desc: "Feedstock injected into precision molds under controlled temperature and pressure." },
  { step: "03", title: "Debinding", desc: "Binder removed through thermal or solvent-assisted process." },
  { step: "04", title: "Sintering", desc: "Parts sintered at high temperature to achieve final density and mechanical properties." },
  { step: "05", title: "Finishing", desc: "Post-processing, inspection, and quality validation before delivery." },
];

export default function TechnologyPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#86868b] mb-4">Technology</p>
          <h1 className="text-[52px] font-semibold tracking-[-0.04em] text-[#1d1d1f] leading-[1.05] mb-6 max-w-2xl">
            Ceramic Injection Molding.
          </h1>
          <p className="text-[19px] text-[#6e6e73] max-w-xl leading-relaxed">
            Advanced CIM technology enables complex, high-precision ceramic components at scale — combining the design freedom of plastic injection molding with the performance of advanced ceramics.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-[#f5f5f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="rounded-2xl overflow-hidden card-hover">
            <img
              src="/images/CIM_process.png"
              alt="CIM Process"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#86868b] mb-3">Process</p>
          <h2 className="text-[32px] font-semibold tracking-tight text-[#1d1d1f] mb-10">How CIM works.</h2>
          <div className="grid md:grid-cols-5 gap-0">
            {processSteps.map((s, i) => (
              <div key={s.step} className="relative p-5 bg-white rounded-2xl border border-[#e8e8ed] mx-1">
                <span className="text-[11px] font-semibold text-[#004428] uppercase tracking-wider">{s.step}</span>
                <h3 className="text-[14px] font-semibold text-[#1d1d1f] mt-2 mb-1">{s.title}</h3>
                <p className="text-[12px] text-[#6e6e73] leading-relaxed">{s.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#d2d2d7]">
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                      <path d="M1 1l8 7-8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#86868b] mb-3">Advantages</p>
          <h2 className="text-[32px] font-semibold tracking-tight text-[#1d1d1f] mb-10">Why CIM?</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {advantages.map((a) => (
              <div key={a.title} className="p-6 rounded-2xl bg-[#fbfbfd] border border-[#e8e8ed] card-hover">
                <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-2">{a.title}</h3>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Properties */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-widest text-[#86868b] mb-3">Material Data</p>
              <h2 className="text-[32px] font-semibold tracking-tight text-[#1d1d1f] mb-6">Material benefits.</h2>
              <p className="text-[16px] text-[#6e6e73] leading-relaxed mb-8">
                Our ceramic components deliver outstanding performance across critical material properties, making them ideal for demanding industrial and medical applications.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {materialBenefits.map((b) => (
                  <div key={b.label} className="p-4 bg-white rounded-xl border border-[#e8e8ed] card-hover">
                    <p className="text-[11px] text-[#86868b] uppercase tracking-wider mb-1">{b.label}</p>
                    <p className="text-[14px] font-semibold text-[#1d1d1f]">{b.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] card-hover">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80&auto=format&fit=crop"
                alt="Material properties"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-[#e8e8ed]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h3 className="text-[28px] font-semibold text-[#1d1d1f] mb-3">Explore our CIM products</h3>
          <p className="text-[16px] text-[#6e6e73] mb-6">See the full range of injection molded ceramic components.</p>
          <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1d1d1f] text-white rounded-full text-[14px] font-medium hover:bg-[#8c2442] transition-colors card-hover">
            View Products <RiArrowRightLine size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
