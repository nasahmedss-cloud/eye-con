/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Frame } from '../../types';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageSquareCode, ShieldCheck, Ruler, Sparkles } from 'lucide-react';

interface FrameDetailsModalProps {
  frame: Frame | null;
  onClose: () => void;
}

export default function FrameDetailsModal({ frame, onClose }: FrameDetailsModalProps) {
  if (!frame) return null;

  // Generate WhatsApp text for inquiry
  const getWhatsAppLink = () => {
    const message = `Hi EYE CON, I would love to inquire about the physical availability of the *${frame.name}* frame (₹${frame.price}, Style: ${frame.style}, Material: ${frame.material}). Can I book an in-store styling or eye assessment session?`;
    return `https://wa.me/918521021005?text=${encodeURIComponent(message)}`;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative bg-white w-full max-w-4xl rounded-sm overflow-hidden shadow-2xl border border-[#E2E8F0] grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-[85vh] z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-white/90 backdrop-blur-md hover:bg-white text-slate-705 hover:text-slate-900 rounded-sm shadow-md border border-[#E2E8F0] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left - Image showcase Column */}
          <div className="md:col-span-6 bg-slate-50 relative min-h-[280px] md:min-h-full">
            <img
              src={frame.imageUrl}
              alt={`${frame.name} eyeglasses — detailed view at EYE CON Optical, Bokaro`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              width={600}
              height={600}
            />
            {/* Subtle aesthetic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />
          </div>

          {/* Right - Spec & CTA Column */}
          <div className="md:col-span-6 p-6 md:p-8 flex flex-col overflow-y-auto">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-[#0F4C81]/10 text-[#0F4C81] text-[10px] font-mono font-bold uppercase tracking-wider rounded-sm">
                {frame.style}
              </span>
              <span className="px-3 py-1 bg-[#FF8C42]/10 text-[#FF8C42] text-[10px] font-mono font-bold uppercase tracking-wider rounded-sm">
                {frame.gender}
              </span>
            </div>

            <h2 className="font-sans font-bold text-2xl lg:text-3xl text-slate-900 mb-1 uppercase tracking-tight">
              {frame.name}
            </h2>

            <div className="text-xl font-bold font-sans text-[#0F4C81] mb-5">
              ₹{frame.price}
            </div>

            <p className="text-sm text-slate-550 leading-relaxed mb-6 font-sans">
              {frame.description}
            </p>

            {/* Technical Tabular Specs */}
            <div className="space-y-3.5 border-t border-b border-[#E2E8F0] py-5 mb-6 text-xs font-sans">
              <div className="flex items-center justify-between font-sans">
                <span className="text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1.5 font-mono text-[10px]">
                  <Sparkles className="w-3.5 h-3.5 text-brand-orange" /> MATERIAL
                </span>
                <span className="text-slate-800 font-bold">{frame.material}</span>
              </div>
              <div className="flex items-center justify-between font-sans">
                <span className="text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1.5 font-mono text-[10px]">
                  <Ruler className="w-3.5 h-3.5 text-brand-blue" /> CALIBRE DIMENSIONS
                </span>
                <span className="text-slate-800 font-mono font-bold">{frame.dimensions}</span>
              </div>
              <div className="flex items-center justify-between font-sans">
                <span className="text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1.5 font-mono text-[10px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> FRAME ORIGIN
                </span>
                <span className="text-slate-800 font-bold uppercase text-[11px] tracking-wide">Japanese Handcrafted</span>
              </div>
              {/* Color options pill badges */}
              <div className="flex flex-col gap-2 pt-1 border-t border-slate-50 font-sans">
                <span className="text-slate-400 font-bold uppercase tracking-widest font-mono text-[10px]">
                  AVAILABLE SHADES
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {frame.colors.map((color, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-white hover:bg-slate-50 text-slate-700 text-[11px] font-bold rounded-sm border border-[#E2E8F0] transition-colors"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* WhatsApp Inquiry Action */}
            <div className="mt-auto space-y-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-sm bg-[#25D366] hover:bg-[#128C7E] text-white font-bold transition-all duration-300 shadow-md flex items-center justify-center gap-2.5 text-center cursor-pointer uppercase text-xs tracking-widest"
              >
                <MessageSquareCode className="w-5 h-5" />
                <span>Reserve via WhatsApp</span>
              </a>
              <div className="text-center text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                OUR TEAM REPLIES ON WHATSAPP WITHIN 15 MINUTES
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
