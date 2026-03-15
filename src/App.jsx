import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  const location = useLocation();
  
  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </AnimatePresence>
      <footer style={{ padding: '40px 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'var(--bg-primary)' }}>
        <div className="container">
          <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
            &copy; {new Date().getFullYear()} Jaydev Hada. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
