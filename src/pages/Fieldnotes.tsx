import React, { useState } from "react";
import type { Page } from "@/types";
import { notes } from "@/data/notes";
import Type from "@/components/ui/Type";
import Action from "@/components/ui/Action";
import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import Footer from "@/components/Footer";

interface FieldnotesProps {
  navigate: (page: Page) => void;
}

export default function Fieldnotes({ navigate }: FieldnotesProps) {
  const [view, setView] = useState("All");
  const shown = view === "All" ? notes : notes.filter((note) => note.status === view);

  return (
    <main className="page fieldnotes shell">
      <div className="page-intro">
        <SectionLabel index="03">Fieldnotes / Living record</SectionLabel>
        <Type as="h1">
          Ideas in public, before they become <i>certain.</i>
        </Type>
        <Type>
          Observations, experiments, research fragments, and the useful edges of
          unfinished work.
        </Type>
      </div>
      <div className="notes-status">
        <div className="status-live">
          <i /> Currently investigating: tactile intelligence and slow interfaces
        </div>
        <div className="filter-bar">
          {["All", "Published", "Active", "Unfinished"].map((f) => (
            <Action
              key={f}
              className={view === f ? "active" : ""}
              onClick={() => setView(f)}
            >
              {f}
            </Action>
          ))}
        </div>
      </div>
      <div className="fieldnote-list">
        {shown.map((note) => (
          <article className="fieldnote-row" key={note.title}>
            <div>
              <span>{note.date}</span>
              <span>{note.category}</span>
            </div>
            <div>
              <div className={`status ${note.status.toLowerCase()}`}>
                {note.status}
              </div>
              <Type as="h2">{note.title}</Type>
              <Type>{note.excerpt}</Type>
              <div className="tags">
                {note.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <Arrow />
          </article>
        ))}
      </div>
      <Footer navigate={navigate} />
    </main>
  );
}
