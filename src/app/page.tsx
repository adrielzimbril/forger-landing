"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import AIPowered from '@/components/sections/AIPowered';
import AIPoweredInterview from '@/components/sections/AIPoweredInterview';
import CareerPerformance from '@/components/sections/CareerPerformance';
import FeaturesDashboard from '@/components/sections/FeaturesDashboard';
import WhyCompanies from '@/components/sections/WhyCompanies';
import Features from '@/components/sections/Features';
import WhyChoose from '@/components/sections/WhyChoose';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1200px] mx-auto bg-white border-x border-gray-100 overflow-hidden relative">
        
        {/* Container Lines */}
        <div className="hidden md:block absolute inset-y-0 left-12 w-px pointer-events-none z-30 shadow-[0_30px_80px_-20px_rgba(60,60,100,0.2)] bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.06)_10%,rgba(0,0,0,0.06)_90%,transparent)]">
          <div className="absolute left-[-3px] top-24 w-1.5 h-1.5 bg-neutral-400"></div>
          <div className="absolute left-[-3px] bottom-24 w-1.5 h-1.5 bg-neutral-400"></div>
        </div>
        <div className="hidden md:block absolute inset-y-0 right-12 w-px pointer-events-none z-30 shadow-[0_30px_80px_-20px_rgba(60,60,100,0.2)] bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.06)_10%,rgba(0,0,0,0.06)_90%,transparent)]">
          <div className="absolute right-[-3px] top-24 w-1.5 h-1.5 bg-neutral-400"></div>
          <div className="absolute right-[-3px] bottom-24 w-1.5 h-1.5 bg-neutral-400"></div>
        </div>

        <Navbar />
        
        <main>
          <Hero />
          <AIPoweredInterview />
          <AIPowered />
          <CareerPerformance />
          <FeaturesDashboard />
          <WhyCompanies />
          <Features />
          <WhyChoose />
        </main>

        <Footer />
      </div>
    </div>
  );
}
