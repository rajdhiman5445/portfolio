import React from "react";
import type { Page } from "@/types";
import { nightLight } from "@/data/projects";
import Type from "@/components/ui/Type";
import Action from "@/components/ui/Action";
import SectionLabel from "@/components/ui/SectionLabel";
import Footer from "@/components/Footer";

interface CaseStudyProps {
  navigate: (page: Page) => void;
}

export default function CaseStudy({ navigate }: CaseStudyProps) {
  return (
    <main className="case-study">
      <section className="case-hero shell">
        <Action className="back-link" onClick={() => navigate("work")}>
          ← Work index
        </Action>
        <div className="case-title">
          <Type className="eyebrow">AI / INTERACTION DESIGN / 2025</Type>
          <Type as="h1">Lumen</Type>
          <Type as="h2">
            Teaching a machine to <i>notice</i>, not merely recognize.
          </Type>
        </div>
        <div className="case-meta">
          <div>
            <span>Role</span>
            <strong>Research, design, development</strong>
          </div>
          <div>
            <span>Duration</span>
            <strong>12 weeks</strong>
          </div>
          <div>
            <span>Status</span>
            <strong>Working prototype</strong>
          </div>
          <div>
            <span>Tools</span>
            <strong>Python, PyTorch, React</strong>
          </div>
        </div>
      </section>
      <div className="case-image-wide">
        <img src={nightLight} alt="Blurred bands of red, gold, and blue light" />
      </div>
      <section className="case-section shell">
        <SectionLabel index="01">The question</SectionLabel>
        <div className="case-two-col">
          <Type as="h2">Most vision systems rush toward certainty.</Type>
          <div>
            <Type>
              Image models are exceptionally good at naming objects. They are less
              capable of describing atmosphere, tension, or the meaning produced
              between two things.
            </Type>
            <Type>
              Lumen tests another premise: could a system be designed to preserve
              uncertainty—and make its own limits visible?
            </Type>
          </div>
        </div>
      </section>
      <section className="process-block shell">
        <SectionLabel index="02">System anatomy</SectionLabel>
        <div className="diagram">
          <div>
            <span>01</span>
            <strong>Image input</strong>
            <small>Visual embedding</small>
          </div>
          <i>→</i>
          <div>
            <span>02</span>
            <strong>Attention field</strong>
            <small>Relational features</small>
          </div>
          <i>→</i>
          <div>
            <span>03</span>
            <strong>Language layer</strong>
            <small>Calibrated output</small>
          </div>
        </div>
        <div className="code-block">
          <span>lumen / inference.py</span>
          <pre>{`def attend(image, threshold=0.62):
  field = encoder.observe(image)
  relations = field.with_uncertainty()
  return narrator.describe(relations)`}</pre>
        </div>
      </section>
      <section className="case-section shell">
        <SectionLabel index="03">Outcome</SectionLabel>
        <div className="case-two-col">
          <Type as="h2">A quieter interface for machine perception.</Type>
          <div>
            <Type>
              The prototype pairs spatial attention maps with language that declares
              confidence. It invites comparison rather than presenting a single
              authoritative answer.
            </Type>
            <div className="outcomes">
              <span>
                <strong>240</strong> test images
              </span>
              <span>
                <strong>68%</strong> fewer false assertions
              </span>
              <span>
                <strong>03</strong> interface modes
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer navigate={navigate} />
    </main>
  );
}
