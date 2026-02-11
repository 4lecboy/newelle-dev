import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";


const projects = [
  {
    title: "VapeTrack PH",
    description: "Multi-branch sales and inventory management system with real-time stock tracking, dual authentication (4-digit PIN for staff, Email/Password for owners), and analytics dashboard with revenue charts. Fullstack application deployed on Vercel.",
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Supabase (PostgreSQL)",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with advanced filtering and cart functionality.",
    techStack: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization platform for marketing teams.",
    techStack: ["React", "D3.js", "Node.js", "MongoDB"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
