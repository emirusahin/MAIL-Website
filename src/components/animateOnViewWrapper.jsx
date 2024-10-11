import { useEffect } from 'react';
import useElementVisibility from '@/app/hooks/visibilityHook';
import 'animate.css';

const AnimateOnViewWrapper = ({ children, animation='animate__zoomIn' }) => {
    const { isVisible, elementRef } = useElementVisibility();
    
    return (
        <div
            ref={elementRef}
            className={`animate__animated ${isVisible ? animation : 'opacity-0'}`}
        >
            {children}
        </div>
    );
};

export default AnimateOnViewWrapper;