import { useEffect, useRef, useState } from 'react';

const useElementVisibility = () => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                const rect = elementRef.current.getBoundingClientRect();
                const isCurrentlyVisible = (
                  rect.top < window.innerHeight // only need to check if the top of the element is visable, bc scroll will only go down
              );

                // so it only animates once
                if (isCurrentlyVisible && !isVisible) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isVisible]);

    return { isVisible, elementRef };
};

export default useElementVisibility;
