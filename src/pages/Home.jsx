import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import PortfolioGrid from '../components/PortfolioGrid';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import HorizontalShowcase from '../components/HorizontalShowcase';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

const Home = () => {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <PortfolioGrid />
        <HorizontalShowcase />
        <Contact />
      </main>
    </motion.div>
  );
};

export default Home;
