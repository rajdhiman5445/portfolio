import React from "react";

interface ActionProps {
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  type?: "button" | "submit";
  ariaLabel?: string;
}

const Action = ({
  onClick,
  className = "",
  style,
  children,
  type = "button",
  ariaLabel,
}: ActionProps) => {
  return React.createElement(
    "button",
    { onClick, className, style, type, "aria-label": ariaLabel },
    children
  );
};

export default Action;
