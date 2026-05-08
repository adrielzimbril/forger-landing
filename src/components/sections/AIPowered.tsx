"use client";

import { Icon } from "@iconify/react";

export default function AIPowered() {
  return (
    <section className="px-6 md:px-20 py-24 bg-white border-y border-neutral-100 flex flex-col md:flex-row items-center gap-16">
      <div className="md:w-1/2 space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F47A2C]/10 rounded-full text-[#F47A2C] text-xs font-semibold tracking-wide uppercase">
          AI-Powered Candidate Matching
        </div>
        <h2 className="font-serif text-4xl md:text-5xl tracking-tight leading-[1.1] text-gray-900" style={{ fontFamily: "'Instrument Serif', serif" }}>
          Precision Hiring at Scale
        </h2>
        <p className="text-gray-500 leading-relaxed text-sm md:text-base max-w-lg">
          Leverage advanced machine learning to analyze applicant data and identify high-potential candidates who align with your team's culture and performance requirements.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
          {[
            "Instant Data Enrichment",
            "Dynamic Culture Matching",
            "Skill-Gap Analysis",
            "Predictive Performance"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#0d2620] flex items-center justify-center">
                <Icon icon="solar:check-read-linear" className="text-white text-[10px]" />
              </div>
              <span className="text-xs font-medium text-gray-700">{item}</span>
            </div>
          ))}
        </div>
        <div className="pt-4">
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-[#F47A2C] transition-colors group">
            Learn About AI Matching
            <Icon icon="solar:arrow-right-up-linear" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
      
      <div className="md:w-1/2 relative">
        {/* Decorative Background */}
        <div className="absolute -inset-10 bg-[#FFB871]/10 rounded-full blur-3xl -z-10"></div>
        
        {/* Candidate Detail Card */}
        <div className="bg-white rounded-[2rem] p-6 shadow-2xl border border-gray-100 relative z-10 w-full max-w-md mx-auto">
          <div className="flex justify-between items-start mb-6">
            <div className="flex gap-4">
              <img src="https://api.dicebear.com/9.x/glass/svg?seed=Michael" className="w-16 h-16 rounded-4xl object-cover" alt="Michael Chen" />
              <div>
                <h3 className="text-lg font-bold">Michael Chen</h3>
                <p className="text-xs text-gray-500">San Francisco, CA • Remote</p>
                <div className="flex gap-1 mt-2">
                  <Icon icon="solar:star-bold" className="text-orange-400 text-xs" />
                  <Icon icon="solar:star-bold" className="text-orange-400 text-xs" />
                  <Icon icon="solar:star-bold" className="text-orange-400 text-xs" />
                  <Icon icon="solar:star-bold" className="text-orange-400 text-xs" />
                  <Icon icon="solar:star-linear" className="text-orange-400 text-xs" />
                </div>
              </div>
            </div>
            <div className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-bold">TOP MATCH</div>
          </div>
          
          <div className="space-y-6">
            <div className="p-4 rounded-xl border border-neutral-100 bg-neutral-50/50">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Matches your Team culture</div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0d2620] flex items-center justify-center">
                  <Icon icon="solar:users-group-rounded-linear" className="text-[#c8f24a] text-xl" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>Cultural Alignment</span>
                    <span>94%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#0d2620] w-[94%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-neutral-100 bg-neutral-50/50">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Education</div>
                <div className="text-xs font-bold leading-tight">Stanford University</div>
                <div className="text-[10px] text-gray-500 mt-1">MS Computer Science</div>
              </div>
              <div className="p-4 rounded-xl border border-neutral-100 bg-neutral-50/50">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Experience</div>
                <div className="text-xs font-bold leading-tight">6+ Years Exp.</div>
                <div className="text-[10px] text-gray-500 mt-1">Senior Level</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-gray-100 text-[10px] font-medium shadow-sm">Distributed Systems</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-gray-100 text-[10px] font-medium shadow-sm">Kubernetes</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-gray-100 text-[10px] font-medium shadow-sm">TypeScript</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-gray-100 text-[10px] font-medium shadow-sm">+4 more</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

