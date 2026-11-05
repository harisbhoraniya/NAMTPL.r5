"use client";

import { RiWhatsappFill } from "react-icons/ri";

const WHATSAPP_NUMBER = "919999999999"; // TODO: apna number daalo, country code ke saath, bina + ya spaces ke
const DEFAULT_MESSAGE = "Hi! I'd like to know more about your products.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16"
    >
      {/* pulsing ring for attention */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />

      {/* main button */}
      <span
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(0,0,0,0.25)] ring-4 ring-white/70 group-hover:scale-110 group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] transition-all duration-200"
      >
        <RiWhatsappFill size={32} className="text-white" />
      </span>
    </a>
  );
}