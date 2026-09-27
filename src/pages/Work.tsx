import React, { useState } from "react";
import type { Page } from "@/types";
import { getProjects } from "@/utils/content";
import Type from "@/components/ui/Type";
import Action from "@/components/ui/Action";
import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import Footer from "@/components/Footer";

interface WorkProps {
  navigate: (page: Page, param?: string) => void;
}

export default function Work({ navigate }: WorkProps) {
  const projects = getProjects();
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <main className="page shell">
      <div className="page-intro">
        <SectionLabel index="01">Work index / 2022—2025</SectionLabel>
        <Type as="h1">
          Selected <i>work</i> across image, interface, and machine.
        </Type>
        <Type>
          A selective index of engineering systems, robotics prototypes, and UI case studies. Each is a different way to ask a question.
        </Type>
      </div>

      <div className="filter-bar" role="group" aria-label="Project filters">
        {categories.map((f) => (
          <Action
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f}
          </Action>
        ))}
      </div>

      <div className="work-index">
        {visible.map((project, i) => (
          <Action
            key={project.slug}
            className="project-row"
            onClick={() => navigate("project", project.slug)}
          >
            <span className="project-no">0{i + 1}</span>
            <div className="project-thumb">
              {project.thumbnail && <img src={project.thumbnail} alt="" loading="lazy" />}
            </div>
            <div>
              <Type as="h2">{project.title}</Type>
              <Type>{project.desc}</Type>
            </div>
            <div className="project-meta">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>
            <Arrow />
          </Action>
        ))}
      </div>
      <Footer navigate={navigate} />
    </main>
  );
}
