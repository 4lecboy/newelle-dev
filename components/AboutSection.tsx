import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CodeWindow from "./CodeWindow"; // added import

const bioLines = [
  "// About Me",
  "",
  "I'm a Frontend Developer with a passion for",
  "creating exceptional digital experiences.",
  "",
  "Specializing in modern JavaScript frameworks",
  "like React and Next.js, I build fast,",
  "accessible, and visually stunning websites.",
  "",
  "As a Shopify theme expert, I help brands",
  "customize their storefronts to stand out",
  "and convert more customers.",
  "",
  "// Currently seeking new opportunities",
  "// Let's build something great together.",
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4">
      <div className="container max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          <span className="text-primary">&lt;</span>
          About
          <span className="text-primary">/&gt;</span>
        </motion.h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-hidden"
        >
          <CodeWindow fileName="about.md" className="rounded-xl">
            {/* Editor Content */}
            <div className="flex">
              {/* Line Numbers */}
              <div className="py-6 px-4 border-r border-panel-border bg-secondary/50 select-none">
                {bioLines.map((_, index) => (
                  <div
                    key={index}
                    className="text-line-number font-mono text-sm leading-7 text-right"
                  >
                    {index + 1}
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="py-6 px-6 flex-1">
                {bioLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="font-mono text-sm md:text-base leading-7"
                  >
                    {line.startsWith("//") ? (
                      <span className="text-emerald-400">{line}</span>
                    ) : line ? (
                      <span className="text-foreground">{line}</span>
                    ) : (
                      <br />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </CodeWindow>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {["React", "Next.js", "TypeScript", "Shopify Liquid", "Tailwind CSS", "Node.js", "Git", "Figma"].map(
            (skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="bg-panel border border-panel-border rounded-lg px-4 py-3 text-center font-mono text-sm hover:border-primary hover:glow-accent-sm transition-all duration-300"
              >
                {skill}
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
