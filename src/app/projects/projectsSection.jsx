import ProjectItem from "./projectItem";
import projectsData from '../../data/projectsData.json';
import AnimateOnViewWrapper from "@/components/animateOnViewWrapper";
import 'animate.css';

export default function ProjectsSection() {
    return (
        <section className="py-8">
            <AnimateOnViewWrapper>
                <h1 className="pb-6 pl-8 font-Inter text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
                    Projects
                </h1>
            </AnimateOnViewWrapper>
            <AnimateOnViewWrapper>
                <div className="carousel w-full space-x-6 p-4 pl-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    {projectsData.map((project) => (
                        <ProjectItem 
                            title={project.title} 
                            date={project.date} 
                            image={project.image} 
                            clickable={project.clickable}
                            key={project.title.replace(' ', '-')} 
                        />
                    ))}
                </div>
            </AnimateOnViewWrapper>
        </section>
    );
}