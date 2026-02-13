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
      { text: "Scanning for V.A.T.S. compatible signals in the immediate vicinity...", spinner: true, delay: SPINNER_HOLD },
      { text: "Signal strength confirmed at 82% efficiency for local area...", indent: 1, delay: FAST_DELAY },
      { text: "Target acquired: High-threat Feral Ghoul detected near perimeter.", indent: 1, delay: FAST_DELAY },
      { text: "Calculated distance to target: 24 meters North-Northwest.", indent: 2, delay: FAST_DELAY },
      { text: "Probability of successful hit: 74% using standard munitions.", indent: 2, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      { text: "Mapping firearm serial index against local encrypted manifest...", spinner: true, delay: SPINNER_HOLD },
      { text: "10mm Pistol serial number 55-921-X [Status: Found and verified].", indent: 2, delay: FAST_DELAY },
      { text: "Combat Rifle serial number 12-004-B [Status: Found and verified].", indent: 2, delay: FAST_DELAY },
      { text: "Minigun heavy weapon chassis [Status: Not detected in inventory].", indent: 2, delay: FAST_DELAY },
      { text: "Laser Musket experimental hardware [Status: Found and verified].", indent: 2, delay: FAST_DELAY },
      { text: "Comprehensive indexing of local hardware complete.", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      { text: "Encrypting sensitive user data using standard Vault-Tec protocols...", spinner: true, delay: SPINNER_HOLD },
      { text: "AES-256 handshake initiated with local hardware security module...", indent: 1, delay: FAST_DELAY },
      { text: "Local master keys verified against biometric signature database...", indent: 1, delay: FAST_DELAY },
      { text: "RSA key rotation initiated to ensure maximum data privacy...", indent: 1, delay: FAST_DELAY },
      { text: "Encryption process successful. All data is now secured offline.", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      { text: "Environmental radiation scan in progress for current geolocation...", spinner: true, delay: SPINNER_HOLD },
      { text: "Radiation levels detected: 0.003 mSv/h (Well within safe limits).", indent: 1, delay: FAST_DELAY },
      { text: "Atmospheric toxicity levels: Negligible (Filter replacement not needed).", indent: 1, delay: FAST_DELAY },
      { text: "Local ambient temperature: 24.2C (Optimal for hardware operation).", indent: 1, delay: FAST_DELAY },
      { text: "Overall habitability status: Suitable for long-term deployment.", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      { text: "Booting system recovery and diagnostics toolset v4.0.1...", delay: FAST_DELAY },
      { text: "Performing deep sector check on local storage module 7G...", indent: 1, spinner: true, delay: SPINNER_HOLD },
      { text: "Local data integrity verified at 99.9% across all sectors...", indent: 2, delay: FAST_DELAY },
      { text: "Bad blocks detected: 0 (Hardware health is currently excellent).", indent: 2, delay: FAST_DELAY },
      { text: "System recovery not required. Normal operations will resume.", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      { text: "Monitoring real-time ammunition inventory and usage statistics...", spinner: true, delay: SPINNER_HOLD },
      { text: ".308 rounds remaining in primary storage: 42 units.", indent: 2, delay: FAST_DELAY },
      { text: "5.56mm rounds remaining in primary storage: 128 units.", indent: 2, delay: FAST_DELAY },
      { text: "5mm bulk munitions remaining in primary storage: 1,402 units.", indent: 2, delay: FAST_DELAY },
      { text: "12-Gauge shotgun shells remaining in primary storage: 12 units.", indent: 2, delay: FAST_DELAY },
      { text: "Critical system alert: Ammunition levels for 12-Gauge are low.", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      { text: "Syncing with Vault-Tec remote satellite...", spinner: true, delay: SPINNER_HOLD },
      { text: "Connection FAILED. Switching to OFFLINE mode.", indent: 1, delay: 800 },
      { text: "Local backup found: 2026-02-12 14:32:01", indent: 1, delay: FAST_DELAY },
      { text: "RESTORING local cache...", indent: 1, delay: FAST_DELAY },
      { text: "Cache RESTORED. Total entries: 4,921", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      { text: "PERFORMING SYSTEM SELF-TEST...", delay: FAST_DELAY },
      { text: "CPU: OK", indent: 1, delay: 100 },
      { text: "RAM: 640KB (EXCELLENT)", indent: 1, delay: 100 },
      { text: "STORAGE: 1.2TB (ENCRYPTED)", indent: 1, delay: 100 },
      { text: "KERNEL: LOADED", indent: 1, delay: 100 },
      { text: "STATUS: NOMINAL", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      { text: "Checking for unauthorized access attempts...", spinner: true, delay: SPINNER_HOLD },
      { text: "LOGIN ATTEMPT from IP: 127.0.0.1 (LOCAL)", indent: 1, delay: FAST_DELAY },
      { text: "ACCESS GRANTED to user: OVERSEER", indent: 1, delay: FAST_DELAY },
      { text: "Welcome back, Overseer. Have a productive day.", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      { text: "Optimizing database for firearms inventory...", spinner: true, delay: SPINNER_HOLD },
      { text: "Purging 12 obsolete log entries...", indent: 1, delay: FAST_DELAY },
      { text: "Reindexing 452 firearms...", indent: 1, delay: FAST_DELAY },
      { text: "Compressing ammo manifest: 14% REDUCTION", indent: 1, delay: FAST_DELAY },
      { text: "DATABASE OPTIMIZED", indent: 1, delay: FAST_DELAY },
    ],
  },
  {
    entries: [
      { text: "INITIATING COMPREHENSIVE BACKUP...", delay: 1200 },
      { text: "[.                   ] 5%", indent: 1, delay: 200 },
      { text: "[..                  ] 10%", indent: 1, delay: 150, replace: true },
      { text: "[...                 ] 15%", indent: 1, delay: 300, replace: true },
      { text: "[....                ] 20%", indent: 1, delay: 100, replace: true },
      { text: "[.....               ] 25%", indent: 1, delay: 400, replace: true },
      { text: "[......              ] 30%", indent: 1, delay: 150, replace: true },
      { text: "[.......             ] 35%", indent: 1, delay: 200, replace: true },
      { text: "[........            ] 40%", indent: 1, delay: 100, replace: true },
      { text: "[.........           ] 45%", indent: 1, delay: 500, replace: true },
      { text: "[..........          ] 50%", indent: 1, delay: 150, replace: true },
      { text: "[...........         ] 55%", indent: 1, delay: 100, replace: true },
      { text: "[............        ] 60%", indent: 1, delay: 300, replace: true },
      { text: "[.............       ] 65%", indent: 1, delay: 150, replace: true },
      { text: "[..............      ] 70%", indent: 1, delay: 200, replace: true },
      { text: "[...............     ] 75%", indent: 1, delay: 400, replace: true },
      { text: "[................    ] 80%", indent: 1, delay: 100, replace: true },
      { text: "[.................   ] 85%", indent: 1, delay: 150, replace: true },
      { text: "[..................  ] 90%", indent: 1, delay: 300, replace: true },
      { text: "[................... ] 95%", indent: 1, delay: 100, replace: true },
      { text: "[....................] 100%", indent: 1, delay: 800, replace: true },
      { text: "BACKUP COPIED TO LOCAL DRIVE.", indent: 1, delay: 800 },
    ],
  },
];

const SPINNER_CHARS = ["/", "-", "\\", "|"];

export const TerminalLog: React.FC<{ className?: string; itemsToShow?: number }> = ({
  className = "",
  itemsToShow = 8,
}) => {
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
          let newLogs = [...prev];
          if (nextEntry.replace && newLogs.length > 0) {
            newLogs[newLogs.length - 1] = nextEntry;
          } else {
            newLogs.push(nextEntry);
          }
          
          if (newLogs.length >= itemsToShow) return newLogs.slice(newLogs.length - itemsToShow + 1);
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
      style={{ height: `${itemsToShow * 1.2}rem`, lineHeight: '1.2rem' }}
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
              {getPrefix(log.indent)}{log.text}
            </div>
          );
        })}
        {currentEntry && (
          <div
            className="text-terminal-primary whitespace-pre h-[1.2rem] overflow-hidden"
          >
            {getPrefix(currentEntry.indent)}{currentEntry.text}{" "}
            {currentEntry.spinner && (
              <span className="ml-1">{SPINNER_CHARS[spinnerIdx]}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
