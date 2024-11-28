'use client';
import '../../styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectItem({ id, title, date, image, clickable }) {
    const link = `/projects/${convertTitleToSlug(title)}`;

    return (
       <>
        {clickable ? (
            <Link href={link} aria-label={`View project: ${title}`} className="group">
                <li className='list-none' key={title}>
                    <div className="min-w-[70vw] lg:min-w-[25vw] h-auto flex flex-col items-start cursor-pointer transition-transform duration-300 transform hover:scale-105">
                        <div className="flex justify-center overflow-hidden w-full aspect-[361/261] relative">
                            <Image
                                src={image}
                                alt={title}
                                className="object-cover"
                                fill={true}
                            />
                        </div>
                        <div className="flex flex-col justify-end items-start w-full pt-3">
                            <div className="text-black text-xs sm:text-xs md:text-sm">{date || 'In Progress'}</div>
                            <div className="text-black text-xl md:text-2xl lg:text-3xl pt-1">{title || 'Untitled'}</div>
                        </div>
                    </div>
                </li>
            </Link>
        ) : (
            <div className="group">
                <li className='list-none' key={title}>
                    <div className="min-w-[70vw] lg:min-w-[25vw] h-auto flex flex-col items-start cursor-default opacity-60">
                        <div className="flex justify-center overflow-hidden w-full aspect-[361/261] relative">
                            <Image
                                src={image}
                                alt={title}
                                className="object-cover"
                                fill={true}
                            />
                        </div>
                        <div className="flex flex-col justify-end items-start w-full pt-4">
                            <div className="text-black text-xs sm:text-xs md:text-sm">{date || 'Date not available'}</div>
                            <div className="text-black text-xl md:text-2xl lg:text-3xl pt-2">{title || 'Untitled'}</div>
                        </div>
                    </div>
                </li>
            </div>
        )}
       </>
    );
}

function convertTitleToSlug(title) {
    return title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+|-+$/g, '');
}
