import projectsData from '../../../data/projectsData.json' assert { type: 'json' };
import CodeBlock from './CodeBlock';
import React from 'react';
import ReactMarkdown from "react-markdown";
import { convertTitleToSlug } from '../../../components/helpers';

export default async function ProjectPage({ params }) {
    const { projectID } = params;

    const projectDetails = await getProjectDetails(projectID);
    const notebookData = projectDetails.notebookURL ? await getNotebook(projectDetails.notebookURL) : null;
    
    return (
        <>
            <div className='flex justify-center items-center text-6xl text-black'>{projectDetails.title}</div>
            <h2 className='text-xl text-black'>{projectDetails.date}</h2>
            <div className='px-36'>
                {notebookData && notebookData.cells.map((cell, index) => {
                    if (cell.cell_type === 'markdown') {
                        return (
                            <div key={index} className='markdown'>
                                <ReactMarkdown>
                                    {Array.isArray(cell.source) ? cell.source.join(' ') : cell.source}
                                </ReactMarkdown>
                            </div>
                        );
                    }

                    if (cell.cell_type === 'code') {
                        return (
                            <div key={index}>
                                <CodeBlock>
                                    {Array.isArray(cell.source) ? cell.source.join(' ') : cell.source}
                                </CodeBlock>
                                
                            </div>
                        );
                    }

                    return null; // Ignore cell types other then markdown and code
                })}
            </div>
        </>
    )
}


export async function generateStaticParams() {
    return projectsData.map((project) => ({
        projectID: convertTitleToSlug(project.title), // Creates a slug based on the title
    }));
}

export async function generateStaticProps({ params }) {
    const projectID = params.projectID;
    const projectDetails = getProjectDetails(projectID);
    const notebookData = projectDetails.notebookURL ? await getNotebook(projectDetails.notebookURL) : null;
    return {
        props: {
            projectDetails,
            notebookData,
        },
        revalidate: 120, // Optional: to keep content fresh with ISR (Incremental Static Regeneration)
    };
}

function getProjectDetails(projectID) {
    const projectDetails = projectsData.find(
        project => convertTitleToSlug(project.title) === String(projectID)
    );
    if (!projectDetails) {
        throw new Error(`Project with ID ${projectID} not found: ${projectsData})`);
    }
    return projectDetails;
}

async function getNotebook(notebookURL) {
    const notebookRes = await fetch(notebookURL); // Updates page every 2 minutes
    const notebook = notebookRes.json()
    return notebook
}
