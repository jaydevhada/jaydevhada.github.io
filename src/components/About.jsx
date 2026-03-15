import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef();
  const skills = [
    'Graphic Design',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Advertisement Design',
    'Social Media Creatives',
    'Product Promotion Design',
    'Branding'
  ];

  useGSAP(() => {
    gsap.from('.about-title', {
      scrollTrigger: {
        trigger: '.about-title',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'expo.out'
    });

    gsap.from('.about-bio-line', {
      scrollTrigger: {
        trigger: '.about-bio',
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'expo.out'
    });

    gsap.from('.skill-tag-premium', {
      scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 85%',
      },
      scale: 0.8,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'back.out(1.7)'
    });
  }, { scope: container });

  return (
    <section className="about-premium" id="about" ref={container}>
      <div className="container about-container-premium">
        <div className="about-grid-premium">
          <div className="about-text-premium">
            <h2 className="about-title display-text">
                The Creative <br />
                <span className="serif">Mind</span>
            </h2>
            <div className="about-bio">
              <p className="about-bio-line">
                I am a creative Graphic Designer with 2.5+ years of experience designing advertisement creatives, product promotions, and social media graphics. I specialize in creating visually engaging designs that help brands communicate effectively and attract audience attention.
              </p>
            </div>
          </div>

          <div className="about-skills-premium">
            <h3 className="skills-title-premium">Mastered Tools & Design</h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill} className="skill-tag-premium glass-ui">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
