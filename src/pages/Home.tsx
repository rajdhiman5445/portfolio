import React from "react";
import type { Page } from "@/types";
import atmosphere from "@/imports/_.jpeg";
import motionPoster from "@/imports/Dynamic_Typography_Poster_Inspired_by_Motion_and_Deadlines.jpeg";
import { nightLight } from "@/data/projects";
import Type from "@/components/ui/Type";
import Action from "@/components/ui/Action";
import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import Footer from "@/components/Footer";

interface HomeProps {
  navigate: (page: Page) => void;
}

export default function Home({ navigate }: HomeProps) {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-media">
            <img src={atmosphere} alt="Abstract orange and blue light moving through darkness" />
            <div className="hero-shade" />
          </div>
          <div className="hero-copy">
            <Type className="eyebrow">Multidisciplinary creator / [PLACEHOLDER NAME]</Type>
            <Type as="h1" className="display">
              I observe the world,
              <br />
              then <i>build</i> new ones.
            </Type>
            <div className="hero-intro">
              <Type>
                Working across images, stories, interfaces, intelligent systems, and machines.
              </Type>
              <span className="coordinate">
                43.6532° N<br />79.3832° W
              </span>
            </div>
          </div>
          <div className="scroll-cue">
            SCROLL TO ENTER <span>↓</span>
          </div>
        </section>

        <section className="statement shell">
          <SectionLabel index="00">Premise</SectionLabel>
          <Type as="h2" className="statement-title">
            A practice shaped by <i>curiosity</i>—moving between the poetic and the precise.
          </Type>
          <Type className="statement-copy">
            I photograph what disappears, write what can’t be photographed, and engineer systems
            that make speculation tangible.
          </Type>
        </section>

        <section className="featured shell">
          <div className="section-head">
            <SectionLabel index="01">Selected work</SectionLabel>
            <Action onClick={() => navigate("work")} className="text-link">
              View index <Arrow />
            </Action>
          </div>
          <article className="feature-primary">
            <Action className="media-button" onClick={() => navigate("case-study")}>
              <img src={nightLight} alt="Abstract red, blue, and amber light trails" />
              <span className="image-index">F / 01</span>
            </Action>
            <div className="feature-copy">
              <Type className="meta">AI / INTERACTION DESIGN / 2025</Type>
              <Type as="h3">Lumen: teaching a machine to notice</Type>
              <Type>
                An experimental visual system exploring how computer vision might describe images
                without flattening their ambiguity.
              </Type>
              <Action
                onClick={() => navigate("case-study")}
                className="circle-link"
                ariaLabel="Open Lumen case study"
              >
                <Arrow />
              </Action>
            </div>
          </article>
          <div className="feature-grid">
            <article className="photo-feature">
              <img src={motionPoster} alt="Motion-blurred figure crossing a city street" />
              <div>
                <Type className="meta">PHOTOGRAPHY / ONGOING</Type>
                <Type as="h3">The City Between Frames</Type>
                <Type className="muted">
                  A study of movement, memory, and the unreliability of looking.
                </Type>
              </div>
            </article>
            <article className="text-feature">
              <span className="large-number">02</span>
              <Type className="meta">SHORT FICTION / 14 MIN READ</Type>
              <Type as="h3">The Cartographer of Small Silences</Type>
              <Type className="serif-excerpt">
                “By morning, every map in the archive had grown a new coastline.”
              </Type>
              <Action onClick={() => navigate("fiction")} className="text-link">
                Read the story <Arrow />
              </Action>
            </article>
            <article className="technical-feature">
              <div className="tech-visual">
                <span className="orbit orbit-a" />
                <span className="orbit orbit-b" />
                <span className="core">01</span>
              </div>
              <Type className="meta">ROBOTICS / PROTOTYPE</Type>
              <Type as="h3">Tactile navigation for a small autonomous rover</Type>
              <div className="tech-stats">
                <span>12 sensors</span>
                <span>38 trials</span>
                <span>v0.4</span>
              </div>
            </article>
          </div>
        </section>

        <section className="themes shell">
          <SectionLabel index="02">Four ways of working</SectionLabel>
          <div className="theme-list">
            {[
              ["Observation", "Photography as a way of staying with what is usually missed.", "Images / Light / Time"],
              ["Imagination", "Fiction as a laboratory for other worlds and interior lives.", "Stories / Novel / Essays"],
              ["Construction", "Interfaces, systems, and machines built to test an idea.", "UI·UX / Code / Robotics"],
              ["Ideas", "Notes from the edge of what I understand.", "AI·ML / Research / Process"],
            ].map((theme, i) => (
              <div className="theme-row" key={theme[0]}>
                <span>0{i + 1}</span>
                <Type as="h3">{theme[0]}</Type>
                <Type>{theme[1]}</Type>
                <span>{theme[2]}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="library-preview shell">
          <div className="section-head">
            <SectionLabel index="03">From the library</SectionLabel>
            <Action onClick={() => navigate("library")} className="text-link">
              Enter the library <Arrow />
            </Action>
          </div>
          <div className="library-layout">
            <div className="book-cover">
              <span>FIELD MANUAL / 01</span>
              <div className="robot-glyph">
                <span />
                <span />
                <span />
              </div>
              <Type as="h3">Robotics, from first principles</Type>
              <span>Living edition · 2025</span>
            </div>
            <div className="library-list">
              {[
                ["01", "Handbook", "Robotics, from first principles", "Living document"],
                ["02", "Collection", "The City Between Frames", "47 photographs"],
                ["03", "Fiction", "The Cartographer of Small Silences", "Short story"],
                ["04", "Novel", "A Field Guide to Vanishing", "In progress"],
              ].map((item) => (
                <Action
                  key={item[0]}
                  onClick={() =>
                    item[1] === "Handbook"
                      ? navigate("handbook")
                      : item[1] === "Fiction"
                      ? navigate("fiction")
                      : navigate("library")
                  }
                  className="library-row"
                >
                  <span>{item[0]}</span>
                  <span>{item[1]}</span>
                  <strong>{item[2]}</strong>
                  <span>{item[3]}</span>
                  <Arrow />
                </Action>
              ))}
            </div>
          </div>
        </section>

        <section className="notes-preview shell">
          <div className="section-head">
            <SectionLabel index="04">Latest fieldnotes</SectionLabel>
            <Action onClick={() => navigate("fieldnotes")} className="text-link">
              All notes <Arrow />
            </Action>
          </div>
          <div className="notes-grid">
            {[
              ["APR 18", "On making interfaces that reward attention", "Essay", "Published"],
              ["APR 02", "Rover log: the floor is not a plane", "Experiment 07", "Active"],
              ["MAR 21", "Can a model learn visual restraint?", "Research note", "Open"],
            ].map((note) => (
              <article key={note[1]} className="note">
                <div>
                  <span>{note[0]}</span>
                  <span>{note[3]}</span>
                </div>
                <Type as="h3">{note[1]}</Type>
                <span className="meta">{note[2]}</span>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer navigate={navigate} />
    </>
  );
}
