import React from "react";

interface ActionProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  ariaLabel?: string;
}

const Action = ({
  onClick,
  className = "",
  children,
  type = "button",
  ariaLabel,
}: ActionProps) => {
  return React.createElement(
    "button",
    { onClick, className, type, "aria-label": ariaLabel },
    children
  );
};

export default Action;
