import React, { useState } from "react";
import type { Page } from "@/types";
import { archiveItems } from "@/data/archive";
import Type from "@/components/ui/Type";
import Action from "@/components/ui/Action";
import Arrow from "@/components/ui/Arrow";
import TextInput from "@/components/ui/TextInput";
import SectionLabel from "@/components/ui/SectionLabel";
import Footer from "@/components/Footer";

interface LibraryProps {
  navigate: (page: Page) => void;
}

export default function Library({ navigate }: LibraryProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const results = archiveItems.filter(
    (item) =>
      (category === "All" || item.category === category) &&
      `${item.category} ${item.title} ${item.format} ${item.extent} ${item.status}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );

  return (
    <main className="page library-page shell">
      <div className="page-intro library-intro">
        <SectionLabel index="02">Personal archive / 93 objects</SectionLabel>
        <Type as="h1">
          The <i>library</i> is a place for things that keep unfolding.
        </Type>
        <Type>
          Writing, image collections, technical references, and living documents—organized for return rather than completion.
        </Type>
      </div>
      <div className="library-tools">
        <label>
          <span>Search the archive</span>
          <TextInput
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try “robotics” or “fiction”"
          />
        </label>
        <div className="filter-bar">
          {["All", "Handbook", "Photography", "Fiction", "Novel", "Reference"].map((f) => (
            <Action
              key={f}
              className={category === f ? "active" : ""}
              onClick={() => setCategory(f)}
            >
              {f}
            </Action>
          ))}
        </div>
      </div>
      <div className="archive-heading">
        <span>Type</span>
        <span>Title / description</span>
        <span>Format</span>
        <span>Extent</span>
        <span>Status</span>
      </div>
      <div className="archive-list">
        {results.map((item, i) => (
          <Action
            className="archive-row"
            key={item.title}
            onClick={() =>
              item.category === "Handbook"
                ? navigate("handbook")
                : item.category === "Fiction"
                ? navigate("fiction")
                : undefined
            }
          >
            <span>{item.category}</span>
            <strong>
              <i>0{i + 1}</i>
              {item.title}
            </strong>
            <span>{item.format}</span>
            <span>{item.extent}</span>
            <span>{item.status}</span>
            <Arrow />
          </Action>
        ))}
      </div>
      {results.length === 0 && (
        <div className="empty-state">No objects found. Try a broader term.</div>
      )}
      <Footer navigate={navigate} />
    </main>
  );
}
