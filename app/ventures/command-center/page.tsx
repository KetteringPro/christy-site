import Image from "next/image";
import Link from "next/link";
import kpeLogo from "@/public/images/kpe-logo.png";

export const metadata = {
  title: "KPE Analytics Command Center | Portfolio-Wide Intelligence",
  description:
    "Unified GA4 monitoring across 8 live properties — real-time sessions, critical alerts, and portfolio-wide performance at a glance.",
};

export default function CommandCenterPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-[#E2E8F0] px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* HERO */}
        <div className="bg-[#111827] border border-slate-700 rounded-2xl p-10 shadow-lg">
          <Image
            src={kpeLogo}
            alt="ketteringPro Enterprise logo"
            width={80}
            height={80}
            className="mb-4"
          />
          <h1 className="text-4xl font-semibold text-[#F1F5F9] mb-1">
            KPE Analytics Command Center
          </h1>
          <p className="text-[#94A3B8] text-base mb-4">
            Portfolio-Wide Intelligence. Real Time.
          </p>
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-3">The Problem</h2>
            <p className="text-gray-300 leading-relaxed max-w-2xl">
              Managing 8 live properties across a portfolio means 8 different analytics
              dashboards, 8 different logins, and no unified view of what&apos;s working
              and what needs attention. The alternative was chaos.
            </p>
          </section>
          <div className="flex flex-wrap gap-3 mb-8">
            <Link
              href="/"
              className="inline-block border border-[#a855f7] text-[#a855f7] px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#a855f7] hover:text-[#0B1120] transition"
            >
              ← Back to Home
            </Link>
          </div>
          {/* Screenshot — full width below content */}
          <Image
            src="/images/command-center-screenshot.png"
            alt="KPE Analytics Command Center dashboard"
            width={1200}
            height={800}
            className="w-full rounded-lg shadow-2xl"
            priority
          />
        </div>

        {/* SOLUTION */}
        <section className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">The Solution</h2>
          <p className="text-[#CBD5E1] leading-relaxed">
            A consolidated GA4 command center pulling all properties into a single view —
            real-time sessions, critical alerts, trend tracking, and portfolio-wide
            performance at a glance. Built because the alternative was chaos.
          </p>
        </section>

        {/* WHAT IT MONITORS */}
        <section className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">What It Monitors</h2>
          <ul className="list-disc list-inside text-[#CBD5E1] space-y-2 max-w-3xl">
            <li>8 live GA4 properties — all in one view, no tab-switching.</li>
            <li>Real-time active sessions across the full portfolio.</li>
            <li>Critical alerts — traffic drops, anomalies, spikes that need attention.</li>
            <li>Trend tracking — week-over-week and month-over-month per property.</li>
            <li>Portfolio-wide roll-up — total reach, engagement, and growth at a glance.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
