import Image from "next/image";
import Link from "next/link";
import kpeLogo from "@/public/images/kpe-logo.png";

export const metadata = {
  title: "KPE Social Media Engine | Content Command Center",
  description:
    "Centralized content command center for multi-brand scheduling, AI-generated queues, and real-time platform status across the full portfolio.",
};

export default function SocialMediaEnginePage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-[#E2E8F0] px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* HERO */}
        <div className="bg-[#111827] border border-slate-700 rounded-2xl p-10 shadow-lg">
          <Image
            src={kpeLogo}
            alt="ketteringPro Enterprise logo"
            width={60}
            height={60}
            className="mb-3"
          />
          <h1 className="text-4xl font-semibold text-[#F1F5F9] mb-1">
            KPE Social Media Engine
          </h1>
          <p className="text-[#94A3B8] text-base mb-4">Content Command Center</p>
          <p className="text-[#CBD5E1] leading-relaxed max-w-2xl mb-6">
            Multi-brand scheduling, AI-generated content queues, and platform status
            across the full portfolio — from one dashboard.
          </p>
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">The Problem</h2>
            <p className="text-gray-300 leading-relaxed max-w-2xl">
              Managing social content across multiple brands means multiple logins,
              multiple calendars, and no unified view of what&apos;s going out when.
              Most founders either over-post, under-post, or just wing it.
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
            src="/images/social-media-engine-screenshot.png"
            alt="KPE Social Media Engine dashboard"
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
            A centralized content command center that manages post queues, scheduling, and
            platform status across every brand in the portfolio — from one dashboard.
            Auto-generate a full week of content, monitor Facebook, Instagram, and TikTok
            in real time, and never miss a best posting window.
          </p>
        </section>

        {/* WHAT IT DOES */}
        <section className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">What It Does</h2>
          <ul className="list-disc list-inside text-[#CBD5E1] space-y-2 max-w-3xl">
            <li><strong className="text-white">Multi-brand tabs</strong> — switch between brands instantly</li>
            <li><strong className="text-white">Today&apos;s Queue</strong> — see exactly what&apos;s posting and when</li>
            <li><strong className="text-white">Auto-Generate Week</strong> — AI-generated content for the full week</li>
            <li><strong className="text-white">Platform Status</strong> — live connection status per platform</li>
            <li><strong className="text-white">Best Posting Times</strong> — built-in optimal timing per channel</li>
            <li><strong className="text-white">Calendar + Analytics views</strong></li>
          </ul>
        </section>
      </div>
    </main>
  );
}
