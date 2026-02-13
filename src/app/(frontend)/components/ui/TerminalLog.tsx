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
        text: "Scanning local network for secure inventory sync signals...",
        spinner: true,
        delay: SPINNER_HOLD,
      },
      { text: "Signal strenght: 98%", indent: 1, delay: FAST_DELAY },
      { text: "Hub: SECURE_VAULT_01", indent: 1, delay: FAST_DELAY },
      { text: "Latency: 12ms", indent: 1, delay: FAST_DELAY },
      { text: "Status: CONNECTED", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      {
        text: "Mapping firearm serial index against global manufacturer database...",
        spinner: true,
        delay: SPINNER_HOLD,
      },
      { text: "Glock 17 GEN 5 [OK]", indent: 1, delay: FAST_DELAY },
      { text: "Sig Sauer P320 [OK]", indent: 1, delay: FAST_DELAY },
      { text: "S&W M&P9 M2.0 [OK]", indent: 1, delay: FAST_DELAY },
      { text: "Ruger Mark IV [OK]", indent: 1, delay: FAST_DELAY },
      { text: "INDEXING COMPLETE", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      {
        text: "Encrypting sensitive inventory data using AES-256 protocols...",
        spinner: true,
        delay: SPINNER_HOLD,
      },
      { text: "Handshake initiated...", indent: 1, delay: FAST_DELAY },
      { text: "Identity verified...", indent: 1, delay: FAST_DELAY },
      { text: "Key Rotation...", indent: 1, delay: FAST_DELAY },
      { text: "Success: DATA SECURED", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      {
        text: "Performing environmental check for long-term storage unit...",
        spinner: true,
        delay: SPINNER_HOLD,
      },
      { text: "Humidity: 42%", indent: 1, delay: FAST_DELAY },
      { text: "Oxidation Risk: LOW", indent: 1, delay: FAST_DELAY },
      { text: "Temp: 21.5C", indent: 1, delay: FAST_DELAY },
      { text: "Status: OPTIMAL", indent: 1, delay: FAST_DELAY },
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
      { text: "Integrity: 100.0%", indent: 1, delay: FAST_DELAY },
      { text: "Conflicts: 0", indent: 1, delay: FAST_DELAY },
      { text: "Status: NOMINAL", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      {
        text: "Monitoring real-time ammunition inventory levels...",
        spinner: true,
        delay: SPINNER_HOLD,
      },
      { text: "9mm Luger: 2450", indent: 1, delay: FAST_DELAY },
      { text: ".45 ACP: 820", indent: 1, delay: FAST_DELAY },
      { text: "5.56 NATO: 1200", indent: 1, delay: FAST_DELAY },
      { text: ".22 LR: 5000", indent: 1, delay: FAST_DELAY },
      { text: "ALERT: .45 ACP LOW", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      {
        text: "Syncing with secure cloud backup servers...",
        spinner: true,
        delay: SPINNER_HOLD,
      },
      { text: "Primary Link Failed", indent: 1, delay: 800 },
      { text: "Failover Active", indent: 1, delay: FAST_DELAY },
      { text: "Uploading Cache...", indent: 1, delay: FAST_DELAY },
      { text: "DONE: 100% SYNCED", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      { text: "Performing System Self-Test...", delay: FAST_DELAY },
      { text: "CPU: OK", indent: 1, delay: 100 },
      { text: "Memory: OK", indent: 1, delay: 100 },
      { text: "Storage: OK", indent: 1, delay: 100 },
      { text: "Network: OK", indent: 1, delay: 100 },
      { text: "Status: NOMINAL", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      {
        text: "Checking for unauthorized access attempts...",
        spinner: true,
        delay: SPINNER_HOLD,
      },
      { text: "Login: 192.168.1.104", indent: 1, delay: FAST_DELAY },
      { text: "Access: AUTHORIZED", indent: 1, delay: FAST_DELAY },
      { text: "Welcome, ADMINISTRATOR", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      {
        text: "Optimizing database for firearm assets...",
        spinner: true,
        delay: SPINNER_HOLD,
      },
      { text: "Purge: 0 ENTRIES", indent: 1, delay: FAST_DELAY },
      { text: "Index: 124 ASSETS", indent: 1, delay: FAST_DELAY },
      { text: "Compression: 8%", indent: 1, delay: FAST_DELAY },
      { text: "Status: OPTIMIZED", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      { text: "Initiating Comprehensive Backup...", delay: 1200 },
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
      className={`font-mono overflow-hidden flex flex-col justify-end ${className}`}
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
