"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "it" | "en";

type Dict = Record<string, string>;

const dictionaries: Record<Lang, Dict> = {
  it: {
    "nav.about": "about",
    "nav.stack": "stack",
    "nav.experience": "experience",
    "nav.projects": "projects",
    "nav.contact": "contact",
    "nav.contactCta": "contact",

    "hero.status": "disponibile per opportunità · Milano / Lombardia",
    "hero.intro":
      "Sviluppatore {accent}, 19 anni. Costruisco API, gestisco database e scrivo codice che fa il suo lavoro — senza fronzoli.",
    "hero.intro.accent": "back-end",
    "hero.cta.projects": "vedi i progetti",
    "hero.cta.github": "github",
    "hero.cta.email": "email",
    "hero.portrait.label": "backend.dev · 19y",
    "hero.portrait.statusLabel": "// status",
    "hero.portrait.uptime": "uptime ... 19y",
    "hero.portrait.stack": "stack .... backend",
    "hero.portrait.ready": "▌ ready",

    "about.title": "chi sono",
    "about.p1.before": "Studente di ",
    "about.p1.field": "Informatica e Telecomunicazioni",
    "about.p1.after":
      " all'ISISS Valle Seriana di Gazzaniga. Curioso del back-end fin da quando ho capito che dietro ogni app c'è qualcuno che ha pensato alla logica e ai dati.",
    "about.p2.before": "Ho lavorato come sviluppatore in ",
    "about.p2.company": "Sorint",
    "about.p2.middle":
      " su progetti reali per clienti — sviluppo full-stack, gestione database, testing e debugging. Adesso porto avanti ",
    "about.p2.project": "OutClass",
    "about.p2.after":
      ", un social per studenti pensato per condividere appunti e schemi.",
    "about.p3":
      "Mi piace il codice pulito, le query veloci e i sistemi che non cadono al primo carico. Imparo in fretta e lavoro bene in team.",
    "about.card.role": "\"backend developer\"",
    "about.card.based": "\"Lombardia, IT\"",
    "about.card.learning": "\"always\"",
    "about.card.status": "\"open to work\"",

    "stack.title": "stack",
    "stack.group.language": "linguaggi",
    "stack.group.database": "database",
    "stack.group.tool": "strumenti",
    "stack.marquee.teamwork": "team work",
    "stack.marquee.problem": "problem solving",
    "stack.marquee.debugging": "debugging",
    "stack.marquee.dbdesign": "database design",
    "stack.marquee.rest": "REST APIs",
    "stack.marquee.backend": "back-end logic",
    "stack.marquee.vcs": "version control",
    "stack.marquee.english": "english B1",
    "stack.marquee.learning": "continuous learning",

    "exp.title": "esperienza",
    "exp.sorint.role": "Sviluppatore",
    "exp.sorint.b1":
      "Sviluppo Back-End e Front-End in diversi linguaggi su progetti reali per clienti.",
    "exp.sorint.b2": "Gestione database: progettazione, query, manutenzione.",
    "exp.sorint.b3":
      "Collaborazione con team e tutor su tutto il ciclo di sviluppo.",
    "exp.sorint.b4":
      "Testing, debugging e risoluzione bug delle applicazioni create.",
    "exp.school.role": "Studente — Informatica e Telecomunicazioni",
    "exp.school.b1":
      "Tecnologie dell'informazione e della comunicazione (TIC).",
    "exp.school.b2":
      "Fondamenta di programmazione, reti, database e sistemi.",
    "exp.pizza.role": "Pony pizza",
    "exp.pizza.b1": "Consegne a domicilio in auto/moto.",
    "exp.pizza.b2": "Interazione diretta con clienti.",
    "exp.pizza.b3": "Lavoro sotto pressione e gestione del tempo.",
    "exp.present": "oggi",

    "proj.title": "progetti",
    "proj.outclass.tagline": "Social didattico per studenti",
    "proj.outclass.description":
      "Applicazione web in stile Instagram pensata per scuole e studenti: condivisione di schemi, appunti e contenuti didattici. Sviluppo Front-End e Back-End con gestione completa del database.",
    "proj.status.inProgress": "in corso",
    "proj.status.done": "completato",
    "proj.cta.github": "vedi su github",
    "proj.next.title": "In costruzione.",
    "proj.next.body":
      "Sto sempre lavorando su qualcosa. Segui il mio github per i prossimi rilasci — o scrivimi due righe e te lo racconto.",

    "contact.title": "contatti",
    "contact.h.l1": "Hai un progetto,",
    "contact.h.l2": "uno stage",
    "contact.h.l3": "o un'idea?",
    "contact.body":
      "Scrivimi. Rispondo entro un giorno — più velocemente se è qualcosa di interessante da costruire.",

    "footer.built": "costruito con next.js",
    "footer.works": "tutto funziona. probabilmente.",

    "lang.switchTo": "EN",
    "lang.label": "language",
  },
  en: {
    "nav.about": "about",
    "nav.stack": "stack",
    "nav.experience": "experience",
    "nav.projects": "projects",
    "nav.contact": "contact",
    "nav.contactCta": "contact",

    "hero.status": "available for opportunities · Milano / Lombardia",
    "hero.intro":
      "{accent} developer, 19 years old. I build APIs, manage databases, and write code that does its job — no frills.",
    "hero.intro.accent": "Back-end",
    "hero.cta.projects": "see projects",
    "hero.cta.github": "github",
    "hero.cta.email": "email",
    "hero.portrait.label": "backend.dev · 19y",
    "hero.portrait.statusLabel": "// status",
    "hero.portrait.uptime": "uptime ... 19y",
    "hero.portrait.stack": "stack .... backend",
    "hero.portrait.ready": "▌ ready",

    "about.title": "about me",
    "about.p1.before": "Student of ",
    "about.p1.field": "Computer Science and Telecommunications",
    "about.p1.after":
      " at ISISS Valle Seriana in Gazzaniga. Hooked on back-end since I realized that behind every app there's someone who designed the logic and the data.",
    "about.p2.before": "I worked as a developer at ",
    "about.p2.company": "Sorint",
    "about.p2.middle":
      " on real client projects — full-stack development, database management, testing and debugging. Right now I'm building ",
    "about.p2.project": "OutClass",
    "about.p2.after":
      ", a social platform for students to share notes and study schemes.",
    "about.p3":
      "I like clean code, fast queries, and systems that don't fall over under load. I learn fast and work well in a team.",
    "about.card.role": "\"backend developer\"",
    "about.card.based": "\"Lombardia, IT\"",
    "about.card.learning": "\"always\"",
    "about.card.status": "\"open to work\"",

    "stack.title": "stack",
    "stack.group.language": "languages",
    "stack.group.database": "databases",
    "stack.group.tool": "tools",
    "stack.marquee.teamwork": "team work",
    "stack.marquee.problem": "problem solving",
    "stack.marquee.debugging": "debugging",
    "stack.marquee.dbdesign": "database design",
    "stack.marquee.rest": "REST APIs",
    "stack.marquee.backend": "back-end logic",
    "stack.marquee.vcs": "version control",
    "stack.marquee.english": "english B1",
    "stack.marquee.learning": "continuous learning",

    "exp.title": "experience",
    "exp.sorint.role": "Developer",
    "exp.sorint.b1":
      "Back-End and Front-End development in multiple languages on real client projects.",
    "exp.sorint.b2": "Database management: design, queries, maintenance.",
    "exp.sorint.b3":
      "Collaboration with team and tutor across the full development cycle.",
    "exp.sorint.b4":
      "Testing, debugging and bug fixing on the apps built.",
    "exp.school.role": "Student — Computer Science and Telecommunications",
    "exp.school.b1": "Information and communication technologies (ICT).",
    "exp.school.b2":
      "Foundations of programming, networks, databases and systems.",
    "exp.pizza.role": "Pizza delivery",
    "exp.pizza.b1": "Home deliveries by car/scooter.",
    "exp.pizza.b2": "Direct interaction with customers.",
    "exp.pizza.b3": "Working under pressure and time management.",
    "exp.present": "present",

    "proj.title": "projects",
    "proj.outclass.tagline": "Educational social for students",
    "proj.outclass.description":
      "Instagram-style web app for schools and students: sharing study schemes, notes and educational content. Front-End and Back-End development with full database management.",
    "proj.status.inProgress": "in progress",
    "proj.status.done": "completed",
    "proj.cta.github": "see on github",
    "proj.next.title": "Under construction.",
    "proj.next.body":
      "Always working on something. Follow my github for upcoming releases — or drop me a line and I'll tell you about it.",

    "contact.title": "contact",
    "contact.h.l1": "Got a project,",
    "contact.h.l2": "an internship",
    "contact.h.l3": "or an idea?",
    "contact.body":
      "Write to me. I reply within a day — sooner if it's something interesting to build.",

    "footer.built": "built with next.js",
    "footer.works": "everything works. probably.",

    "lang.switchTo": "IT",
    "lang.label": "language",
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("it");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "it" || saved === "en") setLangState(saved);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (k: string) => dictionaries[lang][k] ?? k;

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
