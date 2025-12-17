// /app/velocivia/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Velocivia | Performance, Delivered",
  description:
    "A future-focused marketplace and orchestration platform for high-performance automotive work — built to align speed, precision, and execution.",
};

export default function VelociviaPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-[#E2E8F0] flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full text-center bg-[#111827] border border-slate-700 rounded-2xl p-10 shadow-lg">
        <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center rounded-full overflow-hidden bg-black">
          <Image
            src="/images/velocivia-logo.png"
            alt="Velocivia logo"
            width={128}
            height={128}
            className="object-contain"
          />
        </div>
        <h1 className="text-3xl font-semibold text-[#F1F5F9] mb-2">
          Velocivia
        </h1>
        <p className="text-lg text-[#94A3B8] italic mb-6">
          Performance, delivered.
        </p>
        <p className="text-[#CBD5E1] mb-8 leading-relaxed">
          Velocivia is a next-generation marketplace and orchestration platform for high-performance automotive work. It is designed to bring speed, quality, and precision together through the right technology at the right time.
        </p>
        <section className="max-w-3xl mx-auto py-8 px-4">
          <h2 className="text-xl font-semibold text-white mb-4">The Gap</h2>
          <p className="text-gray-300 leading-relaxed">
            Built for complex, multi-stage builds, Velocivia addresses a long-standing gap in the specialty automotive space — where high-value work is still coordinated through fragmented tools, informal timelines, and manual oversight.
          </p>
        </section>
        <section className="mt-6">
          <h2 className="text-xl font-semibold text-[#F1F5F9] mb-3">Platform Vision</h2>
          <p className="text-[#CBD5E1] leading-relaxed">
            Rather than operating as a simple directory or booking tool, Velocivia is designed to manage sequenced performance workflows, aligning specialists, services, and dependencies into a single, transparent execution path.
          </p>
        </section>
        <section className="mt-6 text-left">
          <h2 className="text-xl font-semibold text-[#F1F5F9] mb-3 text-center">Designed to Support</h2>
          <ul className="text-[#CBD5E1] leading-relaxed space-y-2 mt-4">
            <li>• <strong className="text-white">Specialty & Performance Modifications</strong></li>
            <li>• <strong className="text-white">Multi-Vendor Build Coordination</strong></li>
            <li>• <strong className="text-white">Sequencing & Dependency Management</strong></li>
            <li>• <strong className="text-white">Timeline Visibility & Progress Tracking</strong></li>
            <li>• <strong className="text-white">Secure Payments & Accountability</strong></li>
          </ul>
        </section>
        <section className="mt-8 p-6 bg-[#0B1120] rounded-xl border border-slate-600">
          <p className="text-[#94A3B8] text-sm italic leading-relaxed">
            Inspired by Latin roots — <strong className="text-white">velox</strong> (speed) and <strong className="text-white">via</strong> (the way) — Velocivia reflects a core philosophy: true performance comes from choosing the right path, not shortcuts.
          </p>
        </section>
        <button
          disabled
          className="mt-8 inline-block bg-[#475569] text-[#E2E8F0] px-6 py-3 rounded-lg font-semibold opacity-70 cursor-not-allowed"
        >
          Concept / Future Platform
        </button>
        <div className="mt-10">
          <Link
            href="/"
            className="inline-block border border-[#64748b] text-[#64748b] px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#64748b] hover:text-[#0B1120] transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}