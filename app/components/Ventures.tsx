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

// The Ventures Portfolio
const ventures = [
  {
    name: "Groovin' Fly",
    slug: "/ventures/groovinfly",
    status: "Active",
    tagline:
      "Lifestyle travel & festival experiences for women who love to explore.",
    problem:
      "Because life doesn't stop at 40 — Groovin' Fly connects women who still crave adventure, music, and freedom.",
  },
  {
    name: "Swipe-A-Shift",
    slug: "/ventures/swipeashift",
    status: "Coming Dec 2025",
    tagline:
      "Gig work marketplace for hospitality staffing and shift automation.",
    problem:
      "Fill shifts fast or find flexible work — Swipe-A-Shift handles the matching, insurance, and onboarding headaches.",
  },
  {
    name: "Oravella",
    slug: "/ventures/oravella",
    status: "Coming Soon",
    tagline: "Scheduling & operations platform for salons and spas.",
    problem:
      "Unify bookings, rooms, and reporting in one app — Oravella streamlines your tech so you can focus on clients.",
  },
  {
    name: "Digital Humanity Index (DHI)",
    slug: "/ventures/dhi",
    status: "Concept",
    tagline: "Digital authenticity & reputation framework for creators.",
    problem:
      "Social media has become our résumé, reputation, and record — yet there's no standard for trust or authenticity. DHI reimagines digital credibility for the age of human data, exploring the evolution of a new kind of score — not for finances, but for humanity itself.",
  },
];

// Anchor - The Show About It All
const anchor = {
  name: "KetteringProductions.com",
  slug: "https://ketteringproductions.com",
  status: "TV Dramedy Series",
  tagline:
    "Producing 'From Chaos to Clarity' — a romantic dramedy following the founder/CEO as she brings clarity to businesses while navigating the chaos of building multiple ventures and juggling wild personal life.",
  problem:
    "The same strength that made sense of corporate noise now captured on screen — turning chaos into clarity for clients while living through the beautiful mess of entrepreneurship and life intertwined.",
};

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

      {/* VENTURES GRID */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {ventures.map((v) => (
          <Link
            key={v.name}
            href={v.slug}
            className="group relative block rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 p-6 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-white">{v.name}</h3>
              <span
                className={`px-3 py-1 text-xs rounded-full ${
                  v.status === "Active"
                    ? "bg-green-500/20 text-green-400"
                    : v.status === "Coming Dec 2025"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : v.status === "Concept"
                    ? "bg-purple-500/20 text-purple-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {v.status}
              </span>
            </div>
            <p className="text-sm text-gray-300">{v.tagline}</p>
            <p className="mt-2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {v.problem}
            </p>
          </Link>
        ))}
      </div>

      {/* ANCHOR - Reality Series */}
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
        <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {anchor.problem}
        </p>
      </Link>
    </section>
  );
}
