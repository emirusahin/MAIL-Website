'use client';
import '../../styles/globals.css';


export default function AltCarouselItem({ title, date, image }) {
    return (
        <div className="min-w-[25vw] h-auto flex flex-col items-start transition-transform duration-300 transform hover:rotate-y-12 hover:scale-105">
            <div className="flex justify-center overflow-hidden w-full aspect-[361/261]">
                <img src={image} className="w-full h-full object-cover" alt={title} />
            </div>
            <div className="flex flex-col justify-end items-start w-full pt-4">
                <div className="text-gray text-sm">{date}</div>
                <div className="text-white text-xl pt-2">{title}</div>
            </div>
        </div>
    );
}
