"use client";

import { Icon } from "@iconify/react";

export default function AIPoweredInterview() {
  return (
    <section className="px-6 md:px-20 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div className="relative">
        <div className="rounded-2xl overflow-hidden aspect-[4/5]">
          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_1600w.jpg" className="w-full h-full object-cover" alt="" />
        </div>
        {/* Corner brackets */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-white"/>
          <div className="absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2 border-white"/>
          <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2 border-white"/>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-white"/>
        </div>
        {/* Floating cards */}
        <div className="absolute top-6 right-2 md:right-6 bg-white rounded-xl px-3 py-2 animate-float b" style={{boxShadow: "0 10px 30px -8px rgba(0,0,0,0.2)"}}>
          <div className="text-[10px] font-semibold">Resume Match Score</div>
          <div className="text-[10px] text-[#F47A2C]">+42% improvement</div>
        </div>
        <div className="absolute bottom-1/3 left-2 md:left-6 bg-white rounded-xl px-3 py-2 animate-float-delay" style={{boxShadow: "0 10px 30px -8px rgba(0,0,0,0.2)"}}>
          <div className="text-[10px] font-semibold">Build Time</div>
          <div className="text-[10px] text-neutral-500">Under 5 minutes</div>
        </div>
        <div className="absolute bottom-6 right-2 md:right-6 bg-white rounded-xl px-3 py-2 animate-float" style={{boxShadow: "0 10px 30px -8px rgba(0,0,0,0.2)"}}>
          <div className="text-[10px] font-semibold">Interview Callbacks</div>
          <div className="text-[10px]" style={{color:"#F47A2C"}}>+18% increase</div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl md:text-5xl tracking-tight leading-tight" style={{fontFamily:"var(--font-serif), serif"}}>
          AI-Powered Interview<br />Ready Resumes
        </h2>
        <p className="mt-5 text-sm text-neutral-500 leading-relaxed max-w-md">
          ResumeForge helps job seekers optimize their resumes with AI improving visibility, relevance, and recruiter engagement across every application.
        </p>
        <a href="#" className="mt-6 inline-flex items-center gap-2 pl-2 pr-6 py-2 rounded-full text-white text-sm" style={{background: "linear-gradient(135deg, #FFB871, #F47A2C)", boxShadow: "0 10px 30px -10px rgba(244,122,44,0.5)"}}>
          <span className="w-7 h-7 rounded-full bg-white/25 flex items-center justify-center">
            <Icon icon="solar:arrow-right-linear" width="14" />
          </span>
          See How It Works
        </a>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-2xl md:text-3xl tracking-tight" style={{fontFamily:"var(--font-serif), serif"}}>40%</div>
            <div className="text-xs text-neutral-500 mt-1">Higher ATS match rate</div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="text-2xl md:text-3xl tracking-tight" style={{fontFamily:"var(--font-serif), serif"}}>32%</div>
            <div className="text-xs text-neutral-500 mt-1">More recruiter engagement</div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="text-2xl md:text-3xl tracking-tight" style={{fontFamily:"var(--font-serif), serif"}}>3x</div>
            <div className="text-xs text-neutral-500 mt-1">Faster resume creation</div>
          </div>
        </div>
      </div>
    </section>
  );
}
