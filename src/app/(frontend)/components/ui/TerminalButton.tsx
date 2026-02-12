import React from "react";
import Link from "next/link";

interface TerminalButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const TerminalButton: React.FC<TerminalButtonProps> = ({
  href,
  onClick,
  children,
  className = "",
  type = "button",
}) => {
  const baseClasses =
    "terminal-button inline-block px-8 py-3 text-2xl tracking-tighter uppercase";
  const combinedClasses = `${baseClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};
