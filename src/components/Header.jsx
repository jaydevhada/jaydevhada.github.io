import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Initial reveal
    gsap.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 2,
        ease: 'expo.out',
        delay: 0.5
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/#' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className={`header-premium ${scrolled ? 'scrolled' : ''}`} ref={headerRef}>
      <div className="container header-container-premium">
        <Link to="/" className="logo-premium">
          JAYDEV<span>HADA</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav-premium">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link-premium">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="nav-link-premium highlighted">Inquire</a>
        </nav>

        {/* Mobile Toggle */}
        <button className="mobile-toggle-premium" onClick={() => setIsOpen(!isOpen)}>
          <div className={`burger ${isOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="mobile-nav-premium"
            initial={{ height: 0 }}
            animate={{ height: '100vh' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-nav-content">
                {navLinks.map((link, i) => (
                <motion.a
                    key={link.name}
                    href={link.href}
                    className="mobile-nav-link-premium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                >
                    {link.name}
                </motion.a>
                ))}
                <div className="mobile-nav-footer">
                    <p>Get in touch</p>
                    <a href="mailto:jaydevh567@gmail.com">jaydevh567@gmail.com</a>
                </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
