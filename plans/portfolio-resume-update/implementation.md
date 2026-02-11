# Portfolio Resume Update & Shopify Removal - Implementation Guide

## Goal

Update portfolio website with accurate resume information (name, title, bio, skills, projects) and remove all Shopify-related content to reflect current focus on fullstack development with Next.js, TypeScript, and Supabase.

## Prerequisites

Make sure you are currently on the `portfolio-resume-update` branch before beginning implementation.

```powershell
# Check current branch
git branch --show-current

# If not on portfolio-resume-update, create and switch to it
git checkout -b portfolio-resume-update

# If branch exists but not checked out
git checkout portfolio-resume-update
```

---

## Step-by-Step Instructions

### Step 1: Remove Shopify Content

#### Step 1.1: Delete Shopify Component Files

- [x] Delete the ShopifySection component file:

```powershell
Remove-Item components\ShopifySection.tsx
```

- [x] Delete the ShopifyCard component file:

```powershell
Remove-Item components\ShopifyCard.tsx
```

#### Step 1.2: Remove Shopify Section from Main Page

- [x] Open [app/page.tsx](app/page.tsx) and remove the Shopify import and component usage
- [x] Replace the entire file content with:

```typescript
"use client";

import Hero from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";
import Projects from "@/components/ProjectsSection";
import FloatingIcons from "@/components/FloatingIcons";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingIcons />
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <AboutSection />
          <Projects />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
```

#### Step 1.3: Remove Shopify Navigation Link

- [x] Open [components/Navigation.tsx](components/Navigation.tsx) and remove the Shopify nav link
- [x] Find the `navLinks` array and replace it with:

```typescript
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
```

#### Step 1.4: Clean Up Type Definitions (Optional)

- [x] Open [types/types.ts](types/types.ts) and remove the ShopifyProject interface
- [x] Replace the entire file content with:

```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
}
```

#### Step 1 Verification Checklist

- [ ] Run `npm run dev` in terminal
- [ ] Verify dev server starts without errors at http://localhost:3000
- [ ] Check that homepage loads successfully
- [ ] Verify navigation menu only shows: About, Projects, Contact
- [ ] Scroll through page - confirm Shopify section is not visible
- [ ] Run `npm run build` to ensure no import errors

#### Step 1 STOP & COMMIT

**STOP & COMMIT:** Agent must stop here and wait for the user to test, stage, and commit the change.

---

### Step 2: Update Personal Details & Professional Identity

#### Step 2.1: Update HeroSection - Name & Title

- [x] Open [components/HeroSection.tsx](components/HeroSection.tsx)
- [x] Find the greeting heading and replace with updated name:

```typescript
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-6 text-foreground"
        >
          Hello, I&apos;m <span className="text-primary">NEWELLE ALEC QUIAMBAO</span>.
        </motion.h1>
```

-- [x] Find the role description paragraph and replace with updated title:

```typescript
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-2xl"
        >
          I build fullstack web applications with modern technologies.
        </motion.p>
```

#### Step 2.2: Update HeroSection - Typing Animation Code

- [x] In the same file, find the `fullText` constant and replace with updated developer object:

```typescript
const fullText = `const developer = {
  name: "NEWELLE ALEC QUIAMBAO",
  role: "Fullstack Web Developer",
  company: "Primex Ventures",
  location: "Tarlac City, Philippines",
  stack: ["Next.js", "TypeScript", "React", "Supabase"],
  focus: "Building scalable fullstack applications",
  expertise: ["App Router", "PostgreSQL", "Authentication", "Tailwind CSS"],
  status: "Open to opportunities"
};`;
```

-- [x] Find the syntax highlighting section and replace with updated highlighting rules:

