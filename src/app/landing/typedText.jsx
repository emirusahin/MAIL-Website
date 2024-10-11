'use client';
import Typed from 'typed.js';
import React from 'react';

export default function TypedText() {
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['We are<br/>the best', 'We are<br/>McGill AI Lab^1500'],
        typeSpeed: 60,
        backSpeed: 100,
        backDelay: 1500,
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
