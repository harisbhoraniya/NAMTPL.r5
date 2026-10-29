"use client";
import { useState } from "react";
import { RiPhoneLine, RiMailLine, RiGlobalLine, RiMapPinLine, RiArrowRightLine, RiSendPlaneLine } from "react-icons/ri";

const contactInfo = [
  { icon: <RiMapPinLine size={18} />, label: "Address", value: "Mumbai, Maharashtra, India" },
  { icon: <RiPhoneLine size={18} />, label: "Phone", value: "+91-22-68380200 (100 Lines)", href: "tel:+912268380200" },
  { icon: <RiMailLine size={18} />, label: "Email", value: "enquirymatl@ngandhi.com", href: "mailto:enquirymatl@ngandhi.com" },
  { icon: <RiGlobalLine size={18} />, label: "Website", value: "www.ngandhi.com", href: "https://www.ngandhi.com" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "", product: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="bg-white pt-16 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#86868b] mb-4">Contact</p>
          <h1 className="text-[52px] font-semibold tracking-[-0.04em] text-[#1d1d1f] leading-[1.05] mb-6 max-w-2xl">
            Let&apos;s work together.
          </h1>
          <p className="text-[19px] text-[#6e6e73] max-w-xl leading-relaxed">
            Reach out for product inquiries, custom engineering requirements, or the Zirconia buyback program.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="text-[22px] font-semibold text-[#1d1d1f] mb-6">Get in touch.</h2>
            <ul className="space-y-5 mb-10">
              {contactInfo.map((c) => (
                <li key={c.label} className="flex items-start gap-3">
                  <span className="text-[#004428] mt-0.5 shrink-0">{c.icon}</span>
                  <div>
                    <p className="text-[11px] text-[#86868b] uppercase tracking-wider mb-0.5">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-[15px] text-[#1d1d1f] hover:text-[#8c2442] transition-colors">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-[15px] text-[#1d1d1f]">{c.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="p-5 rounded-2xl bg-[#004428]/5 border border-[#004428]/15">
              <p className="text-[13px] font-semibold text-[#004428] mb-1">Zirconia Bead Buyback</p>
              <p className="text-[13px] text-[#6e6e73] leading-relaxed">
                We purchase used Zirconia beads. Contact us to discuss quantities and logistics.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-[#e8e8ed] p-8">
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-12 h-12 rounded-full bg-[#004428]/10 flex items-center justify-center mx-auto mb-4">
                    <RiSendPlaneLine className="text-[#004428]" size={22} />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Message sent.</h3>
                  <p className="text-[15px] text-[#6e6e73]">We&apos;ll get back to you within 1–2 business days.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-5">Send a message</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-medium text-[#86868b] uppercase tracking-wider mb-1.5">
                        Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 text-[14px] bg-[#f5f5f7] rounded-xl border border-[#e8e8ed] focus:outline-none focus:border-[#004428] text-[#1d1d1f] placeholder-[#86868b] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium text-[#86868b] uppercase tracking-wider mb-1.5">
                        Company
                      </label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="w-full px-4 py-2.5 text-[14px] bg-[#f5f5f7] rounded-xl border border-[#e8e8ed] focus:outline-none focus:border-[#004428] text-[#1d1d1f] placeholder-[#86868b] transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-medium text-[#86868b] uppercase tracking-wider mb-1.5">
                        Email *
                      </label>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-2.5 text-[14px] bg-[#f5f5f7] rounded-xl border border-[#e8e8ed] focus:outline-none focus:border-[#004428] text-[#1d1d1f] placeholder-[#86868b] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium text-[#86868b] uppercase tracking-wider mb-1.5">
                        Phone
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className="w-full px-4 py-2.5 text-[14px] bg-[#f5f5f7] rounded-xl border border-[#e8e8ed] focus:outline-none focus:border-[#004428] text-[#1d1d1f] placeholder-[#86868b] transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-[#86868b] uppercase tracking-wider mb-1.5">
                      Product Interest
                    </label>
                    <select
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-[14px] bg-[#f5f5f7] rounded-xl border border-[#e8e8ed] focus:outline-none focus:border-[#004428] text-[#1d1d1f] transition-colors"
                    >
                      <option value="">Select a product category</option>
                      <option>Zirconia Beads</option>
                      <option>Silicon Nitride Beads</option>
                      <option>Zirconia Ceramic Parts</option>
                      <option>Alumina Ceramic Parts</option>
                      <option>CIM Components</option>
                      <option>Zirconia Buyback Program</option>
                      <option>Custom Engineering</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-[#86868b] uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe your requirements..."
                      className="w-full px-4 py-2.5 text-[14px] bg-[#f5f5f7] rounded-xl border border-[#e8e8ed] focus:outline-none focus:border-[#004428] text-[#1d1d1f] placeholder-[#86868b] resize-none transition-colors"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full py-3 bg-[#1d1d1f] text-white text-[14px] font-semibold rounded-full hover:bg-[#8c2442] transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    Send Message <RiArrowRightLine size={15} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
