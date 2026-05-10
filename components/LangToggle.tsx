"use client";

import { useI18n } from "@/lib/i18n";

export default function LangToggle() {
  const { lang, setLang } = useI18n();
  const next = lang === "it" ? "en" : "it";

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={`switch to ${next}`}
      className="group inline-flex items-center gap-1.5 h-8 px-3 rounded-full border border-ink-800 hover:border-accent hover:text-accent transition-colors font-mono text-[11px] uppercase tracking-wider"
    >
      <span className={lang === "it" ? "text-accent" : "text-ink-400"}>it</span>
      <span className="text-ink-600">/</span>
      <span className={lang === "en" ? "text-accent" : "text-ink-400"}>en</span>
    </button>
  );
}
