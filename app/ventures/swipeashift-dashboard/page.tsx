import Image from "next/image";
import Link from "next/link";
import swipeLogo from "@/public/images/swipe-logo.png";

export const metadata = {
  title: "Swipe-A-Shift Admin Dashboard | Live Marketplace Operations Console",
  description:
    "Purpose-built admin console tracking worker pipeline, shift coverage, venue management, and growth analytics in real time.",
};

export default function SwipeAShiftDashboardPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-[#E2E8F0] px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* HERO */}
        <div className="bg-[#111827] border border-slate-700 rounded-2xl p-10 shadow-lg">
          <Image
            src={swipeLogo}
            alt="Swipe-A-Shift logo"
            width={180}
            height={180}
            className="drop-shadow-xl mb-2"
          />
          <h1 className="text-4xl font-semibold text-[#F1F5F9] mb-1">
            Swipe-A-Shift Admin Dashboard
          </h1>
          <p className="text-[#94A3B8] text-base mb-4">
            Live Marketplace Operations Console
          </p>
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-3">The Problem</h2>
            <p className="text-gray-300 leading-relaxed max-w-2xl">
              Running a two-sided staffing marketplace blind is not an option. Without
              real-time visibility into worker onboarding, shift coverage, and venue
              activity — you&apos;re reacting instead of operating.
            </p>
          </section>
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="https://admin.swipeashift.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#a855f7] text-[#0B1120] px-6 py-3 rounded-lg font-semibold hover:bg-[#c084fc] transition"
            >
              Visit Dashboard
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
            src="/images/swipeashift-dashboard-portfolio.png"
            alt="Swipe-A-Shift Admin Dashboard"
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
            A purpose-built admin console tracking every stage of the marketplace in real
            time — worker growth, full pipeline from signup through background check, active
            shifts, venue management, revenue, and outreach. One screen. Total visibility.
          </p>
        </section>

        {/* WHAT IT TRACKS */}
        <section className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">What It Tracks</h2>
          <ul className="list-disc list-inside text-[#CBD5E1] space-y-2 max-w-3xl">
            <li>Worker pipeline — signup through background check completion, stage by stage.</li>
            <li>Active shift coverage — open, filled, and in-progress across all venues.</li>
            <li>Venue management — onboarding status, activity, and shift history.</li>
            <li>Growth analytics — worker acquisition, retention, and marketplace health.</li>
            <li>Revenue and outreach — campaign performance and conversion tracking.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
