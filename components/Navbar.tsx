
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowRight, Phone, Mail, Globe } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when menu is open to prevent background jitter
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Solutions', href: '#industries' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl border-b border-slate-200 dark:border-white/5 py-3 shadow-xl' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <Logo className="w-10 h-10 transform group-hover:rotate-12 transition-transform duration-500" size={40} />
          <span className="text-xl font-heading font-black tracking-tighter text-slate-950 dark:text-white uppercase">
            CALL<span className="text-accent">ALIGN</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-bold tracking-wide text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <div className="h-6 w-[1px] bg-slate-200 dark:bg-white/10 mx-2"></div>
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-accent/10 hover:text-accent transition-all duration-300 border border-transparent hover:border-accent/20"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="bg-slate-950 dark:bg-accent hover:bg-accent dark:hover:bg-accent-hover text-white px-8 py-3 rounded-2xl text-sm font-black transition-all transform hover:scale-105 hover:shadow-[0_10px_20px_rgba(20,184,166,0.3)] active:scale-95"
          >
            GET QUOTE
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-3 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-2xl transition-all active:scale-90 shadow-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Better Responsive Menu: Full-Screen Command Center */}
      <div className={`lg:hidden fixed inset-0 z-[110] transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        {/* Backdrop blur layer */}
        <div className="absolute inset-0 bg-slate-50/90 dark:bg-slate-950/95 backdrop-blur-2xl" onClick={() => setMobileMenuOpen(false)}></div>
        
        {/* Menu content */}
        <div className={`relative h-full w-full flex flex-col p-8 transition-transform duration-500 transform ${mobileMenuOpen ? 'translate-y-0' : 'translate-y-12'}`}>
          
          <div className="flex items-center justify-between mb-12">
             <div className="flex items-center space-x-3">
              <Logo className="w-8 h-8" size={32} />
              <span className="text-lg font-heading font-black tracking-tighter text-slate-950 dark:text-white uppercase">
                CALL<span className="text-accent">ALIGN</span>
              </span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="p-4 bg-slate-200/50 dark:bg-white/5 rounded-2xl text-slate-900 dark:text-white active:scale-90 transition-transform">
              <X className="w-8 h-8" />
            </button>
          </div>

          <div className="flex flex-col space-y-4 mb-auto">
            <p className="text-[10px] font-black text-accent tracking-[0.4em] uppercase mb-4 ml-2">Main Navigation</p>
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className="text-4xl font-heading font-black tracking-tighter text-slate-900 dark:text-white hover:text-accent transition-all flex items-center justify-between group p-2"
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <span className="group-hover:translate-x-4 transition-transform duration-300">{link.name}</span>
                <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
              </a>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/5 space-y-8">
            <div className="grid grid-cols-1 gap-4">
               <a href="tel:+251911000000" className="flex items-center gap-4 p-5 bg-white dark:bg-white/5 rounded-[2rem] border border-slate-200 dark:border-white/5">
                <div className="bg-accent/10 p-3 rounded-xl text-accent"><Phone className="w-5 h-5" /></div>
                <div>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Call Sales</p>
                   <p className="text-sm font-bold dark:text-white">+251 911 000 000</p>
                </div>
              </a>
              <a href="mailto:solutions@call-align.com" className="flex items-center gap-4 p-5 bg-white dark:bg-white/5 rounded-[2rem] border border-slate-200 dark:border-white/5">
                <div className="bg-accent/10 p-3 rounded-xl text-accent"><Mail className="w-5 h-5" /></div>
                <div>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Inquiry</p>
                   <p className="text-sm font-bold dark:text-white">solutions@call-align.com</p>
                </div>
              </a>
            </div>

            <a
              href="#contact"
              className="w-full block bg-slate-950 dark:bg-accent text-white text-center py-6 rounded-3xl font-black text-xl shadow-2xl shadow-accent/20"
              onClick={(e) => handleLinkClick(e, '#contact')}
            >
              REQUEST DEPLOYMENT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
