import React, { useEffect, useMemo, useState } from "react";
import atmosphere from "./imports/_.jpeg";
import motionPoster from "./imports/Dynamic_Typography_Poster_Inspired_by_Motion_and_Deadlines.jpeg";
import identity from "./imports/Branding_-_Visual_Identity.jpeg";

const nightLight =
  "https://images.unsplash.com/photo-1580529352977-df08012d92b0?auto=format&fit=crop&w=1800&q=88";
const streaks =
  "https://images.unsplash.com/photo-1534312527009-56c7016453e6?auto=format&fit=crop&w=1400&q=86";
const street =
  "https://images.unsplash.com/photo-1723739012018-f401c2f0e758?auto=format&fit=crop&w=1600&q=86";

type Page = "home" | "work" | "library" | "fieldnotes" | "about" | "case-study" | "handbook" | "fiction";

const mainPages: { id: Page; label: string }[] = [
  { id: "work", label: "Work" },
  { id: "library", label: "Library" },
  { id: "fieldnotes", label: "Fieldnotes" },
  { id: "about", label: "About" },
];

const Type = ({
  as = "p",
  className = "",
  children,
}: {
  as?: string;
  className?: string;
  children: React.ReactNode;
}) => React.createElement(as, { className }, children);

const Action = ({
  onClick,
  className = "",
  children,
  type = "button",
  ariaLabel,
}: {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  ariaLabel?: string;
}) => React.createElement("button", { onClick, className, type, "aria-label": ariaLabel }, children);

const TextInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => React.createElement("input", props);

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <Type>{children}</Type>
    </div>
  );
}

function Header({ page, navigate }: { page: Page; navigate: (page: Page) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Action className="signature" onClick={() => navigate("home")} ariaLabel="Go to home">
        <span className="signature-mark">N</span>
        <span>NAME / 2025</span>
      </Action>
      <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
        {mainPages.map((item, index) => (
          <Action
            key={item.id}
            onClick={() => {
              navigate(item.id);
              setOpen(false);
            }}
            className={`nav-link ${page === item.id ? "active" : ""}`}
          >
            <span>0{index + 1}</span>
            {item.label}
          </Action>
        ))}
      </nav>
      <Action className="menu-toggle" onClick={() => setOpen(!open)} ariaLabel="Toggle navigation">
        {open ? "Close" : "Menu"}
      </Action>
    </header>
  );
}

function Footer({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <footer className="footer">
      <div>
        <Type className="eyebrow">A conversation can begin anywhere.</Type>
        <Type as="h2" className="footer-title">
          Let’s exchange <i>ideas.</i>
        </Type>
      </div>
      <div className="footer-links">
        <Action onClick={() => navigate("about")}>Email <Arrow /></Action>
        <Action>Instagram <Arrow /></Action>
        <Action>GitHub <Arrow /></Action>
      </div>
      <div className="footer-bottom">
        <span>© 2025 [NAME]</span>
        <span>Built with intention, curiosity, and too much coffee.</span>
        <Action onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to top ↑</Action>
      </div>
    </footer>
  );
}

