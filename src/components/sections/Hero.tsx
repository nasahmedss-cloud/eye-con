/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, ShoppingBag, ShieldCheck } from 'lucide-react';
import heroDisplayWebp from '../../assets/images/hero_display_1779867748872.webp';
import heroDisplayPng from '../../assets/images/hero_display_1779867748872.png';

export default function Hero() {
  const handleScrollToCollections = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const el = document.getElementById('collections');
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 flex items-center bg-gradient-to-b from-[#0F4C81]/5 via-[#F8FAFC] to-[#F8FAFC] overflow-hidden"
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl -z-10 animate-pulse pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center select-none relative z-10">
        {/* Left text column (Instantaneous paint - 0ms render delay) */}
        <div className="lg:col-span-6 space-y-8 text-left relative">
          {/* Majestic Backdrop Label */}
          <div className="absolute -left-12 -top-24 text-[150px] sm:text-[180px] font-black text-[#0F4C81]/5 leading-none select-none z-0 pointer-events-none">
            LOOK
          </div>

          <div className="relative z-10 space-y-8">
            {/* Tag badge */}
            <span className="text-[#FF8C42] font-semibold tracking-widest uppercase text-xs block mb-4">
              Spring / Summer 2026 Collection
            </span>

            <h1 className="font-sans font-bold text-5xl sm:text-6xl lg:text-7xl text-slate-900 tracking-tight leading-[1.05]">
              See the World <br />
              <span className="text-[#0F4C81]">in Style.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-500 max-w-sm leading-relaxed">
              Discover the intersection of vision and high fashion. Handcrafted composite acetate, Japanese titanium, and precision-engineered lenses define your portrait.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={handleScrollToCollections}
                className="px-8 py-4 bg-[#0F4C81] text-white font-bold rounded-sm tracking-wide shadow-lg shadow-[#0F4C81]/20 cursor-pointer flex items-center justify-center gap-2 group transition-opacity hover:opacity-95"
              >
                <span>BROWSE FRAMES</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a
                href="#contact"
                className="px-6 py-4 rounded-sm border border-slate-200 text-[#0f4c81] hover:border-[#0f4c81] font-bold tracking-tight transition-all duration-300 text-center cursor-pointer text-sm"
              >
                VIEW CATALOG
              </a>
            </div>

            {/* Social Proof metrics */}
            <div className="pt-6 grid grid-cols-3 gap-6 border-t border-[#E2E8F0] max-w-sm">
              <div>
                <div className="text-3xl font-bold text-[#0F4C81]">4.9★</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mt-1">Google Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0F4C81]">15+</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mt-1">Premium Brands</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0F4C81]">24h</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mt-1">Lens Mounting</div>
              </div>
            </div>
          </div>
        </div>


        {/* Right visual column (Unblocked LCP container for instantaneous paint) */}
        <div className="lg:col-span-6 relative flex justify-center">
          {/* Framed Image Container with Sharp Corner styling */}
          <div className="relative w-full max-w-[500px] aspect-[4/3] sm:aspect-square lg:aspect-[4/5] rounded-sm overflow-hidden shadow-xl border border-[#E2E8F0] bg-slate-100 group">
            <picture>
              <source srcSet={heroDisplayWebp} type="image/webp" />
              <img
                src={heroDisplayPng}
                alt="Premium eyewear collection display at EYE CON Optical showroom, Bokaro Steel City"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={1376}
                height={768}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
              />
            </picture>
            {/* Ambient vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-65 pointer-events-none" />
          </div>

          {/* Floating Premium Badge with sharp edges */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute bottom-6 -left-4 sm:left-4 bg-white p-4 rounded-sm shadow-lg border border-[#E2E8F0] flex items-center gap-3 max-w-[240px]"
          >
            <div className="w-10 h-10 rounded-sm bg-orange-100 flex items-center justify-center text-brand-orange shrink-0">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Free Trials</div>
              <div className="text-xs font-sans font-bold text-slate-800 leading-tight uppercase">In-Store Frame Fitting</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="absolute -top-4 -right-2 bg-slate-900 border border-slate-800 text-white px-5 py-3 rounded-sm shadow-xl flex items-center gap-2 text-xs font-mono"
          >
            <ShieldCheck className="w-4 h-4 text-brand-orange" />
            <span className="uppercase tracking-widest text-[10px]">2-Year Warranty</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

