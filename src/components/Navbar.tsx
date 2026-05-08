"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50">
      <div className="flex items-center justify-between px-6 md:px-20 py-6">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <Logo size={32} />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm text-neutral-600 font-sans">
          <Link href="#" className="hover:text-neutral-900 transition-colors">Home</Link>
          <Link href="#" className="flex items-center gap-1 hover:text-neutral-900 transition-colors">
            Features <Icon icon="solar:alt-arrow-down-linear" width="14" />
          </Link>
          <Link href="#" className="hover:text-neutral-900 transition-colors">Resources</Link>
          <Link href="#" className="hover:text-neutral-900 transition-colors">Templates</Link>
          <Link href="#" className="hover:text-neutral-900 transition-colors">Pricing</Link>
        </div>

        <div className="flex items-center gap-4 font-sans">
          <div className="hidden sm:flex items-center gap-4">
            <Link href="#" className="text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition-colors">Log In</Link>
            <Link href="#" className="text-sm px-6 py-2.5 rounded-full text-white bg-[#F47A2C] hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 active:scale-95 font-bold">
              Sign Up
            </Link>
          </div>
          
          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-900 shadow-sm border border-neutral-100 active:scale-90 transition-transform"
          >
            <Icon icon={isOpen ? "solar:close-circle-bold" : "solar:hamburger-menu-bold"} width="20" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/98 backdrop-blur-2xl border-b border-neutral-100 md:hidden animate-in fade-in slide-in-from-top-4 duration-300 shadow-2xl">
          <div className="flex flex-col p-8 gap-8 text-lg font-bold text-neutral-900">
            <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-[#F47A2C] transition-colors">Home</Link>
            <Link href="#" onClick={() => setIsOpen(false)} className="flex items-center justify-between hover:text-[#F47A2C] transition-colors">
              Features <Icon icon="solar:alt-arrow-right-linear" width="20" />
            </Link>
            <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-[#F47A2C] transition-colors">Resources</Link>
            <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-[#F47A2C] transition-colors">Templates</Link>
            <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-[#F47A2C] transition-colors">Pricing</Link>
            <div className="pt-6 border-t border-neutral-100 flex flex-col gap-4">
              <Link href="#" className="text-center py-4 rounded-2xl border border-neutral-200 text-neutral-600">Log In</Link>
              <Link href="#" className="text-center py-4 rounded-2xl bg-[#F47A2C] text-white shadow-lg shadow-orange-500/20">Get Started Free</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

