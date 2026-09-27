import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Page } from "@/types";
import { getArticles, getArticleBySlug } from "@/utils/content";
import Type from "@/components/ui/Type";
import Action from "@/components/ui/Action";
import Arrow from "@/components/ui/Arrow";

interface ArticleDetailProps {
  slug?: string;
  navigate: (page: Page, param?: string) => void;
}

export default function ArticleDetail({ slug, navigate }: ArticleDetailProps) {
  const [night, setNight] = useState(true);
  const articles = getArticles();
  const article = slug ? getArticleBySlug(slug) || articles[0] : articles[0];

  const currentIndex = articles.findIndex((a) => a.slug === article.slug);
  const nextArticle = articles[currentIndex + 1];

  return (
    <main className={`reader fiction-reader ${night ? "" : "light-reading"}`}>
      <aside className="fiction-meta">
        <Action onClick={() => navigate("writing")} className="back-link">
          ← All Writing
        </Action>
        <div>
          <span className="meta">{article.category} · {article.date}</span>
          <Type as="h2">{article.title}</Type>
          <Type>{article.readTime} · {article.status}</Type>
        </div>
        <div className="reading-controls">
          <span>READING MODE</span>
          <Action
            className={night ? "active" : ""}
            onClick={() => setNight(true)}
          >
            Night
          </Action>
          <Action
            className={!night ? "active" : ""}
            onClick={() => setNight(false)}
          >
            Paper
          </Action>
        </div>
      </aside>

      <article className="story" style={{ maxWidth: "48rem" }}>
        <span className="chapter-kicker">{article.category.toUpperCase()}</span>
        <div className="markdown-body" style={{ marginTop: "2rem" }}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.content}
          </ReactMarkdown>
        </div>

        {nextArticle && (
          <div className="chapter-nav" style={{ marginTop: "5rem" }}>
            <span>Next piece</span>
            <Action onClick={() => navigate("article", nextArticle.slug)}>
              {nextArticle.title} <Arrow />
            </Action>
          </div>
        )}
      </article>
    </main>
  );
}
