import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Gelo — Web Developer & Video Editor" },
      {
        name: "description",
        content:
          "Get in touch with Gelo for React, TypeScript and Supabase development or video editing projects.",
      },
      { property: "og:title", content: "Contact Gelo" },
      {
        property: "og:description",
        content: "Available for freelance web development and video editing work.",
      },
    ],
  }),
  component: Contact,
});

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "aangelohataas@gmail.com",
    href: "mailto:aangelohataas@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/enjeroren",
    href: "https://github.com/enjeroren",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/angelohataas",
    href: "https://www.linkedin.com/in/angelohataas/",
  },
  { icon: MapPin, label: "Location", value: "Philippines · Remote worldwide" },
];

function Contact() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something — or cut it."
        intro="Open to freelance projects, contract work and full-time roles. Tell me what you're making and I'll reply within a day."
      />

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-5 py-16 sm:grid-cols-2">
        {links.map((l) => {
          const Icon = l.icon;
          const inner = (
            <>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <span>
                <span className="eyebrow block">{l.label}</span>
                <span className="mt-1 block font-medium">{l.value}</span>
              </span>
            </>
          );
          return l.href ? (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="surface flex items-center gap-4 p-5 transition-transform hover:-translate-y-0.5"
            >
              {inner}
            </a>
          ) : (
            <div key={l.label} className="surface flex items-center gap-4 p-5">
              {inner}
            </div>
          );
        })}
      </section>
    </SiteLayout>
  );
}
