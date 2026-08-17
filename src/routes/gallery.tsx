import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import talasVideo from "../assets/talas-video-reel.mp4";
import talasImg from "../assets/talas-worldwide.png";
export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Web & Video Work by Gelo" },
      {
        name: "description",
        content:
          "Selected work: React and Supabase web apps, edited video projects, and color-graded cinematic stills.",
      },
      { property: "og:title", content: "Gallery — Web & Video Work by Gelo" },
      {
        property: "og:description",
        content: "A visual sample of development projects and video editing work.",
      },
    ],
  }),
  component: Gallery,
});

const items = [
  {
    img: work1,
    title: "Audio-reactive edit",
    tag: "Video editing",
    desc: "Beat-synced short-form cut with layered sound design and waveform-driven pacing.",
  },
  {
    img: work2,
    title: "Analytics dashboard",
    tag: "React · Supabase",
    desc: "Typed React dashboard with Postgres queries, RLS-protected data and realtime updates.",
  },
  {
    img: work3,
    title: "Golden hour grade",
    tag: "Color grading",
    desc: "Cinematic grade for a brand film — warm highlights, deep shadows, filmic contrast.",
  },
];

const featured = [
  {
    img: talasImg,
    video: undefined as string | undefined,
    alt: "Talas Worldwide website homepage with full-bleed hero video and shop navigation",
    tag: "Web development",
    title: "Talas Worldwide — brand & e-commerce site",
    role: "Design, front-end and backend",
    href: "https://www.talasworldwide.com/",
    desc: "A brand and storefront site for Talas Worldwide. Full-bleed hero video, clean editorial navigation, booking flow and an online shop — built for fast loads and a strong first impression on mobile.",
    bullets: [
      "React + TypeScript, Tailwind design system",
      "Storefront, cart and booking integration",
      "Video-led hero tuned for fast first paint",
    ],
  },
  {
    img: undefined as string | undefined,
    video: talasVideo,
    alt: "Video editing showreel",
    tag: "Video editing",
    title: "Kite & Co — 60s brand film",
    role: "Edit, sound design and color grade",
    href: undefined as string | undefined,
    desc: "A launch film cut from 3 hours of footage. Story-first assembly, beat-matched pacing, custom motion titles in After Effects and a warm cinematic grade delivered in 16:9, 1:1 and 9:16.",
    bullets: [
      "Premiere Pro edit, After Effects titles",
      "Layered sound design and dialogue cleanup",
      "Grade + multi-aspect social deliverables",
    ],
  },
];

function Gallery() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Gallery"
        title="Selected work from both sides of the craft."
        intro="Screens I built and frames I cut. A small sample — ask me for the full reel or repo walkthroughs."
      />

      <section className="mx-auto w-full max-w-6xl px-5 pt-16">
        <p className="eyebrow">Case studies</p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Two projects, start to finish</h2>

        <div className="mt-8 space-y-8">
          {featured.map((f, i) => (
            <article
              key={f.title}
              className="surface grid gap-0 overflow-hidden md:grid-cols-2"
            >
              {f.video ? (
                <video
                  src={f.video}
                  controls
                  playsInline
                  muted
                  loop
                  preload="metadata"
                  aria-label={f.alt}
                  className={`h-64 w-full bg-black object-cover md:h-full ${i % 2 ? "md:order-2" : ""}`}
                />
              ) : (
                <img
                  src={f.img}
                  alt={f.alt}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className={`h-64 w-full object-cover md:h-full ${i % 2 ? "md:order-2" : ""}`}
                />
              )}
              <div className="p-6 sm:p-8">
                <p className="eyebrow">{f.tag}</p>
                <h3 className="mt-2 text-xl font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.role}</p>
                <p className="mt-4 text-sm text-muted-foreground">{f.desc}</p>
                {f.href && (
                  <a
                    href={f.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm font-medium underline underline-offset-4 hover:text-primary"
                  >
                    {f.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </a>
                )}
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-primary">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-5 py-16 md:grid-cols-3">
        {items.map((item) => (
          <figure key={item.title} className="surface group overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                width={1200}
                height={900}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <figcaption className="p-5">
              <p className="eyebrow">{item.tag}</p>
              <h2 className="mt-2 text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </figcaption>
          </figure>
        ))}
      </section>
    </SiteLayout>
  );
}
