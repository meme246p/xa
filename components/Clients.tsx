
import React from 'react';

const Clients: React.FC = () => {
  const logos = [
    'Ethio Telecom', 'Abyssinia Bank', 'Safaricom Ethiopia', 'Zemen Bank', 'Dashen Bank', 'Ethiopian Airlines', 'CBE'
  ];

  return (
    <section id="clients" className="py-32 border-y border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-950/50 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-20 text-center relative z-10">
        <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Our Partners</h2>
        <h3 className="text-3xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white max-w-2xl mx-auto">
          Trusted by Leading Ethiopian Companies
        </h3>
      </div>
      
      <div className="relative overflow-hidden w-full group">
        {/* Gradient overlays for smooth fading edges */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10"></div>

        <div className="flex animate-marquee whitespace-nowrap hover:pause py-10">
          {[...Array(2)].map((_, listIdx) => (
            <div key={listIdx} className="flex items-center space-x-24 px-12">
              {logos.map((logo, i) => (
                <div key={i} className="flex items-center space-x-6 grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 hover:scale-110">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 flex items-center justify-center font-black text-accent text-2xl">
                    {logo[0]}
                  </div>
                  <span className="text-3xl lg:text-4xl font-heading font-extrabold tracking-tighter text-slate-800 dark:text-slate-200">
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default Clients;
