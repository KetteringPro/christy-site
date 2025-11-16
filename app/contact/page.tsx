import Link from "next/link";

export const metadata = {
  title: "Contact | Christy Kettering Hashey",
  description:
    "Get in touch with Christy Kettering Hashey — AI strategist, founder, and digital transformation consultant.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-[#E2E8F0] flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-lg w-full text-center bg-[#111827] border border-slate-700 rounded-2xl p-10 shadow-lg">
        <h1 className="text-3xl font-semibold text-[#F1F5F9] mb-4">
          Let’s Connect
        </h1>
        <p className="text-[#CBD5E1] mb-8">
          Whether you’re interested in collaboration, consulting, or just have
          an idea you’d like to explore — reach out anytime.
        </p>
        <a
          href="mailto:christy@ketteringpro.com"
          className="inline-block bg-[#22D3EE] text-[#0B1120] px-6 py-3 rounded-lg font-semibold hover:bg-[#38BDF8] transition"
        >
          Email: christy@ketteringpro.com
        </a>

        <p className="text-[#94A3B8] mt-6">
          Founder of{" "}
          <a
            href="https://ketteringpro.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#22D3EE] hover:text-[#38BDF8]"
          >
            KetteringPro Enterprise
          </a>{" "}
          — the holding company for all ventures featured here.
        </p>

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