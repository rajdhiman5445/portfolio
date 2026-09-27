import React, { useState } from "react";
import type { Page } from "@/types";
import { getPhotos } from "@/utils/content";
import Type from "@/components/ui/Type";
import Action from "@/components/ui/Action";
import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import Footer from "@/components/Footer";

interface PhotographyProps {
  navigate: (page: Page, param?: string) => void;
}

export default function Photography({ navigate }: PhotographyProps) {
  const photos = getPhotos();
  const [seriesFilter, setSeriesFilter] = useState("All");

  const seriesList = ["All", ...Array.from(new Set(photos.map((p) => p.series)))];

  const visible =
    seriesFilter === "All"
      ? photos
      : photos.filter((p) => p.series === seriesFilter);

  return (
    <main className="page shell">
      <div className="page-intro">
        <SectionLabel index="02">Photography / Visual Studies</SectionLabel>
        <Type as="h1">
          Moments captured between <i>movement,</i> light, and silence.
        </Type>
        <Type>
          A curated selection of street, transit, and architectural photography exploring how natural and artificial light reshape urban form.
        </Type>
      </div>

      <div className="filter-bar" role="group" aria-label="Photo series filters">
        {seriesList.map((series) => (
          <Action
            key={series}
            className={seriesFilter === series ? "active" : ""}
            onClick={() => setSeriesFilter(series)}
          >
            {series}
          </Action>
        ))}
      </div>

      <div className="photo-grid">
        {visible.map((photo) => (
          <Action
            key={photo.id}
            className="photo-card"
            onClick={() => navigate("photo", photo.id)}
            ariaLabel={`View photo ${photo.title}`}
          >
            <div className="photo-card-img" style={{ aspectRatio: photo.aspectRatio || "16/10" }}>
              <img src={photo.imageUrl} alt={photo.title} loading="lazy" />
            </div>
            <div className="photo-card-meta">
              <span>{photo.series} · {photo.year}</span>
              <span>{photo.location} <Arrow /></span>
            </div>
            <Type as="h2">{photo.title}</Type>
          </Action>
        ))}
      </div>

      <Footer navigate={navigate} />
    </main>
  );
}
