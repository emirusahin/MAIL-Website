import projectsData from '../../../data/projectsData.json' assert { type: 'json' };
import CodeBlock from './CodeBlock';
import React from 'react';
import ReactMarkdown from "react-markdown";

export default async function ProjectPage({ params }) {
    const projectID = (await params).projectID

    const projectDetails = await getProjectDetails(projectID);
    const notebookData = projectDetails.notebookURL ? await getNotebook(projectDetails.notebookURL) : null;

    return (
        <>
            <div className='flex justify-center items-center text-6xl text-black'>{projectDetails.title}</div>
            <h2 className='text-xl text-black'>{projectDetails.date}</h2>
            <div className='px-36'>
                {notebookData && notebookData.cells.map((cell, index) => {
                    // Check the type of cell (code or markdown)
                    if (cell.cell_type === 'markdown') {
                        return (
                            <div key={index} className='markdown'>
                                <ReactMarkdown>
                                    {cell.source.join(' ')}
                                </ReactMarkdown>

                                
                            </div>
                        );
                    }

                    if (cell.cell_type === 'code') {
                        return (
                            <div key={index}>
                                <CodeBlock>{cell.source.join('')}</CodeBlock>
                            </div>
                        );
                    }

                    return null; // Ignore cell types other then markdown and code
                })}
            </div>
        </>
    )
}


function getProjectDetails(projectID) {
    const projectDetails = projectsData.find(
        project => project.id === String(projectID)
    );
    if (!projectDetails) {
        throw new Error(`Project with ID ${projectID} not found`);
    }
    return projectDetails;
}

async function getNotebook(notebookURL) {
    const notebookRes = await fetch(notebookURL);
    const notebook = notebookRes.json()
    return notebook
}



{/* <div className='px-36 pt-4'>
                <p>We begin by taking the raw text of the article...</p>
                <CodeBlock>t_article = tokenize_article(article)</CodeBlock>
                <p>Now, we’ve got our article split into individual words...</p>
                <CodeBlock>l_article = lowercase(t_article)</CodeBlock>
                <p>With the text all lowercased...</p>
                <CodeBlock>r_article = remove_stopwords(l_article)</CodeBlock>
                <p>Now that we’ve reduced the article...</p>
                <CodeBlock>la_article = lemmatization(r_article)</CodeBlock>
                <p>Next, we need to tidy up the text...</p>
                <CodeBlock>re_article = remove_punctuation(la_article)</CodeBlock>
                <p>Now that we’ve processed the article...</p>
                <CodeBlock>model = Word2Vec.load("cnn_w2v.model")</CodeBlock>
            </div> */}