"use client";

import Logo from './Logo';
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <footer className="relative px-6 md:px-20 pt-32 pb-12 bg-[#1A1A1A] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-12 mb-24">
          <div className="col-span-2 lg:col-span-4">
            <Logo size={42} isFooter className="mb-8 group cursor-pointer" />
            <p className="text-neutral-400 text-sm md:text-base max-w-xs leading-relaxed mb-10">
              The world's most advanced AI-powered resume builder. Forge your career path with data-driven insights and professional designs.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: "ant-design:twitter-outlined", label: "Twitter" },
                { icon: "ant-design:linkedin-filled", label: "LinkedIn" },
                { icon: "ant-design:instagram-filled", label: "Instagram" },
                { icon: "ant-design:github-filled", label: "GitHub" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-[#F47A2C] transition-all duration-300"
                >
                  <Icon icon={social.icon} width="20" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-[11px] mb-8 uppercase tracking-[0.25em] text-white/50">Product</h4>
            <ul className="space-y-4 text-sm text-neutral-400 font-medium">
              <li><a href="#" className="hover:text-[#F47A2C] transition-colors">Resume Builder</a></li>
              <li><a href="#" className="hover:text-[#F47A2C] transition-colors">AI Interviewer</a></li>
              <li><a href="#" className="hover:text-[#F47A2C] transition-colors">Cover Letter</a></li>
              <li><a href="#" className="hover:text-[#F47A2C] transition-colors">ATS Checker</a></li>
              <li><a href="#" className="hover:text-[#F47A2C] transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-[11px] mb-8 uppercase tracking-[0.25em] text-white/50">Resources</h4>
            <ul className="space-y-4 text-sm text-neutral-400 font-medium">
              <li><a href="#" className="hover:text-[#F47A2C] transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-[#F47A2C] transition-colors">Career Blog</a></li>
              <li><a href="#" className="hover:text-[#F47A2C] transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-[#F47A2C] transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-[#F47A2C] transition-colors">Job Guides</a></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-4">
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
              <h4 className="font-bold text-[11px] mb-4 uppercase tracking-[0.25em] text-orange-500">Stay Ahead</h4>
              <p className="text-sm text-neutral-300 mb-8 leading-relaxed">Join 50,000+ professionals getting career-boosting AI tips weekly.</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-sm w-full focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-[#F47A2C] transition-all text-white placeholder:text-neutral-600"
                />
                <button className="bg-[#F47A2C] text-white rounded-2xl px-6 py-3.5 text-sm font-bold hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/20 transition-all active:scale-[0.98] whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-[10px] text-neutral-500 mt-4 px-1">
                By subscribing, you agree to our Privacy Policy and Terms.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-white/5">
          <div className="text-[11px] font-medium text-neutral-500 uppercase tracking-[0.15em]">
            © 2025 ResumeForge. All rights reserved.
          </div>
          <div className="flex items-center gap-10 text-[11px] font-semibold text-neutral-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

