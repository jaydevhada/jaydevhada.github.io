import { useParams, Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Header from '../components/Header';
import { projects } from '../components/PortfolioGrid';
import './ProjectDetail.css';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
  const { id } = useParams();
  const container = useRef();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const project = projects.find(p => p.id === id);

  useGSAP(() => {
    if (!project) return;

    // Fade in Hero
    gsap.from('.project-detail-title', {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: 'expo.out'
    });

    gsap.from('.project-cover-image', {
      opacity: 0,
      y: 30,
      duration: 1.5,
      ease: 'expo.out',
      delay: 0.3
    });

    // Gallery Stagger
    gsap.from('.gallery-item-premium', {
      scrollTrigger: {
        trigger: '.gallery-grid-premium',
        start: 'top 85%',
      },
      scale: 0.9,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'power2.out'
    });

    // Full Width Scroll Reveal
    gsap.from('.full-width-showcase', {
        scrollTrigger: {
            trigger: '.full-width-showcase',
            start: 'top 90%',
        },
        y: 40,
        opacity: 0,
        duration: 1.2
    });

  }, { scope: container, dependencies: [id] });

  if (!project) {
    return <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
      <h2 style={{ color: '#fff' }}>Project not found</h2>
      <Link to="/" className="btn-premium" style={{ marginTop: '20px', display: 'inline-block' }}>Return Home</Link>
    </div>;
  }

  const slides = project.gallery.map(img => ({ src: img.src }));
  const gridImages = project.gallery.filter(img => img.type === 'grid');
  const fullWidthImages = project.gallery.filter(img => img.type === 'full');

  const openLightbox = (idx) => {
    setIndex(idx);
    setOpen(true);
  };

  return (
    <div className="project-detail-page" ref={container}>
      <Header />
      
      {/* 1. Project Hero Section */}
      <section className="project-hero-premium">
        <div className="container">
          <Link to="/#portfolio" className="back-link-premium">
            <ArrowLeft size={16} /> Back to Showcase
          </Link>
          <div className="overflow-hidden">
            <h1 className="project-detail-title display-text">
                {project.title}
            </h1>
          </div>
          <div className="project-cover-image" onClick={() => openLightbox(0)}>
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      </section>

      {/* 2. Project Overview */}
      <section className="project-overview">
        <div className="container">
          <div className="overview-text">
            <span className="serif section-subtitle">Project Description</span>
            <p className="overview-bio">
              {project.description}
            </p>
            <div className="project-mission">
              <h3>The Mission</h3>
              <p>{project.overview}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Design Gallery */}
      <section className="project-gallery-section">
        <div className="container">
          <h2 className="display-text gallery-title">Design <span className="serif">Gallery</span></h2>
          <div className="gallery-grid-premium">
            {gridImages.map((img, i) => (
              <div 
                key={i} 
                className="gallery-item-premium" 
                onClick={() => openLightbox(project.gallery.indexOf(img))}
              >
                <img src={img.src} alt={`${project.title} design ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Full Width Showcase Section */}
      {fullWidthImages.map((img, i) => (
        <section 
            key={i} 
            className="full-width-showcase" 
            onClick={() => openLightbox(project.gallery.indexOf(img))}
            style={{ cursor: 'zoom-in' }}
        >
          <img src={img.src} alt={`${project.title} showcase ${i + 1}`} />
        </section>
      ))}

      {/* Footer Navigation */}
      <section className="project-footer-premium">
        <div className="container">
            <div className="next-project-link-premium">
                <Link to="/#portfolio" className="btn-premium">
                    View Other Projects <ArrowRight size={18} />
                </Link>
                <Link to="/" className="btn-outline-premium" style={{ marginLeft: '20px' }}>Return Home</Link>
            </div>
        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </div>
  );
};

export default ProjectDetail;
