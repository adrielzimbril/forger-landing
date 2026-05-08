"use client";

import { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroCanvas from "../HeroCanvas";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Masked Reveal Animation for Title
      const words = titleRef.current?.querySelectorAll(".reveal-word > span");
      if (words) {
        gsap.to(words, {
          opacity: 1,
          y: "0%",
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.2,
        });
      }

      // Fade in the subtitle and button
      gsap.from(".reveal-fade", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative px-6 py-16 md:py-24 flex flex-col items-center text-center overflow-hidden">

      
      <h1 ref={titleRef} className="relative z-10 font-serif text-5xl sm:text-6xl md:text-8xl font-medium tracking-tighter leading-[0.95] max-w-4xl text-neutral-900" style={{ fontFamily: "'Instrument Serif', serif" }}>
        <span className="reveal-word"><span style={{ display: 'inline-block', transform: 'translateY(110%)' }}>Forge</span></span>{" "}
        <span className="reveal-word"><span style={{ display: 'inline-block', transform: 'translateY(110%)' }}>Your</span></span>{" "}
        <span className="reveal-word"><span style={{ display: 'inline-block', transform: 'translateY(110%)' }}>Career</span></span>{" "}
        <span className="reveal-word"><span style={{ display: 'inline-block', transform: 'translateY(110%)' }}>with</span></span>{" "}
        <span className="reveal-word"><span className="italic" style={{ color: "#F47A2C", display: 'inline-block', transform: 'translateY(110%)' }}>Precision</span></span>
      </h1>

      <p className="reveal-fade mt-6 text-gray-500 text-sm md:text-base max-w-xl leading-relaxed relative z-10">
        A unified recruitment platform built to publish roles, source candidates, and secure the perfect match with unprecedented speed and precision.
      </p>

      <div className="reveal-fade mt-8 flex justify-center relative z-10">
        <a href="#" className="group inline-flex items-center gap-2 pl-2 pr-6 py-2 rounded-full text-white text-sm" style={{ background: "linear-gradient(135deg, #FFB871, #F47A2C)", boxShadow: "0 10px 30px -10px rgba(244,122,44,0.6)" }}>
          <span className="w-7 h-7 rounded-full bg-white/25 flex items-center justify-center">
            <Icon icon="solar:arrow-right-linear" width="14" />
          </span>
          Build My Resume
        </a>
      </div>

      {/* Hero Graphics Composition */}
      <div className="relative mt-20 w-full max-w-5xl h-[400px] md:h-[600px] flex justify-center items-end">
        
        {/* Center Main Image */}
        <div className="relative w-full max-w-2xl h-full rounded-[2rem] overflow-hidden shadow-2xl z-10">
          <img 
            src="/hero-dashboard.png" 
            alt="ResumeForge AI Dashboard" 
            className="w-full h-full object-cover object-top" />
        </div>

        {/* Floating UI Left */}
        <div className="absolute left-0 bottom-6 w-64 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-gray-100 z-20 hidden md:block" style={{ transform: "rotate(-2deg) translateY(-20px)" }}>
          <div className="text-sm font-medium mb-3 text-left">Discover Specialists</div>
          <div className="flex items-center bg-gray-50 rounded-full px-3 py-2 border border-gray-200 mb-4">
            <span className="text-gray-400 text-xs flex-1 text-left">Search disciplines...</span>
            <div className="bg-gray-900 rounded-full p-1 flex items-center justify-center">
              <Icon icon="solar:magnifer-linear" className="text-white text-xs" />
            </div>
          </div>
          <div className="text-xs text-gray-500 mb-2 text-left">Trending Searches</div>
          <div className="flex flex-wrap gap-2">
            <span className="text-[10px] px-2 py-1 bg-gray-100 rounded border border-gray-200">Engineering</span>
            <span className="text-[10px] px-2 py-1 bg-gray-100 rounded border border-gray-200">Design</span>
            <span className="text-[10px] px-2 py-1 bg-gray-100 rounded border border-gray-200">Operations</span>
          </div>
        </div>

        {/* Floating UI Right */}
        <div className="absolute right-0 top-24 w-60 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-gray-100 z-20 hidden md:block" style={{ transform: "rotate(3deg) translateY(20px)" }}>
          <div className="text-sm font-medium mb-4 text-left">Applicant Overview</div>
          <div className="flex items-center gap-3 mb-4">
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_1600w.jpg" className="w-8 h-8 rounded-full object-cover" alt="Avatar" />
            <div className="text-left">
              <div className="text-xs font-semibold">Sarah Jenkins</div>
              <div className="text-[10px] text-gray-500">Lead Product Designer</div>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-[10px] mb-1"><span className="text-gray-500">Culture Fit</span><span className="font-medium">92%</span></div>
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-[#0d2620] w-[92%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between text-[10px] mb-1"><span className="text-gray-500">Skill Alignment</span><span className="font-medium">88%</span></div>
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-[#0d2620] w-[88%]"></div></div>
            </div>
          </div>
        </div>
      
        {/* Decorative flowers */}
        <div className="absolute -left-6 top-1/3 w-24 h-24 opacity-80 z-20 hidden md:block" style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))" }}>
          <Icon icon="solar:sun-2-linear" width="96" style={{ color: "white" }} />
        </div>

        {/* Floating UI cards */}
        <div className="absolute left-4 md:left-12 top-1/3 bg-white rounded-2xl px-4 py-3 flex items-center gap-3 animate-float z-20 hidden md:block" style={{ boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)" }}>
          <span className="text-lg font-semibold" style={{ color: "#F47A2C", fontFamily: "'Instrument Serif',serif" }}>92%</span>
          <span className="text-xs text-neutral-700">Resume Score</span>
        </div>

        <div className="absolute left-4 md:left-1/3 bottom-8 bg-white rounded-full px-4 py-2.5 flex items-center gap-2 animate-float-delay z-20 hidden md:block" style={{ boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)" }}>
          <Icon icon="solar:magic-stick-3-linear" width="14" style={{ color: "#F47A2C" }} />
          <span className="text-xs text-neutral-700">Ask AI Coach Anything…</span>
          <span className="ml-2 w-1.5 h-3 bg-neutral-400 animate-pulse"></span>
        </div>

        <div className="absolute right-4 md:right-12 top-2/3 -translate-y-1/2 bg-white rounded-2xl p-4 w-56 animate-float z-20 hidden md:block" style={{ boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)" }}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold">Skills</span>
              <Icon icon="solar:pen-linear" width="12" style={{ color: "#999" }} />
            </div>
            <button className="text-[10px] px-2.5 py-1 rounded-full text-white flex items-center gap-1" style={{ background: "linear-gradient(135deg, #FFB871, #F47A2C)" }}>
              <Icon icon="solar:add-circle-linear" width="10" /> Add Skill
            </button>
          </div>
          <div className="space-y-1.5 text-left">
            <div className="text-xs px-3 py-1.5 rounded-md bg-neutral-50 border border-neutral-100">Management Skills</div>
            <div className="text-xs px-3 py-1.5 rounded-md bg-neutral-50 border border-neutral-100">Analytical Thinking</div>
            <div className="text-xs px-3 py-1.5 rounded-md bg-neutral-50 border border-neutral-100">Leadership</div>
          </div>
        </div>
      </div>
    </section>
  );
}

