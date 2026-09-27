import React, { useState } from "react";
import type { Page } from "@/types";
import { getArticles } from "@/utils/content";
import Type from "@/components/ui/Type";
import Action from "@/components/ui/Action";
import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import Footer from "@/components/Footer";

interface WritingProps {
  navigate: (page: Page, param?: string) => void;
}

export default function Writing({ navigate }: WritingProps) {
  const articles = getArticles();
  const [view, setView] = useState("All");

  const categories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

  const shown =
    view === "All"
      ? articles
      : articles.filter((a) => a.category === view || a.status === view);

  return (
    <main className="page fieldnotes shell">
      <div className="page-intro">
        <SectionLabel index="03">Writing / Fieldnotes & Essays</SectionLabel>
        <Type as="h1">
          Ideas in public, before they become <i>certain.</i>
        </Type>
        <Type>
          Observations, technical fieldnotes, research fragments, and short stories written directly in Markdown.
        </Type>
      </div>

      <div className="notes-status">
        <div className="status-live">
          <i /> Writing hub · Auto-compiled from GitHub markdown files
        </div>
        <div className="filter-bar">
          {categories.map((c) => (
            <Action
              key={c}
              className={view === c ? "active" : ""}
              onClick={() => setView(c)}
            >
              {c}
            </Action>
          ))}
        </div>
      </div>

      <div className="fieldnote-list">
        {shown.map((article) => (
          <Action
            className="fieldnote-row"
            key={article.slug}
            onClick={() => navigate("article", article.slug)}
            style={{ width: "100%", background: "none", border: 0, borderBottom: "1px solid var(--line)", textAlign: "left", cursor: "pointer" }}
            ariaLabel={`Read ${article.title}`}
          >
            <div>
              <span>{article.date}</span>
              <span>{article.category}</span>
            </div>
            <div>
              <div className={`status ${article.status.toLowerCase()}`}>
                {article.status} · {article.readTime}
              </div>
              <Type as="h2">{article.title}</Type>
              <Type>{article.excerpt}</Type>
              <div className="tags">
                {article.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <Arrow />
          </Action>
        ))}
      </div>

      <Footer navigate={navigate} />
    </main>
  );
}
