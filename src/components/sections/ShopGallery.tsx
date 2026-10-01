/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Store, Glasses } from 'lucide-react';

import storefrontWebp from '../../assets/images/storefront.webp';
import storefrontJpg from '../../assets/images/storefront.jpg';
import interiorWebp from '../../assets/images/interior.webp';
import interiorJpg from '../../assets/images/interior.jpg';

interface GalleryItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  alt: string;
  webpSrc: string;
  jpgSrc: string;
  aspectRatio: string;
  description: string;
  icon: React.ReactNode;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'interior',
    number: '01',
    title: 'OUR STORE',
    subtitle: 'Flagship Storefront & Welcoming Entrance',
    alt: 'Interior of EYE CON Optical store showing eyewear displays and optical frames in Bokaro Steel City',
    webpSrc: interiorWebp,
    jpgSrc: interiorJpg,
    aspectRatio: 'aspect-[4/3] sm:aspect-[16/11]',
    description: 'Located in the heart of the optical district, our flagship showroom welcomes you with computerised eye testing facilities and curated eyewear selections.',
    icon: <Store className="w-4 h-4 text-[#FF8C42]" />,
  },
  {
    id: 'storefront',
    number: '02',
    title: 'EYEWEAR COLLECTION',
    subtitle: 'Precision Displays & Premium Lens Showcase',
    alt: 'EYE CON Optical storefront exterior near SBI Bank, Bari Co-operative Colony, Bokaro Steel City, Jharkhand',
    webpSrc: storefrontWebp,
    jpgSrc: storefrontJpg,
    aspectRatio: 'aspect-[4/3] sm:aspect-[16/11]',
    description: 'Explore our expansive collection of high-density composite acetate, titanium frames, and prescription lenses from world-renowned optical brands.',
    icon: <Glasses className="w-4 h-4 text-[#FF8C42]" />,
  },
];


