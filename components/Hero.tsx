"use client";

import Image from "next/image";
import portrait from "../public/images/simon.png";
import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();
  const introParts = t("hero.intro").split("{accent}");
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 dotted-grid opacity-60" aria-hidden />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgb(var(--accent) / 0.14), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col gap-8 animate-fade-up">
            <div className="flex items-center gap-3 font-mono text-xs text-ink-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span>{t("hero.status")}</span>
            </div>

            <h1 className="font-sans text-[clamp(2.2rem,6vw,4.8rem)] leading-[0.95] tracking-tight font-medium">
              Simon Andy
              <br />
              <span className="text-ink-300">Asoltanei.</span>
            </h1>

            <p className="max-w-xl text-ink-200 text-lg sm:text-xl leading-relaxed">
              {introParts[0]}
              <span className="text-accent">{t("hero.intro.accent")}</span>
              {introParts[1]}
            </p>

            <div className="font-mono text-sm text-ink-300 flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="text-accent">→</span>
              <span>python</span>
              <span className="text-ink-600">·</span>
              <span>node.js</span>
              <span className="text-ink-600">·</span>
              <span>java</span>
              <span className="text-ink-600">·</span>
              <span>postgres</span>
              <span className="text-ink-600">·</span>
              <span>sql</span>
              <span className="text-ink-600">·</span>
              <span>git</span>
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="#projects"
                className="shine inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-ink-950 font-medium hover:bg-accent-glow transition-colors"
              >
                {t("hero.cta.projects")}
                <span aria-hidden>↓</span>
              </a>
              <a
                href="https://github.com/ssimonAso"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink-700 hover:border-accent hover:text-accent transition-colors font-mono text-sm"
              >
                {t("hero.cta.github")}
                <span aria-hidden>↗</span>
              </a>
              <a
                href="mailto:simiasolta07@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink-700 hover:border-accent hover:text-accent transition-colors font-mono text-sm"
              >
                {t("hero.cta.email")}
                <span aria-hidden>↗</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-up">
            <Portrait />
          </div>
        </div>
      </div>
    </section>
  );
}

function Portrait() {
  const { t } = useI18n();
  return (
    <div className="relative">
      <div
        className="absolute -inset-4 rounded-full blur-2xl opacity-50"
        style={{
          background:
            "conic-gradient(from 180deg, rgb(var(--accent) / 0.5), rgb(var(--accent) / 0) 50%, rgb(var(--accent) / 0.4))",
        }}
        aria-hidden
      />
      <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full overflow-hidden border border-ink-700 bg-ink-900">
        <Image
          src={portrait}
          alt="Simon Andy Asoltanei"
          fill
          sizes="(min-width: 640px) 320px, 260px"
          className="object-cover scale-105"
          priority
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: "inset 0 0 60px rgb(var(--ink-950) / 0.7)",
          }}
        />
      </div>

      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 font-mono text-[10px] text-ink-400 bg-ink-900/80 backdrop-blur border border-ink-800 rounded-full px-3 py-1 flex items-center gap-2 whitespace-nowrap">
        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
        {t("hero.portrait.label")}
      </div>

      <div className="hidden lg:block absolute -left-12 top-6 font-mono text-[10px] text-ink-500 leading-relaxed">
        <div className="flex flex-col gap-1">
          <span className="text-ink-400">{t("hero.portrait.statusLabel")}</span>
          <span>{t("hero.portrait.uptime")}</span>
          <span>{t("hero.portrait.stack")}</span>
          <span className="text-accent">{t("hero.portrait.ready")}</span>
        </div>
      </div>
    </div>
  );
}
