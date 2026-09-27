import React from "react";
import type { Page } from "@/types";
import Type from "./ui/Type";
import Action from "./ui/Action";
import Arrow from "./ui/Arrow";

interface FooterProps {
  navigate: (page: Page) => void;
}

export default function Footer({ navigate }: FooterProps) {
  return (
    <footer className="footer">
      <div>
        <Type className="eyebrow">A conversation can begin anywhere.</Type>
        <Type as="h2" className="footer-title">
          Let’s exchange <i>ideas.</i>
        </Type>
      </div>
      <div className="footer-links">
        <Action onClick={() => navigate("about")}>
          Email <Arrow />
        </Action>
        <Action>
          Instagram <Arrow />
        </Action>
        <Action>
          GitHub <Arrow />
        </Action>
      </div>
      <div className="footer-bottom">
        <span>© 2025 [NAME]</span>
        <span>Built with intention, curiosity, and too much coffee.</span>
        <Action onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to top ↑
        </Action>
      </div>
    </footer>
  );
}
