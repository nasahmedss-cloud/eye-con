/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquareReply, Send, Phone, Mail, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const tempErrors: typeof errors = {};
    if (!formData.name.trim()) tempErrors.name = 'Please provide your name.';
    if (!formData.message.trim()) tempErrors.message = 'Please provide a message or frame request.';
    if (formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) tempErrors.email = 'Please provide a valid email format.';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error on type
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // Simulate reliable submitting transition
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger mailto fallback so user can actually shoot an email pre-composed!
      const subject = `Inquiry of EYE CON Eyewear - ${formData.name}`;
      const body = `Hi EYE CON Team,\n\nI would love to learn more about your collections and services.\n\nMy details:\nName: ${formData.name}\nEmail: ${formData.email || 'N/A'}\n\nMessage:\n${formData.message}\n\nSent from EYE CON Web Showcase.`;
      
      const mailtoUrl = `mailto:eyecon.bokaro@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open composer safely on a timeout so they visualize the green checkmark first
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 1000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left info column (5 cols) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FF8C42]/10 text-[#FF8C42] font-mono text-xs font-semibold uppercase tracking-wider rounded-sm">
                <MessageSquareReply className="w-3.5 h-3.5" />
                <span>Contact Channels</span>
              </div>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight uppercase">
                Let’s Connect
              </h2>
              <p className="text-slate-500 font-sans text-sm sm:text-base leading-relaxed">
                Have specific frame requests, prescription prescriptions, or stylistic inquiries? Reach out via WhatsApp for immediate priority booking or drop us an email with the form.
              </p>
            </div>            {/* Direct Channel Tiles */}
            <div className="space-y-4">
              {/* WhatsApp direct Tile */}
              <a
                href="https://wa.me/918521021005?text=Hi%20EYE%2520CON%2520Shop!%20I'm%2520visiting%2520your%2520showcase%2520and%2520would%2520love%2520to%2520learn%2520more%2520about%2520your%2520collections."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-sm bg-emerald-50 border border-emerald-100/60 hover:bg-emerald-100/60 transition-colors duration-200 group cursor-pointer text-left"
              >
                <div className="w-11 h-11 rounded-sm bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12.008.01c-6.61 0-11.948 5.338-11.948 11.947 0 2.097.546 4.142 1.587 5.946L0 24l6.162-1.687c1.758.951 3.725 1.454 5.73 1.455 6.613 0 11.95-5.34 11.95-11.997 0-3.2-.1246-6.214-3.511-8.482C21.433 1.258 15.21.01 12.008.01z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-900 text-sm group-hover:text-[#128C7E] uppercase tracking-wider transition-colors">WhatsApp Hotline</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Fastest response for availability & bookings.</p>
                  <span className="text-[11px] font-mono text-emerald-600 font-bold block mt-1">+91 85210 21005</span>
                </div>
              </a>

              {/* Direct call tile */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-sm bg-slate-50 border border-[#E2E8F0] hover:bg-slate-100/10 transition-colors text-left space-y-2">
                  <Phone className="w-4 h-4 text-[#0F4C81]" />
                  <h4 className="font-sans font-bold text-slate-800 text-xs uppercase tracking-wider font-mono">Store Call</h4>
                  <a href="tel:+918521021005" className="text-slate-600 font-sans text-xs underline font-semibold block mt-1">+91 85210 21005</a>
                </div>
                <div className="p-4 rounded-sm bg-slate-50 border border-[#E2E8F0] hover:bg-slate-100/10 transition-colors text-left space-y-2 min-w-0 overflow-hidden">
                  <Mail className="w-4 h-4 text-[#FF8C42]" />
                  <h4 className="font-sans font-bold text-slate-800 text-xs uppercase tracking-wider font-mono">Email Support</h4>
                  <a href="mailto:eyecon.bokaro@gmail.com" className="text-slate-600 font-sans text-xs underline font-semibold block mt-1 break-all">eyecon.bokaro@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right form column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 p-8 rounded-sm border border-[#E2E8F0] relative overflow-hidden text-left">
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <h3 className="font-sans font-bold text-slate-900 text-lg uppercase tracking-wider">Leave a Message</h3>
                      <p className="text-xs text-slate-500 font-sans">Submit below; we will draft a direct email instantly for you.</p>
                    </div>

                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold font-mono text-slate-500 uppercase tracking-widest block">
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          disabled={loading}
                          className={`w-full px-4 py-3 bg-white border rounded-sm font-sans text-sm focus:outline-none transition-all duration-200 ${
                            errors.name
                              ? 'border-red-400 focus:ring-1 focus:ring-red-400'
                              : 'border-slate-200 focus:border-[#0F4C81] focus:ring-1 focus:ring-[#0F4C81]'
                          }`}
                        />
                        {errors.name && (
                          <div className="absolute right-3 top-3.5 text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                      {errors.name && (
                        <p className="text-[11px] text-red-500 font-medium font-sans mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Input (Optional) */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold font-mono text-slate-500 uppercase tracking-widest block">
                        Email Address (Optional)
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="hello@example.com"
                          disabled={loading}
                          className={`w-full px-4 py-3 bg-white border rounded-sm font-sans text-sm focus:outline-none transition-all duration-200 ${
                            errors.email
                              ? 'border-red-400 focus:ring-1 focus:ring-red-400'
                              : 'border-slate-200 focus:border-[#0F4C81] focus:ring-1 focus:ring-[#0F4C81]'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-[11px] text-red-500 font-medium font-sans mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message Textarea */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-bold font-mono text-slate-500 uppercase tracking-widest block">
                        Message or Frame Request *
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Inquire about a specific model, frame fitting service, or ask us any question."
                          disabled={loading}
                          className={`w-full px-4 py-3 bg-white border rounded-sm font-sans text-sm focus:outline-none resize-none transition-all duration-200 ${
                            errors.message
                              ? 'border-red-400 focus:ring-1 focus:ring-red-400'
                              : 'border-slate-200 focus:border-[#0F4C81] focus:ring-1 focus:ring-[#0F4C81]'
                          }`}
                        />
                        {errors.message && (
                          <div className="absolute right-3 top-3.5 text-red-500">
                            <AlertCircle className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                      {errors.message && (
                        <p className="text-[11px] text-red-500 font-medium font-sans mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-sm bg-[#0F4C81] hover:bg-[#FF8C42] text-white font-bold transition-all duration-300 shadow-md shadow-[#0F4C81]/15 cursor-pointer flex items-center justify-center gap-2 transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed uppercase text-xs tracking-widest"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>
                    <div className="text-center text-[10px] font-mono text-slate-400 mt-2 uppercase tracking-wide">
                      * FORM TRANSMITS VIA YOUR DEFAULT SYSTEM MAIL AGENT PRECOMPOSED.
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 px-4 space-y-6 flex flex-col items-center justify-center min-h-[400px]"
                  >
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 animate-bounce" />
                    <div className="space-y-2">
                      <h3 className="font-sans font-bold text-xl text-slate-900 uppercase">Message Drafted Successfully!</h3>
                      <p className="text-sm text-slate-600 max-w-sm font-sans">
                        Thank you, <strong className="text-slate-800 font-semibold">{formData.name}</strong>. We have mapped your inquiry and are compiling your email draft details...
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-[#E2E8F0] rounded-sm max-w-sm text-left font-mono text-xs text-slate-500 space-y-1">
                      <div>Name: {formData.name}</div>
                      <div>Email: {formData.email || 'N/A'}</div>
                      <div className="line-clamp-2">Message: {formData.message}</div>
                    </div>

                    <p className="text-[10px] font-mono text-slate-400 uppercase">
                      Redirecting you to complete drafting in your email composer, click back once done.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
