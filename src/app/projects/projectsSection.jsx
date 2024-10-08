import CarouselItem from "./carouselItem";
import projectsData from '../../data/projectsData.json';

export default function ProjectsSection() {
    return (
        <>
            <h1 className="font-Inter text-white sm:text-5xl lg:text-7xl pl-8 pb-4">Projects</h1>
            <div className="carousel bg-none rounded-box w-full space-x-4 p-4 pl-8 overflow-auto">
                {projectsData.map((project) => makeProjectItem(project))}
            </div> 
        </>
    );
}


function makeProjectItem(project){
    return (
        <CarouselItem title={project.title} date={project.date} image={project.image} />
    )
}