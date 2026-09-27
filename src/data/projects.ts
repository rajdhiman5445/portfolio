import type { Project } from "@/types";
import motionPoster from "@/imports/Dynamic_Typography_Poster_Inspired_by_Motion_and_Deadlines.jpeg";
import identity from "@/imports/Branding_-_Visual_Identity.jpeg";

export const nightLight =
  "https://images.unsplash.com/photo-1580529352977-df08012d92b0?auto=format&fit=crop&w=1800&q=88";
export const streaks =
  "https://images.unsplash.com/photo-1534312527009-56c7016453e6?auto=format&fit=crop&w=1400&q=86";
export const street =
  "https://images.unsplash.com/photo-1723739012018-f401c2f0e758?auto=format&fit=crop&w=1600&q=86";

export const projects: Project[] = [
  {
    cat: "AI/ML",
    year: "2025",
    title: "Lumen",
    desc: "A visual language model for ambiguous images",
    img: nightLight,
  },
  {
    cat: "Photography",
    year: "2024—",
    title: "The City Between Frames",
    desc: "An ongoing study of motion and memory",
    img: motionPoster,
  },
  {
    cat: "Robotics",
    year: "2025",
    title: "Groundsense",
    desc: "Tactile navigation for a small autonomous rover",
    img: streaks,
  },
  {
    cat: "Design",
    year: "2024",
    title: "Near / Far",
    desc: "A humane interface for long-distance correspondence",
    img: identity,
  },
  {
    cat: "Engineering",
    year: "2024",
    title: "Archive Index",
    desc: "A personal knowledge system built for wandering",
    img: street,
  },
];
