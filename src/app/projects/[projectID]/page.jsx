/* eslint-disable react/jsx-no-undef */
import projectsData from '../../../data/projectsData.json' assert { type: 'json' };
import CodeBlock from './CodeBlock';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { convertTitleToSlug } from '../../../components/helpers';
import pdf2md from '@opendocsg/pdf2md';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default async function ProjectPage({ params }) {
  const { projectID } = params;
  const projectDetails = await getProjectDetails(projectID);
  const content = await createContent(projectDetails.url);

  return (
    <>
      <div className="flex justify-center items-center text-6xl text-black">
        {projectDetails.title}
      </div>
      <h2 className="text-xl text-black">{projectDetails.date}</h2>
      <div className="px-36">{content}</div>
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
  let fileData = null;
  try {
    if (projectDetails.url) {
      fileData = await getFileData(projectDetails.url);
    }
  } catch (error) {
    console.error('Error in generateStaticProps fetching fileData:', error);
  }
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
    (project) => convertTitleToSlug(project.title) === String(projectID)
  );
  if (!projectDetails) {
    throw new Error(
      `Project with ID ${projectID} not found: ${JSON.stringify(projectsData)}`
    );
  }
  return projectDetails;
}

// Fetch JSON content (for notebooks)
async function getJSONContent(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch JSON from ${url}`);
  }
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch (error) {
    console.error('Failed to parse JSON from', url, '\nResponse text:', text);
    throw error;
  }
}

// Fetch plain text content (for Python scripts)
async function getTextContent(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch text from ${url}`);
  }
  return res.text();
}

async function getPDFfromURL(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch PDF from ${url}`);

  const buffer = await response.arrayBuffer();
  return pdf2md(Buffer.from(buffer));
}

// Create content based on file extension
const createContent = async (url) => {
  try {
    const fileTypeMatch = url.match(/[^.]+$/);
    if (!fileTypeMatch) return null;
    const fileType = fileTypeMatch[0].toLowerCase();

    if (fileType === 'pdf') {
      return await getPDFContent(url);
    }
    if (fileType === 'ipynb') {
      return await getNotebookContent(url);
    }
    if (fileType === 'py') {
      return await getPythonContent(url);
    }
    return null;
  } catch (error) {
    console.error('Error creating content for url', url, error);
    return <div>Error loading content.</div>;
  }
};

// Custom heading components to enforce styling
const headingComponents = {
  h1: ({ node, children, ...props }) => (
    <h1 className="text-4xl font-bold my-4" {...props}>
      {children}
    </h1>
  ),
  h2: ({ node, children, ...props }) => (
    <h2 className="text-3xl font-bold my-3" {...props}>
      {children}
    </h2>
  ),
  h3: ({ node, children, ...props }) => (
    <h3 className="text-2xl font-bold my-2" {...props}>
      {children}
    </h3>
  ),
  h4: ({ node, children, ...props }) => (
    <h4 className="text-xl font-bold my-2" {...props}>
      {children}
    </h4>
  ),
  h5: ({ node, children, ...props }) => (
    <h5 className="text-lg font-bold my-1" {...props}>
      {children}
    </h5>
  ),
  h6: ({ node, children, ...props }) => (
    <h6 className="text-base font-bold my-1" {...props}>
      {children}
    </h6>
  ),
};

const getPDFContent = async (url) => {
  let pdfMD = await getPDFfromURL(url);
  // Trim each line to remove extra whitespace
  const trimmedMD = pdfMD
    .split('\n')
    .map((line) => line.trim())
    .join('\n');
  // Ensure a space after the first group of '#' if missing
  let fixedMD = trimmedMD.replace(/^(#+)(\S)/gm, '$1 $2');
  // Collapse extra heading markers (e.g. "# # Conclusion" -> "# Conclusion")
  fixedMD = fixedMD.replace(/^(#{1,6})(?:\s*#{1,6})+\s+(.*)$/gm, '$1 $2');
  console.log('Processed PDF Markdown:', fixedMD);
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        ...headingComponents,
        code({ node, inline, className, children, ...props }) {
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
        },
      }}
    >
      {fixedMD}
    </ReactMarkdown>
  );
};

const getPythonContent = async (url) => {
  const codeText = await getTextContent(url);
  return <CodeBlock>{codeText}</CodeBlock>;
};

export const getNotebookContent = async (url) => {
  const notebookData = await getJSONContent(url);
  return (
    <>
      {notebookData &&
        notebookData.cells.map((cell, index) => {
          if (cell.cell_type === 'markdown') {
            return (
              <div key={index} className="markdown">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={headingComponents}
                >
                  {Array.isArray(cell.source)
                    ? cell.source.join(' ')
                    : cell.source}
                </ReactMarkdown>
              </div>
            );
          }
          if (cell.cell_type === 'code') {
            return (
              <div key={index}>
                <CodeBlock>
                  {Array.isArray(cell.source)
                    ? cell.source.join(' ')
                    : cell.source}
                </CodeBlock>
              </div>
            );
          }
          return null;
        })}
    </>
  );
};

const getFileData = async (url) => {
  const fileTypeMatch = url.match(/[^.]+$/);
  if (!fileTypeMatch) return null;
  const fileType = fileTypeMatch[0].toLowerCase();

  if (fileType === 'pdf') {
    return await getPDFfromURL(url);
  } else if (fileType === 'ipynb') {
    return await getJSONContent(url);
  } else if (fileType === 'py') {
    return await getTextContent(url);
  }
  return null;
};
