
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { ContactFormData } from '../types';
import { sendTelegramMessage } from '../services/telegramService';

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    const success = await sendTelegramMessage(data);
    
    if (success) {
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Info Side */}
          <div className="lg:w-1/3">
            <h2 className="text-accent font-black tracking-[0.3em] uppercase text-xs mb-6">CONTACT US</h2>
            <h3 className="text-4xl lg:text-6xl font-heading font-black mb-8 leading-tight text-slate-900 dark:text-white tracking-tighter">
              Let's Scale Together
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 font-medium leading-relaxed">
              Have questions about our pricing or integration process? Our team is ready to provide a custom quote for your requirements.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email Us</div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">solutions@call-align.com</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Direct Line</div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">+251 911 000 000</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
            <div className="bg-slate-50 dark:bg-slate-900/40 p-8 lg:p-14 rounded-[3.5rem] border border-slate-200 dark:border-white/5 shadow-2xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Full Name */}
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Full Name *</label>
                    <input
                      {...register('fullName', { required: 'Name is required' })}
                      type="text"
                      className={`w-full bg-white dark:bg-slate-950 border-2 ${errors.fullName ? 'border-red-500' : 'border-slate-100 dark:border-slate-800'} rounded-2xl px-6 py-5 focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all dark:text-white`}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1 ml-1 font-bold">{errors.fullName.message}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Email Address *</label>
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                      })}
                      type="email"
                      className={`w-full bg-white dark:bg-slate-950 border-2 ${errors.email ? 'border-red-500' : 'border-slate-100 dark:border-slate-800'} rounded-2xl px-6 py-5 focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all dark:text-white`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 ml-1 font-bold">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Phone */}
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full bg-white dark:bg-slate-950 border-2 border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all dark:text-white"
                      placeholder="+251 ..."
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Inquiry Type</label>
                    <select
                      {...register('subject')}
                      className="w-full bg-white dark:bg-slate-950 border-2 border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all dark:text-white appearance-none cursor-pointer"
                    >
                      <option value="">Select a topic</option>
                      <option value="Customer Support">Customer Support Partnership</option>
                      <option value="Lead Generation">Sales & Lead Gen</option>
                      <option value="Back Office">Back-Office BPO</option>
                      <option value="Technical Support">Technical Support Outsourcing</option>
                      <option value="Other">Other Query</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Message *</label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={6}
                    className={`w-full bg-white dark:bg-slate-950 border-2 ${errors.message ? 'border-red-500' : 'border-slate-100 dark:border-slate-800'} rounded-2xl px-6 py-5 focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all resize-none dark:text-white`}
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1 ml-1 font-bold">{errors.message.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  disabled={status === 'loading'}
                  type="submit"
                  className={`w-full flex items-center justify-center gap-3 py-6 rounded-2xl font-black text-xl transition-all ${
                    status === 'loading' ? 'bg-slate-300 cursor-not-allowed text-slate-500' : 'bg-accent hover:bg-accent-hover text-white shadow-xl shadow-accent/20 hover:scale-[1.02]'
                  }`}
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-7 h-7 animate-spin" />
                  ) : (
                    <>
                      Send Deployment Request
                      <Send className="w-6 h-6" />
                    </>
                  )}
                </button>

                {/* Status Notifications */}
                {status === 'success' && (
                  <div className="flex items-center gap-4 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 p-5 rounded-2xl border border-emerald-500/20">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <p className="text-sm font-bold">Inquiry Sent! We will contact you within 24 hours.</p>
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-4 text-rose-600 dark:text-rose-400 bg-rose-500/5 p-5 rounded-2xl border border-rose-500/20">
                    <AlertCircle className="w-6 h-6 flex-shrink-0" />
                    <p className="text-sm font-bold">Network error. Please try again or email us directly.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
