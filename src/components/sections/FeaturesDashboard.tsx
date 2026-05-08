"use client";

import React from 'react';
import { Icon } from '@iconify/react';

export default function FeaturesDashboard() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-24 py-24">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#F47A2C08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="relative z-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          
          {/* Left: Sticky Navigation */}
          <div className="lg:sticky lg:top-32 self-start space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-brand-charcoal mb-6 leading-[1.1]" style={{ fontFamily: 'var(--font-serif), serif' }}>
                Strategic Tools for Modern Careers
              </h2>
              <p className="text-sm text-neutral-500 leading-relaxed max-w-md">
                Advanced, autonomous utilities engineered to save you time, refine your profile, and significantly elevate your career trajectory.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <button className="text-left px-6 py-4 bg-brand-charcoal text-white rounded-2xl font-semibold text-sm transition-all flex justify-between items-center shadow-xl shadow-black/10">
                AI Portfolio Analysis
                <Icon icon="solar:alt-arrow-right-linear" />
              </button>
              <button className="text-left px-6 py-4 text-neutral-500 hover:text-brand-charcoal hover:bg-white rounded-2xl font-medium text-sm transition-all">
                Smart Document Parsing
              </button>
              <button className="text-left px-6 py-4 text-neutral-500 hover:text-brand-charcoal hover:bg-white rounded-2xl font-medium text-sm transition-all">
                Interview Prep Hub
              </button>
              <button className="text-left px-6 py-4 text-neutral-500 hover:text-brand-charcoal hover:bg-white rounded-2xl font-medium text-sm transition-all">
                Real-time Job Insights
              </button>
            </div>
          </div>

          {/* Right: Complex Dashboard Mockup */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-neutral-100 overflow-hidden flex flex-col h-full min-h-[500px]">
            {/* Mockup Header */}
            <div className="bg-neutral-50/80 backdrop-blur-md border-b border-neutral-100 p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                </div>
                <div className="h-4 w-px bg-neutral-200 mx-1"></div>
                <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Resume Insight Matrix</div>
              </div>
              <div className="w-8 h-8 rounded-lg bg-white border border-neutral-200 flex items-center justify-center">
                <Icon icon="solar:settings-linear" className="text-neutral-400" />
              </div>
            </div>
            
            {/* Mockup Body */}
            <div className="p-8 flex-1 grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#fbfcfb]">
              
              {/* Column 1: Graphs */}
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
                  <div className="flex justify-between text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-4">
                    <span>Technical Aptitude</span>
                    <span className="text-brand-orange">94%</span>
                  </div>
                  <div className="h-2 bg-brand-orange/10 rounded-full w-full">
                    <div className="h-full bg-brand-orange w-[94%] rounded-full shadow-[0_0_12px_rgba(244,122,44,0.3)]"></div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
                  <div className="flex justify-between text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-4">
                    <span>Cultural Alignment</span>
                    <span className="text-blue-500">82%</span>
                  </div>
                  <div className="h-2 bg-blue-100 rounded-full w-full">
                    <div className="h-full bg-blue-500 w-[82%] rounded-full shadow-[0_0_12px_rgba(59,130,246,0.3)]"></div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="bg-brand-charcoal text-white p-6 rounded-2xl flex items-center justify-between shadow-xl">
                    <div>
                      <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">Synergy Index</div>
                      <div className="text-2xl font-serif" style={{ fontFamily: 'var(--font-serif), serif' }}>Elite Match</div>
                    </div>
                    <div className="text-3xl font-bold text-brand-orange">96%</div>
                  </div>
                </div>
              </div>

              {/* Column 2: Profile List */}
              <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-6 flex flex-col">
              
                <div className="text-[10px] font-bold text-neutral-400 mb-2 uppercase tracking-widest border-b border-neutral-50 pb-3 flex items-center justify-between">
                  <span>Market Analysis</span>
                  <Icon icon="solar:chart-linear" />
                </div>
                {/* Profile item 1 */}
                <div className="flex items-center gap-3 py-3 border-b border-gray-50">
                  <img src="https://api.dicebear.com/9.x/glass/svg?seed=User1" alt="User" className="w-8 h-8 rounded-full object-cover" />
                  <div className="flex-1">
                    <div className="text-xs font-semibold">Elara Vance</div>
                    <div className="text-[10px] text-gray-400">Senior Frontend Dev</div>
                  </div>
                  <div className="text-xs font-medium text-green-600">Match</div>
                </div>

                {/* Profile item 2 */}
                <div className="flex items-center gap-3 mb-3 py-3 border-b border-gray-50 opacity-60">
                  <img src="https://api.dicebear.com/9.x/glass/svg?seed=User2" alt="User" className="w-8 h-8 rounded-full object-cover" />
                  <div className="flex-1">
                    <div className="text-xs font-semibold">Marcus Thorne</div>
                    <div className="text-[10px] text-gray-400">Backend Engineer</div>
                  </div>
                  <div className="text-[10px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded">Pending</div>
                </div>
                
                
                <div className="space-y-5 flex-1">
                  {[
                    { name: "Salary Range", val: "$140k - $180k", trend: "+12%" },
                    { name: "Demand Level", val: "Very High", trend: "Stable" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-1.5">
                      <div className="text-[11px] text-neutral-500">{item.name}</div>
                      <div className="flex justify-between items-center">
                        <div className="text-xs font-bold text-brand-charcoal">{item.val}</div>
                        <div className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded">{item.trend}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Actions */}
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <button className="py-2.5 text-[10px] font-bold text-white bg-brand-orange rounded-xl shadow-lg shadow-brand-orange/20 hover:opacity-90 transition-opacity">Full Report</button>
                  <button className="py-2.5 text-[10px] font-bold text-neutral-500 border border-neutral-100 rounded-xl hover:bg-neutral-50 transition-colors">Compare</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
