
import React, { useState, useEffect, useRef } from 'react';
import { Headset, PhoneOutgoing, Wrench, RefreshCcw, Database, Languages, X, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'inbound',
    title: 'Inbound Customer Support',
    description: 'Expert multi-channel support to handle queries, complaints, and orders with peak professionalism.',
    longDescription: 'Our inbound support teams act as a seamless extension of your brand. We prioritize First Call Resolution (FCR) and minimize wait times using advanced queuing logic and empathetic, highly-trained agents.',
    features: [
      '24/7/365 Multi-channel support (Voice, Email, Chat)',
      'First Call Resolution (FCR) focus',
      'Advanced CRM integration',
      'Quality assurance monitoring for every shift',
      'Escalation management protocols'
    ],
    icon: <Headset className="w-8 h-8" />,
  },
  {
    id: 'outbound',
    title: 'Outbound Sales & Lead Gen',
    description: 'Proactive outreach strategies to grow your customer base and qualify high-potential leads.',
    longDescription: 'Drive revenue growth through sophisticated outbound campaigns. We combine data-driven targeting with persuasive communication to convert cold leads into loyal customers.',
    features: [
      'Targeted B2B and B2C lead qualification',
      'Appointment setting and scheduling',
      'Telemarketing and direct sales',
      'Market research and data collection',
      'Automated dialer optimization'
    ],
    icon: <PhoneOutgoing className="w-8 h-8" />,
  },
  {
    id: 'tech',
    title: 'Technical Support',
    description: 'Specialized Tier 1 and Tier 2 technical assistance for your software or hardware products.',
    longDescription: 'Bridge the gap between technology and users. Our technical agents are trained to troubleshoot complex issues with patience and clarity, reducing product friction and churn.',
    features: [
      'Level 1 and Level 2 helpdesk support',
      'Troubleshooting and issue diagnosis',
      'Product setup and onboarding assistance',
      'Knowledge base management',
      'Remote desktop assistance'
    ],
    icon: <Wrench className="w-8 h-8" />,
  },
  {
    id: 'retention',
    title: 'Customer Retention',
    description: 'Personalized follow-ups and surveys to maximize customer lifetime value and loyalty.',
    longDescription: 'Retaining an existing customer is more cost-effective than acquiring a new one. We implement proactive churn-reduction strategies through win-back campaigns and loyalty management.',
    features: [
      'Churn analysis and prevention',
      'Win-back and re-engagement campaigns',
      'Net Promoter Score (NPS) surveys',
      'Customer loyalty program management',
      'Subscription renewal management'
    ],
    icon: <RefreshCcw className="w-8 h-8" />,
  },
  {
    id: 'backoffice',
    title: 'Data Entry & Back-Office',
    description: 'Precise administrative support and database management to streamline your core operations.',
    longDescription: 'Offload repetitive administrative tasks to our precise back-office teams. We ensure high data integrity and rapid turnaround times for all processing needs.',
    features: [
      'High-speed data entry and validation',
      'Database cleansing and management',
      'Document processing and indexing',
      'Invoice processing and verification',
      'Virtual assistant services'
    ],
    icon: <Database className="w-8 h-8" />,
  },
  {
    id: 'multilingual',
    title: 'Multilingual Handling',
    description: 'Amharic, Afan Oromo, English, and French support to serve diverse markets seamlessly.',
    longDescription: 'Ethiopia is a diverse hub. We offer true native-level support across Ethiopia\'s major languages and international business languages to help you scale locally and globally.',
    features: [
      'Native Amharic and Afan Oromo support',
      'Fluent English and French agents',
      'Cultural nuance and localized messaging',
      'Translation and localization services',
      'Global market reach strategy'
    ],
    icon: <Languages className="w-8 h-8" />,
  },
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
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

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="services" ref={sectionRef} className="py-24 lg:py-40 relative bg-white dark:bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-accent font-black tracking-[0.4em] uppercase text-[10px] lg:text-xs mb-6 scroll-reveal">OUR CAPABILITIES</h2>
        <h3 className="text-4xl lg:text-7xl font-heading font-black mb-20 text-slate-900 dark:text-white tracking-tight scroll-reveal leading-none">
          BPO Solutions
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 perspective-deep">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => {
                setSelectedService(service);
                document.body.style.overflow = 'hidden';
              }}
              className="group glass-card p-10 lg:p-12 rounded-[2.5rem] lg:rounded-[3.5rem] border border-slate-200 dark:border-white/10 hover-3d preserve-3d transition-all duration-700 text-left cursor-pointer relative scroll-reveal shadow-2xl"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-10 right-10 text-[10px] font-black opacity-10 tracking-[0.3em] uppercase transform translate-z-10">
                {service.id}
              </div>
              
              <div className="bg-accent/10 dark:bg-white/5 w-16 h-16 lg:w-20 lg:h-20 rounded-3xl flex items-center justify-center text-accent mb-12 group-hover:bg-accent group-hover:text-white transition-all duration-500 transform group-hover:translate-z-60 shadow-inner">
                {React.cloneElement(service.icon as React.ReactElement, { size: 32 })}
              </div>
              
              <h4 className="text-2xl lg:text-3xl font-heading font-black mb-6 group-hover:text-accent transition-colors transform group-hover:translate-z-40 leading-tight">
                {service.title}
              </h4>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-base mb-12 transform group-hover:translate-z-20">
                {service.description}
              </p>
              
              <div className="flex items-center text-xs font-black text-accent tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-all transform group-hover:translate-z-30">
                LEARN MORE <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-3 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-12 perspective-deep">
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-3xl" onClick={closeModal}></div>
          <div className="relative bg-white dark:bg-slate-900 w-full max-w-6xl rounded-[3rem] lg:rounded-[4rem] shadow-2xl overflow-hidden max-h-[95vh] flex flex-col border border-white/10 animate-reveal-3d">
            <div className="p-8 lg:p-14 flex items-center justify-between border-b border-slate-100 dark:border-white/5">
              <div className="flex items-center gap-8">
                <div className="bg-accent/10 text-accent p-6 rounded-[2rem] hidden sm:flex items-center justify-center shadow-inner">
                  {React.cloneElement(selectedService.icon as React.ReactElement, { size: 40 })}
                </div>
                <div>
                  <h3 className="text-3xl lg:text-6xl font-heading font-black tracking-tighter leading-none">{selectedService.title}</h3>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="h-[1px] w-10 bg-accent"></span>
                    <p className="text-accent font-black text-xs tracking-[0.3em] uppercase">Enterprise Standard</p>
                  </div>
                </div>
              </div>
              <button onClick={closeModal} className="p-4 bg-slate-100 dark:bg-white/5 hover:bg-rose-500 hover:text-white rounded-2xl transition-all shadow-xl">
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="p-8 lg:p-14 overflow-y-auto flex-1 custom-scrollbar">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-7 space-y-12">
                  <p className="text-xl lg:text-3xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {selectedService.longDescription}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="glass-card p-8 rounded-[2rem] border border-black/5 dark:border-white/5">
                        <h5 className="font-black text-xs mb-4 text-accent uppercase tracking-[0.2em]">Scale Ready</h5>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Scale your agent count in record time with our ready-to-deploy talent pool.</p>
                    </div>
                    <div className="glass-card p-8 rounded-[2rem] border border-black/5 dark:border-white/5">
                        <h5 className="font-black text-xs mb-4 text-accent uppercase tracking-[0.2em]">Quality Driven</h5>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Continuous monitoring and QA ensure every interaction meets global standards.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="bg-slate-50 dark:bg-white/5 p-10 lg:p-12 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-inner">
                    <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest mb-10">Key Deliverables</h4>
                    <ul className="space-y-6">
                      {selectedService.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-base lg:text-lg font-bold text-slate-700 dark:text-slate-300 leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#contact" onClick={closeModal} className="mt-14 group flex items-center justify-center gap-4 bg-accent hover:bg-accent-hover text-white py-6 px-10 rounded-[2rem] font-black text-lg transition-all shadow-2xl shadow-accent/20">
                      Partner With Us <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
