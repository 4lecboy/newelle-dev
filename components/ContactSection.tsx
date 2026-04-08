import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";
import CodeWindow from "./CodeWindow";

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
    value: "@newelle-dev",
    href: "https://github.com/newelle-dev",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    // Replace with your real number using international format, e.g. https://wa.me/639171234567
    href: "https://wa.me/601125366014",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            Contact
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind? Let&apos;s build something amazing together.
          </p>
        </motion.div>

        {/* Terminal-style contact card (uses CodeWindow for consistent title bar) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full"
        >
          <CodeWindow fileName="contact.sh" className="rounded-xl">
            {/* Terminal Content */}
            <div className="p-6 md:p-8 font-mono">
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="mb-6"
              >
                <span className="text-muted-foreground">$</span>
                <span className="text-primary ml-2">get in touch</span>
                <span className="terminal-cursor text-primary ml-1">▌</span>
              </motion.div>

              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-4 py-3 px-4 rounded-lg bg-secondary/50 hover:bg-secondary border border-transparent hover:border-primary/30 transition-all duration-300 group"
                  >
                    <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                      <span className="text-muted-foreground text-sm">{link.label}:</span>
                      <span className="text-foreground group-hover:text-primary transition-colors">
                        {link.value}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.9 }}
                className="mt-8 pt-6 border-t border-panel-border"
              >
                <p className="text-muted-foreground text-sm">
                  <span className="text-emerald-400">{"// "}</span>
                  Currently available for freelance projects and full-time opportunities.
                </p>
              </motion.div>
            </div>
          </CodeWindow>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-sm font-mono">
            <span className="text-primary">&lt;/&gt;</span> Built with Nextjs, Tailwind & Framer Motion
          </p>
          <p className="text-muted-foreground/50 text-xs mt-2">
            © {new Date().getFullYear()} Newelle. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default ContactSection;
