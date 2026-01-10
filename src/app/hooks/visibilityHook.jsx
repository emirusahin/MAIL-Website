import { useEffect, useRef, useState } from 'react';

const useElementVisibility = () => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Use IntersectionObserver instead of scroll + getBoundingClientRect.
        // If already visible, no need to observe
        if (isVisible) return;

        const node = elementRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                const isCurrentlyVisible = entry.isIntersecting;

                //it only animates once
                if (isCurrentlyVisible && !isVisible) {
                    setIsVisible(true);
                    observer.unobserve(node); // stop observing once it becomes visible
                    observer.disconnect();
                }
            },
            {
                root: null,
                threshold: 0,
            }
        );

        observer.observe(node);

        return () => {
            observer.disconnect();
        };
    }, [isVisible]);

    return { isVisible, elementRef };
};

export default useElementVisibility;
