import { load as yamlLoad } from "js-yaml";
import type { SiteConfig, Project, PhotoItem, Article } from "@/types";
import siteConfigData from "../../content/siteConfig.json";
import photographyData from "../../content/photography.json";

const projectFiles = import.meta.glob("/content/projects/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const articleFiles = import.meta.glob("/content/articles/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseMarkdown<T>(raw: string): { data: T; content: string } {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;
  const match = frontmatterRegex.exec(raw);
  if (!match) {
    return { data: {} as T, content: raw };
  }
  try {
    const data = (yamlLoad(match[1]) || {}) as T;
    return { data, content: match[2].trim() };
  } catch (e) {
    console.error("Error parsing frontmatter:", e);
    return { data: {} as T, content: raw };
  }
}

export function getSiteConfig(): SiteConfig {
  return siteConfigData as SiteConfig;
}

export function getProjects(): Project[] {
  const projects: Project[] = [];
  for (const path in projectFiles) {
    const raw = projectFiles[path];
    const { data, content } = parseMarkdown<Partial<Project>>(raw);
    const slug = data.slug || path.replace("/content/projects/", "").replace(".md", "");
    projects.push({
      slug,
      title: data.title || "Untitled Project",
      subtitle: data.subtitle || "",
      category: data.category || "General",
      year: data.year || "2025",
      featured: Boolean(data.featured),
      status: data.status || "Completed",
      role: data.role || "",
      duration: data.duration || "",
      tools: data.tools || "",
      thumbnail: data.thumbnail || "",
      bannerImage: data.bannerImage || data.thumbnail || "",
      desc: data.desc || data.subtitle || "",
      liveUrl: data.liveUrl || "",
      githubUrl: data.githubUrl || "",
      outcomes: data.outcomes || [],
      content,
    });
  }
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getProjects().find((p) => p.slug === slug);
}

export function getArticles(): Article[] {
  const articles: Article[] = [];
  for (const path in articleFiles) {
    const raw = articleFiles[path];
    const { data, content } = parseMarkdown<Partial<Article>>(raw);
    const slug = data.slug || path.replace("/content/articles/", "").replace(".md", "");
    articles.push({
      slug,
      title: data.title || "Untitled Article",
      date: data.date || "",
      category: data.category || "Essay",
      status: data.status || "Published",
      readTime: data.readTime || "5 min read",
      excerpt: data.excerpt || "",
      tags: data.tags || [],
      content,
    });
  }
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getArticles().find((a) => a.slug === slug);
}

export function getPhotos(): PhotoItem[] {
  return photographyData as PhotoItem[];
}

export function getPhotoById(id: string): PhotoItem | undefined {
  return getPhotos().find((p) => p.id === id);
}
