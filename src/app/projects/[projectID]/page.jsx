/* eslint-disable react/jsx-no-undef */
import projectsData from '../../../data/projectsData.json' assert { type: 'json' };
import CodeBlock from './CodeBlock';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'; // For HTML in Markdown
import { convertTitleToSlug } from '../../../components/helpers';
import pdf2md from '@opendocsg/pdf2md';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Check for updates every minute
export const revalidate = 60;

export default async function ProjectPage({ params }) {
  const { projectID } = await params;
  const projectDetails = await getProjectDetails(projectID);
  const content = await createContent(projectDetails.url);

  return (
    <div className="min-h-screen py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center text-6xl text-black font-Inter font-bold">
          {projectDetails.title}
        </div>
        <h2 className="text-xl text-gray-600 text-center mt-2">{projectDetails.date}</h2>
        <div className="px-4 sm:px-12 lg:px-36 mt-8 prose max-w-none">{content}</div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    projectID: convertTitleToSlug(project.title),
  }));
}

function getProjectDetails(projectID) {
  const projectDetails = projectsData.find(
    (project) => convertTitleToSlug(project.title) === String(projectID)
  );
  if (!projectDetails) {
    throw new Error(`Project with ID ${projectID} not found: ${JSON.stringify(projectsData)}`);
  }
  return projectDetails;
}

async function getJSONContent(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch JSON from ${url}`);
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch (error) {
    console.error('Failed to parse JSON from', url, '\nResponse text:', text);
    throw error;
  }
}

async function getTextContent(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch text from ${url}`);
  return res.text().then(text => text.replace(/\r\n/g, '\n').replace(/\n{2,}/g, '\n\n'));
}

async function getPDFfromURL(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch PDF from ${url}`);
  const buffer = await response.arrayBuffer();
  return pdf2md(Buffer.from(buffer));
}

// Custom components for Markdown rendering
const markdownComponents = {
  h1: ({ children }) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
  h2: ({ children }) => <h2 className="text-3xl font-bold my-3">{children}</h2>,
  h3: ({ children }) => <h3 className="text-2xl font-bold my-2">{children}</h3>,
  h4: ({ children }) => <h4 className="text-xl font-bold my-2">{children}</h4>,
  h5: ({ children }) => <h5 className="text-lg font-bold my-1">{children}</h5>,
  h6: ({ children }) => <h6 className="text-base font-bold my-1">{children}</h6>,
  p: ({ children }) => <p className="my-4">{children}</p>,
  a: ({ href, children }) => (
    <a href={href} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className="list-disc list-outside ml-6 my-4">{children}</ul>,
  ol: ({ children }) => <ul className="list-decimal list-outside ml-6 my-4">{children}</ul>,
  li: ({ children }) => <li className="my-1">{children}</li>,
  code: ({ inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={oneDark}
        language={match[1]}
        PreTag="div"
        className="rounded-md my-4"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className="bg-gray-100 rounded px-1" {...props}>{children}</code>
    );
  },
  video: ({ src }) => (
    <video controls className="max-w-full my-4 rounded">
      <source src={src} />
    </video>
  ),
};

const createContent = async (url) => {
  try {
    const fileTypeMatch = url.match(/[^.]+$/);
    if (!fileTypeMatch) return <div>No valid file type found.</div>;
    const fileType = fileTypeMatch[0].toLowerCase();
    
    if (fileType === 'pdf') return await getPDFContent(url);
    if (fileType === 'ipynb') return await getNotebookContent(url);
    if (fileType === 'md') return await getMDContent(url);
    return <div>Unsupported file type: {fileType}</div>;
  } catch (error) {
    console.error('Error creating content for url', url, error);
    return <div>Error loading content.</div>;
  }
};

const getPDFContent = async (url) => {
  let pdfMD = await getPDFfromURL(url);
  // Enhanced PDF markdown processing
  pdfMD = pdfMD
    .replace(/([^\n])\n([^\n])/g, '$1 $2') // Join broken lines
    .replace(/\n{2,}/g, '\n\n') // Normalize paragraph breaks
    .replace(/^([#]+)(\S)/gm, '$1 $2'); // Fix heading spacing
  
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={markdownComponents}
    >
      {pdfMD}
    </ReactMarkdown>
  );
};

export const getNotebookContent = async (url) => {
  const notebookData = await getJSONContent(url);
  return (
    <div className="space-y-4">
      {notebookData.cells.map((cell, index) => {
        const source = Array.isArray(cell.source) ? cell.source.join('') : cell.source;
        if (cell.cell_type === 'markdown') {
          return (
            <ReactMarkdown
              key={index}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={markdownComponents}
            >
              {source}
            </ReactMarkdown>
          );
        }
        if (cell.cell_type === 'code') {
          return (
            <CodeBlock key={index} language="python">
              {source}
            </CodeBlock>
          );
        }
        return null;
      })}
    </div>
  );
};

const getMDContent = async (url) => {
  const mdContent = await getTextContent(url);
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={markdownComponents}
    >
      {mdContent}
    </ReactMarkdown>
  );
};