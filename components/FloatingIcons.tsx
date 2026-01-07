"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Rocket, 
  Terminal, 
  Layers, 
  Zap,
  Github,
  Figma,
  Database,
  Globe,
  Box,
  Cpu
} from "lucide-react";
import { useEffect, useState } from "react";

const icons = [
  { Icon: Code2, delay: 0, x: "10%", y: "15%" },
  { Icon: Palette, delay: 0.2, x: "75%", y: "10%" },
  { Icon: Rocket, delay: 0.4, x: "15%", y: "45%" },
  { Icon: Terminal, delay: 0.6, x: "80%", y: "35%" },
  { Icon: Layers, delay: 0.8, x: "25%", y: "70%" },
  { Icon: Zap, delay: 1, x: "85%", y: "65%" },
  { Icon: Github, delay: 1.2, x: "50%", y: "20%" },
  { Icon: Figma, delay: 1.4, x: "40%", y: "80%" },
  { Icon: Database, delay: 1.6, x: "65%", y: "50%" },
  { Icon: Globe, delay: 1.8, x: "90%", y: "85%" },
  { Icon: Box, delay: 2, x: "5%", y: "90%" },
  { Icon: Cpu, delay: 2.2, x: "60%", y: "5%" },
];

export default function FloatingIcons() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallaxX = useSpring(useTransform(mouseX, [0, 1920], [-15, 15]), {
    stiffness: 50,
    damping: 20,
  });

  const parallaxY = useSpring(useTransform(mouseY, [0, 1080], [-15, 15]), {
    stiffness: 50,
    damping: 20,
  });

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("pointermove", handleMouseMove);
    return () => window.removeEventListener("pointermove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {icons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: x,
            top: y,
            x: parallaxX,
            y: parallaxY,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.08, 0.15, 0.08],
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{
            opacity: {
              duration: 4,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut",
            },
            scale: {
              duration: 0.5,
              delay: delay,
            },
            y: {
              duration: 6,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut",
            },
          }}
        >
          <Icon 
            className="text-foreground/20" 
            size={48} 
            strokeWidth={1}
          />
        </motion.div>
      ))}
    </div>
  );
}
