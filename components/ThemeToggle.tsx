"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const initial = (document.documentElement.classList.contains("dark")
      ? "dark"
      : "light") as Theme;
    setTheme(initial);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    const root = document.documentElement;
    if (next === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  const label = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`switch to ${label} mode`}
      className="group inline-flex items-center gap-2 h-8 px-3 rounded-full border border-ink-800 hover:border-accent hover:text-accent transition-colors font-mono text-[11px]"
    >
      <span
        className="relative inline-block h-3.5 w-3.5"
        aria-hidden
      >
        <span className="absolute inset-0 rounded-full bg-current opacity-0 dark:opacity-100 transition-opacity" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute inset-0 h-3.5 w-3.5 dark:hidden"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute inset-0 h-3.5 w-3.5 hidden dark:block"
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      </span>
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
