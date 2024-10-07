'use client';
import Typed from 'typed.js';
import React from 'react';
import useWindowSize from '../functions/useWindowWidth';

export default function TypedText() {
    const el = React.useRef(null);
    const { width: windowWidth } = useWindowSize();

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['We are<br/>the best', 'We are<br/>McGill AI Lab^1500'],
        typeSpeed: 60,
        backSpeed: 100,
        backDelay: 1500,
        onBegin: function(self) {
            // Add a strong purple glow to the typing cursor
              self.cursor.style.boxShadow = '0px 0px 15px 5px rgba(128, 0, 128, 0.75)'; // Strong purple glow
              self.cursor.style.color = 'rgba(128, 0, 128, 0.9)'; // Dark purple color for the cursor
            
          },
        onComplete: function(self) { self.cursor.remove() }
      });
  
      return () => {
        typed.destroy();
      };
    }, []);

    return (
        <div className="font-lora text-white leading-tight text-center p-0 text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
            <span ref={el} />
        </div>
    );
    
}
