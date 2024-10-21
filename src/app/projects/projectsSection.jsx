import ProjectItem from "./projectItem";
import projectsData from '../../data/projectsData.json';
import AnimateOnViewWrapper from "@/components/animateOnViewWrapper";
import 'animate.css';

export default function ProjectsSection() {
    return (
        <>
            <AnimateOnViewWrapper>
                <h1 className="pb-4 pl-8 font-Inter text-white text-4xl sm:text-4xl md:text-6xl lg:text-7xl">Projects</h1>
            </AnimateOnViewWrapper>
            <AnimateOnViewWrapper>
                <div className="carousel bg-none rounded-box w-full space-x-4 p-4 pl-8 overflow-auto">
                    {projectsData.map((project) => (
                        <ProjectItem 
                            title={project.title} 
                            date={project.date} 
                            image={project.image} 
                            clickable={project.clickable}
                            key={project.id} 
                        />
                    ))}
                </div>
            </AnimateOnViewWrapper>
        </>
    );
}
