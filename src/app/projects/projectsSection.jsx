import ProjectItem from "./projectItem";
import projectsData from '../../data/projectsData.json';
import AnimateOnViewWrapper from "@/components/animateOnViewWrapper";
import 'animate.css';

export default function ProjectsSection() {
    return (
        <section className="py-8">
            <AnimateOnViewWrapper>
                {/* Title aligned like Our Partners */}
                <h1 className="pb-6 pl-8 font-Inter text-black text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-7xl tracking-tight">
                    Projects
                </h1>
            </AnimateOnViewWrapper>

            <AnimateOnViewWrapper>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                    {/* Responsive grid: 1 / 2 / 3 / 4 / 5 columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">
                        {projectsData.map((project, idx) => (
                            <div
                                key={project.title.replace(/\s+/g, '-').toLowerCase()}
                                className="col-span-1"
                            >
                                {/* Transparent card, responsive padding and typography */}
                                <div className="bg-transparent rounded-lg overflow-hidden transition p-2 h-full flex flex-col">
                                    <div className="flex-1 flex flex-col justify-between text-sm sm:text-base md:text-base lg:text-base xl:text-base">
                                        <ProjectItem
                                            title={project.title}
                                            date={project.date}
                                            image={project.image}
                                            clickable={project.clickable}
                                            index={idx}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimateOnViewWrapper>
        </section>
    );
}