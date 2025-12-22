import Image from "next/image";
import partnersData from "@/data/partnersData.json";
import AnimateOnViewWrapper from "@/components/animateOnViewWrapper";
import "animate.css";

export default function PartnersSection() {
  return (
    <section id="partners" className="py-8 overflow-x-hidden">
      <AnimateOnViewWrapper>
        {/* Same title format as Projects */}
        <h1 className="pb-6 pl-8 font-Inter text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
          Our Partners
        </h1>
      </AnimateOnViewWrapper>

      <AnimateOnViewWrapper>
        <div
          className="grid w-full gap-6 p-4 pl-8"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))" }}
        >
          {partnersData.map((p) => {
            const key = `${p.name}-${p.website}`; // unique key
            return (
              <a
                key={key}
                href={p.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group block flex flex-col items-center"
                aria-label={`Open ${p.name} website`}
              >
                {/* limiting logo container max height on mobile viewport, add padding */}
                <div className="relative w-full aspect-[4/3] max-h-36 sm:max-h-44 md:max-h-56 flex items-center justify-center overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain p-2 sm:p-4 transition-transform duration-200 group-hover:scale-105"
                    sizes="(max-width: 640px) 30vw, (max-width: 1024px) 20vw, 12vw"
                  />
                </div>

                {/* Partner name */}
                <p className="mt-3 font-semibold text-center text-sm opacity-80 group-hover:opacity-100">
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
