import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

interface ShopifyCardProps {
  title: string;
  description: string;
  imageUrl: string;
  codeSnippet: string;
  liveUrl?: string;
  index: number;
}

export const ShopifyCard = ({
  title,
  description,
  imageUrl,
  codeSnippet,
  liveUrl,
  index,
}: ShopifyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative bg-panel rounded-xl border border-panel-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:glow-accent-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-secondary border-b border-panel-border">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="ml-4 text-foreground text-sm font-mono font-medium">
            {title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Code className="w-4 h-4 text-primary" />
          <span className="text-xs text-muted-foreground font-mono">.liquid</span>
        </div>
      </div>

      {/* Image / Code Preview */}
      <div className="relative h-56 overflow-hidden">
        {/* Store Screenshot */}
        <img
          src={imageUrl}
          alt={`${title} screenshot`}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isHovered ? "opacity-10 blur-sm scale-110" : "opacity-100"
          }`}
        />

        {/* Code Overlay on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 p-4 flex items-center justify-center"
        >
          <pre className="text-xs font-mono text-emerald-400 whitespace-pre-wrap overflow-hidden max-h-full">
            <code>{codeSnippet}</code>
          </pre>
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-panel via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        <div className="flex items-center justify-between">
          <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-mono rounded border border-primary/30">
            Shopify Liquid
          </span>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              View Store
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

      {/* Hover hint */}
      <div className="absolute bottom-4 right-4">
        <span className="text-xs text-muted-foreground font-mono opacity-50 group-hover:opacity-0 transition-opacity">
          hover for code
        </span>
      </div>
    </motion.div>
  );
};

export default ShopifyCard;
