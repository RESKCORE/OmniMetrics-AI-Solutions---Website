import { Link, type LinkProps } from "@tanstack/react-router";
import { ArrowRight, CircleDashed, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants, type ButtonVariant } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DotPattern } from "@/components/magic/dot-pattern";
import { BlurFade } from "@/components/magic/blur-fade";
import { MarkerText } from "@/components/magic/marker-text";
import { TopicStrip, type Topic } from "@/components/magic/topic-strip";

type To = NonNullable<LinkProps["to"]>;

type Variant = "solid" | "outline" | "inverse" | "inverse-outline";

const ctaVariants: Record<Variant, ButtonVariant> = {
  solid: "default",
  outline: "outline",
  inverse: "inverse",
  "inverse-outline": "glass",
};

export function CTA({
  to,
  hash,
  children,
  variant = "solid",
  className,
}: {
  to: To;
  hash?: string | undefined;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link to={to} {...(hash ? { hash } : {})} className={cn(buttonVariants({ variant: ctaVariants[variant] }), className)}>
      {children}
      <ArrowRight aria-hidden="true" />
    </Link>
  );
}

export function TextLink({
  to,
  hash,
  children,
  className,
}: {
  to: To;
  hash?: string | undefined;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      {...(hash ? { hash } : {})}
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-semibold text-blue underline decoration-blue/40 decoration-1 underline-offset-[6px] transition-[text-underline-offset] hover:underline-offset-[9px]",
        className,
      )}
    >
      {children}
      <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Badge variant="secondary" className={className}>
      {children}
    </Badge>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("eyebrow", className)}>{children}</p>;
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1560px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16", className)}>{children}</div>;
}

/** Clearly marked owner-input placeholder. Dashed border + label so it is never mistaken for real content. */
export function OwnerNote({
  children,
  title = "Owner input needed",
  className,
  inverse,
}: {
  children: ReactNode;
  title?: string;
  className?: string;
  inverse?: boolean;
}) {
  return (
    <div
      role="note"
      className={cn(
        "rounded-2xl border border-dashed p-5 text-sm leading-relaxed",
        inverse ? "border-white/50 bg-white/5 text-white" : "border-navy/40 bg-white/60 text-navy",
        className,
      )}
    >
      <p className="eyebrow mb-2 flex items-center gap-2">
        <CircleDashed aria-hidden="true" className="size-3.5" />
        {title}
      </p>
      <div className={inverse ? "text-white/80" : "text-navy/75"}>{children}</div>
    </div>
  );
}

