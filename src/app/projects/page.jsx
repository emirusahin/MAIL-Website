import ProjectItem from './projectItem'; 
import projectsData from '../../data/projectsData.json'; 

export default function ProjectsPage() {
    return (
        <div className="min-h-screen text-gray-900 py-12">
            <h1 className="font-Inter text-black sm:text-5xl lg:text-8xl text-center">Projects</h1>
            <div className="flex justify-center my-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {projectsData.slice(0, 9).map((project, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-800 text-black rounded-lg p-1 w-80"
                        >
                            <ProjectItem 
                                title={project.title} 
                                date={project.date} 
                                image={project.image} 
                                clickable={project.clickable}
                                index={index} // Pass index for priority
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export const metadata = {
    title: 'Projects | McGill AI Lab',
    description: 'Explore the projects from McGill AI Lab.',
};