
import React, { useEffect, useState } from 'react';
import { ArrowRight, BarChart3, Users2, Activity, ShieldCheck, Headphones } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      // Sensitivity managed for professionalism
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 12,
        y: (e.clientY / window.innerHeight - 0.5) * 12
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  
  // Controlled 3D transformations: subtle on mobile to prevent "thin collapse"
  // Range is severely limited on mobile for stability
  const baseRotationY = isMobile 
    ? (mousePos.x * 0.1) // Negligible rotation on mobile
    : -15 + Math.min(scrollY / 30, 20);
    
  const baseRotationX = isMobile 
    ? 2 + (mousePos.y * 0.1) // Slight constant tilt for mobile
    : 8 - Math.min(scrollY / 50, 10);

  // Parallax layers (scaled down for mobile)
  const frontLayerOffset = scrollY * (isMobile ? -0.05 : -0.12);
  const midLayerOffset = scrollY * (isMobile ? -0.02 : -0.04);
  const backLayerOffset = scrollY * (isMobile ? 0.02 : 0.04);
  
  return (
    <section className="relative pt-32 pb-16 lg:pt-56 lg:pb-56 overflow-hidden perspective-deep">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full pointer-events-none overflow-hidden">
        <div 
          className="absolute top-[15%] right-[10%] w-[50%] h-[50%] bg-accent/20 dark:bg-accent/10 blur-[100px] lg:blur-[120px] rounded-full animate-pulse-glow"
          style={{ transform: `translate(${mousePos.x * -0.3}px, ${scrollY * 0.15}px)` }}
        ></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Headline Content */}
          <div className="flex-1 text-center lg:text-left z-20" style={{ transform: `translateY(${isMobile ? 0 : scrollY * 0.03}px)` }}>
            <div className="inline-flex items-center space-x-3 bg-slate-950/5 dark:bg-white/5 backdrop-blur-2xl border border-slate-950/10 dark:border-white/10 px-4 py-2 rounded-full text-[9px] lg:text-xs font-black tracking-[0.2em] uppercase text-accent mb-6 lg:mb-12 shadow-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span>Premium Call Center Ops</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-[8rem] font-heading font-black leading-[0.95] lg:leading-[0.85] mb-6 lg:mb-10 tracking-tighter text-slate-950 dark:text-white">
              SCALE YOUR <br className="hidden lg:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-400 to-accent-bright">SUPPORT</span>
            </h1>
            
            <p className="text-base lg:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 lg:mb-14 leading-relaxed font-medium px-2 lg:px-0">
              Ethiopia's premier BPO partner for expert telemarketing, technical support, and scalable customer experience solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <a
                href="#contact"
                className="group w-full sm:w-auto bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-10 py-5 lg:px-12 lg:py-6 rounded-2xl lg:rounded-3xl font-black text-lg lg:text-xl transition-all flex items-center justify-center gap-4 shadow-2xl hover:bg-accent dark:hover:bg-accent hover:text-white active:scale-95"
              >
                Start Partnership
                <ArrowRight className="w-6 h-6 lg:w-7 lg:h-7 group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto px-10 py-5 lg:px-10 lg:py-6 rounded-2xl lg:rounded-3xl font-bold border-2 border-slate-200 dark:border-white/10 hover:border-accent transition-all flex items-center justify-center gap-3 text-slate-700 dark:text-slate-300 backdrop-blur-md"
              >
                Our Solutions
              </a>
            </div>
          </div>

          {/* Visual Assembly - Redesigned for mobile stability */}
          <div className="flex-1 w-full max-w-3xl relative preserve-3d py-16 lg:py-0 scale-[0.8] sm:scale-95 lg:scale-100 mt-8 lg:mt-0">
            <div 
              className="relative z-10 preserve-3d transition-transform duration-700 ease-out"
              style={{ 
                transform: `rotateY(${baseRotationY + (isMobile ? 0 : mousePos.x * 0.4)}deg) rotateX(${baseRotationX + (isMobile ? 0 : mousePos.y * 0.4)}deg)` 
              }}
            >
              {/* Back Glow - Subtler on mobile */}
              <div 
                className="absolute inset-0 bg-accent/20 blur-[60px] lg:blur-[100px] -z-10 rounded-full opacity-40 transform translate-z-negative-100"
                style={{ transform: `translateZ(-100px) translateY(${backLayerOffset}px)` }}
              ></div>

              {/* Main Console Panel */}
              <div className="glass-card rounded-[2.5rem] lg:rounded-[3.5rem] p-1 border-2 border-white/20 dark:border-white/5 relative overflow-hidden aspect-[4/3] flex flex-col preserve-3d shadow-2xl">
                <div className="p-4 lg:p-8 border-b border-white/10 flex items-center justify-between translate-z-10">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/30"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/30"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/30"></div>
                  </div>
                  <div className="text-[8px] lg:text-[10px] font-black tracking-[0.3em] opacity-30">CALL_ALIGN // HUB_01</div>
                </div>

                <div className="flex-1 p-6 lg:p-12 flex flex-col justify-center gap-6 lg:gap-8 preserve-3d">
                   <div className="space-y-2 lg:space-y-4 translate-z-20">
                      <div className="h-1 lg:h-1.5 w-24 lg:w-32 bg-accent/20 rounded-full"></div>
                      <div className="text-3xl lg:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Peak Quality</div>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-4 lg:gap-6 translate-z-20">
                      <div className="h-12 lg:h-16 bg-slate-100 dark:bg-white/5 rounded-xl lg:rounded-2xl border border-white/5 flex items-center px-3 lg:px-4 gap-3 lg:gap-4">
                         <Headphones className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
                         <div className="flex-1 h-1.5 bg-accent/10 rounded-full overflow-hidden">
                            <div className="h-full w-[85%] bg-accent animate-pulse"></div>
                         </div>
                      </div>
                      <div className="h-12 lg:h-16 bg-slate-100 dark:bg-white/5 rounded-xl lg:rounded-2xl border border-white/5 flex items-center px-3 lg:px-4 gap-3 lg:gap-4">
                         <ShieldCheck className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-400" />
                         <div className="flex-1 h-1.5 bg-emerald-400/10 rounded-full overflow-hidden">
                            <div className="h-full w-[98%] bg-emerald-400"></div>
                         </div>
                      </div>
                   </div>
                </div>
              </div>

              {/* Personnel Stats (Mobile stabilized) */}
              <div 
                className="absolute -top-12 -left-4 lg:-top-16 lg:-left-16 w-48 lg:w-72 glass-card p-5 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] preserve-3d transform translate-z-100 shadow-2xl border-2 border-white/40 dark:border-white/10"
                style={{ 
                  transform: `translateZ(${isMobile ? 40 : 100}px) translateY(${frontLayerOffset}px)`
                }}
              >
                <div className="flex items-center gap-3 mb-4 lg:mb-6 translate-z-10">
                  <div className="p-2 lg:p-3 bg-accent/20 rounded-xl text-accent"><Users2 className="w-5 h-5" /></div>
                  <div className="font-black text-[9px] lg:text-xs uppercase tracking-widest opacity-40">Personnel</div>
                </div>
                <div className="text-2xl lg:text-5xl font-black mb-1 lg:mb-2 translate-z-20">1,400+</div>
                <div className="text-[8px] lg:text-[10px] font-bold text-accent tracking-widest uppercase">Expert Agents</div>
              </div>

              {/* Performance Stats (Mobile stabilized) */}
              <div 
                className="absolute -bottom-8 -right-4 lg:-bottom-12 lg:-right-12 w-52 lg:w-80 glass-card p-5 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] preserve-3d transform translate-z-60 shadow-2xl border-2 border-white/40 dark:border-white/10"
                style={{ 
                  transform: `translateZ(${isMobile ? 30 : 60}px) translateY(${midLayerOffset}px)`
                }}
              >
                <div className="flex items-center justify-between mb-4 lg:mb-6 translate-z-10">
                  <BarChart3 className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-400" />
                  <div className="px-2 py-1 bg-emerald-400/10 text-emerald-400 text-[8px] font-black rounded-lg uppercase tracking-tighter">Live Support</div>
                </div>
                <div className="flex items-end gap-1 h-12 lg:h-20 translate-z-20">
                  {[30, 60, 40, 90, 50, 100, 75, 45].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-emerald-400/20 to-emerald-400 rounded-t-md" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>

              {/* Orbital Activity Indicator */}
              <div 
                className="absolute top-1/2 -right-8 lg:-right-16 w-16 h-16 lg:w-32 lg:h-32 bg-white dark:bg-slate-900 border border-white/10 rounded-full flex items-center justify-center animate-spin-slow preserve-3d transform translate-z-100 shadow-xl"
                style={{
                  transform: `translateZ(${isMobile ? 50 : 120}px) translateY(${frontLayerOffset * 0.8}px)`
                }}
              >
                <Activity className="w-6 h-6 lg:w-10 lg:h-10 text-accent animate-pulse" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
