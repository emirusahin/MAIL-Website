import CarouselItem from "./carouselItem";
import projectsData from '../../data/projectsData.json';
import AnimateOnViewWrapper from "@/components/animateOnViewWrapper";
import 'animate.css';

export default function ProjectsSection() {
    return (
        <>
            <AnimateOnViewWrapper>
                <h1 className="font-Inter text-white sm:text-5xl lg:text-7xl pl-8 pb-4">Projects</h1>
            </AnimateOnViewWrapper>
            <AnimateOnViewWrapper>
                <div className="carousel bg-none rounded-box w-full space-x-4 p-4 pl-8 overflow-auto animate__animated">
                    {projectsData.map((project) => (
                        <CarouselItem 
                            title={project.title} 
                            date={project.date} 
                            image={project.image} 
                            key={project.id} 
                        />
                    ))}
                </div>
            </AnimateOnViewWrapper>
        </>
    );
}
