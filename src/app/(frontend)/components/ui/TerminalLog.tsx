"use client";

import React, { useEffect, useState, useRef } from "react";

const LOG_ENTRIES = [
  "LOADING ENCRYPTED_DATABASE...",
  "SCANNING FOR V.A.T.S. SIGNALS...",
  "CHECKSUM VERIFIED: 0x5F3759DF",
  "LOCAL STORAGE INITIALIZED",
  "ENCRYPTING SENSITIVE DATA...",
  "OFFLINE MODE: ACTIVE",
  "NO SERVER DETECTED. DATA SECURE.",
  "VAULT-TEC OS v4.0.1 READY.",
  "MAPPING FIREARM_SERIAL_INDEX...",
  "SYNCING LOCAL MANIFEST...",
  "DECRYPTING OVERSEER_KEYS...",
  "READY FOR RANGE_LOG_ENTRY.",
  "MONITORING AMMO_INVENTORY...",
  "THERMAL COMPENSATOR: STABLE",
  "BUFFER OVERFLOW PROTECTION: ON",
];

export const TerminalLog: React.FC<{ className?: string; itemsToShow?: number }> = ({
  className = "",
  itemsToShow = 8,
}) => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    // Initial logs
    setLogs(LOG_ENTRIES.slice(0, Math.min(3, itemsToShow)));

    const interval = setInterval(() => {
      setLogs((prev) => {
        const nextEntry =
          LOG_ENTRIES[Math.floor(Math.random() * LOG_ENTRIES.length)];
        const newLogs = [...prev, nextEntry];
        if (newLogs.length > itemsToShow) return newLogs.slice(1);
        return newLogs;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [itemsToShow]);

  return (
    <div className={`font-mono uppercase leading-tight ${className}`}>
      {logs.map((log, i) => (
        <div
          key={i}
          className={
            i === logs.length - 1
              ? "text-terminal-primary"
              : "text-terminal-primary/40"
          }
        >
          &gt; {log}
        </div>
      ))}
    </div>
  );
};
