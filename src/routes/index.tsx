import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import heroAsset from "../assets/gelo-dotes.png";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gelo — Web Developer & Video Editor" },
      {
        name: "description",
        content:
          "Portfolio of Gelo, a web developer building TypeScript, React and Supabase apps, and a video editor crafting cinematic edits.",
      },
      { property: "og:title", content: "Gelo — Web Developer & Video Editor" },
      {
        property: "og:description",
        content: "React + TypeScript + Supabase products and cinematic video editing.",
      },
    ],
  }),
  component: Index,
});

const stack = ["TypeScript", "React", "Supabase", "Tailwind CSS", "Premiere Pro", "After Effects"];

function Index() {
  return (
    <SiteLayout>
      <section className="hero-wash relative overflow-hidden border-b border-border">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2 sm:py-28">
          <div>
            <p className="eyebrow">Web Developer · Video Editor · Customer Service Specialist</p>
            <h1 className="mt-4 text-5xl font-bold leading-[1.05] sm:text-6xl">
              I build <span className="text-gradient">fast web apps</span> and cut{" "}
              <span className="text-gradient">stories that move</span>.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Full-stack work in TypeScript, React and Supabase — plus a second craft in the
              timeline, editing and grading video that keeps people watching.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/gallery"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
              >
                View my work
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="surface overflow-hidden">
            <img
              src={heroAsset}
              alt="Gelo Dotes portrait in beanie and sunglasses"
              width={1256}
              height={1256}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <p className="eyebrow">Toolkit</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              t: "Product engineering",
              d: "Typed React front-ends, clean component systems, and Supabase-backed data with row-level security.",
            },
            {
              t: "Backend & data",
              d: "Postgres schemas, auth flows, storage and realtime — wired up so features ship quickly and safely.",
            },
            {
              t: "Video editing",
              d: "Narrative cuts, sound design, motion titles and color grading for social, brand and long-form.",
            },
          ].map((c) => (
            <article key={c.t} className="surface p-6">
              <h2 className="text-lg font-semibold">{c.t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
