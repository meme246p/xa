
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-accent rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-accent/20">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-slate-900/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-6xl font-heading font-extrabold mb-8 leading-tight">
              Ready to Improve Your Customer Experience?
            </h2>
            <p className="text-xl text-white/80 mb-10 font-medium">
              Join the list of premium Ethiopian companies transforming their support quality with us.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-black text-white px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
