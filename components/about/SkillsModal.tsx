"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type Skill = {
  label: string;
  description: string;
};

type SkillsModalProps = {
  isOpen: boolean;
  skills: Skill[];
  onClose: () => void;
};

const SkillsModal = ({ isOpen, skills, onClose }: SkillsModalProps) => {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-background/85 backdrop-blur-md" />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="skills-modal-title"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
            className="relative z-10 w-full max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border border-panel-border bg-panel shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-panel-border px-6 py-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                  Skill Catalog
                </p>
                <h3 id="skills-modal-title" className="mt-1 text-xl font-semibold">
                  All Skills
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-panel-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="Close skills modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[calc(85vh-73px)] overflow-y-auto p-6">
              <div className="grid gap-4 md:grid-cols-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                    className="rounded-xl border border-panel-border bg-background/40 p-4"
                  >
                    <div className="font-mono text-sm font-semibold text-foreground">
                      {skill.label}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default SkillsModal;
