import React from "react";
import type { Page } from "@/types";
import { getPhotos, getPhotoById } from "@/utils/content";
import Type from "@/components/ui/Type";
import Action from "@/components/ui/Action";
import Arrow from "@/components/ui/Arrow";
import Footer from "@/components/Footer";

interface PhotoDetailProps {
  photoId?: string;
  navigate: (page: Page, param?: string) => void;
}

export default function PhotoDetail({ photoId, navigate }: PhotoDetailProps) {
  const photos = getPhotos();
  const photo = photoId ? getPhotoById(photoId) || photos[0] : photos[0];
  const currentIndex = photos.findIndex((p) => p.id === photo.id);
  const prevPhoto = photos[currentIndex - 1] || photos[photos.length - 1];
  const nextPhoto = photos[currentIndex + 1] || photos[0];

  return (
    <main className="page shell" style={{ paddingTop: "7rem" }}>
      <div className="photo-nav-bar">
        <Action className="back-link" onClick={() => navigate("photography")}>
          ← Photography Gallery
        </Action>
        <span className="meta" style={{ color: "var(--paper-dim)" }}>
          {currentIndex + 1} of {photos.length}
        </span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <Action
            className="back-link"
            onClick={() => navigate("photo", prevPhoto.id)}
          >
            ← Previous
          </Action>
          <Action
            className="back-link"
            onClick={() => navigate("photo", nextPhoto.id)}
          >
            Next →
          </Action>
        </div>
      </div>

      <div className="photo-detail-view">
        <img src={photo.imageUrl} alt={photo.title} />
      </div>

      <div className="photo-detail-body">
        <div className="photo-detail-notes">
          <span className="eyebrow" style={{ color: "var(--orange)", display: "block", marginBottom: "1rem" }}>
            {photo.series} · {photo.year}
          </span>
          <Type as="h1">{photo.title}</Type>
          {photo.notes && <Type>{photo.notes}</Type>}

          <div className="photo-links">
            {photo.links?.unsplash && (
              <a
                href={photo.links.unsplash}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Unsplash <Arrow />
              </a>
            )}
            {photo.links?.highRes && (
              <a
                href={photo.links.highRes}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Original Resolution <Arrow />
              </a>
            )}
          </div>
        </div>

        <div className="photo-specs">
          <div>
            <span>Location</span>
            <strong>{photo.location}</strong>
          </div>
          <div>
            <span>Camera & Lens</span>
            <strong>{photo.camera}</strong>
          </div>
          <div>
            <span>Year</span>
            <strong>{photo.year}</strong>
          </div>
          <div>
            <span>Series</span>
            <strong>{photo.series}</strong>
          </div>
        </div>
      </div>

      <Footer navigate={navigate} />
    </main>
  );
}
