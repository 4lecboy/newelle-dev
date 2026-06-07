"use client";

import { motion } from "framer-motion";

type Skill = {
  label: string;
  description: string;
};

type SkillsPreviewProps = {
  previewSkills: Skill[];
  isInView: boolean;
  isSkillsModalOpen: boolean;
  onOpenSkillsModal: () => void;
};

const SkillsPreview = ({
  previewSkills,
  isInView,
  isSkillsModalOpen,
  onOpenSkillsModal,
}: SkillsPreviewProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mt-12"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {previewSkills.map((skill, index) => (
          <motion.div
            key={skill.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
            className="bg-panel border border-panel-border rounded-lg px-4 py-4 text-center transition-all duration-300 hover:border-primary hover:glow-accent-sm"
          >
            <p className="font-mono text-sm">{skill.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={onOpenSkillsModal}
          className="inline-flex items-center gap-2 rounded-lg border border-panel-border bg-panel px-5 py-3 font-mono text-sm text-foreground transition-all duration-300 hover:border-primary hover:glow-accent-sm hover:text-primary"
          aria-haspopup="dialog"
          aria-expanded={isSkillsModalOpen}
          aria-label="See all skills"
        >
          See All
          <span className="text-primary">&gt;</span>
        </button>
      </div>
    </motion.div>
  );
};

export default SkillsPreview;
