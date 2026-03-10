"use client";

import Link from "next/link";

// Hero - The Holding Company
const hero = {
  name: "ketteringPro Enterprise",
  slug: "/ventures/ketteringpro-enterprise",
  status: "Holding Company",
  tagline:
    "Strategic holding company cultivating ventures at the intersection of AI, lifestyle, and service innovation.",
  problem:
    "Building a diversified portfolio of technology and experience-driven businesses that empower people and organizations.",
};

// Core Ventures — Row 1: Swipe-A-Shift | Swipe-A-Load, Row 2: BestLife4U | Oravella
const ventures = [
  {
    name: "Swipe-A-Shift",
    slug: "/ventures/swipeashift",
    status: "Active",
    tagline: "Gig work marketplace for hospitality staffing and shift automation.",
    problem:
      "Fill shifts fast or find flexible work — Swipe-A-Shift handles the matching, insurance, and onboarding headaches.",
  },
  {
    name: "Swipe-A-Load",
    slug: "/ventures/swipeaload",
    status: "Coming Soon",
    tagline: "Logistics & trucking marketplace.",
    problem:
      "The Swipe model applied to freight — connecting shippers with available carriers on demand. CDL-verified, fast, built for the volatility of trucking.",
  },
  {
    name: "BestLife4U",
    slug: "/ventures/bestlife4u",
    status: "Beta",
    tagline:
      "Life transitions made easier — divorce support, DIY Wills, Living Wills, Power of Attorney, Healthcare Directives, and guided resolution.",
    problem:
      "Everyone needs this. Structured, AI-guided support for life's hardest transitions — handled with dignity and transparency.",
  },
  {
    name: "Oravella",
    slug: "/ventures/oravella",
    status: "Active",
    tagline: "Scheduling, operations & AI-powered communications platform for salons and spas.",
    problem:
      "Unify bookings, rooms, and reporting in one app — Oravella streamlines your tech so you can focus on clients.",
  },
];

// Operations & Analytics — Command Center full-width on top, Dashboard + Social Engine below
const opsCommandCenter = {
  name: "KPE Analytics Command Center",
  slug: "/ventures/command-center",
  status: "Active",
  tagline: "Unified GA4 monitoring across 8 live properties. Real-time sessions, critical alerts, portfolio-wide visibility.",
  problem:
    "Managing 8 live properties means 8 different dashboards and no unified view. Consolidated into one screen.",
};

const opsTools = [
  {
    name: "Swipe-A-Shift Admin Dashboard",
    slug: "/ventures/swipeashift-dashboard",
    status: "Live",
    tagline: "Live marketplace operations — worker pipeline, shift tracking, venue management, and growth analytics.",
    problem:
      "Running a two-sided staffing marketplace blind is not an option. Purpose-built admin console tracking every stage in real time.",
  },
  {
    name: "KPE Social Media Engine",
    slug: "/ventures/social-media-engine",
    status: "Active",
    tagline: "Content command center — multi-brand scheduling, AI-generated queues, and platform status across the full portfolio.",
    problem:
      "Managing social content across multiple brands means multiple logins and no unified view. One dashboard for everything.",
  },
];

// Bespoke Builds
const bespokeBuilds = [
  {
    name: "PDR Invoicing System",
    slug: "/ventures/pdrinvoicing",
    status: "Live — Pilot",
    tagline: "Bespoke invoicing for auto service businesses.",
    problem:
      "Custom-built invoicing tool with VIN scanning that auto-populates vehicle details. Customer management, branded output, Google Sheets backend. Paper forms eliminated.",
    meta: "Built in 1 day",
    tags: ["Bespoke Build", "Auto Industry", "VIN Scanning"],
  },
  {
    name: "Fuel & Fleet Management System",
    slug: "/ventures/fuelfleet",
    status: "Proposal",
    tagline: "Bespoke operations for energy & fleet.",
    problem:
      "Custom business management system built for an oil & fuel company — inventory tracking, operational reporting, and workflows built around their specific business model.",
    tags: ["Bespoke Build", "Energy", "Fleet"],
  },
  {
    name: "Automotive App",
    slug: null,
    status: "Stealth 🤫",
    tagline: "Automotive platform.",
    problem: "Top secret. Making great progress.",
    tags: ["Automotive", "In Development"],
    displayOnly: true,
  },
];

