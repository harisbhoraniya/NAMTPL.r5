import Link from "next/link";
import { RiArrowRightLine, RiShieldCheckLine, RiTestTubeLine, RiFileCheckLine, RiGlobalLine } from "react-icons/ri";
import ViewCertificateButton from "@/components/ViewCertificateButton";

const pillars = [
  {
    icon: <RiShieldCheckLine size={22} />,
    title: "ISO 9001:2015 Certified",
    desc: "Our quality management system is certified to ISO 9001:2015, ensuring consistent processes and continuous improvement across all operations.",
  },
  {
    icon: <RiTestTubeLine size={22} />,
    title: "Advanced Testing & Inspection",
    desc: "Comprehensive in-process and final inspection using precision metrology equipment to verify dimensional accuracy and material properties.",
  },
  {
    icon: <RiFileCheckLine size={22} />,
    title: "Strict Quality Control",
    desc: "Every component undergoes multi-stage quality checks from raw material incoming inspection through to final dispatch.",
  },
  {
    icon: <RiGlobalLine size={22} />,
    title: "Global Standards Compliance",
    desc: "Products manufactured to meet international standards for aerospace, medical, semiconductor, and industrial applications.",
  },
];

export default function QualityPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#86868b] mb-4">Quality</p>
          <h1 className="text-[52px] font-semibold tracking-[-0.04em] text-[#1d1d1f] leading-[1.05] mb-6 max-w-2xl">
            Quality without compromise.
          </h1>
          <p className="text-[19px] text-[#6e6e73] max-w-xl leading-relaxed">
            ISO-certified processes, rigorous testing, and a culture of continuous improvement underpin every component we produce.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f5f7] py-20 border-y border-[#e8e8ed]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#004428] mb-3">Our Pillars</p>
            <h2 className="text-[36px] font-semibold tracking-tight text-[#1d1d1f] mb-4">Quality pillars.</h2>
            <p className="text-[16px] text-[#6e6e73] leading-relaxed">
              Four foundational standards that guide our manufacturing, inspection, and delivery processes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group p-8 rounded-2xl bg-white border border-[#e8e8ed] hover:border-[#004428]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#004428]/8 text-[#004428] flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#004428] group-hover:text-white">
                    {p.icon}
                  </div>
                  <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2.5 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-[14px] text-[#6e6e73] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO Badge Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] card-hover bg-[#f5f5f7] border border-[#e8e8ed] flex items-center justify-center p-8">
              <img
                src="/images/iso-9001-badge.webp"
                alt="ISO 9001:2015 Certification"
                className="w-full h-full object-contain max-h-[320px]"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#004428]/8 border border-[#004428]/20 mb-6 card-hover">
                <RiShieldCheckLine className="text-[#004428]" size={18} />
                <span className="text-[13px] font-semibold text-[#004428]">ISO 9001:2015 Certified</span>
              </div>
              <h2 className="text-[32px] font-semibold tracking-tight text-[#1d1d1f] mb-5">
                Certified quality management.
              </h2>
              <p className="text-[15px] text-[#6e6e73] leading-relaxed mb-6">
                Our ISO 9001:2015 certification demonstrates our commitment to quality management systems that consistently provide products and services meeting customer and regulatory requirements.
              </p>

              {/* View Certificate button — opens PDF in a popup modal */}
              <ViewCertificateButton />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5f7] border-t border-[#e8e8ed]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h3 className="text-[28px] font-semibold text-[#1d1d1f] mb-3">Questions about our quality processes?</h3>
          <p className="text-[16px] text-[#6e6e73] mb-6">We&apos;re happy to share detailed specifications and certifications.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1d1d1f] text-white rounded-full text-[14px] font-medium hover:bg-[#8c2442] transition-colors card-hover">
            Contact Us <RiArrowRightLine size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}