import type { Metadata } from "next";

export const metadata: Metadata = { title: "Characters" };

export default function CharactersPage() {
  return (
    <section>
      <p className="text-xs uppercase tracking-[0.25em] text-[#c9a96a]">Workspace / Characters</p>
      <h1 className="mt-2 font-serif text-4xl font-bold">Characters</h1>
      <p className="mt-3 max-w-2xl text-[#bdb3a4]">A home for player characters, character sheets and eventual ruleset-specific features.</p>
      <div className="mt-8 rounded-xl border border-dashed border-[#c9a96a]/35 bg-[#1d1e2b] p-8">
        <h2 className="font-serif text-2xl font-semibold">No characters yet</h2>
        <p className="mt-3 text-sm leading-7 text-[#bdb3a4]">Character storage and D&D 2024 validations will be introduced in later phases. No records are being saved yet.</p>
        <span className="mt-6 inline-block rounded-md border border-[#c9a96a]/40 px-4 py-2 text-sm text-[#e1bf83]">Character builder · Coming later</span>
      </div>
    </section>
  );
}
