"use client";

import React, { useEffect, useState } from "react";

interface LogEntry {
  text: string;
  delay?: number;
  spinner?: boolean;
  indent?: number; // 1, 2, 3...
  replace?: boolean;
}

interface LogGroup {
  entries: LogEntry[];
}

const FAST_DELAY = 50; // ms
const SPINNER_HOLD = 2000; // ms

const LOG_GROUPS: LogGroup[] = [
  {
    entries: [
      {
        text: "Scanning local hardware for encrypted storage modules...",
        spinner: true,
        delay: SPINNER_HOLD,
      },
      { text: "HARDWARE_LINK: STABLE", indent: 1, delay: FAST_DELAY },
      { text: "DRIVE: SECURE_VAULT_01", indent: 1, delay: FAST_DELAY },
      { text: "READ_SPEED: 450MB/s", indent: 1, delay: FAST_DELAY },
      { text: "STATUS: MOUNTED", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      {
        text: "Mapping firearm serial index against encrypted local manifest...",
        spinner: true,
        delay: SPINNER_HOLD,
      },
      { text: "GLOCK 17 GEN 5 [OK]", indent: 1, delay: FAST_DELAY },
      { text: "SIG SAUER P320 [OK]", indent: 1, delay: FAST_DELAY },
      { text: "S&W M&P9 M2.0 [OK]", indent: 1, delay: FAST_DELAY },
      { text: "RUGER MARK IV [OK]", indent: 1, delay: FAST_DELAY },
      { text: "INDEXING COMPLETE", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      {
        text: "Encrypting local inventory database using AES-256...",
        spinner: true,
        delay: SPINNER_HOLD,
      },
      { text: "FS_HANDSHAKE: SUCCESS", indent: 1, delay: FAST_DELAY },
      { text: "LOCAL_IDENTITY: VERIFIED", indent: 1, delay: FAST_DELAY },
      { text: "KEY_ROTATION: COMPLETE", indent: 1, delay: FAST_DELAY },
      { text: "SUCCESS: DATA SECURED", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      {
        text: "Performing environmental check for long-term storage unit...",
        spinner: true,
        delay: SPINNER_HOLD,
      },
      { text: "HUMIDITY: 42%", indent: 1, delay: FAST_DELAY },
      { text: "OXIDATION RISK: LOW", indent: 1, delay: FAST_DELAY },
      { text: "TEMP: 21.5C", indent: 1, delay: FAST_DELAY },
      { text: "STATUS: OPTIMAL", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      {
        text: "Booting system diagnostics and security toolset v4.0.1...",
        delay: FAST_DELAY,
      },
      {
        text: "Performing deep sector check on local database module...",
        indent: 1,
        spinner: true,
        delay: SPINNER_HOLD,
      },
      { text: "INTEGRITY: 100.0%", indent: 1, delay: FAST_DELAY },
      { text: "CONFLICTS: 0", indent: 1, delay: FAST_DELAY },
      { text: "STATUS: NOMINAL", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      {
        text: "Monitoring real-time ammunition inventory levels...",
        spinner: true,
        delay: SPINNER_HOLD,
      },
      { text: "9mm LUGER: 2450", indent: 1, delay: FAST_DELAY },
      { text: ".45 ACP: 820", indent: 1, delay: FAST_DELAY },
      { text: "5.56 NATO: 1200", indent: 1, delay: FAST_DELAY },
      { text: ".22 LR: 5000", indent: 1, delay: FAST_DELAY },
      { text: "ALERT: .45 ACP LOW", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      {
        text: "Backing up database to external hardware module...",
        spinner: true,
        delay: SPINNER_HOLD,
      },
      { text: "PRIMARY_DRIVE: DISCONNECTED", indent: 1, delay: 800 },
      { text: "SECONDARY_FAILOVER: ACTIVE", indent: 1, delay: FAST_DELAY },
      { text: "WRITING TO DISK...", indent: 1, delay: FAST_DELAY },
      { text: "DONE: 100% SECURED", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      { text: "PERFORMING SYSTEM SELF-TEST...", delay: FAST_DELAY },
      { text: "CPU: OK", indent: 1, delay: 100 },
      { text: "MEMORY: OK", indent: 1, delay: 100 },
      { text: "STORAGE: OK", indent: 1, delay: 100 },
      { text: "HARDWARE_KEY: DETECTED", indent: 1, delay: 100 },
      { text: "STATUS: NOMINAL", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      {
        text: "Checking for unauthorized access attempts...",
        spinner: true,
        delay: SPINNER_HOLD,
      },
      { text: "USER_LOGIN: LOCAL_CONSOLE", indent: 1, delay: FAST_DELAY },
      { text: "ACCESS: AUTHORIZED", indent: 1, delay: FAST_DELAY },
      { text: "WELCOME, ADMINISTRATOR", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      {
        text: "Optimizing database for firearm assets...",
        spinner: true,
        delay: SPINNER_HOLD,
      },
      { text: "PURGE: 0 OBSOLETE", indent: 1, delay: FAST_DELAY },
      { text: "INDEX: 124 ASSETS", indent: 1, delay: FAST_DELAY },
      { text: "COMPRESSION: 8%", indent: 1, delay: FAST_DELAY },
      { text: "STATUS: OPTIMIZED", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      { text: "INITIATING COMPREHENSIVE BACKUP...", delay: 1200 },
      { text: "[.                   ] 5%", indent: 1, delay: 200 },
      {
        text: "[..                  ] 10%",
        indent: 1,
        delay: 150,
        replace: true,
      },
      {
        text: "[...                 ] 15%",
        indent: 1,
        delay: 300,
        replace: true,
      },
      {
        text: "[....                ] 20%",
        indent: 1,
        delay: 100,
        replace: true,
      },
      {
        text: "[.....               ] 25%",
        indent: 1,
        delay: 400,
        replace: true,
      },
      {
        text: "[......              ] 30%",
        indent: 1,
        delay: 150,
        replace: true,
      },
      {
        text: "[.......             ] 35%",
        indent: 1,
        delay: 200,
        replace: true,
      },
      {
        text: "[........            ] 40%",
        indent: 1,
        delay: 100,
        replace: true,
      },
      {
        text: "[.........           ] 45%",
        indent: 1,
        delay: 500,
        replace: true,
      },
      {
        text: "[..........          ] 50%",
        indent: 1,
        delay: 150,
        replace: true,
      },
      {
        text: "[...........         ] 55%",
        indent: 1,
        delay: 100,
        replace: true,
      },
      {
        text: "[............        ] 60%",
        indent: 1,
        delay: 300,
        replace: true,
      },
      {
        text: "[.............       ] 65%",
        indent: 1,
        delay: 150,
        replace: true,
      },
      {
        text: "[..............      ] 70%",
        indent: 1,
        delay: 200,
        replace: true,
      },
      {
        text: "[...............     ] 75%",
        indent: 1,
        delay: 400,
        replace: true,
      },
      {
        text: "[................    ] 80%",
        indent: 1,
        delay: 100,
        replace: true,
      },
      {
        text: "[.................   ] 85%",
        indent: 1,
        delay: 150,
        replace: true,
      },
      {
        text: "[..................  ] 90%",
        indent: 1,
        delay: 300,
        replace: true,
      },
      {
        text: "[................... ] 95%",
        indent: 1,
        delay: 100,
        replace: true,
      },
      {
        text: "[....................] 100%",
        indent: 1,
        delay: 800,
        replace: true,
      },
      { text: "BACKUP COMPLETE.", indent: 1, delay: 800 },
    ],
  },
  {
    entries: [
      { text: "Loading ARMORY_INDEX with 124 assets...", delay: 100 },
      {
        text: "READ /db/inventory/handguns.json [OK] in 42ms",
        indent: 1,
        delay: 50,
      },
      {
        text: "○ Loading ballistics/calculator module...",
        delay: 300,
        indent: 1,
        replace: true,
      },
      {
        text: "✓ Loaded ballistics/calculator (124 local dependencies)",
        indent: 1,
        delay: FAST_DELAY,
      },
      {
        text: "READ /storage/images/glock-17.png [OK] in 72ms",
        indent: 1,
        delay: 20,
      },
      {
        text: "READ /storage/images/ammo-9mm.png [OK] in 89ms",
        indent: 1,
        delay: 20,
      },
      {
        text: "✓ View generation complete (OFF-GRID_MODE)",
        indent: 1,
        delay: 100,
      },
    ],
  },
  {
    entries: [
      {
        text: "Reconciling OFFLINE_DATABASE with hardware storage...",
        spinner: true,
        delay: 1200,
      },
      { text: "CHECK /vault/integrity [OK] in 15ms", indent: 1, delay: 50 },
      { text: "VERIFY /inventory/assets [OK] in 220ms", indent: 1, delay: 80 },
      {
        text: "DATABASE_SYNC: SUCCESS (AIR-GAPPED)",
        indent: 1,
        delay: FAST_DELAY,
      },
    ],
  },
  {
    entries: [
      {
        text: "Scanning encrypted ammo manifest...",
        spinner: true,
        delay: 1500,
      },
      { text: "QUERY 9mm inventory... [OK] in 34ms", indent: 1, delay: 40 },
      { text: "QUERY 5.56 inventory... [OK] in 41ms", indent: 1, delay: 40 },
      { text: "WRITE usage_logs.bin [OK] in 12ms", indent: 1, delay: 30 },
      { text: "STATUS: MANIFEST_UPDATED", indent: 1, delay: FAST_DELAY },
    ],
  },
];

const SPINNER_CHARS = ["/", "-", "\\", "|"];

export const TerminalLog: React.FC<{
  className?: string;
  itemsToShow?: number;
}> = ({ className = "", itemsToShow = 8 }) => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [currentEntry, setCurrentEntry] = useState<LogEntry | null>(null);
  const [spinnerIdx, setSpinnerIdx] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let sequenceQueue: LogEntry[] = [];

    const processNextInQueue = () => {
      if (sequenceQueue.length === 0) {
        const group = LOG_GROUPS[Math.floor(Math.random() * LOG_GROUPS.length)];
        sequenceQueue = [...group.entries];
        timeoutId = setTimeout(processNextInQueue, 200);
        return;
      }

      const nextEntry = sequenceQueue.shift()!;
      setCurrentEntry(nextEntry);

      timeoutId = setTimeout(() => {
        setLogs((prev) => {
          const newLogs = [...prev];
          if (nextEntry.replace && newLogs.length > 0) {
            newLogs[newLogs.length - 1] = nextEntry;
          } else {
            newLogs.push(nextEntry);
          }

          if (newLogs.length >= itemsToShow)
            return newLogs.slice(newLogs.length - itemsToShow + 1);
          return newLogs;
        });
        setCurrentEntry(null);
        processNextInQueue();
      }, nextEntry.delay || FAST_DELAY);
    };

    processNextInQueue();

    return () => clearTimeout(timeoutId);
  }, [itemsToShow]);

  useEffect(() => {
    if (currentEntry?.spinner) {
      const interval = setInterval(() => {
        setSpinnerIdx((prev) => (prev + 1) % SPINNER_CHARS.length);
      }, 80);
      return () => clearInterval(interval);
    }
  }, [currentEntry]);

  const getPrefix = (indent?: number) => {
    if (!indent || indent === 0) return "> ";
    // Level 1 = 4 spaces, Level 2 = 6 spaces, etc.
    return " ".repeat(2 + indent * 2);
  };

  return (
    <div
      className={`font-mono overflow-hidden hidden md:flex flex-col justify-end ${className}`}
      style={{ height: `${itemsToShow * 1.2}rem`, lineHeight: "1.2rem" }}
    >
      <div className="flex flex-col">
        {logs.map((log, i) => {
          // If the current entry is meant to replace the last log, hide the last log visually
          if (currentEntry?.replace && i === logs.length - 1) return null;

          return (
            <div
              key={i}
              className="text-terminal-primary/40 whitespace-pre h-[1.2rem] overflow-hidden"
            >
              {getPrefix(log.indent)}
              {log.text}
            </div>
          );
        })}
        {currentEntry && (
          <div className="text-terminal-primary whitespace-pre h-[1.2rem] overflow-hidden">
            {getPrefix(currentEntry.indent)}
            {currentEntry.text}{" "}
            {currentEntry.spinner && (
              <span className="ml-1">{SPINNER_CHARS[spinnerIdx]}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
