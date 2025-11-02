// /app/oravella/page.tsx
import Image from "next/image";
import Link from "next/link";
import oravellaLogo from "@/public/images/oravella-logo.png";

export const metadata = {
  title: "Oravella | Salon & Spa Scheduling Platform",
  description:
    "Scheduling and operations platform designed for salons, spas, and beauty professionals.",
};

export default function OravellaPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-[#E2E8F0] flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full text-center bg-[#111827] border border-slate-700 rounded-2xl p-10 shadow-lg">
        <Image
          src={oravellaLogo}
          alt="Oravella logo"
          width={180}
          height={180}
          className="mx-auto mb-6"
        />
        <h1 className="text-3xl font-semibold text-[#F1F5F9] mb-4">
          Oravella
        </h1>
        <p className="text-[#CBD5E1] mb-8 leading-relaxed">
          Harnessing the power of AI to transform the beauty industry — Oravella is
          redefining how salons, spas, and beauty professionals manage scheduling,
          communication, product inventory, and client satisfaction.
        </p>
        <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-xl font-semibold text-white mb-4">The Problem</h2>
        <p className="text-gray-300 leading-relaxed">
          Salon and spa owners are buried in admin chaos — juggling schedules,
          managing rooms and inventory, and trying to keep up with client expectations
          across multiple tools. The problem isn’t passion — it’s fragmentation.{" "}
          <strong className="text-white">Oravella</strong> brings every moving part
          of your beauty business into one intuitive platform, so you can focus on
          the craft and the client.
        </p>
      </section>
        <button
          disabled
          className="inline-block bg-[#475569] text-[#E2E8F0] px-6 py-3 rounded-lg font-semibold opacity-70 cursor-not-allowed"
        >
          Coming Soon
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