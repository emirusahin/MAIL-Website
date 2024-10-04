'use client';
import { useState, useEffect } from 'react';

export default function Title() {
    const [windowWidth, setWindowWidth] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = () => setWindowWidth(window.innerWidth);
            setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    if (windowWidth === null) {
        return null;
    }

    if (windowWidth > 500) {
        return (
            <h1 className="font-Lora text-white text-9xl leading-none text-center p-0">
                We are<br />McGill AI Lab
            </h1>
        );
    } else { // Mobile
        return (
            <h1 className="font-Lora text-white text-7xl leading-none text-center p-0">
                McGill AI Lab
            </h1>
        );
    }
}
