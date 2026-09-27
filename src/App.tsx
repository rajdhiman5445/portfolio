import React, { useEffect, useMemo, useState } from "react";
import type { Page } from "@/types";
import Header from "@/components/Header";
import Home from "@/pages/Home";
import Work from "@/pages/Work";
import Library from "@/pages/Library";
import Fieldnotes from "@/pages/Fieldnotes";
import About from "@/pages/About";
import CaseStudy from "@/pages/CaseStudy";
import Handbook from "@/pages/Handbook";
import Fiction from "@/pages/Fiction";

export default function App() {
  const initial = (window.location.hash.replace("#/", "") || "home") as Page;
  const [page, setPage] = useState<Page>(initial);

  const navigate = (next: Page) => {
    setPage(next);
    window.location.hash = `/${next}`;
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const onHash = () =>
      setPage((window.location.hash.replace("#/", "") || "home") as Page);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const content = useMemo(() => {
    switch (page) {
      case "work":
        return <Work navigate={navigate} />;
      case "library":
        return <Library navigate={navigate} />;
      case "fieldnotes":
        return <Fieldnotes navigate={navigate} />;
      case "about":
        return <About navigate={navigate} />;
      case "case-study":
        return <CaseStudy navigate={navigate} />;
      case "handbook":
        return <Handbook navigate={navigate} />;
      case "fiction":
        return <Fiction navigate={navigate} />;
      case "home":
      default:
        return <Home navigate={navigate} />;
    }
  }, [page]);

  return (
    <div className="app">
      <Header page={page} navigate={navigate} />
      {content}
    </div>
  );
}
