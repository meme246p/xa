
import React, { useEffect, useRef } from 'react';
import { StepItem } from '../types';

const steps: StepItem[] = [
  {
    number: '01',
    title: 'Audit & Analysis',
    description: 'We perform a deep-scan of your current workflows and customer touchpoints.'
  },
  {
    number: '02',
    title: 'Node Setup',
    description: 'Specialized agent recruitment and secure infrastructure provisioning.'
  },
  {
    number: '03',
    title: 'Hyper-Training',
    description: 'Intensive brand immersion and product mastery training loops.'
  },
  {
    number: '04',
    title: 'Live Launch',
    description: 'Operational activation with high-precision supervisory monitoring.'
  },
  {
    number: '05',
    title: 'Optimization',
    description: 'Continuous data-driven refinement for peak ROI and CSAT scores.'
  }
];

const Process: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const items = sectionRef.current?.querySelectorAll('.scroll-reveal');
    items?.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden perspective-2000" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 lg:mb-28 scroll-reveal">
          <h2 className="text-accent font-black tracking-[0.4em] uppercase text-[10px] lg:text-xs mb-4 lg:mb-6">THE METHOD</h2>
          <h3 className="text-3xl lg:text-6xl font-heading font-black text-slate-950 dark:text-white tracking-tight">Continuous Deployment</h3>
        </div>

        <div className="relative">
          {/* Horizontal Line Background - Hide on mobile */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 dark:bg-white/5 opacity-50"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-10">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="relative z-10 group scroll-reveal lg:preserve-3d"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="mb-6 lg:mb-8 flex lg:block items-center gap-6">
                   <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl lg:rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 flex items-center justify-center text-2xl lg:text-3xl font-black text-accent shadow-xl group-hover:bg-accent group-hover:text-white transition-all duration-500 transform lg:group-hover:scale-110 lg:group-hover:rotate-6">
                    {step.number}
                  </div>
                  <h4 className="lg:mt-8 text-xl lg:text-2xl font-heading font-black lg:mb-6 group-hover:text-accent transition-colors tracking-tight">
                    {step.title}
                  </h4>
                </div>
                <p className="text-sm lg:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {step.description}
                </p>
                
                {/* Visual Connector Dot - Hide on mobile */}
                <div className="hidden lg:block absolute top-12 -right-5 w-3 h-3 rounded-full bg-slate-200 dark:bg-white/10 group-hover:bg-accent transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
