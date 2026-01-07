export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface ShopifyProject {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  snippet: string; // The Liquid code snippet
}
