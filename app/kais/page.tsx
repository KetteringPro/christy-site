import Image from "next/image";
import Link from "next/link";
import kaisLogo from "@/public/images/kais-logo.png";

export const metadata = {
  title: "Kettering AI Strategies | AI Readiness & Strategic Planning",
  description:
    "Enterprise consulting for AI readiness, strategy execution, and PMO transformation.",
};

export default function KAISPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-[#E2E8F0] flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full text-center bg-[#111827] border border-slate-700 rounded-2xl p-10 shadow-lg">
        <Image
          src={kaisLogo}
          alt="Kettering AI Strategies logo"
          width={180}
          height={180}
          className="mx-auto mb-6"
        />
        <h1 className="text-3xl font-semibold text-[#F1F5F9] mb-4">
          Kettering AI Strategies
        </h1>
        <p className="text-[#CBD5E1] mb-8 leading-relaxed">
          AI readiness and strategic planning for enterprise PMOs. We help
          organizations move from curiosity to confident adoption through
          practical sprints and automation roadmaps.
        </p>
        <section className="mt-8 text-center">
          <h2 className="text-xl font-semibold text-[#F1F5F9] mb-3">What We Do</h2>
          <ul className="list-disc list-inside mx-auto inline-block text-left space-y-2 text-[#CBD5E1] mb-8">
            <li>Automation workflows for small businesses</li>
            <li>AI‑driven systems integration</li>
            <li>Digital presence &amp; website setup</li>
            <li>"Business‑in‑a‑Box" automation packages</li>
          </ul>
        </section>
        <a
          href="https://ketteringworks.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#22D3EE] text-[#0B1120] px-6 py-3 rounded-lg font-semibold hover:bg-[#38BDF8] transition"
        >
          Visit Site
        </a>

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