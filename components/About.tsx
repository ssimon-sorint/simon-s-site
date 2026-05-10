"use client";

import { useI18n } from "@/lib/i18n";

export default function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="relative py-32 border-t border-ink-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <SectionTitle index="01" title={t("about.title")} />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mt-16">
          <div className="lg:col-span-7 space-y-6 text-ink-200 text-lg leading-relaxed">
            <p>
              {t("about.p1.before")}
              <span className="text-ink-100">{t("about.p1.field")}</span>
              {t("about.p1.after")}
            </p>
            <p>
              {t("about.p2.before")}
              <span className="text-accent">{t("about.p2.company")}</span>
              {t("about.p2.middle")}
              <span className="text-ink-100">{t("about.p2.project")}</span>
              {t("about.p2.after")}
            </p>
            <p>{t("about.p3")}</p>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-ink-800 rounded-2xl p-6 bg-ink-900/40 backdrop-blur font-mono text-sm">
              <div className="flex items-center gap-2 pb-4 border-b border-ink-800">
                <span className="h-3 w-3 rounded-full bg-ink-600" />
                <span className="h-3 w-3 rounded-full bg-ink-600" />
                <span className="h-3 w-3 rounded-full bg-ink-600" />
                <span className="ml-2 text-ink-400 text-xs">whoami.json</span>
              </div>
              <div className="pt-4 space-y-1 text-ink-200">
                <Row k="name" v={`"Simon Andy Asoltanei"`} />
                <Row k="age" v="19" />
                <Row k="role" v={t("about.card.role")} />
                <Row k="based_in" v={t("about.card.based")} />
                <Row k="languages" v={`["it", "ro", "en B1"]`} />
                <Row k="learning" v={t("about.card.learning")} />
                <Row k="status" v={t("about.card.status")} accent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v, accent = false }: { k: string; v: string; accent?: boolean }) {
  return (
    <div className="flex gap-3">
      <span className="text-ink-400">{k}:</span>
      <span className={accent ? "text-accent" : "text-ink-100"}>{v}</span>
    </div>
  );
}

export function SectionTitle({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-end gap-6 border-b border-ink-800 pb-6">
      <span className="font-mono text-xs text-accent">{index}</span>
      <h2 className="font-sans text-3xl sm:text-4xl tracking-tight font-medium">
        {title}
      </h2>
    </div>
  );
}
