import React, { useState } from "react";
import type { Page } from "@/types";
import Type from "@/components/ui/Type";
import Action from "@/components/ui/Action";
import Arrow from "@/components/ui/Arrow";

interface FictionProps {
  navigate: (page: Page) => void;
}

export default function Fiction({ navigate }: FictionProps) {
  const [night, setNight] = useState(true);

  return (
    <main className={`reader fiction-reader ${night ? "" : "light-reading"}`}>
      <aside className="fiction-meta">
        <Action onClick={() => navigate("library")} className="back-link">
          ← Library
        </Action>
        <div>
          <span className="meta">SHORT FICTION / 01</span>
          <Type as="h2">The Cartographer of Small Silences</Type>
          <Type>14 minute read · 2024</Type>
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
      <article className="story">
        <span className="chapter-kicker">I / THE FIRST COASTLINE</span>
        <Type as="h1">The Cartographer of Small Silences</Type>
        <Type className="story-deck">
          A story about maps, memory, and the territories we invent to find our way
          home.
        </Type>
        <div className="ornament">∼</div>
        <Type className="first-paragraph">
          By morning, every map in the archive had grown a new coastline.
        </Type>
        <Type>
          Mara found them while opening the western drawers: thin black lines
          curling through familiar cities, crossing avenues and bedrooms, dividing
          kitchens from their windows. The ink was still wet.
        </Type>
        <Type>
          She stood very still. The archive held eleven thousand maps, each
          printed, folded, and catalogued by hand. Nothing inside it was supposed
          to change.
        </Type>
        <Type>
          Outside, the city was waking without incident. Trains carried their small
          bright rooms through tunnels. A baker lifted the shutters across the
          street. Somewhere, a kettle began to whistle and was forgotten.
        </Type>
        <blockquote>
          “A map,” her teacher once told her, “is simply an argument about what
          deserves to remain visible.”
        </blockquote>
        <Type>
          Mara placed the oldest map beneath the examination lamp. The new coastline
          passed directly through the house where she had grown up.
        </Type>
        <div className="chapter-nav">
          <span>Chapter 1 of 4</span>
          <Action>
            Continue to II <Arrow />
          </Action>
        </div>
      </article>
    </main>
  );
}