export default function ShopGallery() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Close lightbox handler
  const handleCloseLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  // Previous image handler
  const handlePrevImage = useCallback(() => {
    setActiveLightboxIndex((prev) => (prev === null ? null : prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1));
  }, []);

  // Next image handler
  const handleNextImage = useCallback(() => {
    setActiveLightboxIndex((prev) => (prev === null ? null : (prev + 1) % GALLERY_ITEMS.length));
  }, []);

  // Body scroll locking & keyboard navigation
  useEffect(() => {
    if (activeLightboxIndex !== null) {
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') handleCloseLightbox();
        if (e.key === 'ArrowLeft') handlePrevImage();
        if (e.key === 'ArrowRight') handleNextImage();
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [activeLightboxIndex, handleCloseLightbox, handlePrevImage, handleNextImage]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;

    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNextImage();
      } else {
        handlePrevImage();
      }
    }
    setTouchStartX(null);
  };

  return (
    <section
      id="gallery"
      className="py-20 md:py-32 bg-[#F8FAFC] border-t border-[#E2E8F0] relative overflow-hidden select-none"
    >
      {/* Background Subtle Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0F4C81]/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#FF8C42]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16 md:mb-24 max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#FF8C42]" />
            <span className="text-[#FF8C42] font-mono text-xs tracking-widest uppercase font-semibold">
              OUR SHOWROOM
            </span>
          </div>

          <h2 className="font-sans text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Inside EYE CON
          </h2>

          <p className="text-slate-500 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            Experience our store, explore our collection.
          </p>
        </motion.div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* 01 — Storefront (Primary Featured Card) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 group cursor-pointer"
            onClick={() => setActiveLightboxIndex(0)}
          >
            <div className="relative rounded-sm overflow-hidden bg-slate-200 border border-[#E2E8F0] shadow-md transition-shadow duration-500 group-hover:shadow-2xl">
              {/* Top Editorial Label */}
              <div className="absolute top-4 left-4 z-20 bg-slate-900/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded-sm flex items-center gap-2 border border-white/10">
                <span className="font-mono text-xs text-[#FF8C42] font-bold">{GALLERY_ITEMS[0].number} —</span>
                <span className="font-mono text-xs uppercase tracking-wider">{GALLERY_ITEMS[0].title}</span>
              </div>

              {/* Main Photograph */}
              <div className="overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
                <picture>
                  <source srcSet={GALLERY_ITEMS[0].webpSrc} type="image/webp" />
                  <img
                    src={GALLERY_ITEMS[0].jpgSrc}
                    alt={GALLERY_ITEMS[0].alt}
                    className="w-full h-full object-contain bg-slate-900 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 700px"
                  />
                </picture>
              </div>

              {/* Subtle Dark Vignette & Hover Indicator */}
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-md text-slate-900 px-5 py-2.5 rounded-sm shadow-xl flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-4 h-4 text-[#0F4C81]" />
                  <span>View Full Photo</span>
                </div>
              </div>
            </div>

            {/* Editorial Caption */}
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#0F4C81] font-semibold mb-1">
                  {GALLERY_ITEMS[0].icon}
                  <span>{GALLERY_ITEMS[0].title}</span>
                </div>
                <h3 className="text-slate-800 font-bold text-lg tracking-tight">
                  {GALLERY_ITEMS[0].subtitle}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed max-w-lg">
                  {GALLERY_ITEMS[0].description}
                </p>
              </div>
              <span className="text-xs font-mono text-slate-400 shrink-0">STOREFRONT</span>
            </div>
          </motion.div>

          {/* 02 — Eyewear Display (Secondary Editorial Card) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 lg:mt-12 group cursor-pointer"
            onClick={() => setActiveLightboxIndex(1)}
          >
            <div className="relative rounded-sm overflow-hidden bg-slate-200 border border-[#E2E8F0] shadow-md transition-shadow duration-500 group-hover:shadow-2xl">
              {/* Top Editorial Label */}
              <div className="absolute top-4 left-4 z-20 bg-slate-900/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded-sm flex items-center gap-2 border border-white/10">
                <span className="font-mono text-xs text-[#FF8C42] font-bold">{GALLERY_ITEMS[1].number} —</span>
                <span className="font-mono text-xs uppercase tracking-wider">{GALLERY_ITEMS[1].title}</span>
              </div>

              {/* Secondary Photograph */}
              <div className="overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
                <picture>
                  <source srcSet={GALLERY_ITEMS[1].webpSrc} type="image/webp" />
                  <img
                    src={GALLERY_ITEMS[1].jpgSrc}
                    alt={GALLERY_ITEMS[1].alt}
                    className="w-full h-full object-contain bg-slate-900 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 500px"
                  />
                </picture>
              </div>

              {/* Subtle Dark Vignette & Hover Indicator */}
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-md text-slate-900 px-5 py-2.5 rounded-sm shadow-xl flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-4 h-4 text-[#0F4C81]" />
                  <span>View Full Photo</span>
                </div>
              </div>
            </div>

            {/* Editorial Caption */}
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#0F4C81] font-semibold mb-1">
                  {GALLERY_ITEMS[1].icon}
                  <span>{GALLERY_ITEMS[1].title}</span>
                </div>
                <h3 className="text-slate-800 font-bold text-lg tracking-tight">
                  {GALLERY_ITEMS[1].subtitle}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                  {GALLERY_ITEMS[1].description}
                </p>
              </div>
              <span className="text-xs font-mono text-slate-400 shrink-0">INTERIOR</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 select-none"
            role="dialog"
            aria-modal="true"
            aria-label="Image Lightbox View"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Controls Bar */}
            <div className="flex items-center justify-between text-white z-10 w-full max-w-7xl mx-auto">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-[#FF8C42] font-bold">
                  {GALLERY_ITEMS[activeLightboxIndex].number} —
                </span>
                <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-slate-200">
                  {GALLERY_ITEMS[activeLightboxIndex].title}
                </span>
                <span className="hidden sm:inline text-xs font-mono text-slate-500">
                  ({activeLightboxIndex + 1} / {GALLERY_ITEMS.length})
                </span>
              </div>

              <button
                onClick={handleCloseLightbox}
                className="p-2.5 rounded-sm bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/10 flex items-center gap-2 group"
                aria-label="Close Lightbox"
              >
                <span className="hidden sm:inline font-mono text-xs uppercase tracking-wider">CLOSE</span>
                <X className="w-5 h-5 transition-transform duration-200 group-hover:rotate-90" />
              </button>
            </div>

            {/* Main Lightbox Image View */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              {/* Previous Button */}
              <button
                onClick={handlePrevImage}
                className="absolute left-2 sm:left-6 z-20 p-3 rounded-sm bg-slate-900/80 hover:bg-[#0F4C81] text-white transition-colors border border-white/10 cursor-pointer shadow-xl"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Displayed Image */}
              <motion.div
                key={activeLightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="max-w-6xl max-h-[78vh] flex items-center justify-center p-2"
              >
                <picture>
                  <source srcSet={GALLERY_ITEMS[activeLightboxIndex].webpSrc} type="image/webp" />
                  <img
                    src={GALLERY_ITEMS[activeLightboxIndex].jpgSrc}
                    alt={GALLERY_ITEMS[activeLightboxIndex].alt}
                    className="max-h-[76vh] max-w-[90vw] object-contain rounded-sm shadow-2xl border border-white/10"
                  />
                </picture>
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNextImage}
                className="absolute right-2 sm:right-6 z-20 p-3 rounded-sm bg-slate-900/80 hover:bg-[#0F4C81] text-white transition-colors border border-white/10 cursor-pointer shadow-xl"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption & Controls Bar */}
            <div className="z-10 w-full max-w-4xl mx-auto text-center px-4">
              <h4 className="text-white font-bold text-base sm:text-lg tracking-tight">
                {GALLERY_ITEMS[activeLightboxIndex].subtitle}
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl mx-auto leading-relaxed">
                {GALLERY_ITEMS[activeLightboxIndex].description}
              </p>
              <div className="mt-3 flex items-center justify-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                <span>Use ← → keys or swipe to navigate</span>
                <span>•</span>
                <span>Esc to exit</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
