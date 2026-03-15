import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Palette, Layers, Play, Zap, ShieldCheck } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const container = useRef();
  
  const skills = [
    { name: 'Adobe Photoshop', icon: '/assets/projects/Photoshop.png', desc: 'Advanced Image Editing & Product Creatives' },
    { name: 'Adobe Illustrator', icon: '/assets/projects/illustrator.png', desc: 'Vector Illustration & Branding' },
    { name: 'Adobe After Effects', icon:'/assets/projects/AfterEffect.png', desc: 'Motion Graphics & Logo Animation' },
    { name: 'Social Media Ads Design', icon: <Zap size={24} />, desc: 'High-Converting Ad Creatives' },
    { name: 'Branding', icon: <ShieldCheck size={24} />, desc: 'Visual Identity & Brand Systems' }
  ];


  useGSAP(() => {
    gsap.from('.skill-card-premium', {
      scrollTrigger: {
        trigger: '.skills-grid-premium',
        start: 'top 85%',
      },
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: 'expo.out'
    });
  }, { scope: container });

  return (
    <section className="skills-section-premium" id="skills" ref={container}>
      <div className="container">
        <h2 className="display-text skills-title-premium">
            Technical <br /><span className="serif">Expertise</span>
        </h2>
        
        <div className="skills-grid-premium">
          {skills.map((skill, i) => (
            <div key={i} className="skill-card-premium glass-ui">
              <div className="skill-icon-wrapper-premium">
    {typeof skill.icon === "string" ? (
      <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
    ) : (
      skill.icon
    )}
  </div>
              <div className="skill-info-premium">
                <h3>{skill.name}</h3>
                <p>{skill.desc}</p>
              </div>
              <div className="skill-glow-premium"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
