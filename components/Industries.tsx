
import React from 'react';
import { ShoppingBag, Landmark, Truck, HeartPulse, Radio, Rocket } from 'lucide-react';
import { IndustryItem } from '../types';

const industries: IndustryItem[] = [
  { name: 'E-commerce', icon: <ShoppingBag /> },
  { name: 'Fintech', icon: <Landmark /> },
  { name: 'Logistics', icon: <Truck /> },
  { name: 'Healthcare', icon: <HeartPulse /> },
  { name: 'Telecom', icon: <Radio /> },
  { name: 'Startups', icon: <Rocket /> },
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-20 lg:py-24 bg-white dark:bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] lg:text-xs mb-3 lg:mb-4">VERTICALS</h2>
          <h3 className="text-3xl lg:text-5xl font-heading font-black text-slate-950 dark:text-white tracking-tight">Industries We Serve</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group p-6 lg:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 hover:bg-accent dark:hover:bg-accent transition-all duration-300 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1"
            >
              <div className="text-slate-400 group-hover:text-white mb-4 transition-colors">
                {React.cloneElement(industry.icon as React.ReactElement<any>, { size: 32, strokeWidth: 1.5 })}
              </div>
              <h5 className="font-heading font-black text-xs lg:text-base group-hover:text-white transition-colors tracking-tight uppercase">
                {industry.name}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
