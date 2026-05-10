"use client";

import { SectionTitle } from "./About";
import { useI18n } from "@/lib/i18n";

type Item = { name: string; group: "language" | "database" | "tool"; level: number };

const stack: Item[] = [
  { name: "Python", group: "language", level: 4 },
  { name: "Node.js", group: "language", level: 4 },
  { name: "Java", group: "language", level: 3 },
  { name: "SQL", group: "database", level: 4 },
  { name: "PostgreSQL", group: "database", level: 4 },
  { name: "Git", group: "tool", level: 4 },
  { name: "VS Code", group: "tool", level: 5 },
  { name: "REST APIs", group: "tool", level: 3 },
];

const marqueeKeys = [
  "stack.marquee.teamwork",
  "stack.marquee.problem",
  "stack.marquee.debugging",
  "stack.marquee.dbdesign",
  "stack.marquee.rest",
  "stack.marquee.backend",
  "stack.marquee.vcs",
  "stack.marquee.english",
  "stack.marquee.learning",
];

export default function Stack() {
  const { t } = useI18n();
  const groups = (["language", "database", "tool"] as const).map((g) => ({
    key: g,
    label: t(`stack.group.${g}`),
    items: stack.filter((s) => s.group === g),
  }));

  return (
    <section id="stack" className="relative py-32 border-t border-ink-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <SectionTitle index="02" title={t("stack.title")} />

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {groups.map((g) => (
            <div
              key={g.key}
              className="border border-ink-800 rounded-2xl p-6 bg-ink-900/30 hover:border-ink-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-mono text-xs text-ink-400 uppercase tracking-widest">
                  {g.label}
                </h3>
                <span className="font-mono text-xs text-ink-600">
                  {String(g.items.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="space-y-4">
                {g.items.map((i) => (
                  <li key={i.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-ink-100">{i.name}</span>
                      <span className="font-mono text-[10px] text-ink-500">
                        {i.level}/5
                      </span>
                    </div>
                    <div className="h-px bg-ink-800 relative overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-accent/70"
                        style={{ width: `${(i.level / 5) * 100}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden border-y border-ink-800 py-5">
          <div className="flex gap-12 animate-scroll-x whitespace-nowrap font-mono text-sm text-ink-400">
            {[...Array(2)].map((_, j) => (
              <div key={j} className="flex gap-12 shrink-0">
                {marqueeKeys.map((k) => (
                  <span key={`${j}-${k}`} className="flex items-center gap-3">
                    <span className="text-accent">◆</span>
                    {t(k)}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
