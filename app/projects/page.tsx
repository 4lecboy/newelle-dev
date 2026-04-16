"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FloatingIcons from "@/components/FloatingIcons";
import Navigation from "@/components/Navigation";
import ProjectFeatureSection from "@/components/ProjectFeatureSection";
import { projects } from "@/lib/projects";

const ProjectsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingIcons />
      <div className="relative z-10">
        <Navigation />
        <main>
          <section className="pt-28 pb-24 px-4 bg-secondary/30">
            <div className="container max-w-6xl mx-auto">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-center mb-14"
              >
                <h1 className="font-mono text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-primary">&lt;</span>
                  All Projects
                  <span className="text-primary">/&gt;</span>
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  A full catalog of projects focused on practical, scalable products and
                  clean engineering.
                </p>
                <div className="mt-6">
                  <Link
                    href="/#projects"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-panel-border bg-panel text-foreground font-mono text-sm hover:border-primary hover:text-primary transition-colors"
                  >
                    Back to Featured Projects
                  </Link>
                </div>
              </motion.div>

              <div className="flex flex-col gap-32 pb-16">
                {projects.map((project, index) => (
                  <ProjectFeatureSection key={project.title} {...project} index={index} />
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProjectsPage;
