
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const codeSnippets = [
  "import { NextApiRequest, NextApiResponse } from 'next';",
  "const express = require('express');",
  "const app = express();",
  "app.get('/', (req, res) => res.send('Hello World!'));",
  "const [count, setCount] = useState(0);",
  "function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }",
  "useEffect(() => { console.log('Component mounted'); }, []);",
  "const user = { name: 'John Doe', age: 30 };",
  "SELECT * FROM users WHERE id = 1;",
  "git commit -m 'feat: add new hero section'",
  "<Button onClick={() => setCount(count + 1)}>Click me</Button>",
  "const fetchData = async () => { await fetch('/api/data'); }",
  "export default function HomePage() { return <h1>Welcome</h1>; }",
  "class User { constructor(name) { this.name = name; } }",
];

const FloatingCode = () => {
  const [snippets, setSnippets] = useState<any[]>([]);

  useEffect(() => {
    const generateSnippets = () => {
      const newSnippets = Array.from({ length: 20 }).map((_, i) => {
        const content = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        const style = {
          left: `${Math.random() * 100}%`,
          animationDuration: `${15 + Math.random() * 15}s`,
          animationDelay: `${Math.random() * 10}s`,
          fontSize: `${0.7 + Math.random() * 0.4}rem`,
        };
        return { id: i, content, style };
      });
      setSnippets(newSnippets);
    };
    generateSnippets();
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {snippets.map(snippet => (
        <pre
          key={snippet.id}
          className="text-foreground/20 absolute top-full animate-float-up"
          style={snippet.style}
        >
          {snippet.content}
        </pre>
      ))}
    </div>
  );
};

export { FloatingCode };
