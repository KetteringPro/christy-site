"use client";

import Link from "next/link";

const ventures = [
  {
    name: "Kettering AI Strategies",
    slug: "/ventures/kais",
    status: "Active",
    tagline:
      "AI readiness & strategic planning consulting for enterprise PMOs and transformation leaders.",
    problem:
      "Turn project chaos into clarity — reducing requirements, specs, and timelines from months to days.",
  },
  {
    name: "KetteringWorks.AI",
    slug: "/ventures/kwai",
    status: "Active",
    tagline: "Automation & workflow enablement for small businesses.",
    problem:
      "Reclaim your time by automating scheduling, invoices, and daily admin — minutes, not hours.",
  },
  {
    name: "Groovin' Fly",
    slug: "/ventures/groovinfly",
    status: "Active",
    tagline:
      "Lifestyle travel & festival experiences for women who love to explore.",
    problem:
      "Because life doesn’t stop at 40 — Groovin' Fly connects women who still crave adventure, music, and freedom.",
  },
  {
    name: "Swipe-A-Shift",
    slug: "/ventures/swipeashift",
    status: "Coming Soon",
    tagline:
      "Gig work marketplace for hospitality staffing and shift automation.",
    problem:
      "Fill shifts fast or find flexible work — Swipe-A-Shift handles the matching, insurance, and onboarding headaches.",
  },
  {
    name: "Oravella",
    slug: "/ventures/oravella",
    status: "Coming Soon",
    tagline:
      "Scheduling & operations platform for salons and spas.",
    problem:
      "Unify bookings, rooms, and reporting in one app — Oravella streamlines your tech so you can focus on clients.",
  },
  {
  name: "Digital Humanity Index (DHI)",
  slug: "/ventures/dhi",
  status: "Concept",
  tagline: "Digital authenticity & reputation framework for creators.",
  problem:
    "Social media has become our résumé, reputation, and record — yet there’s no standard for trust or authenticity. DHI reimagines digital credibility for the age of human data, exploring the evolution of a new kind of score — not for finances, but for humanity itself.",
}, 
];

export default function Ventures() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-8 text-white">Ventures</h2>
      <div className="grid md:grid-cols-2 gap-6">
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
    </section>
  );
}