// Lifestyle & Content — Row 1: The Coastal Fork | QuickBitesQueen, Row 2: Savor.Sip.Sail. | Groovin' Fly
const lifestyle = [
  {
    name: "The Coastal Fork",
    slug: "/ventures/coastal-fork",
    status: "Active",
    tagline: "New England food media built for people who love to eat.",
    problem:
      "Real restaurants, real food, real stories worth sharing.",
  },
  {
    name: "QuickBitesQueen",
    slug: "/ventures/quickbitesqueen",
    status: "Active",
    tagline: "Recipe platform & cookbook.",
    problem:
      "100+ recipes with curated Amazon links. QBQ Cookbook nearly ready for publication.",
    tags: ["Food & Recipe", "Publishing", "eCommerce"],
  },
  {
    name: "Savor. Sip. Sail.",
    slug: "/ventures/savorsipsail",
    status: "WIP",
    tagline: "Cruise food & drink platform.",
    problem:
      "Food, drink, and life aboard — because cruising deserves its own content universe.",
    tags: ["Cruise", "Food & Drink", "Lifestyle"],
  },
  {
    name: "Groovin' Fly",
    slug: "/ventures/groovinfly",
    status: "Active",
    tagline: "Lifestyle travel & festival experiences for women who love to explore.",
    problem:
      "Because life doesn't stop at 40 — Groovin' Fly connects women who still crave adventure, music, and freedom.",
  },
];

// Anchor - Productions
const anchor = {
  name: "KetteringProductions.com",
  slug: "https://ketteringproductions.com",
  status: "Production Company",
  tagline: "Three projects in active development — all set in the same universe.",
  problem: `· It'll Be Fine. — 8-season scripted dramedy. Bad Ideas. Bigger Adventures. In active pitch.\n· Tangled Waters — 4-season scripted mystery dramedy. What happens at sea… doesn't always come back.\n· WTF Just Happened — Four-book fiction series. Fiction. Loosely. Don't ask questions.`,
};

function statusClass(status: string) {
  if (status === "Live") return "bg-teal-500/20 text-teal-400";
  if (status === "Active") return "bg-green-500/20 text-green-400";
  if (status === "Beta") return "bg-emerald-500/20 text-emerald-400";
  if (status === "Coming Soon") return "bg-yellow-500/20 text-yellow-400";
  if (status === "Live — Pilot") return "bg-teal-500/20 text-teal-400";
  if (status === "Proposal") return "bg-orange-500/20 text-orange-400";
  if (status.startsWith("Stealth")) return "bg-slate-500/20 text-slate-400";
  if (status === "New") return "bg-blue-500/20 text-blue-400";
  if (status === "WIP") return "bg-orange-500/20 text-orange-400";
  if (status === "Concept") return "bg-purple-500/20 text-purple-400";
  return "bg-gray-500/20 text-gray-400";
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mt-10 mb-6">
      <div className="flex-1 h-px bg-white/10" />
      <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 px-2">
        {label}
      </span>
      <div className="flex-1 h-px bg-white/10" />
    </div>
  );
}

type VentureCard = {
  name: string;
  slug: string | null;
  status: string;
  tagline: string;
  problem: string;
  meta?: string;
  tags?: string[];
  displayOnly?: boolean;
};

function CardTags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-2 flex flex-wrap gap-1">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-500 border border-white/5"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

