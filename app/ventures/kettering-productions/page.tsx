import Link from "next/link";

export const metadata = {
  title: "KetteringProductions.com | Production Company",
  description:
    "Three projects in active development — all set in the same universe. It'll Be Fine., Tangled Waters, and WTF Just Happened.",
};

export default function KetteringProductionsPage() {
  return (
    <main className="min-h-screen bg-[#1A0B2E] text-[#E2E8F0] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[#F1F5F9]">
              KetteringProductions.com
            </h1>
          </div>
          <p className="text-lg text-[#94A3B8] mb-2">Production Company</p>
          <p className="mt-4 text-lg text-[#CBD5E1] max-w-2xl">
            Three projects in active development — all set in the same universe.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="https://ketteringproductions.com"
              target="_blank"
              className="bg-[#EC4899] text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#DB2777] transition"
            >
              Visit KetteringProductions.com
            </Link>
            <Link
              href="/#ventures"
              className="border border-[#EC4899] text-[#EC4899] px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#EC4899] hover:text-white transition"
            >
              ← Back to Ventures
            </Link>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-6">
          {/* It'll Be Fine. */}
          <div className="bg-[#22103D] rounded-2xl p-8 border border-[#3B1E6D]">
            <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
              <h2 className="text-2xl font-bold text-[#F1F5F9]">It&apos;ll Be Fine.</h2>
              <span className="px-3 py-1 text-xs rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30 whitespace-nowrap">
                In Active Pitch
              </span>
            </div>
            <p className="text-[#94A3B8] text-sm mb-3">8-Season Scripted Dramedy</p>
            <p className="text-[#CBD5E1] leading-relaxed">
              Bad Ideas. Bigger Adventures. Eight seasons of exactly the kind of decisions that
              make perfect sense in the moment and even better stories later.
            </p>
          </div>

          {/* Tangled Waters */}
          <div className="bg-[#22103D] rounded-2xl p-8 border border-[#3B1E6D]">
            <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
              <h2 className="text-2xl font-bold text-[#F1F5F9]">Tangled Waters</h2>
              <span className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 whitespace-nowrap">
                In Development
              </span>
            </div>
            <p className="text-[#94A3B8] text-sm mb-3">4-Season Scripted Mystery Dramedy</p>
            <p className="text-[#CBD5E1] leading-relaxed">
              What happens at sea… doesn&apos;t always come back.
            </p>
          </div>

          {/* WTF Just Happened */}
          <div className="bg-[#22103D] rounded-2xl p-8 border border-[#3B1E6D]">
            <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
              <h2 className="text-2xl font-bold text-[#F1F5F9]">WTF Just Happened</h2>
              <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 whitespace-nowrap">
                In Development
              </span>
            </div>
            <p className="text-[#94A3B8] text-sm mb-3">Four-Book Fiction Series</p>
            <p className="text-[#CBD5E1] leading-relaxed">
              Fiction. Loosely. Don&apos;t ask questions.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
