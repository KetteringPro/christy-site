// /app/bestlife4u/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "BestLife4U | Life Transitions Made Easier",
  description:
    "A structured, AI-guided platform helping individuals navigate divorce, estate planning, and major life transitions with dignity and support.",
};

export default function BestLife4UPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-[#E2E8F0] flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full text-center bg-[#111827] border border-slate-700 rounded-2xl p-10 shadow-lg">
        <div className="w-36 h-36 mx-auto mb-6 flex items-center justify-center rounded-2xl overflow-hidden">
          <Image
            src="/images/bestlife4U-logo.png"
            alt="BestLife4U logo"
            width={144}
            height={144}
            className="object-contain"
          />
        </div>
        <h1 className="text-3xl font-semibold text-[#F1F5F9] mb-4">
          BestLife4U
        </h1>
        <p className="text-[#CBD5E1] mb-8 leading-relaxed">
          When the future doesn't align with the original vision… we help make life transitions easier for you. A structured, AI-guided platform for divorce resolution, estate planning, and navigating life's most challenging moments — with dignity, transparency, and support.
        </p>
        <section className="max-w-3xl mx-auto py-8 px-4">
          <h2 className="text-xl font-semibold text-white mb-4">The Problem</h2>
          <p className="text-gray-300 leading-relaxed">
            Life transitions are hard enough without the added stress of confusing processes, expensive attorneys, and adversarial systems. Whether it's divorce, estate planning, or other major changes —{" "}
            <strong className="text-white">people deserve better tools</strong>.
            BestLife4U provides structured guidance that prioritizes safety, transparency, and human dignity over conflict and confusion.
          </p>
        </section>
        <section className="mt-6">
          <h2 className="text-xl font-semibold text-[#F1F5F9] mb-3">Vision</h2>
          <p className="text-[#CBD5E1] leading-relaxed">
            To create critical infrastructure for human dignity during life's hardest moments — providing accessible, AI-assisted tools that help people navigate transitions safely, affordably, and on their own terms.
          </p>
        </section>
        <section className="mt-6 text-left">
          <h2 className="text-xl font-semibold text-[#F1F5F9] mb-3 text-center">Key Features</h2>
          <ul className="text-[#CBD5E1] leading-relaxed space-y-2 mt-4">
            <li>• <strong className="text-white">Independent Disclosure</strong> — Each party enters information privately before comparison</li>
            <li>• <strong className="text-white">Built-In Honesty Checks</strong> — Automatic discrepancy surfacing prevents hidden assets</li>
            <li>• <strong className="text-white">Safety-First Design</strong> — Domestic violence screening and crisis detection protocols</li>
            <li>• <strong className="text-white">AI-Guided Support</strong> — Emotional intelligence and procedural guidance throughout</li>
            <li>• <strong className="text-white">Affordable Estate Planning</strong> — Medical POA, Basic Wills, and bundles at accessible prices</li>
          </ul>
        </section>
        <Link
          href="https://bestlife4u.app"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-[#10b981] text-[#0B1120] px-6 py-3 rounded-lg font-semibold hover:bg-[#059669] transition"
        >
          Visit BestLife4U →
        </Link>
        <div className="mt-10">
          <Link
            href="/"
            className="inline-block border border-[#10b981] text-[#10b981] px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#10b981] hover:text-[#0B1120] transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}