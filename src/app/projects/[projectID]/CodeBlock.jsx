"use client";
import { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; // Can change theme

const CodeBlock = ({ children, language = 'javascript' }) => {
  useEffect(() => {
    hljs.highlightAll(); // Run after component mounts
  }, []);

  // Normalize newlines in children
  const normalizedCode = String(children).replace(/\r\n/g, '\n').replace(/\n{2,}/g, '\n').trim();

  return (
    <div className="py-2">
      <pre className="text-sm leading-relaxed">
        <code className={language} style={{ whiteSpace: 'pre-wrap' }}>
          {normalizedCode}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;