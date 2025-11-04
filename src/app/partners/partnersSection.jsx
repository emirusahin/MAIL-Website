import Image from "next/image";
import partnersData from "@/data/partnersData.json";
import AnimateOnViewWrapper from "@/components/animateOnViewWrapper";
import "animate.css";

export default function PartnersSection() {
  return (
    <section className="py-8">
      <AnimateOnViewWrapper>
        {/* Same title format as Projects */}
        <h1 className="pb-6 pl-8 font-Inter text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
          Our Partners
        </h1>
      </AnimateOnViewWrapper>

      <AnimateOnViewWrapper>
        {/* Same horizontal carousel as Projects */}
        <div className="carousel w-full space-x-6 p-4 pl-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {partnersData.map((p) => {
            const key = `${p.name}-${p.website}`; // unique key
            return (
              <a
                key={key}
                href={p.website}
                target="_blank"
                rel="noopener noreferrer"
                className="carousel-item group block"
                aria-label={`Open ${p.name} website`}
              >
                {/* Partner logo without border or rounded corners */}
                <div className="relative w-64 h-40 flex items-center justify-center overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain p-4 transition-transform duration-200 group-hover:scale-105"
                    sizes="(max-width: 640px) 60vw, (max-width: 1024px) 30vw, 20vw"
                  />
                </div>

                {/* Partner name */}
                <p className="mt-3 text-center text-sm opacity-80 group-hover:opacity-100">
                  {p.name}
                </p>
              </a>
            );
          })}
        </div>
      </AnimateOnViewWrapper>
    </section>
  );
}
