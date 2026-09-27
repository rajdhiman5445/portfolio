import React from "react";
import Type from "./Type";

interface SectionLabelProps {
  index: string;
  children: React.ReactNode;
}

export default function SectionLabel({ index, children }: SectionLabelProps) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <Type>{children}</Type>
    </div>
  );
}
