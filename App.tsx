
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Industries from './components/Industries';
import Clients from './components/Clients';
import Process from './components/Process';
import CallToAction from './components/CallToAction';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen font-body selection:bg-accent/30">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Industries />
        <Clients />
        <Process />
        <CallToAction />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
