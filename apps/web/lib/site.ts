/**
 * Single source of truth for site-wide identity and outbound links.
 *
 * TODO(placeholder): `url` and `schedulingUrl` are stand-ins. Swap them for the
 * real domain and the real Calendly/Cal.com booking link before launch — every
 * CTA on the page routes through `schedulingUrl` via <CtaButton />, so this is
 * the only place either value needs to change.
 */
export const SITE = {
  name: "The Flow Forge",
  url: "https://theflowforge.com",
  email: "hello@theflowforge.com",
  tagline: "Factory operating systems for manufacturers who are done guessing.",
  positioning:
    "We help aerospace and industrial manufacturers eliminate operational friction by connecting people, processes, and systems.",
  schedulingUrl: "https://cal.com/the-flow-forge/assessment",
  ctaLabel: "Schedule a Factory Systems Assessment",
  ctaLabelShort: "Book an Assessment",
} as const

export const NAV_LINKS = [
  { href: "#problem", label: "The Problem" },
  { href: "#what-we-do", label: "What We Do" },
  { href: "#process", label: "How It Works" },
  { href: "#assessment", label: "Assessment" },
  { href: "#faq", label: "FAQ" },
] as const
