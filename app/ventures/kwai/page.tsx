// /app/kwai/page.tsx
import Image from "next/image";
import Link from "next/link";
import kwaiLogo from "@/public/images/kwai-logo.png";

export const metadata = {
  title: "KetteringWorks.AI | Automation & Workflow Enablement",
  description:
    "Automation and workflow enablement for small businesses using AI and custom integrations.",
};

export default function KWAIPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-[#E2E8F0] flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full text-center bg-[#111827] border border-slate-700 rounded-2xl p-10 shadow-lg">
        <Image
          src={kwaiLogo}
          alt="KetteringWorks.AI logo"
          width={180}
          height={180}
          className="mx-auto mb-6"
        />
        <h1 className="text-3xl font-semibold text-[#F1F5F9] mb-4">
          KetteringWorks.AI
        </h1>
        <p className="text-[#CBD5E1] mb-8 leading-relaxed">
          Empowering small businesses to automate workflows, streamline
          operations, and scale smarter with AI-powered systems.
        </p>

        <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-xl font-semibold text-white mb-4">The Problem</h2>
        <p className="text-gray-300 leading-relaxed">
          Small business owners are drowning in admin — scheduling, invoices, emails,
          and endless tasks that eat away at every day. The problem isn’t effort —
          it’s inefficiency.{" "}
          <strong className="text-white">KetteringWorks.AI</strong> eliminates the
          busywork so business owners can focus on growth, creativity, and customers.
        </p>
        </section>
        <div className="text-center mb-8">
          <div className="text-lg font-semibold mb-2">What We Do</div>
          <ul className="text-[#CBD5E1] mb-8 leading-relaxed list-disc list-inside text-center space-y-2">
            <li>Automation Workflows for Small Businesses</li>
            <li>AI-Driven Systems Integration</li>
            <li>Digital Presence &amp; Website Setup</li>
            <li>“Business-in-a-Box” Automation Packages</li>
          </ul>
        </div>
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