function Home({ navigate }: { navigate: (page: Page) => void }) {
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
              <span className="coordinate">43.6532° N<br />79.3832° W</span>
            </div>
          </div>
          <div className="scroll-cue">SCROLL TO ENTER <span>↓</span></div>
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
            <Action onClick={() => navigate("work")} className="text-link">View index <Arrow /></Action>
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
              <Action onClick={() => navigate("case-study")} className="circle-link" ariaLabel="Open Lumen case study">
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
                <Type className="muted">A study of movement, memory, and the unreliability of looking.</Type>
              </div>
            </article>
            <article className="text-feature">
              <span className="large-number">02</span>
              <Type className="meta">SHORT FICTION / 14 MIN READ</Type>
              <Type as="h3">The Cartographer of Small Silences</Type>
              <Type className="serif-excerpt">
                “By morning, every map in the archive had grown a new coastline.”
              </Type>
              <Action onClick={() => navigate("fiction")} className="text-link">Read the story <Arrow /></Action>
            </article>
            <article className="technical-feature">
              <div className="tech-visual">
                <span className="orbit orbit-a" />
                <span className="orbit orbit-b" />
                <span className="core">01</span>
              </div>
              <Type className="meta">ROBOTICS / PROTOTYPE</Type>
              <Type as="h3">Tactile navigation for a small autonomous rover</Type>
              <div className="tech-stats"><span>12 sensors</span><span>38 trials</span><span>v0.4</span></div>
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
            <Action onClick={() => navigate("library")} className="text-link">Enter the library <Arrow /></Action>
          </div>
          <div className="library-layout">
            <div className="book-cover">
              <span>FIELD MANUAL / 01</span>
              <div className="robot-glyph"><span /><span /><span /></div>
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
                <Action key={item[0]} onClick={() => item[1] === "Handbook" ? navigate("handbook") : item[1] === "Fiction" ? navigate("fiction") : navigate("library")} className="library-row">
                  <span>{item[0]}</span><span>{item[1]}</span><strong>{item[2]}</strong><span>{item[3]}</span><Arrow />
                </Action>
              ))}
            </div>
          </div>
        </section>

        <section className="notes-preview shell">
          <div className="section-head">
            <SectionLabel index="04">Latest fieldnotes</SectionLabel>
            <Action onClick={() => navigate("fieldnotes")} className="text-link">All notes <Arrow /></Action>
          </div>
          <div className="notes-grid">
            {[
              ["APR 18", "On making interfaces that reward attention", "Essay", "Published"],
              ["APR 02", "Rover log: the floor is not a plane", "Experiment 07", "Active"],
              ["MAR 21", "Can a model learn visual restraint?", "Research note", "Open"],
            ].map((note) => (
              <article key={note[1]} className="note">
                <div><span>{note[0]}</span><span>{note[3]}</span></div>
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

const projects = [
  { cat: "AI/ML", year: "2025", title: "Lumen", desc: "A visual language model for ambiguous images", img: nightLight },
  { cat: "Photography", year: "2024—", title: "The City Between Frames", desc: "An ongoing study of motion and memory", img: motionPoster },
  { cat: "Robotics", year: "2025", title: "Groundsense", desc: "Tactile navigation for a small autonomous rover", img: streaks },
  { cat: "Design", year: "2024", title: "Near / Far", desc: "A humane interface for long-distance correspondence", img: identity },
  { cat: "Engineering", year: "2024", title: "Archive Index", desc: "A personal knowledge system built for wandering", img: street },
];

function Work({ navigate }: { navigate: (page: Page) => void }) {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.cat === filter);
  return (
    <main className="page shell">
      <div className="page-intro">
        <SectionLabel index="01">Work index / 2022—2025</SectionLabel>
        <Type as="h1">Selected <i>work</i> across image, interface, and machine.</Type>
        <Type>A selective index of finished projects and useful experiments. Each is a different way to ask a question.</Type>
      </div>
      <div className="filter-bar" role="group" aria-label="Project filters">
        {["All", "Photography", "Design", "Engineering", "AI/ML", "Robotics"].map((f) => (
          <Action key={f} className={filter === f ? "active" : ""} onClick={() => setFilter(f)}>{f}</Action>
        ))}
      </div>
      <div className="work-index">
        {visible.map((project, i) => (
          <Action key={project.title} className="project-row" onClick={() => navigate("case-study")}>
            <span className="project-no">0{i + 1}</span>
            <div className="project-thumb"><img src={project.img} alt="" /></div>
            <div><Type as="h2">{project.title}</Type><Type>{project.desc}</Type></div>
            <div className="project-meta"><span>{project.cat}</span><span>{project.year}</span></div>
            <Arrow />
          </Action>
        ))}
      </div>
      <Footer navigate={navigate} />
    </main>
  );
}

function CaseStudy({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <main className="case-study">
      <section className="case-hero shell">
        <Action className="back-link" onClick={() => navigate("work")}>← Work index</Action>
        <div className="case-title">
          <Type className="eyebrow">AI / INTERACTION DESIGN / 2025</Type>
          <Type as="h1">Lumen</Type>
          <Type as="h2">Teaching a machine to <i>notice</i>, not merely recognize.</Type>
        </div>
        <div className="case-meta">
          <div><span>Role</span><strong>Research, design, development</strong></div>
          <div><span>Duration</span><strong>12 weeks</strong></div>
          <div><span>Status</span><strong>Working prototype</strong></div>
          <div><span>Tools</span><strong>Python, PyTorch, React</strong></div>
        </div>
      </section>
      <div className="case-image-wide"><img src={nightLight} alt="Blurred bands of red, gold, and blue light" /></div>
      <section className="case-section shell">
        <SectionLabel index="01">The question</SectionLabel>
        <div className="case-two-col">
          <Type as="h2">Most vision systems rush toward certainty.</Type>
          <div>
            <Type>Image models are exceptionally good at naming objects. They are less capable of describing atmosphere, tension, or the meaning produced between two things.</Type>
            <Type>Lumen tests another premise: could a system be designed to preserve uncertainty—and make its own limits visible?</Type>
          </div>
        </div>
      </section>
      <section className="process-block shell">
        <SectionLabel index="02">System anatomy</SectionLabel>
        <div className="diagram">
          <div><span>01</span><strong>Image input</strong><small>Visual embedding</small></div>
          <i>→</i>
          <div><span>02</span><strong>Attention field</strong><small>Relational features</small></div>
          <i>→</i>
          <div><span>03</span><strong>Language layer</strong><small>Calibrated output</small></div>
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
            <Type>The prototype pairs spatial attention maps with language that declares confidence. It invites comparison rather than presenting a single authoritative answer.</Type>
            <div className="outcomes"><span><strong>240</strong> test images</span><span><strong>68%</strong> fewer false assertions</span><span><strong>03</strong> interface modes</span></div>
          </div>
        </div>
      </section>
      <Footer navigate={navigate} />
    </main>
  );
}

const archiveItems = [
  ["Handbook", "Robotics, from first principles", "Documentation", "42 entries", "Updated weekly"],
  ["Photography", "The City Between Frames", "Collection", "47 images", "2023—ongoing"],
  ["Fiction", "The Cartographer of Small Silences", "Short story", "14 min", "Published"],
  ["Fiction", "A Weather Made of Glass", "Short story", "11 min", "Published"],
  ["Novel", "A Field Guide to Vanishing", "Manuscript", "Part II", "In progress"],
  ["Reference", "Computer vision reading atlas", "Index", "76 sources", "Maintained"],
  ["Creative work", "Studies in light and error", "Sketchbook", "19 entries", "Open"],
];

function Library({ navigate }: { navigate: (page: Page) => void }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const results = archiveItems.filter(
    (item) => (category === "All" || item[0] === category) && item.join(" ").toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <main className="page library-page shell">
      <div className="page-intro library-intro">
        <SectionLabel index="02">Personal archive / 93 objects</SectionLabel>
        <Type as="h1">The <i>library</i> is a place for things that keep unfolding.</Type>
        <Type>Writing, image collections, technical references, and living documents—organized for return rather than completion.</Type>
      </div>
      <div className="library-tools">
        <label><span>Search the archive</span><TextInput value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Try “robotics” or “fiction”" /></label>
        <div className="filter-bar">
          {["All", "Handbook", "Photography", "Fiction", "Novel", "Reference"].map((f) => (
            <Action key={f} className={category === f ? "active" : ""} onClick={() => setCategory(f)}>{f}</Action>
          ))}
        </div>
      </div>
      <div className="archive-heading"><span>Type</span><span>Title / description</span><span>Format</span><span>Extent</span><span>Status</span></div>
      <div className="archive-list">
        {results.map((item, i) => (
          <Action className="archive-row" key={item[1]} onClick={() => item[0] === "Handbook" ? navigate("handbook") : item[0] === "Fiction" ? navigate("fiction") : undefined}>
            <span>{item[0]}</span><strong><i>0{i + 1}</i>{item[1]}</strong><span>{item[2]}</span><span>{item[3]}</span><span>{item[4]}</span><Arrow />
          </Action>
        ))}
      </div>
      {results.length === 0 && <div className="empty-state">No objects found. Try a broader term.</div>}
      <Footer navigate={navigate} />
    </main>
  );
}

function Handbook({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <main className="reader handbook">
      <aside className="reader-sidebar">
        <Action onClick={() => navigate("library")} className="back-link">← Library</Action>
        <div><span className="meta">FIELD MANUAL / 01</span><Type as="h2">Robotics, from first principles</Type></div>
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
        <div className="reader-top"><span>CHAPTER 01 / 08</span><span>14 MIN READ</span></div>
        <Type as="h1">Sensing the world is an act of <i>interpretation.</i></Type>
        <Type className="lead">A practical introduction to how robots turn noisy electrical signals into a workable model of their surroundings.</Type>
        <div className="manual-callout"><span>CORE IDEA</span><Type>A sensor does not measure reality. It produces a signal correlated with one aspect of reality, under specific conditions.</Type></div>
        <Type as="h2">01.1 — From voltage to meaning</Type>
        <Type>Every autonomous system begins with a translation problem. A distance sensor returns a voltage; an encoder returns a count; a camera returns millions of intensities. None of these values mean anything until we connect them to a model.</Type>
        <div className="sensor-figure">
          <div className="sensor-cone"><span /><i /><i /><i /></div>
          <div><span>raw distance</span><strong>0.42 m</strong></div>
          <div><span>confidence</span><strong>± 0.03</strong></div>
          <small>FIG. 1.2 / Ultrasonic return under controlled conditions</small>
        </div>
        <Type as="h2">01.2 — Noise is information</Type>
        <Type>Variation is not merely an inconvenience to remove. The shape of noise tells us something about the sensor, the environment, and the assumptions embedded in our model.</Type>
        <div className="chapter-nav"><Action>← Previous<br /><strong>Introduction</strong></Action><Action>Next →<br /><strong>Calibration</strong></Action></div>
      </article>
    </main>
  );
}

function Fiction({ navigate }: { navigate: (page: Page) => void }) {
  const [night, setNight] = useState(true);
  return (
    <main className={`reader fiction-reader ${night ? "" : "light-reading"}`}>
      <aside className="fiction-meta">
        <Action onClick={() => navigate("library")} className="back-link">← Library</Action>
        <div>
          <span className="meta">SHORT FICTION / 01</span>
          <Type as="h2">The Cartographer of Small Silences</Type>
          <Type>14 minute read · 2024</Type>
        </div>
        <div className="reading-controls"><span>READING MODE</span><Action className={night ? "active" : ""} onClick={() => setNight(true)}>Night</Action><Action className={!night ? "active" : ""} onClick={() => setNight(false)}>Paper</Action></div>
      </aside>
      <article className="story">
        <span className="chapter-kicker">I / THE FIRST COASTLINE</span>
        <Type as="h1">The Cartographer of Small Silences</Type>
        <Type className="story-deck">A story about maps, memory, and the territories we invent to find our way home.</Type>
        <div className="ornament">∼</div>
        <Type className="first-paragraph">By morning, every map in the archive had grown a new coastline.</Type>
        <Type>Mara found them while opening the western drawers: thin black lines curling through familiar cities, crossing avenues and bedrooms, dividing kitchens from their windows. The ink was still wet.</Type>
        <Type>She stood very still. The archive held eleven thousand maps, each printed, folded, and catalogued by hand. Nothing inside it was supposed to change.</Type>
        <Type>Outside, the city was waking without incident. Trains carried their small bright rooms through tunnels. A baker lifted the shutters across the street. Somewhere, a kettle began to whistle and was forgotten.</Type>
        <blockquote>“A map,” her teacher once told her, “is simply an argument about what deserves to remain visible.”</blockquote>
        <Type>Mara placed the oldest map beneath the examination lamp. The new coastline passed directly through the house where she had grown up.</Type>
        <div className="chapter-nav"><span>Chapter 1 of 4</span><Action>Continue to II <Arrow /></Action></div>
      </article>
    </main>
  );
}

interface NoteItem {
  date: string;
  category: string;
  status: string;
  title: string;
  excerpt: string;
  tags: string[];
}

const notes: NoteItem[] = [
  {
    date: "18.04.25",
    category: "Essay",
    status: "Published",
    title: "On making interfaces that reward attention",
    excerpt: "Design should not always accelerate us. Sometimes its role is to make staying possible.",
    tags: ["interfaces", "attention"],
  },
  {
    date: "02.04.25",
    category: "Experiment 07",
    status: "Active",
    title: "Rover log: the floor is not a plane",
    excerpt: "Three hours of wheel slip, one changed assumption, and a more honest model.",
    tags: ["robotics", "field log"],
  },
  {
    date: "21.03.25",
    category: "Research note",
    status: "Open",
    title: "Can a model learn visual restraint?",
    excerpt: "Notes toward an image system that knows when not to describe.",
    tags: ["AI/ML", "vision"],
  },
  {
    date: "08.03.25",
    category: "Observation",
    status: "Published",
    title: "Blue light at the last tram stop",
    excerpt: "A photograph and 143 words about waiting in public.",
    tags: ["photography", "city"],
  },
  {
    date: "19.02.25",
    category: "Work in progress",
    status: "Unfinished",
    title: "The novel has developed weather",
    excerpt: "Fragments from building a climate for an imaginary place.",
    tags: ["fiction", "process"],
  },
];

function Fieldnotes({ navigate }: { navigate: (page: Page) => void }) {
  const [view, setView] = useState("All");
  const shown = view === "All" ? notes : notes.filter((note) => note.status === view);
  return (
    <main className="page fieldnotes shell">
      <div className="page-intro">
        <SectionLabel index="03">Fieldnotes / Living record</SectionLabel>
        <Type as="h1">Ideas in public, before they become <i>certain.</i></Type>
        <Type>Observations, experiments, research fragments, and the useful edges of unfinished work.</Type>
      </div>
      <div className="notes-status">
        <div className="status-live"><i /> Currently investigating: tactile intelligence and slow interfaces</div>
        <div className="filter-bar">{["All", "Published", "Active", "Unfinished"].map((f) => <Action key={f} className={view === f ? "active" : ""} onClick={() => setView(f)}>{f}</Action>)}</div>
      </div>
      <div className="fieldnote-list">
        {shown.map((note) => (
          <article className="fieldnote-row" key={note.title}>
            <div><span>{note.date}</span><span>{note.category}</span></div>
            <div>
              <div className={`status ${note.status.toLowerCase()}`}>{note.status}</div>
              <Type as="h2">{note.title}</Type>
              <Type>{note.excerpt}</Type>
              <div className="tags">{note.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
            <Arrow />
          </article>
        ))}
      </div>
      <Footer navigate={navigate} />
    </main>
  );
}

function About({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <main className="page about shell">
      <div className="about-title">
        <SectionLabel index="04">Profile / Now</SectionLabel>
        <Type as="h1">I’m [Name], a multidisciplinary creator interested in how we <i>see, imagine,</i> and <i>build.</i></Type>
      </div>
      <div className="about-grid">
        <div className="portrait"><img src={identity} alt="Abstract motion-blurred field in yellow and blue" /><span>PORTRAIT WITHHELD / ATMOSPHERE PROVIDED</span></div>
        <div className="bio">
          <Type className="lead">My work moves between photography, fiction, design, computer science, AI/ML, and robotics.</Type>
          <Type>I study computer science, but I think of code as one material among many. A camera, a sentence, an interface, and a machine each reveal different truths about attention.</Type>
          <Type>My photographs have accumulated approximately 3 million views. I have written two short stories and am currently working on a novel. Alongside that practice, I build experiments in intelligent systems and robotics.</Type>
          <Type>I’m less interested in being “multidisciplinary” as an identity than in following a question until it asks for a different tool.</Type>
        </div>
      </div>
      <div className="now-grid">
        <SectionLabel index="NOW">Current pursuits</SectionLabel>
        <div>{[["Reading", "Embodied intelligence, visual culture, strange fiction"], ["Making", "A small rover; a novel; an archive of night photographs"], ["Learning", "Control systems, model interpretability, how to revise"], ["Available for", "Thoughtful collaborations and interesting conversations"]].map((item) => <div className="now-row" key={item[0]}><span>{item[0]}</span><Type>{item[1]}</Type></div>)}</div>
      </div>
      <Footer navigate={navigate} />
    </main>
  );
}

export default function App() {
  const initial = (window.location.hash.replace("#/", "") || "home") as Page;
  const [page, setPage] = useState<Page>(initial);
  const navigate = (next: Page) => {
    setPage(next);
    window.location.hash = `/${next}`;
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    const onHash = () => setPage((window.location.hash.replace("#/", "") || "home") as Page);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const content = useMemo(() => {
    if (page === "work") return <Work navigate={navigate} />;
    if (page === "library") return <Library navigate={navigate} />;
    if (page === "fieldnotes") return <Fieldnotes navigate={navigate} />;
    if (page === "about") return <About navigate={navigate} />;
    if (page === "case-study") return <CaseStudy navigate={navigate} />;
    if (page === "handbook") return <Handbook navigate={navigate} />;
    if (page === "fiction") return <Fiction navigate={navigate} />;
    return <Home navigate={navigate} />;
  }, [page]);
  return (
    <div className="app">
      <Header page={page} navigate={navigate} />
      {content}
    </div>
  );
}
