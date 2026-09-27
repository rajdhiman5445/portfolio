import React from "react";

interface TypeProps {
  as?: string;
  className?: string;
  children: React.ReactNode;
}

const Type = ({ as = "p", className = "", children }: TypeProps) => {
  return React.createElement(as, { className }, children);
};

export default Type;