// Intentionally locked stealth card — display only, no interaction
function StealthCard({ v }: { v: VentureCard }) {
  return (
    <div className="relative rounded-xl border border-slate-700/60 bg-slate-900/60 p-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "8px 8px",
        }}
      />
      <div className="relative flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-slate-500 text-base select-none">🔒</span>
          <h3 className="text-lg font-semibold text-slate-400">{v.name}</h3>
        </div>
        <span className={`px-3 py-1 text-xs rounded-full ${statusClass(v.status)}`}>
          {v.status}
        </span>
      </div>
      <p className="text-sm text-slate-500">{v.tagline}</p>
      {v.tags && (
        <div className="mt-3 flex flex-wrap gap-1">
          {v.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-white/3 text-slate-600 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function VentureCardLink({ v }: { v: VentureCard }) {
  return (
    <Link
      href={v.slug!}
      className="group relative block rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 p-6 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-white">{v.name}</h3>
        <span className={`px-3 py-1 text-xs rounded-full ${statusClass(v.status)}`}>
          {v.status}
        </span>
      </div>
      <p className="text-sm text-gray-300">{v.tagline}</p>
      <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-sm text-gray-400">{v.problem}</p>
        {v.meta && (
          <span className="mt-2 inline-block text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
            {v.meta}
          </span>
        )}
        {v.tags && <CardTags tags={v.tags} />}
      </div>
    </Link>
  );
}

function VentureCardNoLink({ v }: { v: VentureCard }) {
  return (
    <div className="group relative block rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 p-6 transition-all duration-300 cursor-default">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-white">{v.name}</h3>
        <span className={`px-3 py-1 text-xs rounded-full ${statusClass(v.status)}`}>
          {v.status}
        </span>
      </div>
      <p className="text-sm text-gray-300">{v.tagline}</p>
      <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-sm text-gray-400">{v.problem}</p>
        {v.tags && <CardTags tags={v.tags} />}
      </div>
    </div>
  );
}

function VentureCardExpandable({ v }: { v: VentureCard }) {
  if (v.displayOnly) return <StealthCard v={v} />;
  if (v.slug) return <VentureCardLink v={v} />;
  return <VentureCardNoLink v={v} />;
}

// 2+1 layout: first two cards side-by-side, third card full-width
function ThreeCardGrid({ items, className = "" }: { items: VentureCard[]; className?: string }) {
  return (
    <div className={`grid md:grid-cols-2 gap-6 ${className}`}>
      {items.slice(0, 2).map((v) => (
        <VentureCardExpandable key={v.name} v={v} />
      ))}
      {items[2] && (
        <div className="md:col-span-2">
          <VentureCardExpandable v={items[2]} />
        </div>
      )}
    </div>
  );
}

export default function Ventures() {
  return (
    <section id="ventures" className="max-w-5xl mx-auto px-4 py-12 scroll-mt-8">
      <h2 className="text-2xl font-semibold mb-8 text-white">Ventures</h2>

      {/* HERO - Holding Company */}
      <Link
        href={hero.slug}
        className="group relative block rounded-xl border-2 border-purple-500/50 bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 p-8 mb-8 transition-all duration-300"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-white">{hero.name}</h3>
          <span className="px-4 py-1.5 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/50">
            {hero.status}
          </span>
        </div>
        <p className="text-base text-gray-200 mb-3">{hero.tagline}</p>
        <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {hero.problem}
        </p>
      </Link>

      {/* CORE VENTURES — 2×2 grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-2">
        {ventures.map((v) => (
          <VentureCardExpandable key={v.name} v={v} />
        ))}
      </div>

      {/* OPERATIONS & ANALYTICS — Command Center full-width, then 2-col row */}
      <SectionHeader label="Operations & Analytics" />
      <div className="grid md:grid-cols-2 gap-6 mb-2">
        <div className="md:col-span-2">
          <VentureCardExpandable v={opsCommandCenter} />
        </div>
        {opsTools.map((v) => (
          <VentureCardExpandable key={v.name} v={v} />
        ))}
      </div>

      {/* BESPOKE BUILDS — 2+1 */}
      <SectionHeader label="Bespoke Builds" />
      <ThreeCardGrid items={bespokeBuilds} className="mb-2" />

      {/* LIFESTYLE & CONTENT — 2×2 grid */}
      <SectionHeader label="Lifestyle & Content" />
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {lifestyle.map((v) => (
          <VentureCardExpandable key={v.name} v={v} />
        ))}
      </div>

      {/* ANCHOR - Productions */}
      <Link
        href={anchor.slug}
        target="_blank"
        className="group relative block rounded-xl border-2 border-pink-500/50 bg-gradient-to-br from-pink-500/10 to-purple-500/10 hover:from-pink-500/20 hover:to-purple-500/20 p-8 transition-all duration-300"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-white">{anchor.name}</h3>
          <span className="px-4 py-1.5 text-xs rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/50">
            {anchor.status}
          </span>
        </div>
        <p className="text-base text-gray-200 mb-3">{anchor.tagline}</p>
        <div className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-1">
          {anchor.problem.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </Link>
    </section>
  );
}
