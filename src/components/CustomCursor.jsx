import { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [cursorText, setCursorText] = useState("");

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY, target } = e;
            setMousePos({ x: clientX, y: clientY });
            cursorX.set(clientX);
            cursorY.set(clientY);

            // Check if hovering over interactive element
            const interactiveElement = target.closest('a, button, .project-card-premium, .horizontal-item, input, textarea');
            setIsPointer(!!interactiveElement);

            // Dynamic Text for specific elements
            const hoverText = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
            setCursorText(hoverText || "");
        };

        const handleMouseLeave = () => setIsHidden(true);
        const handleMouseEnter = () => setIsHidden(false);

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className={`custom-cursor-container ${isHidden ? 'hidden' : ''}`}
            style={{
                x: cursorX,
                y: cursorY,
            }}
        >
            <div className={`cursor-dot ${isPointer ? 'pointer' : ''}`}>
                {cursorText && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="cursor-tag"
                    >
                        {cursorText}
                    </motion.div>
                )}
            </div>
            <div className={`cursor-ring ${isPointer ? 'pointer' : ''}`} />
        </motion.div>
    );
};

export default CustomCursor;
