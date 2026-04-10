import { Project } from "@/types/types";

export const projects: Project[] = [
  {
    title: "VapeTrack PH",
    description:
      "Multi-branch sales and inventory management system with real-time stock tracking, dual authentication (4-digit PIN for staff, Email/Password for owners), and analytics dashboard with revenue charts. Fullstack application deployed on Vercel.",
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Supabase (PostgreSQL)",
      "Tailwind CSS",
      "Lucide Icons",
      "Vercel",
    ],
    imageUrl: "/project-img/vapetrack-ph.webp",
    liveUrl: "https://vapetrack-ph.vercel.app/",
    githubUrl: "https://github.com/newelle-dev/vapetrack-ph",
    featured: true,
  },
  {
    title: "Chong's Cool Breeze",
    description:
      "Professional aircon services landing site with a conversion-focused single-page flow: hero, services, booking CTAs, coverage map, FAQ, and trust/review components. Data-driven content and component-driven UI built for fast conversion.",
    techStack: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
    ],
    imageUrl: "/project-img/chongs-cool-breeze.webp",
    liveUrl: "https://chongs-cool-breeze.vercel.app/",
    githubUrl: "https://github.com/newelle-dev/chongs-cool-breeze",
    featured: true,
  },
];