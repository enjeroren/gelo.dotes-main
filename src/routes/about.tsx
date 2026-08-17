import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Gelo — Developer & Editor" },
      {
        name: "description",
        content:
          "About Gelo: a web developer working with TypeScript, React and Supabase, and a video editor with a cinematic eye.",
      },
      { property: "og:title", content: "About Gelo — Developer & Editor" },
      {
        property: "og:description",
        content: "Two crafts, one obsession with detail: web engineering and video editing.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About"
        title="Two crafts, one obsession with detail."
        intro="I write TypeScript by day and cut timelines by night. Both come down to the same thing — pacing, clarity, and making people feel like everything just works."
      />

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 text-muted-foreground">
          <p>
            I'm a web developer focused on modern React applications. Most of my work lives in a
            TypeScript + React front-end with a Supabase (Postgres) backend — auth, row-level
            security, storage and realtime included. I care about typed boundaries, small
            components, and interfaces that stay fast as they grow.
          </p>
          <p>
            On the video side, I edit and grade content for brands and creators: rhythm-first
            cuts, clean sound design, motion titles, and color that gives a piece its mood. Editing
            trained my sense of timing, and it shows up in the way I design interfaces too.
          </p>
          <p>
            If you need someone who can ship the product and the launch video, that's the overlap
            I live in.
          </p>
        </div>

        <aside className="surface h-fit p-6">
          <h2 className="text-lg font-semibold">Quick facts</h2>
          <dl className="mt-4 space-y-3 text-sm">
            {[
              ["Based in", "Philippines · works remote"],
              ["Core stack", "TypeScript, React, Supabase"],
              ["Also fluent in", "Tailwind CSS, Postgres, REST APIs"],
              ["Editing suite", "Premiere Pro, After Effects, DaVinci Resolve"],
              ["Open to", "Freelance & full-time roles"],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col">
                <dt className="eyebrow">{k}</dt>
                <dd className="mt-1 text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto w-full max-w-6xl px-5 py-16">
          <p className="eyebrow">Outside work</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Hobbies that keep me sharp</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            When I'm not shipping features or trimming timelines, I'm usually outside.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Hiking",
                desc: "Weekend trails and sunrise climbs. Long hikes are where I plan projects — and they're the best excuse to shoot B-roll of ridgelines and fog.",
              },
              {
                title: "Basketball",
                desc: "Pickup games with friends whenever the court's free. It keeps me competitive, coachable, and comfortable working with a team under pressure.",
              },
              {
                title: "Photography & travel",
                desc: "Framing landscapes on the way up a mountain feeds directly back into how I compose shots and grade footage.",
              },
            ].map((h) => (
              <article key={h.title} className="surface p-6">
                <h3 className="text-lg font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

