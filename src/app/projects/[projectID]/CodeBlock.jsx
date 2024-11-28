"use client"
import { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; // Can change theme

const CodeBlock = ({ children }) => {
  useEffect(() => {
    hljs.highlightAll(); // Run after component mounts
  }, []);

  return (
    <div className='py-1'>
      <pre>
        <code className="javascript whitespace-pre-wrap">
          {children}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
