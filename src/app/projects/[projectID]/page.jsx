import projectsData from '../../../data/projectsData.json' assert { type: 'json' };

export default async function ProjectPage({ params }) {
    const projectDetails = await getProjectDetails(params.projectID);
    console.log(projectDetails);
    return (
        <div className='flex flex-col items-center justify-center pt-4'>
            <div className="text-white text-7xl pb-4">{projectDetails.title}</div>
            <div className="text-white text-xl">{projectDetails.date}</div>
        </div>
    );
}


async function getProjectDetails(projectID) {
    const projectDetails = await projectsData.find(
        project => project.id === String(projectID)
    );
    return projectDetails;
}