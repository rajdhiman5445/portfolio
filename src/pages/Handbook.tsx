import React from "react";
import type { Page } from "@/types";
import Type from "@/components/ui/Type";
import Action from "@/components/ui/Action";

interface HandbookProps {
  navigate: (page: Page) => void;
}

export default function Handbook({ navigate }: HandbookProps) {
  return (
    <main className="reader handbook">
      <aside className="reader-sidebar">
        <Action onClick={() => navigate("library")} className="back-link">
          ← Library
        </Action>
        <div>
          <span className="meta">FIELD MANUAL / 01</span>
          <Type as="h2">Robotics, from first principles</Type>
        </div>
        <nav>
          <span>CONTENTS</span>
          <Action className="active">01 / Sensing the world</Action>
          <Action>02 / Motion & control</Action>
          <Action>03 / Mapping space</Action>
          <Action>04 / Making decisions</Action>
          <Action>05 / Field experiments</Action>
        </nav>
        <span className="reader-update">Living edition · Updated Apr 24</span>
      </aside>
      <article className="reader-content technical-reader">
        <div className="reader-top">
          <span>CHAPTER 01 / 08</span>
          <span>14 MIN READ</span>
        </div>
        <Type as="h1">
          Sensing the world is an act of <i>interpretation.</i>
        </Type>
        <Type className="lead">
          A practical introduction to how robots turn noisy electrical signals into a
          workable model of their surroundings.
        </Type>
        <div className="manual-callout">
          <span>CORE IDEA</span>
          <Type>
            A sensor does not measure reality. It produces a signal correlated with
            one aspect of reality, under specific conditions.
          </Type>
        </div>
        <Type as="h2">01.1 — From voltage to meaning</Type>
        <Type>
          Every autonomous system begins with a translation problem. A distance
          sensor returns a voltage; an encoder returns a count; a camera returns
          millions of intensities. None of these values mean anything until we connect
          them to a model.
        </Type>
        <div className="sensor-figure">
          <div className="sensor-cone">
            <span />
            <i />
            <i />
            <i />
          </div>
          <div>
            <span>raw distance</span>
            <strong>0.42 m</strong>
          </div>
          <div>
            <span>confidence</span>
            <strong>± 0.03</strong>
          </div>
          <small>FIG. 1.2 / Ultrasonic return under controlled conditions</small>
        </div>
        <Type as="h2">01.2 — Noise is information</Type>
        <Type>
          Variation is not merely an inconvenience to remove. The shape of noise tells
          us something about the sensor, the environment, and the assumptions embedded
          in our model.
        </Type>
        <div className="chapter-nav">
          <Action>
            ← Previous<br />
            <strong>Introduction</strong>
          </Action>
          <Action>
            Next →<br />
            <strong>Calibration</strong>
          </Action>
        </div>
      </article>
    </main>
  );
}
