import Image from "next/image";
import partnersData from "@/data/partnersData.json";
import AnimateOnViewWrapper from "@/components/animateOnViewWrapper";
import "animate.css";

export default function PartnersSection() {
  return (
    <section id="partners" className="py-8 overflow-x-hidden">
      <AnimateOnViewWrapper>
        {/* Same title format as Projects */}
        <h1 className="pb-6 pl-8 font-Inter text-black text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-7xl tracking-tight">
          Our Partners
        </h1>
      </AnimateOnViewWrapper>

      <AnimateOnViewWrapper>
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 pl-8">
          {partnersData.map((p) => {
            const key = `${p.name}-${p.website}`; // unique key
            return (
              <a
                key={key}
                href={p.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group block flex flex-col items-center p-2 sm:p-4"
                aria-label={`Open ${p.name} website`}
              >
                {/* Larger logos on small screens, reduced padding */}
                <div className="relative w-40 sm:w-full aspect-square sm:aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain p-2 sm:p-4 transition-transform duration-200 group-hover:scale-105"
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 30vw, 20vw"
                  />
                </div>

                <p className="mt-0 sm:mt-3 font-semibold text-center text-sm sm:text-sm opacity-80 group-hover:opacity-100">
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
