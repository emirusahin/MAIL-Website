"use client";
import '../../styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { convertTitleToSlug } from '../../components/helpers';

export default function ProjectItem({ title, date, image, clickable, index }) {
    const link = `/projects/${convertTitleToSlug(title)}`;

    return (
        <div className={`w-full h-[22rem] rounded-xl shadow-md overflow-hidden bg-white transition-all duration-300 ${clickable ? 'hover:shadow-xl hover:-translate-y-1' : 'opacity-75'}`}>
            {clickable ? (
                <Link href={link} aria-label={`View project: ${title}`} className="group block h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative w-full h-64 flex-shrink-0 overflow-hidden">
                        <Image
                            src={image}
                            alt={`Image of ${title}, a McGill AI Lab project`}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                            fill={true}
                            priority={index < 9}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
                    </div>
                    {/* Text Content */}
                    <div className="p-4 flex-grow flex flex-col justify-start">
                        <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 leading-tight">{title || 'Untitled'}</h3>
                        <p className="mt-1 text-sm text-gray-600 font-medium line-clamp-1">{date || 'In Progress'}</p>
                    </div>
                </Link>
            ) : (
                <div className="block h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative w-full h-64 flex-shrink-0 overflow-hidden">
                        <Image
                            src={image}
                            alt={`Image of ${title}, a McGill AI Lab project`}
                            className="object-cover w-full h-full"
                            fill={true}
                            priority={index < 9}
                        />
                        <div className="absolute inset-0 bg-gray-200 bg-opacity-20" />
                    </div>
                    {/* Text Content */}
                    <div className="p-4 flex-grow flex flex-col justify-start">
                        <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 leading-tight">{title || 'Untitled'}</h3>
                        <p className="mt-1 text-sm text-gray-600 font-medium line-clamp-1">{date || 'Date not available'}</p>
                    </div>
                </div>
            )}
        </div>
    );
}