import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';
export type ProblemStatus = 'unsolved' | 'attempted' | 'solved';

export interface ProblemMeta {
  id: string;
  title: string;
  difficulty: Difficulty;
  topics: string[];
}

export interface ProblemEntry {
  status: ProblemStatus;
  attempts: number;
  timeTakenMinutes: number[]; // each attempt duration
  notes?: string;
  solvedDates: string[]; // ISO dates
}

interface TrackerState {
  entries: Record<string, ProblemEntry>;
}

interface TrackerContextValue {
  state: TrackerState;
  markStatus: (id: string, status: ProblemStatus) => void;
  logAttempt: (id: string, minutes: number) => void;
  setNotes: (id: string, notes: string) => void;
  resetProblem: (id: string) => void;
  // Derived
  totalSolved: number;
  currentStreak: number;
}

const STORAGE_KEY = 'leettracker-state-v1';

const TrackerContext = createContext<TrackerContextValue | null>(null);

export const TrackerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<TrackerState>({ entries: {} });

  // load
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try { setState(JSON.parse(raw)); } catch {}
    }
  }, []);

  // persist
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const markStatus = (id: string, status: ProblemStatus) => {
    setState(prev => {
      const current = prev.entries[id] || { status: 'unsolved', attempts: 0, timeTakenMinutes: [], notes: '', solvedDates: [] };
      const nowISO = new Date().toISOString();
      return {
        entries: {
          ...prev.entries,
          [id]: {
            ...current,
            status,
            solvedDates: status === 'solved' ? Array.from(new Set([...(current.solvedDates||[]), nowISO.substring(0,10)])) : current.solvedDates || [],
          }
        }
      };
    });
  };

  const logAttempt = (id: string, minutes: number) => {
    setState(prev => {
      const current = prev.entries[id] || { status: 'unsolved', attempts: 0, timeTakenMinutes: [], notes: '', solvedDates: [] };
      return {
        entries: {
          ...prev.entries,
          [id]: { ...current, attempts: current.attempts + 1, timeTakenMinutes: [...current.timeTakenMinutes, minutes] }
        }
      };
    });
  };

  const setNotes = (id: string, notes: string) => {
    setState(prev => {
      const current = prev.entries[id] || { status: 'unsolved', attempts: 0, timeTakenMinutes: [], notes: '', solvedDates: [] };
      return { entries: { ...prev.entries, [id]: { ...current, notes } } };
    });
  };

  const resetProblem = (id: string) => {
    setState(prev => {
      const copy = { ...prev.entries };
      delete copy[id];
      return { entries: copy };
    });
  };

  const totalSolved = useMemo(() => Object.values(state.entries).filter(e => e.status === 'solved').length, [state]);

  const currentStreak = useMemo(() => {
    // count consecutive days up to today with at least one solved
    const days = new Set<string>();
    Object.values(state.entries).forEach(e => e.solvedDates?.forEach(d => days.add(d)));
    if (days.size === 0) return 0;
    let streak = 0;
    const today = new Date();
    for (let i = 0; i < 3650; i++) { // 10-year cap
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const key = date.toISOString().substring(0,10);
      if (i === 0 || days.has(key)) {
        if (days.has(key)) streak++;
        else break;
      }
    }
    return streak;
  }, [state]);

  const value: TrackerContextValue = { state, markStatus, logAttempt, setNotes, resetProblem, totalSolved, currentStreak };

  return <TrackerContext.Provider value={value}>{children}</TrackerContext.Provider>;
};

export const useTracker = () => {
  const ctx = useContext(TrackerContext);
  if (!ctx) throw new Error('useTracker must be used within TrackerProvider');
  return ctx;
};
