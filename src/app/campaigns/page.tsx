import type { Metadata } from "next";

export const metadata: Metadata = { title: "Campaigns" };

export default function CampaignsPage() {
  return (
    <section>
      <p className="text-xs uppercase tracking-[0.25em] text-[#c9a96a]">Workspace / Campaigns</p>
      <h1 className="mt-2 font-serif text-4xl font-bold">Campaigns</h1>
      <p className="mt-3 max-w-2xl text-[#bdb3a4]">Campaign creation, membership, story notes and management will live here.</p>
      <div className="mt-8 rounded-xl border border-dashed border-[#c9a96a]/35 bg-[#1d1e2b] p-8">
        <h2 className="font-serif text-2xl font-semibold">No campaigns yet</h2>
        <p className="mt-3 text-sm leading-7 text-[#bdb3a4]">This is the first navigable campaign page. Creating and saving campaigns will be added after database and authentication setup.</p>
        <span className="mt-6 inline-block rounded-md border border-[#c9a96a]/40 px-4 py-2 text-sm text-[#e1bf83]">Campaign creation · Coming later</span>
      </div>
    </section>
  );
}
