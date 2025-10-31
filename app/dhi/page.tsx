// /app/dhi/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Digital Humanity Index | Concept Framework",
  description:
    "Concept for digital authenticity and reputation scoring framework for creators and professionals.",
};

export default function DHIPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-[#E2E8F0] flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full text-center bg-[#111827] border border-slate-700 rounded-2xl p-10 shadow-lg">
        <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center bg-[#22D3EE] text-[#0B1120] rounded-full text-3xl font-bold">
          DHI
        </div>
        <h1 className="text-3xl font-semibold text-[#F1F5F9] mb-4">
          Digital Humanity Index (DHI)
        </h1>
        <p className="text-[#CBD5E1] mb-8 leading-relaxed">
          A conceptual framework for quantifying digital authenticity and human integrity — DHI aims to protect creators, professionals, and AI entities by establishing a transparent standard for reputation, originality, and ethical conduct in the digital era.
        </p>
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-[#F1F5F9] mb-3">Vision</h2>
          <p className="text-[#CBD5E1] leading-relaxed">
            To create a measurable standard of trust for the digital world — ensuring every identity, human or AI, is recognized for authenticity, contribution, and integrity.
          </p>
        </section>
        <button
          disabled
          className="inline-block bg-[#475569] text-[#E2E8F0] px-6 py-3 rounded-lg font-semibold opacity-70 cursor-not-allowed"
        >
          Concept Stage
        </button>
        <div className="mt-10">
          <Link
            href="/"
            className="inline-block border border-[#22D3EE] text-[#22D3EE] px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#22D3EE] hover:text-[#0B1120] transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}