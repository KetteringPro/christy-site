import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Swipe-A-Load | Logistics & Trucking Marketplace",
  description:
    "The Swipe model applied to freight — connecting shippers with CDL-verified carriers on demand.",
};

export default function SwipeALoadPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-[#E2E8F0] px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* HERO */}
        <div className="bg-[#111827] border border-slate-700 rounded-2xl p-10 shadow-lg">
          <div className="grid md:grid-cols-2 gap-2 items-center content-center">
            {/* Left Column */}
            <div className="flex flex-col justify-center h-full text-center md:text-left space-y-0">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-medium mb-4 mx-auto md:mx-0">
                  Coming Soon
                </div>
                <h1 className="text-4xl font-semibold text-[#F1F5F9] mb-2">Swipe-A-Load</h1>
                <p className="text-[#CBD5E1] leading-relaxed max-w-md mx-auto md:mx-0 mb-6">
                  Logistics & trucking marketplace. The Swipe model applied to freight.
                </p>
                <section className="max-w-md mx-0">
                  <h2 className="text-xl font-semibold text-white mb-4">The Problem</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Trucking is volatile. Loads sit, drivers wait, and brokers add cost and
                    friction at every step. The problem isn&apos;t capacity — it&apos;s
                    connection.{" "}
                    <strong className="text-white">Swipe-A-Load</strong> is a direct marketplace
                    matching shippers with CDL-verified carriers on demand — no middlemen, no
                    delays, built for the real volatility of trucking.
                  </p>
                </section>
              </div>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-6">
                <Link
                  href="/"
                  className="inline-block border border-[#a855f7] text-[#a855f7] px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#a855f7] hover:text-[#0B1120] transition"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative w-full">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0B1120]/60 to-transparent z-10" />
              <Image
                src="/images/swipeaload-hero.png"
                alt="Swipe-A-Load trucking marketplace"
                width={600}
                height={500}
                className="relative rounded-2xl object-cover shadow-2xl w-full h-[340px] md:h-[440px] brightness-110 contrast-110"
                priority
              />
            </div>
          </div>
        </div>

        {/* MISSION */}
        <section className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">Mission</h2>
          <p className="text-[#CBD5E1] leading-relaxed">
            Bring the on-demand marketplace model to an industry still running on phone calls
            and broker networks. Give shippers instant access to verified capacity and give
            carriers direct access to loads — cutting out the friction that costs everyone money.
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">How It Works</h2>
          <ul className="list-disc list-inside text-[#CBD5E1] space-y-2 max-w-3xl">
            <li>Shippers post loads with pickup, destination, and rate.</li>
            <li>CDL-verified carriers browse and claim loads that fit their route.</li>
            <li>Direct matching — no brokers, no markup, no waiting.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
