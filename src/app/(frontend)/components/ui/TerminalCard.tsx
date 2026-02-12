import React from "react";

interface TerminalCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const TerminalCard: React.FC<TerminalCardProps> = ({
  children,
  className = "",
  title,
}) => {
  return (
    <div className={`terminal-box p-6 relative ${className}`}>
      {/* Decorative corners are handled by CSS pseudo-elements in globals.css now, 
          but we can add extra internal decorations if needed */}
      
      {title && (
        <div className="absolute -top-4 left-4 bg-[#050a05] px-2 text-terminal-green font-display border border-terminal-green">
          {title}
        </div>
      )}
      
      {children}
    </div>
  );
};