export function Breadcrumb({ items }: { items: { label: string; to?: To }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-10">
      <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-navy/80">
        <li>
          <Link to="/" className="underline-offset-4 hover:underline">
            Home
          </Link>
        </li>
        {items.map((it) => (
          <li key={it.label} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {it.to ? (
              <Link to={it.to} className="underline-offset-4 hover:underline">
                {it.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-semibold text-navy">
                {it.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  crumbs,
  eyebrow,
  title,
  intro,
  children,
}: {
  crumbs: { label: string; to?: To }[];
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-14">
      <DotPattern className="[mask-image:radial-gradient(60%_60%_at_30%_20%,white,transparent)]" />
      <Container className="relative">
        <Breadcrumb items={crumbs} />
        <div className="grid gap-10 lg:grid-cols-12">
          <BlurFade className="lg:col-span-8">
            <Badge className="mb-6">{eyebrow}</Badge>
            <h1 className="display page-title">{typeof title === "string" ? (() => {
              const words = title.split(" ");
              return <>{words.slice(0, -1).join(" ")} <MarkerText>{words.slice(-1).join(" ")}</MarkerText></>;
            })() : title}</h1>
          </BlurFade>
          <BlurFade delay={0.15} className="flex flex-col justify-end gap-6 lg:col-span-4">
            <p className="text-lg leading-relaxed text-navy/80">{intro}</p>
            {children}
          </BlurFade>
        </div>
      </Container>
    </section>
  );
}

export function CloseBand({
  heading,
  copy,
  primary,
  secondary,
}: {
  heading: ReactNode;
  copy?: ReactNode;
  primary: { label: string; to: To; hash?: string };
  secondary?: { label: string; to: To; hash?: string };
}) {
  return (
    <section className="relative overflow-hidden band-gradient text-white">
      <DotPattern className="fill-white/15 [mask-image:radial-gradient(70%_80%_at_80%_20%,white,transparent)]" />
      <Container className="relative grid gap-10 py-20 sm:py-28 lg:grid-cols-12">
        <h2 className="display text-[clamp(2.25rem,5vw,4rem)] lg:col-span-7">{heading}</h2>
        <div className="flex flex-col justify-end gap-8 lg:col-span-5">
          {copy && <p className="text-lg leading-relaxed text-white/80">{copy}</p>}
          <div className="flex flex-wrap gap-3">
            <CTA to={primary.to} hash={primary.hash} variant="inverse">
              {primary.label}
            </CTA>
            {secondary && (
              <CTA to={secondary.to} hash={secondary.hash} variant="inverse-outline">
                {secondary.label}
              </CTA>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Homepage-style hero for inner pages: tag, big title, intro, CTAs, illustration + signal list. */
export function RichHero({
  crumbs,
  tag,
  title,
  intro,
  image,
  imageAlt,
  signals,
  primary,
  secondary,
  topics,
}: {
  topics?: readonly Topic[];
  crumbs: { label: string; to?: To }[];
  tag: string;
  title: ReactNode;
  intro: ReactNode;
  image: string;
  imageAlt: string;
  signals: readonly (readonly [LucideIcon, string])[];
  primary: { label: string; to: To };
  secondary?: { label: string; to: To };
}) {
  return (
    <Container>
      <section className="reference-hero">
        <BlurFade>
          <div className="hero-crumbs">
            <Breadcrumb items={crumbs} />
          </div>
          <span className="ref-tag">{tag}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTA to={primary.to} className="rounded-lg text-xs">
              {primary.label}
            </CTA>
            {secondary && (
              <CTA to={secondary.to} variant="outline" className="rounded-lg text-xs">
                {secondary.label}
              </CTA>
            )}
          </div>
        </BlurFade>
        <div className="hero-art">
          <img src={image} alt={imageAlt} width={800} height={800} fetchPriority="high" decoding="auto" />
          <div className="hero-signals">
            {signals.map(([Icon, label]) => (
              <div key={label} className="hero-signal">
                <span className="signal-icon">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TopicStrip topics={topics} />
    </Container>
  );
}

/** Centered section heading with tag pill, matching the homepage style. */
export function SectionHeading({ tag, title, sub }: { tag: string; title: ReactNode; sub?: ReactNode }) {
  return (
    <div className="ref-section-heading">
      <span className="ref-tag">{tag}</span>
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}

/** Green gradient band CTA with optional illustration, matching the homepage band. */
export function BandCTA({
  heading,
  copy,
  cta,
  image,
  imageAlt = "",
}: {
  heading: ReactNode;
  copy: ReactNode;
  cta: { label: string; to: To };
  image?: string;
  imageAlt?: string;
}) {
  return (
    <Container>
      <section className="reference-band">
        <h2>{heading}</h2>
        <p>{copy}</p>
        <CTA to={cta.to} className="h-9 rounded-full bg-lime text-xs text-primary hover:bg-lime/90">
          {cta.label}
        </CTA>
        {image && <img src={image} alt={imageAlt} width={800} height={800} loading="lazy" decoding="async" />}
      </section>
    </Container>
  );
}

export function seo(title: string, description: string, preloadImage?: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: preloadImage
      ? [
          {
            rel: "preload" as const,
            as: "image" as const,
            href: preloadImage,
            type: "image/webp",
          },
        ]
      : [],
  };
}
