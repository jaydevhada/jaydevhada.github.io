import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import Hero3D from './Hero3D';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const taglineRef = useRef(null);
  const actionsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out', duration: 2 } });

      tl.from(subtitleRef.current, { y: 20, opacity: 0, duration: 1 })
        .from(titleRef.current, { y: 100, opacity: 0, skewY: 5 }, "-=0.8")
        .from(taglineRef.current, { y: 20, opacity: 0 }, "-=1.2")
        .from(actionsRef.current, { y: 20, opacity: 0 }, "-=1.4");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const xPos = (clientX / window.innerWidth - 0.5) * 20;
    const yPos = (clientY / window.innerHeight - 0.5) * 20;
    
    gsap.to('.hero-content', {
      x: xPos,
      y: yPos,
      duration: 1,
      ease: 'power2.out'
    });
  };

  return (
    <section className="hero" ref={heroRef} onMouseMove={handleMouseMove}>
      <Hero3D />
      <div className="container hero-container">
        <div className="hero-content">
          <div className="overflow-hidden">
            <span className="hero-subtitle" ref={subtitleRef}>Jaydev Hada</span>
          </div>
          
          <h1 className="hero-title display-text" ref={titleRef}>
            Graphic <br />
            <span className="text-gradient-premium">Designer</span>
          </h1>
          
          <div className="hero-tagline-container" ref={taglineRef}>
            <p className="hero-availability">Available for full-time opportunities</p>
            <p className="hero-tagline">
              Graphic Designer with 2.5+ years of experience in advertisement design, product creatives, and social media marketing graphics.
            </p>
          </div>
          
          <div className="hero-actions" ref={actionsRef}>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jaydevh567@gmail.com&su=Portfolio%20Contact%20Message" 
              className="btn-premium"
              target="_blank"
              rel="noopener noreferrer"
            >
              📧 Email Me
            </a>
            <a href="#portfolio" className="btn-outline-premium">
              View Portfolio <ArrowRight size={18} />
            </a>
            <a href="https://drive.google.com/file/d/1J0U8PpNIz0iolQvPXgh5XZrFtgRbi-iG/view" className="btn-outline-premium" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mouse-icon"
        />
      </div>
    </section>
  );
};

export default Hero;
