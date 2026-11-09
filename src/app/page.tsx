
const features = [
  {
    title: "Campaign Management",
    description:
      "Organize campaigns, sessions, characters, and story information.",
    status: "Planned",
  },
  {
    title: "Character Library",
    description:
      "Manage player characters with D&D 2024 rules support.",
    status: "Planned",
  },
  {
    title: "DM Command Center",
    description:
      "Manage encounters, initiative, and session activity.",
    status: "Planned",
  },
  {
    title: "Shared Battlemap",
    description:
      "Collaborate using maps, tokens, and live session state.",
    status: "Planned",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#101018] text-[#f0e7d6]">
      <header className="border-b border-[#c9a96a]/30 bg-[#171722]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#c9a96a]">
              Tabletop Campaign Platform
            </p>
            <h1 className="mt-1 font-serif text-3xl font-bold">
              The Master&apos;s Loom
            </h1>
          </div>
          <span className="rounded-full border border-[#c9a96a]/40 px-4 py-2 text-xs text-[#d8c29a]">
            Development Preview · v0.1
          </span>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[220px_1fr]">
        <aside className="rounded-xl border border-[#c9a96a]/20 bg-[#1a1b27] p-5">
          <h2 className="mb-6 text-sm font-bold uppercase tracking-wider text-[#c9a96a]">
            Workspace
          </h2>

          <nav aria-label="Planned workspace sections">
            <ul className="space-y-4 text-sm text-[#d6cebe]">
              <li className="font-bold text-[#e5bd75]">
                Dashboard
              </li>
              <li>Campaigns · Planned</li>
              <li>Characters · Planned</li>
              <li>Sessions · Planned</li>
              <li>Battlemap · Planned</li>
            </ul>
          </nav>

          <div className="mt-10 border-t border-[#c9a96a]/20 pt-5 text-xs leading-6 text-[#b8ad9a]">
            Initial Ruleset
            <p className="font-semibold text-[#f0e7d6]">
              Dungeons & Dragons 2024
            </p>
            <p className="mt-3">
              Additional tabletop systems are planned for future releases.
            </p>
          </div>
        </aside>

        <section>
          <div className="mb-8">
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#c9a96a]">
              Dungeon Master&apos;s Workspace
            </p>
            <h2 className="font-serif text-4xl font-bold">
              Campaign Dashboard
            </h2>
            <p className="mt-3 max-w-2xl text-[#bdb3a4]">
              Your central workspace for campaign preparation,
              collaborative storytelling, and live sessions.
            </p>
          </div>

          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            {[
              ["Campaigns", "0"],
              ["Characters", "0"],
              ["Active Sessions", "0"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-[#c9a96a]/20 bg-[#1d1e2b] p-6"
              >
                <p className="text-sm text-[#bdb3a4]">
                  {label}
                </p>
                <p className="mt-3 text-4xl font-bold text-[#e1bf83]">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <h3 className="mb-5 font-serif text-2xl font-semibold">
            Planned Modules
          </h3>

          <div className="grid gap-5 md:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-xl border border-[#c9a96a]/20 bg-[#1d1e2b] p-6"
              >
                <span className="text-xs uppercase tracking-wider text-[#c9a96a]">
                  {feature.status}
                </span>
                <h4 className="mt-3 font-serif text-xl font-semibold">
                  {feature.title}
                </h4>
                <p className="mt-3 text-sm leading-7 text-[#bdb3a4]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>

          <footer className="mt-12 border-t border-[#c9a96a]/20 pt-6 text-xs text-[#a99f90]">
            The Master&apos;s Loom · Architecture and Prototype Development
          </footer>
        </section>
      </div>
    </main>
  );
}
