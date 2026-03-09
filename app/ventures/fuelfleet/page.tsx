import Link from "next/link";

export const metadata = {
  title: "Fuel & Fleet Management System | Bespoke Operations",
  description:
    "Custom business management system for an oil & fuel company — inventory, reporting, and workflows built around their operating model.",
};

export default function FuelFleetPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-[#E2E8F0] px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* HERO */}
        <div className="bg-[#111827] border border-slate-700 rounded-2xl p-10 shadow-lg">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-medium mb-6">
              Proposal
            </div>
            <h1 className="text-4xl font-semibold text-[#F1F5F9] mb-3">
              Fuel & Fleet Management System
            </h1>
            <p className="text-[#CBD5E1] leading-relaxed mb-8">
              Bespoke operations for energy & fleet. Built around your model, not ours.
            </p>
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">The Problem</h2>
              <p className="text-gray-300 leading-relaxed">
                Oil and fuel companies run complex, specific operations — and generic tools
                don&apos;t fit. Inventory tracking, operational reporting, and fleet
                management workflows all need to reflect how the business actually works.{" "}
                <strong className="text-white">This system</strong> is a custom-built
                business management platform built from scratch around one company&apos;s
                specific operating model — not adapted from something that almost fits.
              </p>
            </section>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/"
                className="inline-block border border-[#a855f7] text-[#a855f7] px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#a855f7] hover:text-[#0B1120] transition"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>

        {/* SOLUTION */}
        <section className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">The Solution</h2>
          <p className="text-[#CBD5E1] leading-relaxed">
            Let your process drive the technology. A bespoke system designed by mapping the
            actual operational workflows first — then building technology that fits them
            exactly. The result is a management platform the team actually uses, because it
            works the way they work.
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">What Gets Built</h2>
          <ul className="list-disc list-inside text-[#CBD5E1] space-y-2 max-w-3xl">
            <li>Inventory tracking built around actual product types and movement patterns.</li>
            <li>Operational reporting dashboards — the metrics that matter to this business.</li>
            <li>Fleet management workflows — dispatch, maintenance tracking, compliance.</li>
            <li>Everything tailored. Nothing generic.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
