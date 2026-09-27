import React from "react";
import type { Page } from "@/types";
import atmosphere from "@/imports/_.jpeg";
import { getSiteConfig, getProjects, getArticles, getPhotos } from "@/utils/content";
import Type from "@/components/ui/Type";
import Action from "@/components/ui/Action";
import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import Footer from "@/components/Footer";

interface HomeProps {
  navigate: (page: Page, param?: string) => void;
}

export default function Home({ navigate }: HomeProps) {
  const config = getSiteConfig();
  const projects = getProjects();
  const articles = getArticles();
  const photos = getPhotos();

  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const featuredPhoto = photos[0];
  const recentArticles = articles.slice(0, 3);

  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-media">
            <img src={atmosphere} alt="Abstract orange and blue light moving through darkness" />
            <div className="hero-shade" />
          </div>
          <div className="hero-copy">
            <Type className="eyebrow">{config.role} / {config.name}</Type>
            <Type as="h1" className="display">
              I observe the world,
              <br />
              then <i>build</i> new ones.
            </Type>
            <div className="hero-intro">
              <Type>{config.heroSubtitle}</Type>
              <span className="coordinate" style={{ whiteSpace: "pre-line" }}>
                {config.coordinates}
              </span>
            </div>
          </div>
          <div className="scroll-cue">
            SCROLL TO ENTER <span>↓</span>
          </div>
        </section>

        <section className="statement shell">
          <SectionLabel index="00">Premise</SectionLabel>
          <Type as="h2" className="statement-title">
            {config.premiseTitle}
          </Type>
          <Type className="statement-copy">
            {config.premiseCopy}
          </Type>
        </section>

        {featuredProject && (
          <section className="featured shell">
            <div className="section-head">
              <SectionLabel index="01">Selected work</SectionLabel>
              <Action onClick={() => navigate("work")} className="text-link">
                View all projects <Arrow />
              </Action>
            </div>
            <article className="feature-primary">
              <Action
                className="media-button"
                onClick={() => navigate("project", featuredProject.slug)}
              >
                <img src={featuredProject.bannerImage || featuredProject.thumbnail} alt={featuredProject.title} />
                <span className="image-index">F / 01</span>
              </Action>
              <div className="feature-copy">
                <Type className="meta">
                  {featuredProject.category} / {featuredProject.year}
                </Type>
                <Type as="h3">{featuredProject.title}</Type>
                <Type>{featuredProject.subtitle || featuredProject.desc}</Type>
                <Action
                  onClick={() => navigate("project", featuredProject.slug)}
                  className="circle-link"
                  ariaLabel={`Open ${featuredProject.title} case study`}
                >
                  <Arrow />
                </Action>
              </div>
            </article>

            <div className="feature-grid">
              {featuredPhoto && (
                <article
                  className="photo-feature"
                  onClick={() => navigate("photo", featuredPhoto.id)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={featuredPhoto.imageUrl} alt={featuredPhoto.title} />
                  <div>
                    <Type className="meta">PHOTOGRAPHY / {featuredPhoto.year}</Type>
                    <Type as="h3">{featuredPhoto.title}</Type>
                    <Type className="muted">{featuredPhoto.notes || "A study of motion and memory."}</Type>
                  </div>
                </article>
              )}

              {articles[0] && (
                <article
                  className="text-feature"
                  onClick={() => navigate("article", articles[0].slug)}
                  style={{ cursor: "pointer" }}
                >
                  <span className="large-number">02</span>
                  <Type className="meta">{articles[0].category.toUpperCase()} / {articles[0].readTime}</Type>
                  <Type as="h3">{articles[0].title}</Type>
                  <Type className="serif-excerpt">
                    “{articles[0].excerpt}”
                  </Type>
                  <Action onClick={() => navigate("article", articles[0].slug)} className="text-link">
                    Read the piece <Arrow />
                  </Action>
                </article>
              )}

              {projects[1] && (
                <article
                  className="technical-feature"
                  onClick={() => navigate("project", projects[1].slug)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="tech-visual">
                    <span className="orbit orbit-a" />
                    <span className="orbit orbit-b" />
                    <span className="core">01</span>
                  </div>
                  <Type className="meta">{projects[1].category.toUpperCase()} / {projects[1].status.toUpperCase()}</Type>
                  <Type as="h3">{projects[1].title}</Type>
                  <div className="tech-stats">
                    {projects[1].outcomes?.map((o, idx) => (
                      <span key={idx}>{o.value} {o.label}</span>
                    ))}
                  </div>
                </article>
              )}
            </div>
          </section>
        )}

        <section className="themes shell">
          <SectionLabel index="02">Four ways of working</SectionLabel>
          <div className="theme-list">
            {[
              {
                title: "Photography",
                desc: "Capturing light, movement, and public architecture.",
                tags: "Images / Light / Atmosphere",
                action: () => navigate("photography"),
              },
              {
                title: "Engineering",
                desc: "Interfaces, machine perception models, and rovers.",
                tags: "Code / AI·ML / Robotics",
                action: () => navigate("work"),
              },
              {
                title: "Writing",
                desc: "Fieldnotes, essays, and stories on attention and technology.",
                tags: "Essays / Notes / Fiction",
                action: () => navigate("writing"),
              },
              {
                title: "Handbook",
                desc: "First-principles documentation on engineering and systems.",
                tags: "Living Docs / External",
                action: () => window.open(config.handbookUrl, "_blank"),
              },
            ].map((theme, i) => (
              <div
                className="theme-row"
                key={theme.title}
                onClick={theme.action}
                style={{ cursor: "pointer" }}
              >
                <span>0{i + 1}</span>
                <Type as="h3">{theme.title}</Type>
                <Type>{theme.desc}</Type>
                <span>{theme.tags} <Arrow /></span>
              </div>
            ))}
          </div>
        </section>

        <section className="notes-preview shell">
          <div className="section-head">
            <SectionLabel index="03">Latest writing & fieldnotes</SectionLabel>
            <Action onClick={() => navigate("writing")} className="text-link">
              All writing <Arrow />
            </Action>
          </div>
          <div className="notes-grid">
            {recentArticles.map((note) => (
              <article
                key={note.slug}
                className="note"
                onClick={() => navigate("article", note.slug)}
                style={{ cursor: "pointer" }}
              >
                <div>
                  <span>{note.date}</span>
                  <span>{note.status}</span>
                </div>
                <Type as="h3">{note.title}</Type>
                <span className="meta">{note.category} · {note.readTime}</span>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer navigate={navigate} />
    </>
  );
}
