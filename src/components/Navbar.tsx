"use client";

import { useState } from "react";

const NAV_LINKS = ["About", "Services", "Projects", "News", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between py-4 lg:py-6 w-full">
      <span className="font-semibold text-base text-black tracking-[-0.04em] capitalize shrink-0">
        H.Studio
      </span>

      <div className="hidden md:flex items-center gap-6 lg:gap-14 font-semibold text-sm lg:text-base text-black tracking-[-0.04em] capitalize">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            {link}
          </a>
        ))}
      </div>

      <button className="hidden md:flex items-center justify-center bg-black text-white text-sm font-medium tracking-[-0.04em] px-4 py-2.5 lg:py-3 rounded-[24px] hover:bg-zinc-800 transition-colors shrink-0">
        Let&apos;s talk
      </button>

      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-zinc-100 flex flex-col py-4 z-50">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="px-6 py-3 font-semibold text-base text-black tracking-[-0.04em] capitalize hover:bg-zinc-50 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="px-6 pt-2">
            <button className="w-full flex items-center justify-center bg-black text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-[24px] hover:bg-zinc-800 transition-colors">
              Let&apos;s talk
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
