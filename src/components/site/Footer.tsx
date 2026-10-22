import { Link } from "@tanstack/react-router";
import { Wordmark } from "./Header";
import { DEMO_CONTACT } from "@/lib/demo-content";
import { Container } from "./ui";

export function Footer() {
  return <footer className="reference-footer"><Container>
    <div className="footer-grid">
      <div className="footer-brand"><Wordmark /><p>Analytics-driven software and data solutions for real business needs.</p><p className="text-muted-foreground">OmniMetrics AI Solutions Inc.</p></div>
      <div><h3>About us</h3><ul><li><Link to="/about">Our company</Link></li><li><Link to="/work">Our work</Link></li><li><Link to="/industries">Industries</Link></li><li><Link to="/talent">Talent</Link></li><li><Link to="/contact">Contact</Link></li></ul></div>
      <div><h3>Services</h3><ul><li><Link to="/data-analytics">Data & Analytics</Link></li><li><Link to="/data-engineering">Data Engineering</Link></li><li><Link to="/software-development">Software Development</Link></li><li><Link to="/ai-automation">AI & Automation</Link></li><li><Link to="/modernization">Modernization</Link></li></ul></div>
      <div><h3>Company</h3><ul><li><Link to="/privacy">Privacy Policy</Link></li><li><Link to="/terms">Terms of Use</Link></li><li><Link to="/insights">Insights</Link></li></ul><p className="mt-3 text-muted-foreground">Sample contact (not monitored)<br />{DEMO_CONTACT.email}<br />{DEMO_CONTACT.location}</p></div>
    </div><p className="footer-copyright">© {new Date().getFullYear()} OmniMetrics AI Solutions Inc. All rights reserved. · Preview contains fictional sample content.</p>
  </Container></footer>;
}
