/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Frame } from '../../types';
import { motion } from 'motion/react';
import { Eye, ArrowRight } from 'lucide-react';

interface FrameCardProps {
  frame: Frame;
  onOpenDetails: (frame: Frame) => void;
}

export default function FrameCard({ frame, onOpenDetails }: FrameCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-sm overflow-hidden border border-[#E2E8F0] hover:border-[#0F4C81] shadow-sm transition-all duration-300 flex flex-col h-full"
    >
      {/* Label and style badge absolute markers on photo */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 items-start">
        <span className="px-2 py-0.5 bg-white text-[#0F4C81] text-[10px] font-mono font-bold uppercase tracking-widest rounded-sm shadow-sm border border-[#E2E8F0]">
          {frame.style}
        </span>
        <span className="px-2 py-0.5 bg-[#0F4C81]/10 text-[#0F4C81] text-[9px] font-mono uppercase tracking-wider rounded-sm font-semibold">
          {frame.material.split(' & ')[0]}
        </span>
      </div>

      {/* Frame Image Area */}
      <div className="relative aspect-[4/3] bg-slate-50 overflow-hidden cursor-pointer" onClick={() => onOpenDetails(frame)}>
        <img
          src={frame.imageUrl}
          alt={`${frame.name} eyeglasses frame at EYE CON Optical, Bokaro`}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
          width={400}
          height={300}
        />
        {/* Hover overlay with button */}
        <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(frame);
            }}
            className="p-3 bg-white text-[#0F4C81] rounded-sm shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 cursor-pointer hover:bg-[#0F4C81] hover:text-white"
            aria-label={`View details for ${frame.name}`}
            title={`Inspect ${frame.name} details`}
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Frame Details Body */}
      <div className="p-6 flex flex-col flex-grow text-left">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-sans font-bold text-slate-900 text-lg group-hover:text-[#0F4C81] transition-colors duration-200">
            {frame.name}
          </h3>
          <span className="font-mono font-bold text-[#0F4C81] shrink-0">
            ₹{frame.price}
          </span>
        </div>

        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mt-1">
          {frame.description}
        </p>

        {/* Action Button */}
        <div className="mt-auto pt-5 flex items-center justify-between border-t border-slate-100">
          <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
            {frame.dimensions}
          </span>
          <button
            onClick={() => onOpenDetails(frame)}
            className="flex items-center gap-1.5 text-xs font-bold text-[#0F4C81] hover:text-[#FF8C42] transition-colors duration-200 group/btn cursor-pointer"
          >
            <span className="uppercase tracking-wider">Details</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
