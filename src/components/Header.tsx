import React, { useState } from "react";
import type { Page, NavItem } from "@/types";
import { getSiteConfig } from "@/utils/content";
import Action from "./ui/Action";
import Arrow from "./ui/Arrow";

interface HeaderProps {
  page: Page;
  navigate: (page: Page) => void;
}

export default function Header({ page, navigate }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const config = getSiteConfig();

  const navItems: NavItem[] = [
    { id: "work", label: "Projects" },
    { id: "photography", label: "Photography" },
    { id: "writing", label: "Writing" },
    { id: "about", label: "About" },
  ];

  return (
    <header className="site-header">
      <Action className="signature" onClick={() => navigate("home")} ariaLabel="Go to home">
        <span className="signature-mark">{config.mark || "R"}</span>
        <span>{config.name} / {config.year}</span>
      </Action>
      <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
        {navItems.map((item, index) => (
          <Action
            key={item.id}
            onClick={() => {
              navigate(item.id);
              setOpen(false);
            }}
            className={`nav-link ${page === item.id ? "active" : ""}`}
          >
            <span>0{index + 1}</span>
            {item.label}
          </Action>
        ))}
        {config.handbookUrl && (
          <a
            href={config.handbookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            <span>0{navItems.length + 1}</span>
            Handbook <Arrow />
          </a>
        )}
      </nav>
      <Action
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        ariaLabel="Toggle navigation"
      >
        {open ? "Close" : "Menu"}
      </Action>
    </header>
  );
}
