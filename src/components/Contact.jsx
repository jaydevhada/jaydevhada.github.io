import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const container = useRef();
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle, success
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useGSAP(() => {
    gsap.from('.contact-title', {
      scrollTrigger: {
        trigger: '.contact-title',
        start: 'top 85%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'expo.out'
    });

    gsap.from('.contact-item-premium', {
      scrollTrigger: {
        trigger: '.contact-info-premium',
        start: 'top 85%',
      },
      x: -30,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'expo.out'
    });

    gsap.from('.contact-form-premium', {
      scrollTrigger: {
        trigger: '.contact-form-premium',
        start: 'top 85%',
      },
      scale: 0.95,
      opacity: 0,
      duration: 1.2,
      ease: 'expo.out'
    });
  }, { scope: container });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    const subject = encodeURIComponent('Portfolio Contact Message');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Construct the Gmail compose link
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=jaydevh567@gmail.com&su=${subject}&body=${body}`;
    
    // Open Gmail in a new tab
    window.open(gmailLink, '_blank', 'noopener,noreferrer');
    
    // Hide form and show success message
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    // Reset status after a few seconds
    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="contact-premium" id="contact" ref={container}>
      <div className="container">
        <h2 className="contact-title display-text">
            Let's Start a <br />
            <span className="serif">Project</span>
        </h2>
        
        <div className="contact-grid-premium">
          <div className="contact-info-premium">
            <p className="contact-intro-premium">
              Open to full-time opportunities, freelance projects, and creative collaborations.
            </p>
            
            <div className="contact-methods-premium">
              <div className="contact-item-premium">
                <div className="icon-circle glass-ui">
                  <Mail size={20} />
                </div>
                <div>
                  <label>Email</label>
                  <a href="mailto:jaydevh567@gmail.com">jaydevh567@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item-premium">
                <div className="icon-circle glass-ui linkedin-icon">
                  <Linkedin size={20} />
                </div>
                <div>
                  <label>LinkedIn</label>
                  <a href="https://www.linkedin.com/in/jaydevhada/" target="_blank" rel="noopener noreferrer">
                    Jaydev Hada
                  </a>
                  <p className="cta-text">Connect with me on LinkedIn</p>
                </div>
              </div>
              
              <div className="contact-item-premium">
                <div className="icon-circle glass-ui">
                  <Phone size={20} />
                </div>
                <div>
                  <label>Phone</label>
                  <a href="tel:+919638117825">+91 96381 17825</a>
                </div>
              </div>
              
              <div className="contact-item-premium">
                <div className="icon-circle glass-ui">
                  <MapPin size={20} />
                </div>
                <div>
                  <label>Location</label>
                  <p>Rajkot, Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {status === 'success' ? (
              <div className="success-message glass-ui">
                <CheckCircle size={48} color="#fff" />
                <h3>Opening Gmail...</h3>
                <p>Your message has been prepared in a new tab. Please click 'Send' in Gmail.</p>
              </div>
            ) : (
              <form className="contact-form-premium glass-ui" onSubmit={handleSubmit} ref={formRef}>
                <div className="input-row-premium">
                    <div className="form-field-premium">
                        <input 
                          type="text" 
                          name="name"
                          placeholder="Your Name" 
                          required 
                          value={formData.name}
                          onChange={handleChange}
                        />
                    </div>
                    <div className="form-field-premium">
                        <input 
                          type="email" 
                          name="email"
                          placeholder="Email Address" 
                          required 
                          value={formData.email}
                          onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-field-premium">
                  <textarea 
                    name="message"
                    placeholder="Tell me about your project" 
                    rows="4" 
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn-premium">
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
