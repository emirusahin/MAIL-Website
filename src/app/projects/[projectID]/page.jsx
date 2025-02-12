import projectsData from '../../../data/projectsData.json' assert { type: 'json' };
import CodeBlock from './CodeBlock';
import React from 'react';
import ReactMarkdown from "react-markdown";
import { convertTitleToSlug } from '../../../components/helpers';
import pdf2md from '@opendocsg/pdf2md';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';


export default async function ProjectPage({ params }) {
    const { projectID } = params;
    const projectDetails = await getProjectDetails(projectID);
    const content = await createContent(projectDetails.url);
    
    return (
        <>
            <div className='flex justify-center items-center text-6xl text-black'>{projectDetails.title}</div>
            <h2 className='text-xl text-black'>{projectDetails.date}</h2>
            <div className='px-36'>
                {content}
            </div>
        </>
    );
}

export async function generateStaticParams() {
    return projectsData.map((project) => ({
        projectID: convertTitleToSlug(project.title),
    }));
}

export async function generateStaticProps({ params }) {
    const projectID = params.projectID;
    const projectDetails = getProjectDetails(projectID);
    const fileData = projectDetails.url ? await getFileData(projectDetails.url) : null;
    return {
        props: {
            projectDetails,
            fileData,
        },
        revalidate: 120,
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

async function getContent(url) {
    const res = await fetch(url);
    return res.json();
}

async function getPDFfromURL(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch PDF");
    
    const buffer = await response.arrayBuffer();
    return pdf2md(Buffer.from(buffer));
}

const createContent = async (url) => {
    let fileType = url.match(/[^.]+$/)[0];
    if (fileType === 'pdf') {
        return getPDFContent(url);
    }  
    if (fileType === 'ipynb') {
        return getNotebookContent(url);
    }
    if (fileType === 'py') {
        return getPythonContent(url);
    }
};

const getPDFContent = async (url) => {
    const pdfMD = await getPDFfromURL(url);
    console.log(pdfMD)
    return <ReactMarkdown
    components={{
      code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
          <SyntaxHighlighter language={match[1]} PreTag="div" {...props}>
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        );
      }
    }}
  >
    {pdfMD}
  </ReactMarkdown>
  
};

const getPythonContent = async (url) => {
    return getContent(url);
};

export const getNotebookContent = async (url) => {
    const notebookData = await getContent(url);
    return (
        <>
            {notebookData &&
                notebookData.cells.map((cell, index) => {
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
                    return null;
                })
            }
        </>
    );
};

const getFileData = async (url) => {
    url = url.toLowerCase();
    let fileType = url.match(/[^.]+$/);
};
