import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  noBorder?: boolean;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = "",
  id,
  noBorder = false,
}) => {
  return (
    <section
      id={id}
      className={`relative py-16 lg:py-24 overflow-hidden ${
        !noBorder ? "border-b-2 border-terminal-green" : ""
      } ${className}`}
    >
      <div className="container px-4 mx-auto">{children}</div>
    </section>
  );
};
