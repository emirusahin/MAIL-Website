'use client';
import '../../styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';

export default function CarouselItem({ id, title, date, image }) {
    const link = `/projects/${convertTitleToSlug(title)}`; // Use slug for link if desired

    return (
        <Link href={link} aria-label={`View project: ${title}`} className="group">
            <li key={title}>
                <div className="min-w-[25vw] h-auto flex flex-col items-start cursor-pointer transition-transform duration-300 transform hover:scale-105">
                    <div className="flex justify-center overflow-hidden w-full aspect-[361/261] relative">
                        <Image
                            src={image}
                            alt={title}
                            className="object-cover"
                            fill={true}
                        />
                    </div>
                    <div className="flex flex-col justify-end items-start w-full pt-4">
                        <div className="text-gray text-sm">{date || 'Date not available'}</div>
                        <div className="text-white text-xl pt-2">{title || 'Untitled'}</div>
                    </div>
                </div>
            </li>
        </Link>
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
