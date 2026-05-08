"use client";

import React from 'react';
import { Icon } from '@iconify/react';

export default function WhyChoose() {
  return (
    <section className="px-6 md:px-20 py-16 text-center" style={{ background: '#F4F2EE' }}>
      <h2 className="text-3xl md:text-5xl tracking-tight leading-tight" style={{ fontFamily: 'var(--font-serif), serif' }}>
        Why Choose ResumeForge
      </h2>
      <p className="mt-4 text-sm text-neutral-500 max-w-md mx-auto">
        Smart AI, professional templates, and ATS-friendly resumes — everything you need to get hired faster.
      </p>
      <div className="mt-8 flex justify-center">
        <a href="#" className="group inline-flex items-center gap-2 pl-2 pr-6 py-2 rounded-full text-white text-sm" style={{ background: 'linear-gradient(135deg, #FFB871, #F47A2C)', boxShadow: '0 10px 30px -10px rgba(244,122,44,0.6)' }}>
          <span className="w-7 h-7 rounded-full bg-white/25 flex items-center justify-center">
            <Icon icon="solar:arrow-right-linear" width="14" />
          </span>
          Build My Resume with AI
        </a>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-10 text-left">
        <div>
          <div className="text-xs font-semibold text-neutral-700">Experience Launched</div>
          <div className="mt-3 border-t border-neutral-300"></div>
          <div className="mt-4 text-3xl md:text-4xl tracking-tight" style={{ fontFamily: 'var(--font-serif), serif' }}>Since 2021</div>
          <p className="mt-3 text-xs text-neutral-500 leading-relaxed">Built with a mission to simplify resume creation using intelligent automation.</p>
        </div>
        <div>
          <div className="text-xs font-semibold text-neutral-700">AI Resumes Generated</div>
          <div className="mt-3 border-t border-neutral-300"></div>
          <div className="mt-4 text-3xl md:text-4xl tracking-tight" style={{ fontFamily: 'var(--font-serif), serif', color: '#F47A2C' }}>100,000+</div>
          <p className="mt-3 text-xs text-neutral-500 leading-relaxed">Thousands of personalized resumes crafted across roles, industries, and career levels.</p>
        </div>
        <div>
          <div className="text-xs font-semibold text-neutral-700">User Success Score</div>
          <div className="mt-3 border-t border-neutral-300"></div>
          <div className="mt-4 text-3xl md:text-4xl tracking-tight" style={{ fontFamily: 'var(--font-serif), serif' }}>95%</div>
          <p className="mt-3 text-xs text-neutral-500 leading-relaxed">Most users see improved ATS results and higher interview shortlisting rates.</p>
        </div>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-5">
        <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: '4/3' }}>
          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c31dd008-598b-4fc9-b5c7-9c3e1d296d38_3840w.jpg" className="w-full h-full object-cover" alt="" />
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur rounded-full px-3 py-1.5 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center"><Icon icon="solar:layers-linear" width="12" style={{ color: 'white' }} /></span>
            <span className="text-xs">Pro Templates</span>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: '4/3' }}>
          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a4780cd9-2a3d-4bdc-9e5f-85a097b3a8bf_3840w.webp" className="w-full h-full object-cover" alt="" />
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur rounded-full px-3 py-1.5 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center"><Icon icon="solar:magic-stick-3-linear" width="12" style={{ color: 'white' }} /></span>
            <span className="text-xs">AI Resume Writing</span>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: '4/3' }}>
          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/75134536-4198-40bf-9944-315511fe8c0b_3840w.jpg" className="w-full h-full object-cover" alt="" />
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur rounded-full px-3 py-1.5 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center"><Icon icon="solar:bolt-linear" width="12" style={{ color: 'white' }} /></span>
            <span className="text-xs">Fast & Simple</span>
          </div>
        </div>
      </div>
    </section>
  );
}
