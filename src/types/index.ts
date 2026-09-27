export type Page =
  | "home"
  | "work"
  | "photography"
  | "writing"
  | "about"
  | "project"
  | "photo"
  | "article"
  | "case-study"
  | "library"
  | "handbook"
  | "fiction"
  | "fieldnotes";

export interface NavItem {
  id: Page;
  label: string;
  external?: boolean;
  href?: string;
}

export interface SiteConfig {
  name: string;
  mark: string;
  year: string;
  role: string;
  coordinates: string;
  heroTitle: string;
  heroSubtitle: string;
  premiseTitle: string;
  premiseCopy: string;
  handbookUrl: string;
  socials: {
    email: string;
    github: string;
    instagram: string;
  };
  bio: string[];
  currentPursuits: {
    label: string;
    value: string;
  }[];
}

export interface ProjectOutcome {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  featured: boolean;
  status: string;
  role: string;
  duration: string;
  tools: string;
  thumbnail: string;
  bannerImage: string;
  desc: string;
  liveUrl: string;
  githubUrl: string;
  outcomes: ProjectOutcome[];
  content: string;
}

export interface PhotoItem {
  id: string;
  title: string;
  series: string;
  year: string;
  location: string;
  camera: string;
  imageUrl: string;
  aspectRatio: string;
  links: {
    unsplash?: string;
    highRes?: string;
  };
  notes: string;
}

export interface Article {
  slug: string;
  title: string;
  date: string;
  category: string;
  status: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  content: string;
}
