"use client";

import { SectionTitle } from "./About";
import { useI18n } from "@/lib/i18n";

type Job = {
  company: string;
  roleKey: string;
  location: string;
  periodTemplate: string;
  bulletKeys: string[];
  highlight?: boolean;
};

const jobs: Job[] = [
  {
    company: "Sorint",
    roleKey: "exp.sorint.role",
    location: "Grassobbio, IT",
    periodTemplate: "06 / 2025 — 06 / 2025",
    highlight: true,
    bulletKeys: ["exp.sorint.b1", "exp.sorint.b2", "exp.sorint.b3", "exp.sorint.b4"],
  },
  {
    company: "ISISS Valle Seriana",
    roleKey: "exp.school.role",
    location: "Gazzaniga, IT",
    periodTemplate: "01 / 2022 — {present}",
    bulletKeys: ["exp.school.b1", "exp.school.b2"],
  },
  {
    company: "Pizzeria Mar Rosso",
    roleKey: "exp.pizza.role",
    location: "Nembro, IT",
    periodTemplate: "07 / 2025 — {present}",
    bulletKeys: ["exp.pizza.b1", "exp.pizza.b2", "exp.pizza.b3"],
  },
];

export default function Experience() {
  const { t } = useI18n();
  return (
    <section id="experience" className="relative py-32 border-t border-ink-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <SectionTitle index="03" title={t("exp.title")} />

        <div className="mt-16 space-y-px">
          {jobs.map((j, idx) => {
            const period = j.periodTemplate.replace("{present}", t("exp.present"));
            return (
              <article
                key={j.company}
                className={`group grid md:grid-cols-12 gap-6 py-8 border-b border-ink-800 hover:bg-ink-900/30 transition-colors px-2 -mx-2 rounded ${
                  idx === 0 ? "border-t border-ink-800" : ""
                }`}
              >
                <div className="md:col-span-3 font-mono text-xs text-ink-400 pt-1.5">
                  {period}
                </div>
                <div className="md:col-span-9 space-y-3">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-xl text-ink-100 font-medium">{t(j.roleKey)}</h3>
                    <span className="text-ink-500">@</span>
                    <span className={j.highlight ? "text-accent" : "text-ink-200"}>
                      {j.company}
                    </span>
                    <span className="font-mono text-xs text-ink-500">
                      · {j.location}
                    </span>
                  </div>
                  <ul className="space-y-2 text-ink-300">
                    {j.bulletKeys.map((bk) => (
                      <li key={bk} className="flex gap-3 leading-relaxed">
                        <span className="text-accent shrink-0 mt-2.5 h-px w-3 bg-current" />
                        <span>{t(bk)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
