import React, { useEffect, useMemo, useState } from "react";
import type { Page } from "@/types";
import Header from "@/components/Header";
import Home from "@/pages/Home";
import Work from "@/pages/Work";
import Photography from "@/pages/Photography";
import PhotoDetail from "@/pages/PhotoDetail";
import Writing from "@/pages/Writing";
import ArticleDetail from "@/pages/ArticleDetail";
import ProjectDetail from "@/pages/ProjectDetail";
import About from "@/pages/About";

interface RouteState {
  page: Page;
  param?: string;
}

function parseHash(): RouteState {
  const raw = window.location.hash.replace(/^#\/?/, "");
  const [route, ...rest] = raw.split("/");
  const param = rest.join("/");
  return {
    page: (route || "home") as Page,
    param: param || undefined,
  };
}

export default function App() {
  const [routeState, setRouteState] = useState<RouteState>(parseHash);

  const navigate = (next: Page, param?: string) => {
    const hashPath = param ? `/${next}/${param}` : `/${next}`;
    window.location.hash = hashPath;
    setRouteState({ page: next, param });
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const onHash = () => {
      setRouteState(parseHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const content = useMemo(() => {
    const { page, param } = routeState;
    switch (page) {
      case "work":
        return <Work navigate={navigate} />;
      case "photography":
        return <Photography navigate={navigate} />;
      case "photo":
        return <PhotoDetail photoId={param} navigate={navigate} />;
      case "writing":
      case "fieldnotes":
      case "library":
        return <Writing navigate={navigate} />;
      case "article":
        return <ArticleDetail slug={param} navigate={navigate} />;
      case "project":
      case "case-study":
        return <ProjectDetail slug={param || "lumen"} navigate={navigate} />;
      case "fiction":
        return <ArticleDetail slug="cartographer-silences" navigate={navigate} />;
      case "about":
        return <About navigate={navigate} />;
      case "home":
      default:
        return <Home navigate={navigate} />;
    }
  }, [routeState]);

  return (
    <div className="app">
      <Header page={routeState.page} navigate={navigate} />
      {content}
    </div>
  );
}
