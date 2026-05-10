"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";
import { useI18n } from "@/lib/i18n";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useI18n();

  const links = [
    { href: "#about", label: t("nav.about") },
    { href: "#stack", label: t("nav.stack") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-ink-950/70 border-b border-ink-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-14 flex items-center justify-between">
        <a href="#" className="font-mono text-sm tracking-tight text-ink-100 flex items-center gap-2">
          <span className="text-accent">$</span>
          <span>simon.asoltanei</span>
          <span className="text-accent animate-blink">_</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 font-mono text-xs text-ink-300">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-accent transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <a
            href="mailto:simiasolta07@gmail.com"
            className="hidden sm:inline-flex items-center gap-2 h-8 px-3 rounded-full border border-ink-800 hover:border-accent hover:text-accent transition-colors font-mono text-[11px]"
          >
            {t("nav.contactCta")}
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
