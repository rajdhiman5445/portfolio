import React from "react";
import type { Page } from "@/types";
import { getSiteConfig } from "@/utils/content";
import identity from "@/imports/Branding_-_Visual_Identity.jpeg";
import Type from "@/components/ui/Type";
import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import Footer from "@/components/Footer";

interface AboutProps {
  navigate: (page: Page, param?: string) => void;
}

export default function About({ navigate }: AboutProps) {
  const config = getSiteConfig();

  return (
    <main className="page about shell">
      <div className="about-title">
        <SectionLabel index="04">Profile / Now</SectionLabel>
        <Type as="h1">
          I’m {config.name}, a {config.role.toLowerCase()} interested in how we{" "}
          <i>see, imagine,</i> and <i>build.</i>
        </Type>
      </div>

      <div className="about-grid">
        <div className="portrait">
          <img src={identity} alt="Abstract motion-blurred field in yellow and blue" />
          <span>PORTRAIT WITHHELD / ATMOSPHERE PROVIDED</span>
        </div>
        <div className="bio">
          {config.bio.map((para, idx) => (
            <Type key={idx} className={idx === 0 ? "lead" : ""}>
              {para}
            </Type>
          ))}

          <div className="photo-links" style={{ marginTop: "2.5rem" }}>
            {config.socials.email && (
              <a href={`mailto:${config.socials.email}`}>
                Email <Arrow />
              </a>
            )}
            {config.socials.github && (
              <a href={config.socials.github} target="_blank" rel="noopener noreferrer">
                GitHub <Arrow />
              </a>
            )}
            {config.socials.instagram && (
              <a href={config.socials.instagram} target="_blank" rel="noopener noreferrer">
                Instagram <Arrow />
              </a>
            )}
            {config.handbookUrl && (
              <a href={config.handbookUrl} target="_blank" rel="noopener noreferrer">
                External Handbook <Arrow />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="now-grid">
        <SectionLabel index="NOW">Current pursuits</SectionLabel>
        <div>
          {config.currentPursuits.map((item) => (
            <div className="now-row" key={item.label}>
              <span>{item.label}</span>
              <Type>{item.value}</Type>
            </div>
          ))}
        </div>
      </div>

      <Footer navigate={navigate} />
    </main>
  );
}
