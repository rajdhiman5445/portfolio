import type { NoteItem } from "@/types";

export const notes: NoteItem[] = [
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
