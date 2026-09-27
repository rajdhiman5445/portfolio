import React from "react";
import type { Page } from "@/types";
import identity from "@/imports/Branding_-_Visual_Identity.jpeg";
import Type from "@/components/ui/Type";
import SectionLabel from "@/components/ui/SectionLabel";
import Footer from "@/components/Footer";

interface AboutProps {
  navigate: (page: Page) => void;
}

export default function About({ navigate }: AboutProps) {
  return (
    <main className="page about shell">
      <div className="about-title">
        <SectionLabel index="04">Profile / Now</SectionLabel>
        <Type as="h1">
          I’m [Name], a multidisciplinary creator interested in how we{" "}
          <i>see, imagine,</i> and <i>build.</i>
        </Type>
      </div>
      <div className="about-grid">
        <div className="portrait">
          <img src={identity} alt="Abstract motion-blurred field in yellow and blue" />
          <span>PORTRAIT WITHHELD / ATMOSPHERE PROVIDED</span>
        </div>
        <div className="bio">
          <Type className="lead">
            My work moves between photography, fiction, design, computer science, AI/ML, and robotics.
          </Type>
          <Type>
            I study computer science, but I think of code as one material among many. A camera, a sentence, an interface, and a machine each reveal different truths about attention.
          </Type>
          <Type>
            My photographs have accumulated approximately 3 million views. I have written two short stories and am currently working on a novel. Alongside that practice, I build experiments in intelligent systems and robotics.
          </Type>
          <Type>
            I’m less interested in being “multidisciplinary” as an identity than in following a question until it asks for a different tool.
          </Type>
        </div>
      </div>
      <div className="now-grid">
        <SectionLabel index="NOW">Current pursuits</SectionLabel>
        <div>
          {[
            ["Reading", "Embodied intelligence, visual culture, strange fiction"],
            ["Making", "A small rover; a novel; an archive of night photographs"],
            ["Learning", "Control systems, model interpretability, how to revise"],
            ["Available for", "Thoughtful collaborations and interesting conversations"],
          ].map((item) => (
            <div className="now-row" key={item[0]}>
              <span>{item[0]}</span>
              <Type>{item[1]}</Type>
            </div>
          ))}
        </div>
      </div>
      <Footer navigate={navigate} />
    </main>
  );
}