```typescript
              <div
                className="font-mono text-sm text-foreground leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: text
                    .replace(/"(.*?)"/g, '<span class="text-terminal-green">"$1"</span>')
                    .replace(/name:/g, '<span class="text-primary ml-4">name:</span>')
                    .replace(/role:/g, '<span class="text-primary ml-4">role:</span>')
                    .replace(/company:/g, '<span class="text-primary ml-4">company:</span>')
                    .replace(/location:/g, '<span class="text-primary ml-4">location:</span>')
                    .replace(/stack:/g, '<span class="text-primary ml-4">stack:</span>')
                    .replace(/focus:/g, '<span class="text-primary ml-4">focus:</span>')
                    .replace(/expertise:/g, '<span class="text-primary ml-4">expertise:</span>')
                    .replace(/status:/g, '<span class="text-primary ml-4">status:</span>')
                    .replace(/const|developer/g, '<span class="text-purple-400">$&</span>')
                    .replace(/\[/g, '[')
                    .replace(/\]/g, ']')
                    .replace(/{/g, '{')
                    .replace(/}/g, '}'),
                }}
              />
```

#### Step 2.3: Update AboutSection - Bio

- [x] Open [components/AboutSection.tsx](components/AboutSection.tsx)
- [x] Find the `bioLines` array and replace with updated bio:

```typescript
const bioLines = [
  "// About Me",
  "",
  "I'm a Fullstack Web Developer with a passion for",
  "creating scalable, user-friendly applications.",
  "",
  "Currently working at Primex Ventures in Tarlac City,",
  "I specialize in Next.js, TypeScript, and Supabase",
  "to build modern web applications with PostgreSQL",
  "databases, authentication systems, and responsive UIs.",
  "",
  "From inventory management systems to developer",
  "portfolio aggregators, I focus on solving real-world",
  "problems with clean, maintainable code.",
  "",
  "// Building the future, one commit at a time",
  "// Let's create something amazing together.",
];
```

#### Step 2.4: Update AboutSection - Skills

- [x] In the same file, find the `skills` array and replace with updated tech stack:

```typescript
const skills = [
  "Next.js (App Router)",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Shadcn UI",
  "Supabase (PostgreSQL)",
  "Node.js",
  "Git/GitHub",
  "Vercel",
  "NextAuth/Custom Auth",
];
```

#### Step 2.5: Update ContactSection - Contact Links

- [x] Open [components/ContactSection.tsx](components/ContactSection.tsx)
- [x] Find the `contactLinks` array and replace with verified contact information:

```typescript
const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "nrquiambao1499@gmail.com",
    href: "mailto:nrquiambao1499@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/nrquiambao",
    href: "https://www.linkedin.com/in/nrquiambao/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@4lecboy",
    href: "https://github.com/4lecboy",
  },
];
```

#### Step 2.6: Update ContactSection - Footer Copyright

- [x] In the same file, find the footer copyright text and replace with full name:

```typescript
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm"
        >
          © {new Date().getFullYear()} NEWELLE ALEC QUIAMBAO. All rights reserved.
        </motion.p>
```

#### Step 2.7: Update App Metadata

- [x] Open [app/layout.tsx](app/layout.tsx)
- [x] Find the metadata export and replace with updated information:

```typescript
export const metadata: Metadata = {
  title: "NEWELLE ALEC QUIAMBAO | Fullstack Web Developer",
  description:
    "Fullstack Web Developer specializing in Next.js, TypeScript, React, and Supabase. Building scalable applications with PostgreSQL, authentication systems, and modern UI frameworks.",
};
```

#### Step 2.8: Update Navigation Logo (Optional)

- [x] Open [components/Navigation.tsx](components/Navigation.tsx)
- [x] Find the logo/brand text and replace if desired:

```typescript
          <Link href="/" className="text-2xl font-bold text-primary font-mono">
            &lt;NAQ /&gt;
          </Link>
```

#### Step 2 Verification Checklist

