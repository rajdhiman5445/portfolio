export type Page =
  | "home"
  | "work"
  | "library"
  | "fieldnotes"
  | "about"
  | "case-study"
  | "handbook"
  | "fiction";

export interface NavItem {
  id: Page;
  label: string;
}

export interface Project {
  cat: string;
  year: string;
  title: string;
  desc: string;
  img: string;
}

export interface ArchiveItem {
  type: string;
  title: string;
  format: string;
  extent: string;
  status: string;
}

export interface NoteItem {
  date: string;
  category: string;
  status: string;
  title: string;
  excerpt: string;
  tags: string[];
}
