/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/// <reference types="react" />
import React, { useState, useEffect } from 'react';

// Ensure JSX intrinsic elements are available in environments where the
// global JSX.IntrinsicElements type may be missing.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Glasses } from 'lucide-react';
import logoWebp from '../../assets/images/logo.webp';
import logoPng from '../../assets/images/logo.png';

interface NavItem {
  label: string;
  href: string; // targets element ID e.g., '#hero'
  id: string;   // identifier
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Collections', href: '#collections', id: 'collections' },
  { label: 'Inside Store', href: '#gallery', id: 'gallery' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Location', href: '#location', id: 'location' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];


export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      // Background change on scroll
      setHasScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 120; // offset for nav height

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80, // offset for navbar
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-brand-border/40 py-2'
            : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="inline-flex items-center group cursor-pointer"
          >
                      <picture>
              <source srcSet={logoWebp} type="image/webp" />
              <img
                src={logoPng}
                alt="EYE CON Optical — Premium Eyewear Store, Bokaro Steel City"
                className="h-24 w-auto object-contain bg-transparent"
                width={200}
                height={96}
                decoding="async"
                fetchPriority="high"
              />
            </picture>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative text-sm font-semibold tracking-wider transition-colors duration-200 cursor-pointer pb-1 ${isActive ? 'text-[#0F4C81] border-b-2 border-[#0F4C81]' : 'text-slate-500 hover:text-[#0F4C81]'
                    }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="px-6 py-2.5 bg-[#FF8C42] text-white text-xs font-bold rounded-sm hover:opacity-90 transition-opacity tracking-wider uppercase inline-block"
            >
              BOOK CONSULTATION
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[64px] z-40 bg-white/95 backdrop-blur-lg md:hidden flex flex-col px-8 py-12 gap-8 border-t border-brand-border/50 shadow-xl"
          >
            <div className="flex flex-col gap-6">
              {NAV_ITEMS.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`text-2xl font-serif font-medium tracking-tight py-2 border-b border-slate-100 ${isActive ? 'text-brand-blue font-semibold' : 'text-slate-500'
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-brand-orange" />
                      )}
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_ITEMS.length * 0.05 }}
              className="mt-auto flex flex-col gap-4"
            >
              <div className="text-xs font-mono text-slate-400">
                EYE CON STORE • PREMIUM FRAME SELECTIONS
              </div>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="w-full text-center bg-brand-blue text-white py-4 rounded-xl font-semibold hover:bg-brand-blue/90 transition-colors"
              >
                Find Us / Inquire
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
