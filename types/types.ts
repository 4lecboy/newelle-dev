export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
}
