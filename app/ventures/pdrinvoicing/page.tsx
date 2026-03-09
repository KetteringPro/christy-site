import Link from "next/link";

export const metadata = {
  title: "PDR Invoicing System | Bespoke Auto Service Invoicing",
  description:
    "Custom-built VIN-scanning invoicing tool for auto service businesses. Paper eliminated. Built in 1 day.",
};

export default function PDRInvoicingPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-[#E2E8F0] px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* HERO */}
        <div className="bg-[#111827] border border-slate-700 rounded-2xl p-10 shadow-lg">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-medium">
                Live — Pilot
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-medium">
                Built in 1 day
              </div>
            </div>
            <h1 className="text-4xl font-semibold text-[#F1F5F9] mb-3">PDR Invoicing System</h1>
            <p className="text-[#CBD5E1] leading-relaxed mb-8">
              Bespoke invoicing for auto service businesses. VIN scanning. Paper eliminated.
            </p>
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">The Problem</h2>
              <p className="text-gray-300 leading-relaxed">
                Small auto service businesses are still running on paper 3-part invoices and
                Venmo. No records, no customer history, no branded output, no efficiency.{" "}
                <strong className="text-white">The PDR Invoicing System</strong> is a
                bespoke solution built in a single day — VIN scanning that auto-populates
                vehicle details, customer management, branded invoice output, and a Google
                Sheets backend. Paper forms eliminated entirely.
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
            A fully custom invoicing tool built around the specific workflow of a PDR (paintless
            dent repair) business — not a generic SaaS product forced to fit. The result: a
            faster, cleaner, more professional operation with zero paper and a complete
            digital record of every job.
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">How It Works</h2>
          <ul className="list-disc list-inside text-[#CBD5E1] space-y-2 max-w-3xl">
            <li>Scan a VIN — vehicle details populate automatically.</li>
            <li>Select services, add notes, apply pricing.</li>
            <li>Generate a branded invoice and send or print on the spot.</li>
            <li>All records sync to Google Sheets — searchable, shareable, always backed up.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
