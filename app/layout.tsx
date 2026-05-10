import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Simon Andy Asoltanei — Backend Developer",
  description:
    "Backend developer based in Milano. Python, Node, Java, PostgreSQL. Studente di Informatica e Telecomunicazioni.",
  metadataBase: new URL("https://ssimonaso.github.io/simon-s-site"),
  openGraph: {
    title: "Simon Andy Asoltanei — Backend Developer",
    description: "Backend developer · Milano · Python, Node, Java, PostgreSQL",
    type: "website",
    url: "https://ssimonaso.github.io/simon-s-site/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simon Andy Asoltanei — Backend Developer",
    description: "Backend developer · Milano · Python, Node, Java, PostgreSQL",
  },
};

const themeScript = `
(function(){try{
  var s=localStorage.getItem('theme');
  var d=s?s==='dark':true;
  if(d)document.documentElement.classList.add('dark');
}catch(e){}})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased grain">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
