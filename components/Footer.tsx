
import React from 'react';
import { PhoneCall, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-accent rounded-lg p-1.5">
                <PhoneCall className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-heading font-bold tracking-tight uppercase">
                Call<span className="text-accent">Align</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Providing enterprise-level communication solutions and business process outsourcing for growth-focused companies in Ethiopia and beyond.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#industries" className="hover:text-accent transition-colors">Solutions</a></li>
              <li><a href="#why-us" className="hover:text-accent transition-colors">Why Choose Us</a></li>
              <li><a href="#clients" className="hover:text-accent transition-colors">Our Clients</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Quality Standards</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Infrastructure</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Security Compliance</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">Reach Out</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>Email: solutions@call-align.com</li>
              <li>Phone: +251 911 000 000</li>
              <li className="pt-4">
                <div className="bg-slate-900 border border-white/5 rounded-2xl p-4 text-xs font-medium">
                  Available Mon - Sat<br />
                  8:00 AM - 6:00 PM (GMT+3)
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-xs uppercase tracking-widest font-bold">
          <p>© {new Date().getFullYear()} Call Align Solutions. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <span>Built for Enterprise</span>
            <span>Optimized for Ethiopia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
