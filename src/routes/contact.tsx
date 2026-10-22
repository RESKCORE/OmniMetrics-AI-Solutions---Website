import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageSquareText, PhoneCall, Search, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Container, OwnerNote, RichHero, SectionHeading, seo } from "@/components/site/ui";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BlurFade } from "@/components/magic/blur-fade";
import { MarkerText } from "@/components/magic/marker-text";
import { INTERESTS } from "@/lib/content";
import { DEMO_CONTACT } from "@/lib/demo-content";
import contactChat from "@/assets/contact-chat.webp";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo(
      "Contact OmniMetrics AI Solutions Inc.",
      "Discuss an analytics, data, software, or technology talent need.",
      contactChat,
    ),
  component: Contact,
});

type Errors = Partial<Record<"name" | "email" | "description" | "consent", string>>;

const field =
  "mt-2 block w-full rounded-xl border border-navy/20 bg-white px-4 py-3 text-base text-navy placeholder:text-navy/45 transition-shadow focus:border-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-blue/40 aria-[invalid=true]:border-destructive";

function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "not-connected">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const next: Errors = {};
    if (!String(f.get("name") || "").trim()) next.name = "Please enter your name.";
    const email = String(f.get("email") || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid work email.";
    if (String(f.get("description") || "").trim().length < 10) next.description = "Please add a short description (at least 10 characters).";
    if (!f.get("consent")) next.consent = "Please confirm you have read the privacy notice.";
    setErrors(next);
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0];
      e.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("not-connected");
  }

  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`${k}-err`} className="mt-2 text-sm font-semibold text-destructive">
        <span aria-hidden="true">! </span>
        {errors[k]}
      </p>
    ) : null;

  return (
    <>
      <RichHero
        crumbs={[{ label: "Contact" }]}
        tag="Contact"
        title={
          <>
            Start with the question <MarkerText>you need answered.</MarkerText>
          </>
        }
        intro="Tell us about your analytics challenge, software project, or technology talent need. Include enough context for us to understand what you are trying to accomplish."
        image={contactChat}
        imageAlt="Green chat bubbles and an envelope with a small bar chart"
        signals={[[Send, "Share"], [Search, "Understand"], [PhoneCall, "Discuss"], [MessageSquareText, "Respond"]]}
        primary={{ label: "Send an Enquiry", to: "/contact" }}
        secondary={{ label: "View Services", to: "/capabilities" }}
      />
      <section className="border-t border-navy/10 py-20">
        <Container className="grid gap-8 lg:grid-cols-12">
          <BlurFade className="lg:col-span-7">
            <Card className="p-6 sm:p-10">
              <form noValidate onSubmit={onSubmit} className="space-y-6" aria-describedby="form-status">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-semibold">Name</label>
                    <input id="name" name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
                    {err("name")}
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-semibold">Work email</label>
                    <input id="email" name="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
                    {err("email")}
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="text-sm font-semibold">Company <span className="font-normal text-navy/60">(optional)</span></label>
                  <input id="company" name="company" autoComplete="organization" className={field} />
                </div>
                <div>
                  <label htmlFor="interest" className="text-sm font-semibold">I’m interested in</label>
                  <select id="interest" name="interest" className={field} defaultValue="Analytics">
                    {INTERESTS.map((i) => (
                      <option key={i}>{i}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="description" className="text-sm font-semibold">Brief description</label>
                  <textarea id="description" name="description" rows={6} className={field} aria-invalid={!!errors.description} aria-describedby={errors.description ? "description-err" : undefined} placeholder="The decision, process, or product you have in mind…" />
                  {err("description")}
                </div>
                <div>
                  <label className="flex items-start gap-3 text-sm leading-relaxed">
                    <input type="checkbox" name="consent" className="mt-1 size-5 shrink-0 accent-blue" aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "consent-err" : undefined} />
                    <span>
                      I have read the{" "}
                      <Link to="/privacy" className="font-semibold underline underline-offset-4">privacy notice</Link>{" "}
                      and agree to my details being used to respond to this enquiry.
                    </span>
                  </label>
                  {err("consent")}
                </div>
                <Button type="submit" size="lg">
                  Send My Enquiry
                  <ArrowRight aria-hidden="true" />
                </Button>
                <div id="form-status" role="status" aria-live="polite">
                  {status === "not-connected" && (
                    <OwnerNote title="Your enquiry was not sent">
                      Thanks — your details look complete, but this form isn’t connected to a delivery service yet, so
                      nothing has been sent. The contact details on this page are fictional samples and cannot receive enquiries.
                    </OwnerNote>
                  )}
                </div>
              </form>
            </Card>
          </BlurFade>
          <BlurFade delay={0.15} className="space-y-4 lg:col-span-4 lg:col-start-9">
            <OwnerNote title="Preview form · delivery not connected">
              Connect this form to a form or email service before launch. Until then, submissions are validated but not
              sent.
            </OwnerNote>
            <OwnerNote title="Sample contact details · not active"><p className="break-words font-semibold">{DEMO_CONTACT.email}</p><p className="mt-3">{DEMO_CONTACT.phone}</p><p className="mt-3">{DEMO_CONTACT.location}</p><p className="mt-4">These details are fictional. Do not send personal information to them.</p></OwnerNote>
          </BlurFade>
        </Container>
      </section>
      <Container>
        <section className="reference-section" aria-labelledby="next-heading">
          <SectionHeading
            tag="What happens next"
            title="After You Send Your Enquiry"
            sub="A simple, human process — no automated funnels."
          />
          <div className="ref-process">
            <BlurFade><article className="process-item h-full"><Send aria-hidden="true" /><div><h3>You share the challenge</h3><p className="mt-2">A few sentences about the decision, process, or product you have in mind is enough to start.</p></div></article></BlurFade>
            <BlurFade delay={0.08}><article className="process-item h-full"><Search aria-hidden="true" /><div><h3>We review it carefully</h3><p className="mt-2">We read every enquiry and consider which capability — analytics, engineering, software, or talent — fits best.</p></div></article></BlurFade>
            <BlurFade delay={0.16}><article className="process-item h-full"><PhoneCall aria-hidden="true" /><div><h3>We talk it through</h3><p className="mt-2">A conversation to understand context, agree on a sensible next step, and decide whether to work together.</p></div></article></BlurFade>
          </div>
        </section>
      </Container>
      <div className="pb-10" />
    </>
  );
}
