# Portfolio Resume Update & Shopify Removal

**Branch:** `portfolio-resume-update`
**Description:** Update portfolio with accurate resume information and remove Shopify-related content

## Goal

Align the portfolio website with your current professional profile by updating personal details, work experience, projects, and skills based on your resume. Remove all Shopify-related content since your focus is now on fullstack development with Next.js, TypeScript, and Supabase.

## Implementation Steps

### Step 1: Remove Shopify Content

**Files:**

- components/ShopifySection.tsx (delete)
- components/ShopifyCard.tsx (delete)
- app/page.tsx
- components/Navigation.tsx
- types/types.ts

**What:** Clean removal of all Shopify-related components, imports, navigation links, and type definitions. This includes deleting the ShopifySection and ShopifyCard components, removing the Shopify nav link from Navigation, and removing the import and component usage from the main page.

**Testing:**

- Run `npm run dev` and verify homepage loads without errors
- Check navigation menu - "Shopify" link should be gone
- Scroll through page - Shopify section should not appear
- Run `npm run build` to ensure no import errors

---

### Step 2: Update Personal Details & Professional Identity

**Files:**

- components/HeroSection.tsx
- components/AboutSection.tsx
- components/ContactSection.tsx

**What:** Update name, title, bio, contact information, and skills to match resume:

- **Name:** "Newelle Alec Quiambao" (currently just "Newelle")
- **Title:** "Fullstack Web Developer" (currently "Frontend Developer & Shopify Theme Customizer")
- **Email:** Verify/update to nrquiambao1499@gmail.com
- **GitHub:** Update to correct username [NEEDS CLARIFICATION: What is your current GitHub username?]
- **LinkedIn:** Update to correct profile [NEEDS CLARIFICATION: What is your LinkedIn profile URL?]
- **Bio:** Rewrite to reflect fullstack experience, current role at Primex Ventures, and expertise with Next.js/TypeScript/Supabase
- **Skills:** Update from Shopify-focused to: Next.js (App Router), React, TypeScript, Tailwind CSS, Shadcn UI, Supabase (PostgreSQL), Node.js, Git/GitHub, Vercel, Responsive Design, Authentication (NextAuth/Custom)
- **Typing animation:** Update tech stack from `["JavaScript", "React", "Next.js", "Shopify Liquid"]` to reflect current stack

**Testing:**

- Verify hero section displays correct name and title
- Check typing animation shows relevant tech stack
- Verify about section bio reflects fullstack role and current employment
- Verify all skills badges display correctly
- Test contact links (email, GitHub, LinkedIn) open correctly
- Verify footer copyright shows correct name

---

### Step 3: Replace Projects with Real Portfolio Projects

**Files:**

- components/ProjectsSection.tsx

**What:** Replace the 3 placeholder projects with your actual projects from resume:

**Project 1: VapeTrack PH (Sales & Inventory Management System)**

- **Description:** Multi-branch inventory system with real-time stock tracking, dual authentication (4-digit PIN for staff, Email/Password for owners), and owner analytics dashboard with revenue charts. Full-stack application deployed on Vercel.
- **Tech Stack:** ["Next.js 16", "TypeScript", "Supabase (PostgreSQL)", "Tailwind CSS", "Shadcn UI"]
- **Live URL:** [NEEDS CLARIFICATION: What is the live URL for VapeTrack PH?]
- **GitHub URL:** [NEEDS CLARIFICATION: What is the GitHub repo URL? Or is it private?]
- **Image:** [NEEDS CLARIFICATION: Do you have a screenshot/image URL for VapeTrack PH? Otherwise will use appropriate placeholder]

**Project 2: DevFinder (Developer Portfolio Aggregator)**

- **Description:** Platform to showcase developers' projects and GitHub stats dynamically. Built with React (Vite) and GitHub API for smooth, performant user experience.
- **Tech Stack:** ["React (Vite)", "GitHub API", "TypeScript", "Tailwind CSS"]
- **Live URL:** [NEEDS CLARIFICATION: What is the live URL for DevFinder?]
- **GitHub URL:** [NEEDS CLARIFICATION: What is the GitHub repo URL?]
- **Image:** [NEEDS CLARIFICATION: Do you have a screenshot/image URL for DevFinder?]

[NEEDS CLARIFICATION: Do you want to include any other projects, or just these two main ones? The current layout shows 3 projects but we can adjust the grid to show 2.]

**Testing:**

- Verify both/all projects display with correct titles and descriptions
- Check tech stack badges render correctly
- Test live demo and GitHub links (if provided) open in new tabs
- Verify responsive layout on mobile (grid should stack properly)
- Check hover animations and card interactions work smoothly

---

## Clarifying Questions

Before I finalize this plan, please provide:

1. **GitHub Username:** What is your current GitHub username? (Research shows @4lecboy but want to confirm)

2. **LinkedIn Profile:** What is your full LinkedIn profile URL?

3. **VapeTrack PH Details:**
   - Live URL (or mark as "Deployed on Vercel" without link if private client project)
   - GitHub repo URL (or note if private/confidential)
   - Screenshot or image URL for project card

4. **DevFinder Details:**
   - Live URL
   - GitHub repo URL
   - Screenshot or image URL for project card

5. **Project Count:** Do you want to showcase just these 2 projects, or add a 3rd project? If adding more, which one?

6. **Current Work Description:** Should I mention "Primex Ventures (Tarlac City)" in the bio, or keep it more general as "currently working as a Fullstack Web Developer"?

7. **Availability Status:** The current site says "Available for hire" - should this remain, or update to reflect current employment status?

---

## Notes

- All changes will maintain existing animation patterns (framer-motion with useInView)
- Styling will continue using Tailwind utility classes and the `cn()` helper
- All external links will include `target="_blank" rel="noopener noreferrer"`
- The plan preserves the App Router structure and "use client" directives
- Type definitions in types/types.ts currently don't match component usage - we can optionally fix this for consistency

---

**Ready to proceed once clarifications are provided!**
