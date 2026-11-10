import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WorkspaceNav from "@/components/workspace-nav";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "The Master's Loom", template: "%s | The Master's Loom" },
  description: "A tabletop campaign management platform for Dungeon Masters and players.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen bg-[#101018] text-[#f0e7d6]">
        <header className="border-b border-[#c9a96a]/30 bg-[#171722]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#c9a96a]">Tabletop Campaign Platform</p>
              <p className="mt-1 font-serif text-3xl font-bold">The Master&apos;s Loom</p>
            </div>
            <span className="rounded-full border border-[#c9a96a]/40 px-4 py-2 text-xs text-[#d8c29a]">Development Preview · v0.2</span>
          </div>
        </header>
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[230px_minmax(0,1fr)] lg:py-10">
          <aside className="h-fit rounded-xl border border-[#c9a96a]/20 bg-[#1a1b27] p-4 lg:sticky lg:top-6">
            <h2 className="mb-4 px-4 text-sm font-bold uppercase tracking-wider text-[#c9a96a]">Workspace</h2>
            <WorkspaceNav />
            <div className="mt-8 border-t border-[#c9a96a]/20 px-4 pt-5 text-xs leading-6 text-[#b8ad9a]">
              Initial ruleset
              <p className="font-semibold text-[#f0e7d6]">Dungeons &amp; Dragons 2024</p>
              <p className="mt-2">Additional rulesets are planned.</p>
            </div>
          </aside>
          <main id="main-content" className="min-w-0">{children}</main>
        </div>
        <footer className="mx-auto w-full max-w-7xl px-6 pb-8 text-xs text-[#a99f90]">
          The Master&apos;s Loom · Early development · No accounts or campaign data yet
        </footer>
      </body>
    </html>
  );
}
