import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "QuickBitesQueen | Easy Meals for One",
  description:
    "High-protein shortcut queen. Real recipes, fast. 100+ tested recipes built around real life.",
};

export default function QuickBitesQueenPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-[#E2E8F0] px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* HERO */}
        <div className="bg-[#111827] border border-slate-700 rounded-2xl p-10 shadow-lg">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium mb-4">
            Active
          </div>
          <h1 className="text-4xl font-semibold text-[#F1F5F9] mb-2">QuickBitesQueen</h1>
          <p className="text-[#CBD5E1] leading-relaxed max-w-2xl mb-6">
            Easy Meals for One. High-protein shortcut queen. Real recipes, fast.
          </p>
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">The Problem</h2>
            <p className="text-gray-300 leading-relaxed max-w-2xl">
              Home cooks want real, fast recipes — without the life story before the
              ingredients. Most recipe sites bury the good stuff under ads, backstory,
              and fluff.{" "}
              <strong className="text-white">QuickBitesQueen</strong> cuts straight to
              the food.
            </p>
          </section>
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="https://quickbitesqueen.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#a855f7] text-[#0B1120] px-6 py-3 rounded-lg font-semibold hover:bg-[#c084fc] transition"
            >
              Visit Site
            </a>
            <Link
              href="/"
              className="inline-block border border-[#a855f7] text-[#a855f7] px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#a855f7] hover:text-[#0B1120] transition"
            >
              ← Back to Home
            </Link>
          </div>
          {/* Screenshot — full width below content */}
          <Image
            src="/images/qbq-hero.png"
            alt="QuickBitesQueen recipe platform"
            width={1200}
            height={800}
            className="w-full rounded-lg shadow-2xl"
            priority
          />
        </div>

        {/* THE SOLUTION */}
        <section className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">The Solution</h2>
          <p className="text-[#CBD5E1] leading-relaxed">
            100+ tested recipes built around real life — quick weeknights, high-protein
            meals, overnight oats, and bowl builders with live macro totals. Plus curated
            Amazon links for every tool and ingredient you actually need.
          </p>
        </section>

        {/* WHAT YOU GET */}
        <section className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">What You Get</h2>
          <ul className="list-disc list-inside text-[#CBD5E1] space-y-2 max-w-3xl">
            <li><strong className="text-white">Bowl Builders</strong> — yogurt bowls, protein bowls with live macro totals</li>
            <li><strong className="text-white">Overnight Oats</strong> — prep tonight, grab tomorrow</li>
            <li><strong className="text-white">Protein Lunch Bowls</strong> — assembly only, macros calculated live</li>
            <li><strong className="text-white">Rental Kitchen Planner</strong> — one Walmart run, fully covered</li>
            <li><strong className="text-white">QBQ Kitchen Essentials</strong> — Christy&apos;s actual picks</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
