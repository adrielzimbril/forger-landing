"use client";

import React from 'react';

export default function CareerPerformance() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-24 py-24 bg-white">
      <div className="text-center relative">
        <div className="absolute left-1/2 -translate-x-1/2 -top-12 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight relative z-10 leading-[1.1]" style={{ fontFamily: 'var(--font-serif), serif' }}>
          <span className="block">Career Performance</span>
          <span className="block text-brand-orange">at a Glance</span>
        </h2>
        <p className="mt-8 max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-neutral-500">
          Unlock your potential with data-backed insights. Our platform tracks market trends, skill demands, and your personal growth to ensure you're always ahead of the curve.
        </p>
      </div>


      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 border-t border-neutral-200">
        <div className="pt-8 md:border-r md:border-dashed border-neutral-200 md:pr-8">
          <span className="inline-block px-4 py-1.5 rounded-full text-2xl tracking-tight" style={{ background: '#dcd6ff', fontFamily: 'var(--font-fraunces), serif', fontWeight: 500 }}>99.7%</span>
          <div className="mt-4 text-base font-medium">System Reliability</div>
          <div className="mt-2 text-sm text-[#5a6b66]">Dependable, high-performance platform you can always count on.</div>
        </div>
        <div className="pt-8 border-t md:border-t-0 border-neutral-200">
          <span className="inline-block px-4 py-1.5 rounded-full text-2xl tracking-tight" style={{ background: '#fff0a8', fontFamily: 'var(--font-fraunces), serif', fontWeight: 500 }}>45,000+</span>
          <div className="mt-4 text-base font-medium">Talented Candidates Matched</div>
          <div className="mt-2 text-sm text-[#5a6b66]">From startups to global companies leveraging our daily tools.</div>
        </div>
        <div className="pt-8 border-t border-neutral-200 md:border-r md:border-dashed md:pr-8">
          <span className="inline-block px-4 py-1.5 rounded-full text-2xl tracking-tight" style={{ background: '#f0a8df', fontFamily: 'var(--font-fraunces), serif', fontWeight: 500 }}>87%</span>
          <div className="mt-4 text-base font-medium">Faster Hiring Workflow</div>
          <div className="mt-2 text-sm text-[#5a6b66]">AI-driven screening and automated processes to save your time.</div>
        </div>
        <div className="pt-8 border-t border-neutral-200">
          <span className="inline-block px-4 py-1.5 rounded-full text-2xl tracking-tight" style={{ background: '#c8f24a', fontFamily: 'var(--font-fraunces), serif', fontWeight: 500 }}>4,000+</span>
          <div className="mt-4 text-base font-medium">Teams Optimizing Hiring</div>
          <div className="mt-2 text-sm text-[#5a6b66]">Dependable, high-performance platform you can always count on.</div>
        </div>
      </div>
    </section>
  );
}
