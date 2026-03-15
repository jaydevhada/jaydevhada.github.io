import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const container = useRef();

  const experiences = [
    {
      role: 'Graphic Designer',
      company: 'IBIAS Media Pvt Ltd',
      period: '2.5+ Years',
      responsibilities: [
        'Designed social media advertisement creatives',
        'Created product promotional graphics',
        'Designed event posters and marketing visuals',
        'Maintained brand consistency across campaigns'
      ]
    }
  ];

  // useGSAP(() => {
  //   gsap.from('.experience-card', {
  //     scrollTrigger: {
  //       trigger: '.experience-grid',
  //       start: 'top 85%',
  //     },
  //     y: 30,
  //     opacity: 0,
  //     stagger: 0.15,
  //     duration: 0.8,
  //     ease: 'power3.out'
  //   });
  // }, { scope: container });

  return (
    <section className="experience-section" id="experience" ref={container}>
      <div className="container">
        <h2 className="display-text experience-title">
          Professional <span className="serif">Experience</span>
        </h2>
        
        <div className="experience-grid">
          {experiences.map((exp, i) => (
            <div key={i} className="experience-card">
              <div className="exp-header">
                <div className="exp-icon">
                  <Briefcase size={22} strokeWidth={2.5} />
                </div>
                <div className="exp-title-meta">
                  <h3>{exp.role}</h3>
                  <p className="company-info">{exp.company} • {exp.period}</p>
                </div>
              </div>
              <ul className="exp-responsibilities">
                {exp.responsibilities.map((resp, j) => (
                  <li key={j}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
