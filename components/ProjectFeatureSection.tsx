import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types/types";

interface ProjectFeatureSectionProps extends Project {
  index: number;
}

export const ProjectFeatureSection = ({
  title,
  description,
  techStack,
  imageUrl,
  liveUrl,
  githubUrl,
  index,
}: ProjectFeatureSectionProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8 lg:gap-16 items-center`}
    >
      {/* Image section */}
      <div className="w-full lg:w-1/2">
        <div className="relative rounded-xl overflow-hidden border border-panel-border bg-panel group shadow-2xl">
          {/* Window Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-panel-border">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="overflow-hidden">
            <img
              src={imageUrl}
              alt={`${title} preview`}
              className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-start">
        <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
          {title}
        </h2>

        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-secondary/50 text-sm font-mono text-muted-foreground rounded-full border border-panel-border"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded-lg hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-foreground font-mono text-sm rounded-lg border border-panel-border hover:border-primary transition-colors hover:text-primary"
            >
              <Github className="w-4 h-4" />
              View Source
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectFeatureSection;
