"use client";

import { SectionTitle } from "./About";
import { useI18n } from "@/lib/i18n";

export default function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="relative py-32 border-t border-ink-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <SectionTitle index="05" title={t("contact.title")} />

        <div className="mt-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-[clamp(2rem,5vw,3.5rem)] leading-[1] tracking-tight font-medium">
              {t("contact.h.l1")}
              <br />
              <span className="text-ink-400">{t("contact.h.l2")}</span>
              <br />
              <span className="text-accent">{t("contact.h.l3")}</span>
            </h3>
            <p className="text-ink-300 text-lg leading-relaxed max-w-lg">
              {t("contact.body")}
            </p>
          </div>

          <div className="lg:col-span-5 space-y-3">
            <ContactRow
              k="email"
              v="simiasolta07@gmail.com"
              href="mailto:simiasolta07@gmail.com"
            />
            <ContactRow
              k="phone"
              v="+39 371 419 9036"
              href="tel:+393714199036"
            />
            <ContactRow
              k="github"
              v="ssimonAso"
              href="https://github.com/ssimonAso"
            />
            <ContactRow
              k="location"
              v="Gazzaniga (BG), Lombardia"
              href="https://www.google.com/maps/place/Gazzaniga"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ k, v, href }: { k: string; v: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="shine group flex items-center justify-between border border-ink-800 rounded-xl px-5 py-4 hover:border-accent/50 transition-all relative overflow-hidden"
    >
      <div className="flex flex-col">
        <span className="font-mono text-[10px] text-ink-500 uppercase tracking-widest">
          {k}
        </span>
        <span className="text-ink-100 group-hover:text-accent transition-colors">
          {v}
        </span>
      </div>
      <span
        aria-hidden
        className="text-ink-500 group-hover:text-accent group-hover:translate-x-1 transition-all"
      >
        →
      </span>
    </a>
  );
}
