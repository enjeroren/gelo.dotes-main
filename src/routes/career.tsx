import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Career & Experience — Gelo" },
      {
        name: "description",
        content:
          "Career timeline of Gelo: React and TypeScript development, Supabase backends, and professional video editing work.",
      },
      { property: "og:title", content: "Career & Experience — Gelo" },
      {
        property: "og:description",
        content: "Roles, projects and skills across web development and video editing.",
      },
    ],
  }),
  component: Career,
});

const timeline = [
  {
    period: "2024 — Present",
    role: "Freelance Web Developer",
    org: "Independent",
    points: [
      "Build production React + TypeScript apps with Supabase auth, Postgres and storage.",
      "Design typed data layers and RLS policies so client data stays scoped and secure.",
      "Ship responsive, accessible interfaces with Tailwind CSS design systems.",
    ],
  },
  {
    period: "2024 — Present",
    role: "Video Editor",
    org: "Brands & creators",
    points: [
      "Edit short-form and long-form content: story structure, pacing and sound design.",
      "Color grade footage for a consistent, cinematic brand look.",
      "Create motion graphics, titles and transitions in After Effects.",
    ],
  },
  {
    period: "2022 — 2024",
    role: "Customer Service Representative",
    org: "Technical support & healthcare accounts",
    points: [
      "Handled technical support calls: troubleshooting connectivity, accounts and device issues end to end.",
      "Supported a healthcare account with careful handling of sensitive member data and strict compliance.",
      "Built the communication, documentation and problem-solving habits I now bring to client work.",
    ],
  },
];


function Career() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Career"
        title="Experience across the stack and the timeline."
        intro="A path that runs from front-end fundamentals to full-stack product work — with video editing running alongside the whole way."
      />

      <section className="mx-auto w-full max-w-4xl px-5 py-16">
        <ol className="relative border-l border-border pl-6">
          {timeline.map((item) => (
            <li key={item.role} className="mb-10 last:mb-0">
              <span className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full bg-primary" />
              <p className="eyebrow">{item.period}</p>
              <h2 className="mt-2 text-xl font-semibold">{item.role}</h2>
              <p className="text-sm text-muted-foreground">{item.org}</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    </SiteLayout>
  );
}
