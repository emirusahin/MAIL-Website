'use client';
import '../../styles/globals.css';
import { useState, useEffect } from 'react';

export default function CarouselItem({ title, date, image }) {
    const [yRotation, setYRotation] = useState(0);
    const [xRotation, setXRotation] = useState(0);


    const updateRotation = (e) => {
        const card = e.currentTarget;
        const cardRect = card.getBoundingClientRect();
        const x = e.clientX - cardRect.left;
        const y = e.clientY - cardRect.top;
        
        const xMid = x - (cardRect.width / 2);
        const yMid = y - (cardRect.height / 2);

        // Calculate target rotation, adjusted for sensitivity
        const xRot = -(yMid / 15);
        const yRot = (xMid / 15);

        setXRotation(xRot);
        setYRotation(yRot);
    };


    return (
        <div
            className="min-w-[25vw] h-auto p-6 glassMorph flex flex-col items-center hover:translate-y-[-50px] transition-transform duration-200"
            // onMouseMove={updateRotation}
            style={{ transform: `rotateY(${yRotation}deg) rotateX(${xRotation}deg)`, transition: 'transform 0.1s ease-out' }}
        >
            <div className="flex justify-center pb-5 overflow-hidden w-64 h-80">
                <img src={image} className='rounded-lg w-full h-full object-cover' alt={title} />
            </div>
            <div className="flex flex-col items-left justify-end">
                <div className='text-white text-3xl'>{title}</div>
                <div className='text-white text-xl'>{date}</div>
            </div>
        </div>
    );
}
