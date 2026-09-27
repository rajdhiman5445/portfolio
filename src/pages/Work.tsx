import React, { useState } from "react";
import type { Page } from "@/types";
import { projects } from "@/data/projects";
import Type from "@/components/ui/Type";
import Action from "@/components/ui/Action";
import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import Footer from "@/components/Footer";

interface WorkProps {
  navigate: (page: Page) => void;
}

export default function Work({ navigate }: WorkProps) {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <main className="page shell">
      <div className="page-intro">
        <SectionLabel index="01">Work index / 2022—2025</SectionLabel>
        <Type as="h1">
          Selected <i>work</i> across image, interface, and machine.
        </Type>
        <Type>
          A selective index of finished projects and useful experiments. Each is a different way to ask a question.
        </Type>
      </div>
      <div className="filter-bar" role="group" aria-label="Project filters">
        {["All", "Photography", "Design", "Engineering", "AI/ML", "Robotics"].map((f) => (
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
            key={project.title}
            className="project-row"
            onClick={() => navigate("case-study")}
          >
            <span className="project-no">0{i + 1}</span>
            <div className="project-thumb">
              <img src={project.img} alt="" />
            </div>
            <div>
              <Type as="h2">{project.title}</Type>
              <Type>{project.desc}</Type>
            </div>
            <div className="project-meta">
              <span>{project.cat}</span>
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
