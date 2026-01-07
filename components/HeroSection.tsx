import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import CodeWindow from './CodeWindow';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = `const developer = {
  name: "Alec",
  role: "Frontend Developer & Shopify Theme Customizer",
  stack: ["JavaScript", "React", "Next.js", "Shopify Liquid"],
  passion: "Building beautiful, performant web experiences",
  status: "Available for hire"
}`;

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30); // Typing speed

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold font-mono text-foreground mb-4">
              Hello, I'm <span className="text-primary">Newelle</span>.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">
              I build pixel-perfect interfaces and custom Shopify experiences.
            </p>
          </div>

          <CodeWindow fileName="developer.jsx" className="w-full max-w-2xl mt-8">
            <div className="p-6 font-mono text-sm md:text-base overflow-x-auto whitespace-pre">
              <div dangerouslySetInnerHTML={{ 
                __html: text
                  // highlight string literals first so later replacements don't touch injected HTML
                  .replace(/"(.*?)"/g, '<span class="text-terminal-green">"$1"</span>')
                  // highlight the opening line (const developer = {) as a single unit
                  .replace(/const developer = \{\n?/, '<span class="text-primary">const</span> <span class="text-accent">developer</span> <span class="text-foreground">=</span> <span class="text-accent">{</span>\n')
                  .replace(/\[/g, '<span class="text-accent">[</span>')
                  .replace(/\]/g, '<span class="text-accent">]</span>')
                  .replace(/name:/g, '<span class="text-primary ml-4">name:</span>')
                  .replace(/role:/g, '<span class="text-primary ml-4">role:</span>')
                  .replace(/stack:/g, '<span class="text-primary ml-4">stack:</span>')
                  .replace(/passion:/g, '<span class="text-primary ml-4">passion:</span>')
                  .replace(/status:/g, '<span class="text-primary ml-4">status:</span>')
                  // colorize closing brace if present
                  .replace(/\}/g, '<span class="text-accent">}</span>')
               }} />
               <span className="terminal-cursor text-primary ml-1">▌</span>
            </div>
          </CodeWindow>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
            className="mt-8 flex gap-4"
          >
            <a href="#projects" className="group flex items-center gap-2 px-6 py-3 bg-transparent border border-primary text-primary rounded hover:bg-primary/10 transition-colors font-mono text-sm">
              View Projects
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-6 py-3 text-muted-foreground hover:text-foreground transition-colors font-mono text-sm">
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
