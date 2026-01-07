import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ShopifyCard from "./ShopifyCard";

const shopifyProjects = [
  {
    title: "Custom Hero Section",
    description: "Designed and built a dynamic hero section with customizable headlines, images, and CTA buttons through the Shopify theme editor.",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    codeSnippet: `{% schema %}
{
  "name": "Custom Hero",
  "settings": [
    {
      "type": "text",
      "id": "headline",
      "label": "Headline"
    },
    {
      "type": "image_picker",
      "id": "background",
      "label": "Background Image"
    }
  ]
}
{% endschema %}`,
    liveUrl: "#",
  },
  {
    title: "Product Collection Grid",
    description: "Built a responsive product grid with filtering capabilities and smooth animations for a better shopping experience.",
    imageUrl: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&q=80",
    codeSnippet: `{% for product in collection.products %}
  <div class="product-card">
    {{ product.featured_image 
      | image_url: width: 400 
      | image_tag }}
    <h3>{{ product.title }}</h3>
    <span class="price">
      {{ product.price | money }}
    </span>
  </div>
{% endfor %}`,
    liveUrl: "#",
  },
  {
    title: "Announcement Bar",
    description: "Created a customizable announcement bar with rotating messages and countdown timer functionality.",
    imageUrl: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=800&q=80",
    codeSnippet: `{%- if section.settings.show_bar -%}
  <div class="announcement-bar"
    style="background: 
      {{ section.settings.bg_color }}">
    {% for block in section.blocks %}
      <span class="message">
        {{ block.settings.text }}
      </span>
    {% endfor %}
  </div>
{%- endif -%}`,
    liveUrl: "#",
  },
];

export const ShopifySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="shopify" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            Shopify
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Custom Shopify theme development and section customization.
            Hover over each project to see the Liquid code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shopifyProjects.map((project, index) => (
            <ShopifyCard key={project.title} {...project} index={index} />
          ))}
        </div>

        {/* Shopify expertise callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-panel border border-panel-border rounded-xl p-8 text-center"
        >
          <h3 className="font-mono text-xl font-semibold mb-4">
            Need a <span className="text-primary">Shopify Expert</span>?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            From custom sections and templates to full theme development,
            I help brands create unique shopping experiences that convert.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded-lg hover:bg-primary/90 transition-colors"
          >
            Let's Talk Shopify
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopifySection;
