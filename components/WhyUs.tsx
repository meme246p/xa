
import React, { useEffect, useRef } from 'react';
import { ShieldCheck, TrendingUp, Users, Clock, DollarSign, LayoutDashboard, CheckCircle2 } from 'lucide-react';

const WhyUs: React.FC = () => {
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

  const reasons = [
    { title: 'Elite Talent', icon: <Users />, desc: 'Native-level fluency and rigorous training ensures your brand is represented perfectly.' },
    { title: 'Rapid Scalability', icon: <TrendingUp />, desc: 'Add 10 or 100 agents to your team within days to meet seasonal or growth demands.' },
    { title: 'Global Reliability', icon: <Clock />, desc: '24/7 coverage with triple-redundant internet and power systems for zero downtime.' },
    { title: 'Full Transparency', icon: <LayoutDashboard />, desc: 'Access real-time dashboards and call recordings for complete operational oversight.' },
  ];

  const stats = [
    { value: '1.2M+', label: 'Interactions' },
    { value: '99%', label: 'CSAT Score' },
    { value: '100%', label: 'Compliance' },
    { value: '24/7', label: 'Availability' },
  ];

  return (
    <section id="why-us" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden perspective-3000">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="lg:w-1/2 scroll-reveal">
            <h2 className="text-accent font-black tracking-[0.4em] uppercase text-[10px] lg:text-xs mb-4 lg:mb-6">THE EDGE</h2>
            <h3 className="text-3xl lg:text-7xl font-heading font-black mb-8 lg:mb-10 leading-tight lg:leading-[0.9] tracking-tight">
              Operational <br className="hidden lg:block" />
              <span className="text-slate-400">Excellence</span>
            </h3>
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-12 lg:mb-16 leading-relaxed font-medium">
              We provide the specialized infrastructure and professional talent you need to deliver world-class support at a fraction of the cost.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
              {reasons.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-4 group">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-md">
                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}
                  </div>
                  <div>
                    <h5 className="text-lg lg:text-xl font-heading font-black mb-1 lg:mb-2 group-hover:text-accent transition-colors">{item.title}</h5>
                    <p className="text-xs lg:text-sm text-slate-500 dark:text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative lg:preserve-3d scroll-reveal" style={{ transitionDelay: '300ms' }}>
            <div className="grid grid-cols-2 gap-4 lg:gap-8 relative z-10 lg:preserve-3d">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className={`glass-card p-6 sm:p-10 lg:p-14 rounded-2xl sm:rounded-[3rem] text-center lg:hover-3d lg:preserve-3d group ${idx % 2 === 1 ? 'lg:translate-y-12' : ''}`}
                >
                  <div className="text-2xl sm:text-4xl lg:text-6xl font-heading font-black text-slate-900 dark:text-white mb-2 lg:mb-4 lg:translate-z-40 drop-shadow-2xl">
                    {stat.value}
                  </div>
                  <div className="text-accent font-black tracking-widest uppercase text-[8px] lg:text-[10px] lg:translate-z-20 opacity-60 group-hover:opacity-100 transition-all">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full bg-accent/10 lg:bg-accent/20 blur-[80px] lg:blur-[150px] rounded-full animate-pulse"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
