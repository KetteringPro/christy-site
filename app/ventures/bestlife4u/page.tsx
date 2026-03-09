// /app/bestlife4u/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "BestLife4U | AI-Guided Tools for Life's Most Important Decisions",
  description:
    "Estate planning, divorce resolution, and major life transitions — structured, AI-guided, and built for dignity, clarity, and affordability.",
};

export default function BestLife4UPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-[#E2E8F0] px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* HERO */}
        <div className="bg-[#111827] border border-slate-700 rounded-2xl p-10 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left */}
            <div className="flex flex-col justify-center space-y-4">
              <div>
                <h1 className="text-4xl font-semibold text-[#F1F5F9] mb-2">BestLife4U</h1>
                <p className="text-[#CBD5E1] leading-relaxed mb-6">
                  AI-guided tools for life&apos;s most important decisions — estate planning,
                  divorce resolution, and major life transitions. Built for dignity, clarity,
                  and affordability.
                </p>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">The Problem</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Most people don&apos;t have a will. Most people can&apos;t afford an
                    attorney for every life decision. And when major transitions hit —
                    divorce, death, major change — the systems designed to help are
                    expensive, adversarial, and built for lawyers, not people.{" "}
                    <strong className="text-white">BestLife4U changes that.</strong>
                  </p>
                </section>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://bestlife4u.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#10b981] text-[#0B1120] px-6 py-3 rounded-lg font-semibold hover:bg-[#059669] transition"
                >
                  Visit BestLife4U →
                </a>
                <Link
                  href="/"
                  className="inline-block border border-[#a855f7] text-[#a855f7] px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#a855f7] hover:text-[#0B1120] transition"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>

            {/* Right — logo display */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-emerald-500/20 to-teal-500/10 blur-3xl rounded-full" />
                <Image
                  src="/images/bestlife4U-logo.png"
                  alt="BestLife4U"
                  width={280}
                  height={280}
                  className="relative object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* THE SOLUTION */}
        <section className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">The Solution</h2>
          <p className="text-[#CBD5E1] leading-relaxed">
            A structured, AI-guided platform that walks one person through their most critical
            life decisions — at their own pace, on their own terms. You enter your information
            privately. The platform guides you through the process, surfaces what matters, and
            produces clear, actionable output — no attorney required to get started.
          </p>
        </section>

        {/* WHAT WE'VE BUILT */}
        <section className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-6">What We&apos;ve Built</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Estate Planning</h3>
              <p className="text-[#CBD5E1] leading-relaxed">
                Wills, Living Wills, Medical POA, Healthcare Directives, and bundles at
                accessible prices. The tools most people know they need and never get around
                to — finally within reach.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Divorce Resolution</h3>
              <p className="text-[#CBD5E1] leading-relaxed">
                A structured guided process with built-in honesty checks, automatic
                discrepancy surfacing to prevent hidden assets, and safety-first design
                including domestic violence screening and crisis detection protocols. Each
                party enters information privately before comparison — no adversarial dynamic
                required.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">AI-Guided Support</h3>
              <p className="text-[#CBD5E1] leading-relaxed">
                Emotional intelligence and procedural guidance throughout every step — so
                the platform meets people where they are, not where a legal process expects
                them to be.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
