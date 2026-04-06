"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AboutBioWindow from "./about/AboutBioWindow";
import SkillsModal from "./about/SkillsModal";
import SkillsPreview from "./about/SkillsPreview";
import { bioLines, skills, visibleSkillsCount } from "./about/about-data";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);

  const previewSkills = skills.slice(0, visibleSkillsCount);

  useEffect(() => {
    if (!isSkillsModalOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSkillsModalOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSkillsModalOpen]);

  const openSkillsModal = () => setIsSkillsModalOpen(true);
  const closeSkillsModal = () => setIsSkillsModalOpen(false);

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
          <AboutBioWindow bioLines={bioLines} isInView={isInView} />
        </motion.div>

        <SkillsPreview
          previewSkills={previewSkills}
          isInView={isInView}
          isSkillsModalOpen={isSkillsModalOpen}
          onOpenSkillsModal={openSkillsModal}
        />
      </div>

      <SkillsModal isOpen={isSkillsModalOpen} skills={skills} onClose={closeSkillsModal} />
    </section>
  );
};

export default AboutSection;
