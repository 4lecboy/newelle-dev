import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

export const ProjectCard = ({
  title,
  description,
  techStack,
  imageUrl,
  liveUrl,
  githubUrl,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-panel rounded-xl border border-panel-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:glow-accent-sm flex flex-col h-full"
    >
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-secondary border-b border-panel-border">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="ml-4 text-foreground text-sm font-mono font-medium">
            {title}
          </span>
        </div>
        <div className="flex gap-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Project Image */}
      <div className="relative h-56 overflow-hidden border-b border-panel-border/50">
        <img
          src={imageUrl}
          alt={`${title} screenshot`}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
        />
      </div>

      {/* Content */}
      <div className="p-6 grow flex flex-col">
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-secondary text-xs font-mono text-muted-foreground rounded border border-panel-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 pb-6 flex gap-3 mt-auto">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-mono text-sm rounded-lg hover:bg-primary/90 transition-colors"
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
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-foreground font-mono text-sm rounded-lg border border-panel-border hover:border-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
