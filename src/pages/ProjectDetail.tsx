import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Page } from "@/types";
import { getProjects, getProjectBySlug } from "@/utils/content";
import Type from "@/components/ui/Type";
import Action from "@/components/ui/Action";
import Arrow from "@/components/ui/Arrow";
import Footer from "@/components/Footer";

interface ProjectDetailProps {
  slug?: string;
  navigate: (page: Page, param?: string) => void;
}

export default function ProjectDetail({ slug, navigate }: ProjectDetailProps) {
  const projects = getProjects();
  const project = slug ? getProjectBySlug(slug) || projects[0] : projects[0];

  return (
    <main className="case-study">
      <section className="case-hero shell">
        <Action className="back-link" onClick={() => navigate("work")}>
          ← Projects index
        </Action>
        <div className="case-title">
          <Type className="eyebrow">{project.category} / {project.year}</Type>
          <Type as="h1">{project.title}</Type>
          {project.subtitle && (
            <Type as="h2">{project.subtitle}</Type>
          )}
        </div>
        <div className="case-meta">
          {project.role && (
            <div>
              <span>Role</span>
              <strong>{project.role}</strong>
            </div>
          )}
          {project.duration && (
            <div>
              <span>Duration</span>
              <strong>{project.duration}</strong>
            </div>
          )}
          {project.status && (
            <div>
              <span>Status</span>
              <strong>{project.status}</strong>
            </div>
          )}
          {project.tools && (
            <div>
              <span>Tools</span>
              <strong>{project.tools}</strong>
            </div>
          )}
        </div>
      </section>

      {project.bannerImage && (
        <div className="case-image-wide">
          <img src={project.bannerImage} alt={project.title} />
        </div>
      )}

      <section className="case-section shell">
        <div className="markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {project.content}
          </ReactMarkdown>
        </div>

        {project.outcomes && project.outcomes.length > 0 && (
          <div className="outcomes" style={{ marginTop: "4rem" }}>
            {project.outcomes.map((outcome, idx) => (
              <span key={idx}>
                <strong>{outcome.value}</strong>
                {outcome.label}
              </span>
            ))}
          </div>
        )}

        {(project.liveUrl || project.githubUrl) && (
          <div className="photo-links" style={{ marginTop: "3rem" }}>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Visit Project <Arrow />
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                Source Code <Arrow />
              </a>
            )}
          </div>
        )}
      </section>

      <Footer navigate={navigate} />
    </main>
  );
}
