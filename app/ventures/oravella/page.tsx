import Image from "next/image";
import Link from "next/link";
import oravellaLogo from "@/public/images/oravella-logo.png";

export const metadata = {
  title: "Oravella | Salon & Spa Scheduling & AI Communications Platform",
  description:
    "Scheduling, operations & AI-powered communications platform built specifically for salons and spas.",
};

export default function OravellaPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-[#E2E8F0] px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* HERO */}
        <div className="bg-[#111827] border border-slate-700 rounded-2xl p-10 shadow-lg">
          <Image
            src={oravellaLogo}
            alt="Oravella logo"
            width={200}
            height={200}
            className="drop-shadow-xl mb-2"
          />
          <h1 className="text-4xl font-semibold text-[#F1F5F9] mb-2">Oravella</h1>
          <p className="text-[#CBD5E1] leading-relaxed max-w-2xl mb-6">
            Scheduling, operations & AI-powered communications platform built
            specifically for salons and spas.
          </p>
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">The Problem</h2>
            <p className="text-gray-300 leading-relaxed max-w-2xl">
              Salons and spas juggle bookings, rooms, staff, and client communications
              across too many disconnected tools. The problem isn&apos;t the business —
              it&apos;s the fragmentation.{" "}
              <strong className="text-white">Oravella</strong> brings every moving part
              of your beauty business into one intuitive platform, so you can focus on
              the craft and the client.
            </p>
          </section>
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="https://www.oravella.app/"
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
            src="/images/oravella-hero.png"
            alt="Oravella salon and spa platform"
            width={1200}
            height={800}
            className="w-full rounded-lg shadow-2xl"
            priority
          />
        </div>

        {/* OUR MISSION */}
        <section className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">Our Mission</h2>
          <p className="text-[#CBD5E1] leading-relaxed">
            Oravella exists to give salons and spas back their time. Beauty professionals
            are artists first — not administrators. We build the operational infrastructure
            so they can focus on what they do best: the craft and the client.
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">How It Works</h2>
          <ul className="list-disc list-inside text-[#CBD5E1] space-y-2 max-w-3xl">
            <li>Unified scheduling — bookings, rooms, and staff in one view.</li>
            <li>AI-powered client communications — automated reminders, follow-ups, and outreach.</li>
            <li>Operations reporting — see what&apos;s working and where revenue is going.</li>
            <li>One platform. No more tab-switching between disconnected tools.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
