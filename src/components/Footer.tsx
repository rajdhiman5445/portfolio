import React from "react";
import type { Page } from "@/types";
import { getSiteConfig } from "@/utils/content";
import Type from "./ui/Type";
import Action from "./ui/Action";
import Arrow from "./ui/Arrow";

interface FooterProps {
  navigate: (page: Page) => void;
}

export default function Footer({ navigate }: FooterProps) {
  const config = getSiteConfig();

  return (
    <footer className="footer">
      <div>
        <Type className="eyebrow">A conversation can begin anywhere.</Type>
        <Type as="h2" className="footer-title">
          Let’s exchange <i>ideas.</i>
        </Type>
      </div>
      <div className="footer-links">
        {config.socials.email && (
          <a
            href={`mailto:${config.socials.email}`}
            className="text-link"
            style={{ textDecoration: "none", color: "inherit", borderBottom: "1px solid var(--line)", padding: ".8rem 0" }}
          >
            Email <Arrow />
          </a>
        )}
        {config.socials.instagram && (
          <a
            href={config.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
            style={{ textDecoration: "none", color: "inherit", borderBottom: "1px solid var(--line)", padding: ".8rem 0" }}
          >
            Instagram <Arrow />
          </a>
        )}
        {config.socials.github && (
          <a
            href={config.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
            style={{ textDecoration: "none", color: "inherit", borderBottom: "1px solid var(--line)", padding: ".8rem 0" }}
          >
            GitHub <Arrow />
          </a>
        )}
      </div>
      <div className="footer-bottom">
        <span>© {config.year} {config.name}</span>
        <span>Built with intention, curiosity, and too much coffee.</span>
        <Action onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to top ↑
        </Action>
      </div>
    </footer>
  );
}
