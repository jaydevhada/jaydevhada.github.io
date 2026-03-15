import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './HorizontalShowcase.css';

gsap.registerPlugin(ScrollTrigger);

const showcaseItems = [
    { title: 'Aura Sneaker', category: 'Creative Ad', img: '/assets/projects/productPost.jpg' },
    { title: 'Zen Skincare', category: 'Product Social', img: '/assets/projects/socialMedia.jpg' },
    { title: 'Beyond Beats', category: 'Event Poster', img: '/assets/projects/exhibitionPost.jpg' },
    { title: 'Organic Burst', category: 'Social Media', img: '/assets/projects/product-creative.png' }
];

const HorizontalShowcase = () => {
    const sectionRef = useRef();
    const triggerRef = useRef();

    useGSAP(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            { translateX: 0 },
            {
                translateX: "-300vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.6,
                    pin: true,
                    anticipatePin: 1
                }
            }
        );
        return () => pin.kill();
    }, { scope: triggerRef });

    return (
        <section className="horizontal-outer" id="storytelling" ref={triggerRef}>
            <div className="horizontal-inner">
                <div className="horizontal-header container">
                    <h2 className="display-text">Visual <br /><span className="serif">Storytelling</span></h2>
                    <p className="horizontal-hint">Scroll to explore &rarr;</p>
                </div>
                
                <div className="horizontal-track" ref={sectionRef}>
                    {showcaseItems.map((item, i) => (
                        <div key={i} className="horizontal-item">
                            <div className="horizontal-media glass-ui">
                                <img src={item.img} alt={item.title} />
                                <div className="horizontal-meta">
                                    <span className="serif">{item.category}</span>
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="horizontal-item last-spacer"></div>
                </div>
            </div>
        </section>
    );
};

export default HorizontalShowcase;
