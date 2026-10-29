"use client";

import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import { useEffect, useRef } from "react";

import {
  RiCrosshair2Line,
  RiLightbulbLine,
  RiShieldCheckLine,
  RiTeamLine,
} from "react-icons/ri";

const milestones = [
  { year: "Founded", title: "N Gandhi Enterprises", desc: "Decades of expertise in precision engineering and materials science." },
  { year: "Growth", title: "Advanced Materials Division", desc: "Established dedicated ceramics R&D and manufacturing capabilities." },
  { year: "Present", title: "NAMTPL", desc: "Technology-driven company serving global high-performance industries." },
];

const values = [
  { title: "Precision", desc: "Every component engineered to exacting tolerances.", icon: RiCrosshair2Line },
  { title: "Innovation", desc: "Continuous R&D to push material boundaries.", icon: RiLightbulbLine },
  { title: "Reliability", desc: "Consistent quality backed by ISO certification.", icon: RiShieldCheckLine },
  { title: "Partnership", desc: "Long-term relationships built on technical trust.", icon: RiTeamLine },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function AboutPage() {
  useReveal();

  return (
    <>
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 { transition-delay: 0.08s; }
        .delay-2 { transition-delay: 0.16s; }
        .delay-3 { transition-delay: 0.05s; }
        .delay-4 { transition-delay: 0.12s; }
        .delay-5 { transition-delay: 0.20s; }
        .delay-6 { transition-delay: 0.06s; }
        .delay-7 { transition-delay: 0.08s; }
        .delay-8 { transition-delay: 0.14s; }
        .delay-9 { transition-delay: 0.20s; }
        .delay-10 { transition-delay: 0.26s; }

        .hero-img-wrap {
          border-radius: 16px;
          overflow: hidden;
        }
        .hero-img-wrap img {
          transition: transform 0.6s ease;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .hero-img-wrap:hover img {
          transform: scale(1.03);
        }

        .milestone-row {
          transition: transform 0.22s ease;
        }
        .milestone-row:hover {
          transform: translateX(6px);
        }
        .milestone-row:hover .milestone-year {
          color: #8c2424;
        }

       .val-card {
  border: 1px solid #ebebeb;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  transition: border-color 0.28s ease, box-shadow 0.28s ease, transform 0.25s ease;
}
.val-card:hover {
  border-color: rgba(140, 36, 36, 0.25);
  box-shadow: 0 4px 18px rgba(140, 36, 36, 0.08), 0 1px 4px rgba(0,0,0,0.04);
  transform: translateY(-4px) scale(1.02);
}
       .val-card:hover .val-icon {
  background: rgba(140, 36, 36, 0.10) !important;
}
        .btn-outline {
          transition: border-color 0.2s, color 0.2s, transform 0.18s ease;
        }
        .btn-outline:hover {
          border-color: #8c2424 !important;
          color: #8c2424 !important;
          transform: scale(1.04);
        }
        .btn-outline:active {
          transform: scale(0.97);
        }

        .btn-fill {
          transition: background 0.2s, transform 0.18s ease;
        }
        .btn-fill:hover {
          background: #8c2424 !important;
          transform: scale(1.04);
        }
        .btn-fill:active {
          transform: scale(0.97);
        }
      `}</style>

      {/* Hero */}
      <section className="bg-white pt-16 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="reveal text-[12px] font-semibold uppercase tracking-widest text-[#86868b] mb-4">
            About Us
          </p>
          <h1 className="reveal delay-1 text-[52px] font-semibold tracking-[-0.04em] text-[#1d1d1f] leading-[1.05] mb-6 max-w-2xl">
            A legacy of material excellence.
          </h1>
          <p className="reveal delay-2 text-[19px] text-[#6e6e73] max-w-2xl leading-relaxed">
            N Gandhi Advance Material Technology Private Limited is a technology-driven company based in Mumbai,
            focused on developing advanced ceramic materials and components for industrial applications.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-[#f5f5f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="reveal hero-img-wrap aspect-[21/7]">
            <img
              src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1400&q=80&auto=format&fit=crop"
              alt="Manufacturing"
            />
          </div>
        </div>
      </section>

      {/* Story + Milestones */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <h2 className="text-[32px] font-semibold tracking-tight text-[#1d1d1f] mb-5">Our story.</h2>
            <p className="text-[16px] text-[#6e6e73] leading-relaxed mb-4">
              Part of N Gandhi Enterprises, we leverage decades of expertise in precision engineering and
              materials science to deliver advanced ceramic solutions for next-generation industries.
            </p>
            <p className="text-[16px] text-[#6e6e73] leading-relaxed">
              Based in Mumbai, our team works collaboratively to develop components that solve real-world
              challenges across paint & coatings, semiconductors, medical, oil & gas, and textile industries.
            </p>
          </div>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`reveal milestone-row flex gap-5 delay-${i + 3}`}
              >
                <div className="w-[72px] shrink-0 pt-0.5">
                  <span className="milestone-year text-[11px] font-semibold uppercase tracking-wider text-[#004428] transition-colors duration-200">
                    {m.year}
                  </span>
                </div>
                <div className={`flex-1 pb-6 ${i < milestones.length - 1 ? "border-b border-[#e8e8ed]" : ""}`}>
                  <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-1">{m.title}</h3>
                  <p className="text-[14px] text-[#6e6e73]">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="reveal text-[12px] font-semibold uppercase tracking-widest text-[#86868b] mb-3">
            Our Values
          </p>
          <h2 className="reveal delay-6 text-[32px] font-semibold tracking-tight text-[#1d1d1f] mb-10">
            What drives us.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`val-card reveal delay-${i + 7} p-6 rounded-2xl bg-white`}
              >
                <div className="val-icon w-10 h-10 rounded-[10px] bg-[#f5f0f0] flex items-center justify-center mb-4 transition-colors duration-250">
                  <v.icon size={20} className="text-[#8c2424]" />
                </div>
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-2">{v.title}</h3>
                <p className="text-[14px] text-[#6e6e73]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f5f5f7] border-t border-[#e8e8ed]">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="reveal">
            <h3 className="text-[22px] font-semibold text-[#1d1d1f]">Interested in working with us?</h3>
            <p className="text-[15px] text-[#6e6e73] mt-1">Explore our products or get in touch.</p>
          </div>
          <div className="reveal flex gap-3">
            <Link
              href="/products"
              className="btn-outline px-5 py-2.5 border border-[#d2d2d7] rounded-full text-[14px] font-medium text-[#1d1d1f]"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="btn-fill px-5 py-2.5 bg-[#1d1d1f] rounded-full text-[14px] font-medium text-white inline-flex items-center gap-2"
            >
              Contact <RiArrowRightLine size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}