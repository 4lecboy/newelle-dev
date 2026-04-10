import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section id="projects" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            Projects
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of recent work showcasing modern development practices
            and clean, maintainable code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-panel-border bg-panel text-foreground font-mono text-sm hover:border-primary hover:text-primary transition-colors"
          >
            See All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
