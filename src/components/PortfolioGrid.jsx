import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import './PortfolioGrid.css';

export const projects = [
  {
    id: 'advertisement-design',
    title: 'Social Media Design',
    category: 'Social Media Design',
    image: '/assets/projects/socialMedia.jpg',
    description: 'High-impact Social Media creatives designed for digital marketing and print campaigns.',
    size: 'large',
    gallery: [
      { src: '/assets/projects/socialMedia.jpg', type: 'hero' },
      { src: '/assets/projects/socialMedia1.jpg', type: 'grid' },
      { src: '/assets/projects/socialMedia2.jpg', type: 'grid' },
      { src: '/assets/projects/socialMedia.jpg', type: 'full' },
      { src: '/assets/projects/socialMedia3.jpg', type: 'grid' },
      { src: '/assets/projects/socialMedia4.jpg', type: 'grid' }
    ],
    overview: 'This project showcases advertisement creatives designed for marketing campaigns. The goal was to create visually engaging graphics that attract attention and communicate the brand message effectively.'
  },
  {
    id: 'product-creative-posts',
    title: 'Product Creative Posts',
    category: 'Product Creative Posts',
    image: '/assets/projects/productPost.jpg',
    description: 'Modern product promotional posts for social media engagement and brand awareness.',
    size: 'medium',
    gallery: [
      { src: '/assets/projects/productPost.jpg', type: 'hero' },
      { src: '/assets/projects/product1.jpg', type: 'grid' },
      { src: '/assets/projects/productPost.jpg', type: 'full' },
      { src: '/assets/projects/product2.jpg', type: 'grid' },
      { src: '/assets/projects/product3.jpg', type: 'grid' },
      { src: '/assets/projects/product4.jpg', type: 'grid' },
      { src: '/assets/projects/product5.jpg', type: 'grid' },
      { src: '/assets/projects/product6.jpg', type: 'grid' }
    ],
    overview: 'This project focuses on creating visually appealing product creatives for social media engagement. Using high-quality product photography and modern layouts to drive user action.'
  },
  {
    id: 'event-poster-design',
    title: 'Event Poster Design',
    category: 'Event Poster Design',
    image: '/assets/projects/exhibitionPost.jpg',
    description: 'Creative event posters and marketing visuals designed for maximum impact.',
    size: 'small',
    gallery: [
      { src: '/assets/projects/exhibitionPost.jpg', type: 'hero' },
      { src: '/assets/projects/exhibition1.jpg', type: 'grid' },
      { src: '/assets/projects/exhibition2.jpg', type: 'grid' },
      { src: '/assets/projects/exhibition3.jpg', type: 'grid' },
      { src: '/assets/projects/exhibition4.jpg', type: 'grid' },
      { src: '/assets/projects/exhibitionPost.jpg', type: 'full' }
    ],
    overview: 'A series of high-energy event posters designed to capture the essence of various tech and music events. Focused on bold typography and vibrant visual elements.'
  }
];

const PortfolioGrid = () => {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <motion.h2 
            className="display-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Selected <span className="serif">Works</span>
          </motion.h2>
        </div>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card-premium ${project.size}`}
              data-cursor-text="View"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link to={`/project/${project.id}`}>
                <div className="project-media-wrapper">
                  <img src={project.image} alt={project.title} className="project-img-premium" />
                  <div className="project-overlay-premium">
                    <div className="project-meta-premium">
                      <span className="project-cat-premium">{project.category}</span>
                      <h3 className="project-tit-premium">{project.title}</h3>
                      <p className="project-desc-premium">{project.description}</p>
                    </div>
                    <div className="project-cursor-tip">View Project</div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default PortfolioGrid;
