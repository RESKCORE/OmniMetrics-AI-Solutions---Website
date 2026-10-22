import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, ChartNoAxesCombined, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Container } from "./ui";

export const NAV = [
  { label: "About us", to: "/about" },
  { label: "Services", to: "/capabilities" },
  { label: "Industries", to: "/industries" },
  { label: "Our Work", to: "/work" },
  { label: "Talent", to: "/talent" },
  { label: "Insights", to: "/insights" },
] as const;

export function Wordmark({ inverse }: { inverse?: boolean }) {
  return <span className={`flex items-center gap-2 leading-none ${inverse ? "text-primary-foreground" : "text-foreground"}`}><ChartNoAxesCombined className="size-7 text-leaf transition-transform duration-300 group-hover:rotate-6" aria-hidden="true" /><span className="text-lg font-extrabold">OmniMetrics</span></span>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = useRouterState({ select: s => s.location.pathname });
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); btnRef.current?.focus(); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return <header className={cn("site-header", scrolled && "is-scrolled")}>
    <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-card focus:p-3">Skip to content</a>
    <Container className="header-inner flex items-center justify-between gap-4">
      <Link to="/" aria-label="OmniMetrics AI Solutions Inc. — home" className="group shrink-0"><Wordmark /></Link>
      <nav aria-label="Primary" className="hidden lg:block"><ul className="flex gap-7">{NAV.map(n => <li key={n.to}><Link to={n.to} className="nav-link text-[15px] font-bold text-foreground hover:text-leaf data-[status=active]:text-leaf">{n.label}</Link></li>)}</ul></nav>
      <div className="flex items-center gap-2"><Link to="/contact" className={cn(buttonVariants({ size: "sm" }), "group hidden rounded-lg text-sm sm:inline-flex")}>Request a consultation<ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-lime" /></Link><Button ref={btnRef} variant="ghost" size="icon" className="lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(o => !o)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</Button></div>
    </Container>
    {open && <div id="mobile-menu" ref={menuRef} className="mt-2 rounded-2xl border border-border bg-card/85 backdrop-blur-xl lg:hidden"><Container className="py-5"><nav aria-label="Mobile"><ul className="grid gap-1">{NAV.map(n => <li key={n.to}><Link to={n.to} className="flex min-h-11 items-center text-base font-semibold transition-colors hover:text-leaf data-[status=active]:text-leaf">{n.label}</Link></li>)}</ul><Link to="/contact" className={buttonVariants({ className: "mt-4 w-full rounded-lg" })}>Request a consultation<ArrowUpRight /></Link></nav></Container></div>}
  </header>;
}
