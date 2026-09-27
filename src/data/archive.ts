export interface ArchiveItem {
  category: string;
  title: string;
  format: string;
  extent: string;
  status: string;
}

export const archiveItems: ArchiveItem[] = [
  {
    category: "Handbook",
    title: "Robotics, from first principles",
    format: "Documentation",
    extent: "42 entries",
    status: "Updated weekly",
  },
  {
    category: "Photography",
    title: "The City Between Frames",
    format: "Collection",
    extent: "47 images",
    status: "2023—ongoing",
  },
  {
    category: "Fiction",
    title: "The Cartographer of Small Silences",
    format: "Short story",
    extent: "14 min",
    status: "Published",
  },
  {
    category: "Fiction",
    title: "A Weather Made of Glass",
    format: "Short story",
    extent: "11 min",
    status: "Published",
  },
  {
    category: "Novel",
    title: "A Field Guide to Vanishing",
    format: "Manuscript",
    extent: "Part II",
    status: "In progress",
  },
  {
    category: "Reference",
    title: "Computer vision reading atlas",
    format: "Index",
    extent: "76 sources",
    status: "Maintained",
  },
  {
    category: "Creative work",
    title: "Studies in light and error",
    format: "Sketchbook",
    extent: "19 entries",
    status: "Open",
  },
];
