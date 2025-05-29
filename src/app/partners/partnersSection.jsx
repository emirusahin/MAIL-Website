import Image from 'next/image';
import partnersData from '../../data/partnersData.json';
import AnimateOnViewWrapper from "@/components/animateOnViewWrapper";
import 'animate.css';

export default function PartnersSection() {
    return (
        <section id="partners" className="py-8">
            <AnimateOnViewWrapper>
                <h1 className="pb-6 pl-8 font-Inter text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
                    Partners
                </h1>
            </AnimateOnViewWrapper>
            <AnimateOnViewWrapper>
                <div className="flex flex-wrap justify-start gap-8 p-4 pl-8">
                    {partnersData.map((partner) => (
                        <a
                            key={partner.name}
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <div className="w-96 h-96 relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                                <Image
                                    src={partner.image}
                                    alt={`${partner.name} logo`}
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </AnimateOnViewWrapper>
        </section>
    );
} 