- [ ] Run `npm run dev` in terminal
- [ ] Verify hero section displays full name: "NEWELLE ALEC QUIAMBAO"
- [ ] Check typing animation shows updated developer object with correct company, location, stack
- [ ] Verify about section bio reflects fullstack role and Primex Ventures employment
- [ ] Confirm all 10 skills badges display correctly in about section
- [ ] Test email link opens mail client with correct address
- [ ] Test LinkedIn link opens correct profile in new tab
- [ ] Test GitHub link opens correct profile (@4lecboy) in new tab
- [ ] Verify footer shows full name: "© 2026 NEWELLE ALEC QUIAMBAO"
- [ ] Check browser tab title shows: "NEWELLE ALEC QUIAMBAO | Fullstack Web Developer"
- [ ] Run `npm run lint` to check for errors

#### Step 2 STOP & COMMIT

**STOP & COMMIT:** Agent must stop here and wait for the user to test, stage, and commit the change.

---

### Step 3: Replace Projects with Real Portfolio Projects

> **⚠️ CLARIFICATIONS NEEDED BEFORE PROCEEDING:**
>
> This step requires the following information from the user:
>
> 1. **VapeTrack PH:**
>    - Live URL (or note "Private client project - not publicly accessible")
>    - GitHub repo URL (or note "Private repository")
>    - Screenshot/image URL for the project card
> 2. **DevFinder:**
>    - Live URL
>    - GitHub repo URL
>    - Screenshot/image URL for the project card
> 3. **Project Count:** Should we show 2 projects or add a 3rd? Current layout has 3-column grid.
> 4. **Image Hosting:** Do you have images hosted somewhere, or should we use placeholder images?
>
> **Once clarifications are provided, proceed with the code below (update URLs accordingly):**

#### Step 3.1: Update ProjectsSection - Replace Projects Array

- [ ] Open [components/ProjectsSection.tsx](components/ProjectsSection.tsx)
- [ ] Find the `projects` array and replace with your real projects:

```typescript
const projects = [
  {
    title: "VapeTrack PH",
    description:
      "Multi-branch sales and inventory management system with real-time stock tracking, dual authentication (4-digit PIN for staff, Email/Password for owners), and analytics dashboard with revenue charts. Fullstack application deployed on Vercel.",
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Supabase (PostgreSQL)",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", // REPLACE WITH ACTUAL SCREENSHOT
    liveUrl: undefined, // REPLACE: "https://vapetrack-ph.vercel.app" or leave undefined if private
    githubUrl: undefined, // REPLACE: "https://github.com/4lecboy/vapetrack-ph" or leave undefined if private
  },
  {
    title: "DevFinder",
    description:
      "Developer portfolio aggregator platform showcasing developers' projects and GitHub statistics dynamically. Built with React (Vite) and GitHub API for a smooth, performant user experience.",
    techStack: ["React (Vite)", "GitHub API", "TypeScript", "Tailwind CSS"],
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80", // REPLACE WITH ACTUAL SCREENSHOT
    liveUrl: "https://devfinder-example.vercel.app", // REPLACE WITH ACTUAL URL
    githubUrl: "https://github.com/4lecboy/devfinder", // REPLACE WITH ACTUAL URL
  },
  // Optional 3rd project - remove this comment block if only showing 2 projects
  // {
  //   title: "Project Name",
  //   description: "Project description here...",
  //   techStack: ["Tech 1", "Tech 2", "Tech 3"],
  //   imageUrl: "https://example.com/image.jpg",
  //   liveUrl: "https://example.com",
  //   githubUrl: "https://github.com/username/repo",
  // },
];
```

#### Step 3.2: Adjust Grid Layout (If Showing Only 2 Projects)

- [ ] If showing only 2 projects, update the grid classes in the same file
- [ ] Find the projects grid container and update to 2-column max:

```typescript
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
```

> **Note:** If showing 3 projects, keep the existing `md:grid-cols-3` class.

#### Step 3.3: Update Section Title (Optional)

- [ ] Consider updating the Projects section heading if needed
- [ ] Current heading is `<h2><span className="text-primary">&lt;</span>Projects<span className="text-primary"> /&gt;</span></h2>`
- [ ] Can be updated to emphasize fullstack work:

