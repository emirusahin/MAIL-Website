import projectsData from '../../../data/projectsData.json' assert { type: 'json' };
import Image from 'next/image';

export default async function ProjectPage({ params }) {
    const projectDetails = await getProjectDetails(params.projectID);
    const projectTimeline = projectDetails.timeline // Array of timeline json elements
    return (
        <>
            <div className='flex flex-col items-center justify-center pt-4'>
                <div className="text-white text-7xl pb-4">{projectDetails.title}</div>
                <div className="text-white text-xl">{projectDetails.date}</div>
            </div>
            <div className=''>
                {/* <div className='w-64 h-64'>
                    <Image className="object-cover" src={'/images/major-predictor-cover.png'}
                                    layout="fill" 
                                    objectFit="cover" 
                                />
                </div> */}
                <p className='text-m text-white'>{projectDetails.description}</p>
            </div>
            <div className='flex flex-col pt-16 pl-4'>
                {/* <h1 className='text-white'>HELLO</h1> */}
                {projectTimeline.map((event, index) =>
                    <div className={`flex align-center ${index % 2 === 0 ? "justify-start pl-1 text-right" : "justify-end pr-1"}`} key={index}>
                        {/* <Image className="absolute left-1/2" src="/images/checkmark.png" width={20} height={20} ></Image> */}
                        <div className={`w-1/2 border-white p-4 ${index % 2 === 0 ? "border-r-4" : "border-l-4"}`}>
                            <div className="text-l text-white pr-1 pl-1">{event.date}</div>
                            <div className="text-2xl text-white font-bold">{event.event}</div>
                            <div className="text-m text-white">{event.description}</div>
                        </div>
                    </div>
                )}
                
            </div>
        </>
    );
}


async function getProjectDetails(projectID) {
    const projectDetails = await projectsData.find(
        project => project.id === String(projectID)
    );
    return projectDetails;
}