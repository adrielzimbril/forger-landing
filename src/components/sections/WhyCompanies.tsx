"use client";

import React from 'react';
import { Icon } from '@iconify/react';

export default function WhyCompanies() {
  return (
    <section className="relative z-10 py-24 bg-brand-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-24 text-center">
        <h2 className="tracking-tight text-4xl md:text-5xl font-medium" style={{ fontFamily: 'var(--font-serif), serif' }}>
          <span className="block">Why Companies</span>
          <span className="block text-brand-orange">Choose ResumeForge</span>
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-sm text-neutral-400">Smarter hiring, faster results, and better talent — all in one powerful platform.</p>
        <div className="mt-8">
          <a href="#" className="inline-block px-8 py-3.5 rounded-full text-sm font-semibold bg-brand-orange text-white shadow-lg shadow-brand-orange/20 hover:scale-105 transition-transform active:scale-95">Start Hiring Today</a>
        </div>



        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(180deg, rgba(200,242,74,0.06), rgba(255,255,255,0))', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-5" style={{ background: '#fff0a8', color: '#0a1f1a' }}>
              <Icon icon="solar:medal-ribbon-linear" width="20" />
            </div>
            <div className="text-base" style={{ fontWeight: 500 }}>Faster Hiring Process</div>
            <div className="mt-2 text-xs" style={{ color: '#9bb0aa' }}>Reduce time-to-hire with AI-powered candidate matching and automated workflows.</div>
          </div>
          <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(180deg, rgba(220,214,255,0.06), rgba(255,255,255,0))', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-5" style={{ background: '#dcb8ff', color: '#0a1f1a' }}>
              <Icon icon="solar:star-linear" width="20" />
            </div>
            <div className="text-base" style={{ fontWeight: 500 }}>AI-Powered Candidate Matching</div>
            <div className="mt-2 text-xs" style={{ color: '#9bb0aa' }}>Our intelligent system matches candidates based on skills, experience, and role fit.</div>
          </div>
          <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(180deg, rgba(160,180,255,0.06), rgba(255,255,255,0))', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-5" style={{ background: '#b8c4ff', color: '#0a1f1a' }}>
              <Icon icon="solar:chart-2-linear" width="20" />
            </div>
            <div className="text-base" style={{ fontWeight: 500 }}>Data-Driven Hiring Decisions</div>
            <div className="mt-2 text-xs" style={{ color: '#9bb0aa' }}>Make smarter decisions with real-time hiring insights and performance reports.</div>
          </div>
          <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(180deg, rgba(200,242,74,0.06), rgba(255,255,255,0))', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-5" style={{ background: '#c8f24a', color: '#0a1f1a' }}>
              <Icon icon="solar:shield-check-linear" width="20" />
            </div>
            <div className="text-base" style={{ fontWeight: 500 }}>Secure, Reliable & Protected</div>
            <div className="mt-2 text-xs" style={{ color: '#9bb0aa' }}>Your data is protected with enterprise-grade security and compliance standards.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
