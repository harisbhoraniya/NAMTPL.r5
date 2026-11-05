"use client";

import { useState, useEffect } from "react";
import { RiFileTextLine, RiArrowRightLine, RiCloseLine, RiDownloadLine } from "react-icons/ri";

const CERTIFICATE_PATH = "/namtpl.pdf";

export default function ViewCertificateButton() {
  const [open, setOpen] = useState(false);

  // lock background scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close on Escape key
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#004428] text-white rounded-full text-[14px] font-medium hover:bg-[#8c2442] transition-colors card-hover"
      >
        <RiFileTextLine size={16} />
        View Certificate <RiArrowRightLine size={14} />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="ISO 9001:2015 Certificate"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* modal panel */}
          <div className="relative w-full max-w-3xl h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-5 py-3 border-b border-[#e8e8ed]">
              <h3 className="text-[15px] font-semibold text-[#1d1d1f]">
                ISO 9001:2015 Certificate
              </h3>
              <div className="flex items-center gap-2">
                <a
                  href={CERTIFICATE_PATH}
                  download
                  className="flex items-center gap-1 text-[13px] font-medium text-[#004428] hover:text-[#8c2442] transition-colors px-3 py-1.5 rounded-full border border-[#e8e8ed]"
                >
                  <RiDownloadLine size={14} />
                  Download
                </a>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-[#f5f5f7] transition-colors"
                >
                  <RiCloseLine size={20} className="text-[#1d1d1f]" />
                </button>
              </div>
            </div>

            <div className="flex-1 bg-[#f5f5f7]">
              <iframe
                src={CERTIFICATE_PATH}
                title="ISO 9001:2015 Certificate"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}