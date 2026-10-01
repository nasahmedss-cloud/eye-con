/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Glasses } from 'lucide-react';

export default function NotFound() {
  // Set page title and prevent indexing of 404 pages
  useEffect(() => {
    const prevTitle = document.title;
    document.title = '404 — Page Not Found | EYE CON Optical';

    // Add noindex meta to prevent 404 pages from being indexed
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    meta.id = 'notfound-robots-meta';
    document.head.appendChild(meta);

    return () => {
      document.title = prevTitle;
      const existingMeta = document.getElementById('notfound-robots-meta');
      if (existingMeta) existingMeta.remove();
    };
  }, []);
  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleExploreFrames = () => {
    window.location.href = '/#collections';
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center px-6 py-20 select-none overflow-hidden relative">
      {/* Background decorative orbs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#0F4C81]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#FF8C42]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Animated Glasses Icon */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="mb-8"
        aria-hidden="true"
      >
        <div className="relative">
          {/* Oversized decorative 404 backdrop */}
          <div
            className="absolute -top-16 left-1/2 -translate-x-1/2 text-[130px] sm:text-[180px] font-black text-[#0F4C81]/5 leading-none select-none pointer-events-none whitespace-nowrap"
            aria-hidden="true"
          >
            404
          </div>

          {/* Glasses SVG — custom drawn, optical themed */}
          <svg
            width="180"
            height="72"
            viewBox="-16 0 172 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            className="relative z-10"
          >
            {/* Left temple arm */}
            <path d="M4 28 L-14 34" stroke="#0F4C81" strokeWidth="3.5" strokeLinecap="round" />
            {/* Left lens */}
            <rect x="4" y="10" width="52" height="38" rx="12" stroke="#0F4C81" strokeWidth="4" fill="#0F4C81" fillOpacity="0.07" />
            {/* Bridge */}
            <path d="M56 28 C62 22 78 22 84 28" stroke="#0F4C81" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            {/* Right lens */}
            <rect x="84" y="10" width="52" height="38" rx="12" stroke="#0F4C81" strokeWidth="4" fill="#0F4C81" fillOpacity="0.07" />
            {/* Right temple arm */}
            <path d="M136 28 L154 34" stroke="#0F4C81" strokeWidth="3.5" strokeLinecap="round" />
            {/* Orange accent glints */}
            <circle cx="28" cy="22" r="3.5" fill="#FF8C42" fillOpacity="0.75" />
            <circle cx="112" cy="22" r="3.5" fill="#FF8C42" fillOpacity="0.75" />
            {/* Question mark inside left lens */}
            <text x="30" y="36" textAnchor="middle" fill="#0F4C81" fontSize="18" fontWeight="700" fontFamily="monospace" opacity="0.45">?</text>
            {/* Question mark inside right lens */}
            <text x="110" y="36" textAnchor="middle" fill="#0F4C81" fontSize="18" fontWeight="700" fontFamily="monospace" opacity="0.45">?</text>
          </svg>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center max-w-lg relative z-10"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FF8C42]/10 text-[#FF8C42] font-mono text-xs font-semibold uppercase tracking-wider rounded-sm mb-6">
          <Glasses className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Error 404</span>
        </div>

        {/* 404 Heading */}
        <h1 className="font-sans font-black text-[80px] sm:text-[100px] leading-none text-[#0F4C81] tracking-tighter mb-2">
          404
        </h1>

        {/* Headline */}
        <h2 className="font-sans font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight mb-4">
          Oops! This page couldn't be found.
        </h2>

        {/* Supporting text */}
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-10 max-w-sm mx-auto">
          The page you're looking for may have moved or no longer exists. But our eyewear collection is always right where you left it.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="notfound-back-home"
            onClick={handleGoHome}
            className="w-full sm:w-auto px-8 py-4 bg-[#0F4C81] text-white font-bold rounded-sm tracking-wide shadow-lg shadow-[#0F4C81]/20 cursor-pointer flex items-center justify-center gap-2 group transition-all duration-300 hover:bg-[#0d3f6e] uppercase text-sm"
            aria-label="Go back to EYE CON homepage"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true" />
            <span>Back to Home</span>
          </button>

          <button
            id="notfound-explore-frames"
            onClick={handleExploreFrames}
            className="w-full sm:w-auto px-8 py-4 rounded-sm border border-slate-200 text-[#0F4C81] hover:border-[#0F4C81] hover:bg-[#0F4C81]/5 font-bold tracking-tight transition-all duration-300 text-center cursor-pointer text-sm uppercase"
            aria-label="Explore EYE CON eyewear frame collection"
          >
            Explore Frames
          </button>
        </div>

        {/* Store info footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 pt-8 border-t border-[#E2E8F0] text-center space-y-1"
        >
          <p className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
            EYE CON OPTICAL • Bari Co-operative Colony, Bokaro Steel City
          </p>
          <p className="text-[11px] font-mono text-slate-400">
            <a href="tel:+918521021005" className="hover:text-[#0F4C81] transition-colors">+91 85210 21005</a>
            {' '}•{' '}
            <a href="mailto:eyecon.bokaro@gmail.com" className="hover:text-[#0F4C81] transition-colors break-all">eyecon.bokaro@gmail.com</a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
