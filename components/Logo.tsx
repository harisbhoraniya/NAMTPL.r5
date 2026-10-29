"use client";

interface LogoProps {
  className?: string;
  fallbackText?: string;
}

export default function Logo({ className = "w-full h-full object-contain", fallbackText = "LOGO" }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="NAMTPL Logo"
      className={className}
      onError={(e) => {
        const el = e.target as HTMLImageElement;
        el.style.display = "none";
        const parent = el.parentElement;
        if (parent) {
          const span = document.createElement("span");
          span.style.cssText = "font-size:9px;color:#86868b;text-align:center;padding:2px;line-height:1.2";
          span.textContent = fallbackText;
          parent.appendChild(span);
        }
      }}
    />
  );
}