```typescript
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          <span className="text-primary">&lt;</span>
          Featured Projects
          <span className="text-primary"> /&gt;</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Fullstack applications built with Next.js, TypeScript, and Supabase
        </p>
```

#### Step 3 Verification Checklist

- [ ] Run `npm run dev` in terminal
- [ ] Verify Projects section displays correct number of cards (2 or 3)
- [ ] Check VapeTrack PH card:
  - Title displays correctly
  - Description is accurate and readable
  - All 5 tech stack badges render correctly
  - Image loads (or shows placeholder)
  - Live demo button behavior (disabled if undefined, opens in new tab if provided)
  - GitHub button behavior (disabled if undefined, opens in new tab if provided)
- [ ] Check DevFinder card:
  - Title displays correctly
  - Description is accurate
  - All 4 tech stack badges render correctly
  - Image loads
  - Live demo link opens in new tab
  - GitHub link opens in new tab
- [ ] Verify responsive layout:
  - Desktop (>768px): Cards display in grid (2 or 3 columns)
  - Mobile (<768px): Cards stack vertically
- [ ] Test hover animations work smoothly
- [ ] Verify card animations trigger on scroll (stagger effect)
- [ ] Run `npm run build` to ensure no errors

#### Step 3 STOP & COMMIT

**STOP & COMMIT:** Agent must stop here and wait for the user to test, stage, and commit the change.

---

## Final Verification & Testing

After completing all steps, perform full QA:

### Build & Lint Checks

```powershell
# Run linter
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

### Visual QA Checklist

- [ ] Navigate to http://localhost:3000 (or :3001 if 3000 is busy)
- [ ] Hero section displays full name and updated role
- [ ] Typing animation shows correct company, location, and tech stack
- [ ] About section bio reflects fullstack developer role
- [ ] Skills section shows all 10 updated technologies
- [ ] Projects section shows 2-3 real portfolio projects
- [ ] Shopify section is completely removed
- [ ] Navigation menu has 3 links: About, Projects, Contact
- [ ] All contact links work correctly
- [ ] Footer shows full name
- [ ] Browser tab shows updated title

### Responsive QA (Mobile)

- [ ] Open DevTools and toggle device toolbar (F12 → Ctrl+Shift+M)
- [ ] Test at 375px width (mobile)
- [ ] Test at 768px width (tablet breakpoint)
- [ ] Verify mobile menu toggle works
- [ ] Check all sections stack correctly
- [ ] Verify project cards are readable and images scale

### Accessibility QA

- [ ] All external links have `target="_blank" rel="noopener noreferrer"`
- [ ] Navigation uses semantic HTML
- [ ] Buttons have appropriate aria-labels
- [ ] Color contrast is sufficient (already handled by design system)

---

## Deployment Notes

Once all changes are verified:

1. **Commit your changes:**

   ```powershell
   git add .
   git commit -m "Update portfolio with resume information and remove Shopify content"
   ```

2. **Push to remote:**

   ```powershell
   git push origin portfolio-resume-update
   ```

3. **Create Pull Request** (if using GitHub workflow)

4. **Deploy:**
   - If using Vercel, push to main branch will auto-deploy
   - If manual deployment, run `npm run build` then upload `.next` folder

---

## Rollback Instructions

If something goes wrong:

```powershell
# Discard all changes and return to previous state
git checkout .
git clean -fd

# Or switch back to main branch
git checkout main
```

---

## Notes

- All animations use `framer-motion` with `useInView` hook (once: true, margin: "-100px")
- External links include `target="_blank" rel="noopener noreferrer"` for security
- Uses Tailwind CSS 4 with custom theme tokens
- Mobile breakpoint: 768px (matches `use-mobile` hook)
- No automated tests - all QA is manual
- Project images should be optimized (max 800px width recommended)

---

**Implementation Complete! 🚀**

All code is production-ready and follows existing codebase patterns. Remember to update URLs and images before deploying.
