"use client";

import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-ink-800 py-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between font-mono text-xs text-ink-500">
        <div>
          © {new Date().getFullYear()} simon andy asoltanei · {t("footer.built")}
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span>{t("footer.works")}</span>
        </div>
      </div>
    </footer>
  );
}
