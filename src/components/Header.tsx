import React, { useState } from "react";
import type { Page, NavItem } from "@/types";
import Action from "./ui/Action";

const mainPages: NavItem[] = [
  { id: "work", label: "Work" },
  { id: "library", label: "Library" },
  { id: "fieldnotes", label: "Fieldnotes" },
  { id: "about", label: "About" },
];

interface HeaderProps {
  page: Page;
  navigate: (page: Page) => void;
}

export default function Header({ page, navigate }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Action className="signature" onClick={() => navigate("home")} ariaLabel="Go to home">
        <span className="signature-mark">N</span>
        <span>NAME / 2025</span>
      </Action>
      <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
        {mainPages.map((item, index) => (
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
      </nav>
      <Action className="menu-toggle" onClick={() => setOpen(!open)} ariaLabel="Toggle navigation">
        {open ? "Close" : "Menu"}
      </Action>
    </header>
  );
}
