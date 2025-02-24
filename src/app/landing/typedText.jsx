'use client';
import Typed from 'typed.js';
import React from 'react';

export default function TypedText() {
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        // strings: ['We are<br/>the best', 'We are<br/>McGill AI Lab^1500'],
        // strings: ['We are innovators', 'We are passionate', 'We are the next generation', 'We are McGill AI Lab^1500'],
        strings: ['McGill AI Lab'],
        typeSpeed: 60,
        backSpeed: 110,
        backDelay: 700,
        onComplete: function(self) { self.cursor.remove() }
      });
  
      return () => {
        typed.destroy();
      };
    }, []);

    return (
        <div className="text-4xl font-bold tracking-tight text-black leading-tight text-center p-0 pb-4 hvr-grow-rotate text-2xl sm:text-4xl md:text-6xl lg:text-8xl">
            <span ref={el} />
        </div>
    );
    
}