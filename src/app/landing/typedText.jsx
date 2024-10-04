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
        // smartBackspace: true, // Default value
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
        <div className={`font-lora text-white leading-none text-center p-0 ${
                windowWidth > 500 ? 'text-9xl' : 'text-7xl'
            }`}>
            <span ref={el} />
        </div>
        );
}
