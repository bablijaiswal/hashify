"use client";
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="w-full"
      style={{
        background: 'linear-gradient(90deg, #FDECF7 0%, #E6F6FF 45%, #FFF7E6 100%)',
        borderBottom: '1px solid rgba(2,6,23,0.04)',
        boxShadow: '0 1px 0 rgba(2,6,23,0.03)'
      }}
    >
  <nav className="w-full px-6 md:px-12 lg:px-24 py-4">
    <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-2xl md:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-slate-900 via-slate-700 to-slate-900">
            Hashify
          </Link>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="/" className="rounded-md px-3 py-1 text-base md:text-lg font-semibold text-slate-800 hover:bg-white/30">
            Home
          </Link>
          <Link href="/trending" className="rounded-md px-3 py-1 text-base md:text-lg font-semibold text-slate-800 hover:bg-white/30">
            Trending Hashtags
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md bg-white/70 p-2 shadow-sm"
          >
            <svg className="h-5 w-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
    </div>
  </nav>

      {/* Mobile menu dropdown */}
      {open && (
          <div className="md:hidden">
          <div className="w-full border-t border-transparent bg-linear-to-b from-white/60 to-white/40 px-4 py-3">
            <div className="flex flex-col gap-2">
              <Link href="/" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-slate-800 hover:bg-white/30">
                Home
              </Link>
              <Link href="/trending" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-slate-800 hover:bg-white/30">
                Trending Hashtags
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* removed curved corners and shadow per request */}
    </header>
  );
}
