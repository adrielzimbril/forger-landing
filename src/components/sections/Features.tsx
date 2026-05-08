"use client";

import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Features() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate score arc on scroll
    const arc = document.querySelector('#score-arc');
    if (arc) {
      gsap.fromTo(arc, 
        { strokeDashoffset: 125 }, 
        { 
          strokeDashoffset: 65, 
          duration: 1.4, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#score-arc',
            start: 'top 80%',
          }
        }
      );
    }
  }, []);

  return (
    <section className="px-6 md:px-20 py-16 text-center">
      <h2 className="text-3xl md:text-5xl tracking-tight leading-tight" style={{ fontFamily: 'var(--font-serif), serif' }}>
        Features That Make<br />ResumeForge Stand Out
      </h2>
      <p className="mt-4 text-sm text-neutral-500 max-w-md mx-auto">
        From AI-powered writing to ATS optimization everything you need for a job-winning resume.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-5 text-left">
        {/* Feature 1 */}
        <div className="rounded-2xl p-6 relative overflow-hidden" style={{ backgroundImage: "url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d14dc069-558a-4c51-8aad-5cc237f9b61d_1600w.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '320px' }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(20,20,30,0.55), rgba(20,20,30,0.3))' }}></div>
          <div className="relative">
            <h3 className="text-white text-lg font-semibold">AI Writes It for You</h3>
            <p className="text-white/80 text-xs mt-2 leading-relaxed max-w-sm">AI helps you write professional summaries and bullet points. Improve tone, fix mistakes, and sound confident instantly.</p>
            <div className="mt-5 bg-white rounded-xl p-4 text-neutral-900">
              <div className="text-xs font-semibold">Professional Summary</div>
              <p className="text-[11px] text-neutral-600 mt-2 leading-relaxed">
                Write 2–4 short sentences to interest the reader. Mention your role, experience, and most importantly, your biggest achievements, best qualities and skills.
              </p>
              <p className="text-[11px] mt-3 leading-relaxed" style={{ color: '#0a7a4a' }}>
                Experienced and effective Business Development manager bringing forth significant value and a genuine passion for management.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="rounded-2xl p-6 relative overflow-hidden" style={{ backgroundImage: "url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e534354d-c5f2-4399-a1d9-2f50338e8c47_1600w.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '320px' }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(20,20,30,0.55), rgba(20,20,30,0.3))' }}></div>
          <div className="relative">
            <h3 className="text-white text-lg font-semibold">Guided Resume Flow</h3>
            <p className="text-white/80 text-xs mt-2 leading-relaxed max-w-sm">Build your resume step by step with clear instructions. No confusion, no guesswork — just follow and finish.</p>
            <div className="mt-5 bg-white rounded-xl p-4 text-neutral-900 space-y-2.5">
              <div className="flex items-center gap-3 text-xs">
                <Icon icon="solar:check-circle-bold" width="18" style={{ color: '#16a34a' }} />
                <span className="font-medium">Step 1</span>
                <span className="text-neutral-400">•</span>
                <span className="text-neutral-600">Personal Details</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <Icon icon="solar:check-circle-bold" width="18" style={{ color: '#16a34a' }} />
                <span className="font-medium">Step 2</span>
                <span className="text-neutral-400">•</span>
                <span className="text-neutral-600">Personal Summary</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <Icon icon="solar:check-circle-bold" width="18" style={{ color: '#16a34a' }} />
                <span className="font-medium">Step 3</span>
                <span className="text-neutral-400">•</span>
                <span className="text-neutral-600">Skills</span>
              </div>
              <div className="flex gap-2 pt-1">
                <span className="text-[10px] px-2.5 py-1 rounded-md border border-neutral-200 flex items-center gap-1">Management Skills <Icon icon="solar:add-circle-linear" width="11" /></span>
                <span className="text-[10px] px-2.5 py-1 rounded-md border border-neutral-200 flex items-center gap-1">Leadership <Icon icon="solar:add-circle-linear" width="11" /></span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="rounded-2xl p-6 relative overflow-hidden" style={{ backgroundImage: "url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '280px' }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(20,20,30,0.55), rgba(20,20,30,0.3))' }}></div>
          <div className="relative">
            <h3 className="text-white text-lg font-semibold">Resume Quality Score</h3>
            <p className="text-white/80 text-xs mt-2 leading-relaxed max-w-sm">See how strong your resume really is. Get instant insights and clear improvement suggestions.</p>
            <div className="mt-5 bg-white rounded-xl p-4">
              <div className="text-xs font-semibold">ResumeForge Score</div>
              <div className="text-[10px] text-neutral-500">My first resume</div>
              <div className="mt-3 flex justify-center">
                <div className="relative w-32 h-16">
                  <svg viewBox="0 0 100 50" className="w-full h-full">
                    <path d="M 10 50 A 40 40 0 0 1 90 50" stroke="#f3f4f6" strokeWidth="8" fill="none" strokeLinecap="round" />
                    <path id="score-arc" d="M 10 50 A 40 40 0 0 1 90 50" stroke="#F47A2C" strokeWidth="8" fill="none" strokeLinecap="round" strokeDasharray="125" strokeDashoffset="125" />
                    <circle cx="60" cy="14" r="4" fill="#F47A2C" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-1">
                    <div className="text-lg font-semibold">48%</div>
                    <div className="text-[9px] text-neutral-500">Need Improvement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="rounded-2xl p-6 relative overflow-hidden" style={{ backgroundImage: "url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '280px' }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(20,20,30,0.55), rgba(20,20,30,0.3))' }}></div>
          <div className="relative">
            <h3 className="text-white text-lg font-semibold">Match Any Job Instantly</h3>
            <p className="text-white/80 text-xs mt-2 leading-relaxed max-w-sm">Drop a job post link and let AI understand what recruiters want. Your resume gets tailored automatically for that role.</p>
            <div className="mt-5 space-y-2.5">
              <div className="bg-white rounded-xl px-4 py-2.5 flex items-center justify-between">
                <span className="text-[11px] text-neutral-400">https://www.figma.com</span>
                <Icon icon="solar:close-circle-linear" width="14" style={{ color: '#999' }} />
              </div>
              <div className="bg-white rounded-xl px-4 py-2.5">
                <div className="text-[10px] text-neutral-500 mb-1">Paste a link to the job you want</div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px]">https://dribbble.com/wonklab_agency</span>
                  <Icon icon="solar:check-circle-bold" width="16" style={{ color: '#16a34a' }} />
                </div>
              </div>
              <div className="bg-white rounded-xl px-4 py-2 flex items-center gap-2">
                <Icon icon="solar:link-linear" width="14" style={{ color: '#0a66c2' }} />
                <span className="text-[11px]">linkedin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
