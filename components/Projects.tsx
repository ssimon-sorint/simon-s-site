"use client";

import { SectionTitle } from "./About";
import { useI18n } from "@/lib/i18n";

type Project = {
  name: string;
  taglineKey: string;
  descriptionKey: string;
  stack: string[];
  statusKey: "proj.status.inProgress" | "proj.status.done";
  href: string;
};

const projects: Project[] = [
  {
    name: "OutClass",
    taglineKey: "proj.outclass.tagline",
    descriptionKey: "proj.outclass.description",
    stack: ["Back-End", "Front-End", "Database", "Auth"],
    statusKey: "proj.status.inProgress",
    href: "https://github.com/stamino24/GPOI-project",
  },
];

export default function Projects() {
  const { t } = useI18n();
  return (
    <section id="projects" className="relative py-32 border-t border-ink-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <SectionTitle index="04" title={t("proj.title")} />

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shine group block border border-ink-800 rounded-2xl p-7 bg-ink-900/30 hover:border-accent/50 transition-all relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="font-mono text-xs text-ink-500">/projects/01</div>
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-accent/10 text-accent font-mono text-[10px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  {t(p.statusKey)}
                </span>
              </div>

              <h3 className="text-2xl text-ink-100 font-medium mb-1.5 group-hover:text-accent transition-colors">
                {p.name}
              </h3>
              <p className="text-ink-400 font-mono text-xs mb-5 uppercase tracking-wider">
                {t(p.taglineKey)}
              </p>
              <p className="text-ink-300 leading-relaxed mb-6">
                {t(p.descriptionKey)}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] px-2.5 py-1 rounded border border-ink-700 text-ink-300"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-ink-300 group-hover:text-accent transition-colors">
                {t("proj.cta.github")}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </a>
          ))}

          <div className="border border-dashed border-ink-800 rounded-2xl p-7 flex flex-col justify-center items-start gap-3 min-h-[340px]">
            <div className="font-mono text-xs text-ink-500">/projects/next</div>
            <h3 className="text-2xl text-ink-300 font-medium">{t("proj.next.title")}</h3>
            <p className="text-ink-400 text-sm leading-relaxed">{t("proj.next.body")}</p>
            <a
              href="https://github.com/ssimon-sorint"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 font-mono text-xs text-accent hover:underline underline-offset-4"
            >
              github.com/ssimon-sorint →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
