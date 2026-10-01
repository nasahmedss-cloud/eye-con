/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Glasses, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import logoWebp from '../../assets/images/logo.webp';
import logoPng from '../../assets/images/logo.png';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-6 md:px-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <picture>
              <source srcSet={logoWebp} type="image/webp" />
              <img
                src={logoPng}
                alt="EYE CON Optical logo — Premium Eyewear Store, Bokaro Steel City"
                className="h-24 w-auto object-contain"
                width={200}
                height={96}
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
          <p className="text-sm leading-relaxed max-w-sm">
            Premium, minimal optical frames curated for contemporary styles. Visit our showroom to explore the perfect fit tailored to your personality.
          </p>
          <div className="flex items-center gap-4 pt-3">
            <a
              href="https://instagram.com/nas.ahmedss"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-blue hover:text-white flex items-center justify-center transition-all duration-300"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-blue hover:text-white flex items-center justify-center transition-all duration-300"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="https://wa.me/918521021005?text=Hi%20EYE%2520CON%2520Shop!%20I'm%2520visiting%2520your%2520showcase%2520and%2520would%2520love%2520to%2520learn%2520more%2520about%2520your%2520collections."
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-blue hover:text-white flex items-center justify-center transition-all duration-300"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.25 8.477 3.517 2.266 2.268 3.512 5.282 3.512 8.482-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.116-2.887-6.983-1.865-1.867-4.347-2.894-6.985-2.895-5.44 0-9.866 4.417-9.87 9.86-.001 1.737.457 3.43 1.323 4.931l-.98 3.577 3.73-.976zm11.332-6.526c-.302-.151-1.783-.879-2.06-.979s-.477-.151-.678.151c-.201.302-.779.979-.955 1.181-.176.201-.352.226-.653.076-.302-.151-1.272-.469-2.422-1.495-.895-.798-1.5-1.784-1.676-2.086-.176-.302-.019-.465.132-.614.136-.134.302-.352.453-.528.151-.176.201-.302.302-.503.1-.201.05-.377-.025-.528-.075-.151-.678-1.634-.93-2.238-.244-.59-.493-.51-.678-.52-.176-.009-.377-.01-.578-.01s-.528.075-.804.377c-.276.302-1.056 1.031-1.056 2.516s1.081 2.917 1.232 3.118c.151.201 2.128 3.249 5.156 4.556.72.311 1.282.497 1.72.637.723.23 1.38.197 1.9.12.58-.087 1.783-.73 2.035-1.435.251-.704.251-1.308.176-1.434s-.276-.201-.578-.352z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-sans font-semibold text-white tracking-wider text-sm uppercase mb-5">
            Collections
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <button onClick={() => handleNavClick('collections')} className="hover:text-white transition-colors cursor-pointer text-left">
                Premium Full-Rim Frames
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('collections')} className="hover:text-white transition-colors cursor-pointer text-left">
                Handcrafted Italian Acetate
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('collections')} className="hover:text-white transition-colors cursor-pointer text-left">
                Ultra-Light TR90 Polymer
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                Core Offerings
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-sans font-semibold text-white tracking-wider text-sm uppercase mb-5">
            Showroom Info
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-brand-orange shrink-0" />
              <span>
                Plot No 281, Near SBI Bank, <br />
                Bari Co-operative Colony, <br />
                Bokaro Steel City, <br />
                Jharkhand 827012, India
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-orange shrink-0" />
              <a href="tel:+918521021005" className="hover:underline hover:text-white transition-colors">+91 85210 21005</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-orange shrink-0" />
              <a href="mailto:eyecon.bokaro@gmail.com" className="hover:underline hover:text-white transition-colors">eyecon.bokaro@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Underline Divider */}
      <div className="max-w-7xl mx-auto border-t border-slate-800 my-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
        <div className="space-y-1 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} EYE CON Eyewear. All rights reserved.
          </div>
          <div className="text-slate-400 text-[11px] pt-0.5">
            Developed by <span className="text-[#FF8C42] font-semibold">Sohail Ansari</span> &bull; Phone: <a href="tel:7004836674" className="hover:text-white underline transition-colors">7004836674</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="hover:text-white transition-colors">Terms of Service</a>
          <button
            onClick={handleScrollTop}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-brand-orange text-white flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer"
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

    </footer>
  );
}
