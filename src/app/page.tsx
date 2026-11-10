import type { Metadata } from "next";

export const metadata: Metadata = { title: "Sessions" };

export default function SessionsPage() {
  return (
    <section>
      <p className="text-xs uppercase tracking-[0.25em] text-[#c9a96a]">Workspace / Sessions</p>
      <h1 className="mt-2 font-serif text-4xl font-bold">Sessions</h1>
      <p className="mt-3 max-w-2xl text-[#bdb3a4]">Plan sessions, prepare encounters and eventually coordinate live gameplay.</p>
      <div className="mt-8 rounded-xl border border-dashed border-[#c9a96a]/35 bg-[#1d1e2b] p-8">
        <h2 className="font-serif text-2xl font-semibold">No sessions yet</h2>
        <p className="mt-3 text-sm leading-7 text-[#bdb3a4]">Session planning and the initiative tracker will follow campaign and character data models.</p>
        <span className="mt-6 inline-block rounded-md border border-[#c9a96a]/40 px-4 py-2 text-sm text-[#e1bf83]">Session tools · Coming later</span>
      </div>
    </section>
  );
}
