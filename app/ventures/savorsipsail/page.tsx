import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Savor.Sip.Sail. | Cruise Food & Drink Platform",
  description:
    "The only community-powered cruise food & drink platform. 60+ ships. 6 cruise lines. 700+ food and drink photos.",
};

export default function SavorSipSailPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-[#E2E8F0] px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* HERO */}
        <div className="bg-[#111827] border border-slate-700 rounded-2xl p-10 shadow-lg">
          <div className="grid md:grid-cols-2 gap-2 items-center content-center">
            {/* Left Column - Title + Text + Buttons */}
            <div className="flex flex-col justify-center h-full text-center md:text-left space-y-0">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-medium mb-4 mx-auto md:mx-0">
                  WIP
                </div>
                <h1 className="text-4xl font-semibold text-[#F1F5F9] mb-2">Savor.Sip.Sail.</h1>
                <p className="text-[#CBD5E1] leading-relaxed max-w-md mx-auto md:mx-0 mb-6">
                  Savor the food. Sip the drinks. Enjoy the sailing.
                </p>
                <section className="max-w-md mx-0">
                  <h2 className="text-xl font-semibold text-white mb-4">The Problem</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Cruise food and drink content is scattered, generic, and written by people
                    who haven&apos;t actually lived the cruise lifestyle. There&apos;s no single
                    destination for real photos, honest ratings, and copycat recipes from someone
                    who actually sails.
                  </p>
                </section>
              </div>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-6">
                <a
                  href="https://savorsipsail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#a855f7] text-[#0B1120] px-6 py-3 rounded-lg font-semibold hover:bg-[#c084fc] transition"
                >
                  Visit Site
                </a>
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
              <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-[#0B1120]/60 to-transparent z-10" />
              <Image
                src="/images/savorsipsail-hero.png"
                alt="Savor.Sip.Sail. cruise food and drink platform"
                width={600}
                height={500}
                className="relative rounded-2xl object-cover shadow-2xl w-full h-[340px] md:h-[440px] brightness-110 contrast-110"
                priority
              />
            </div>
          </div>
        </div>

        {/* THE SOLUTION */}
        <section className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">The Solution</h2>
          <p className="text-[#CBD5E1] leading-relaxed">
            The only community-powered cruise food &amp; drink platform on the internet.
            60+ ships covered. 6 cruise lines. 700+ food and drink photos. Real content
            from real cruisers.
          </p>
        </section>

        {/* WHAT'S INSIDE */}
        <section className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">What&apos;s Inside</h2>
          <ul className="list-disc list-inside text-[#CBD5E1] space-y-2 max-w-3xl">
            <li><strong className="text-white">Browse by Ship</strong> — dining and bar guides across all major cruise lines</li>
            <li><strong className="text-white">Copycat Recipes</strong> — recreate your favorite ship drinks and dishes</li>
            <li><strong className="text-white">Port Destination Guides</strong> — food and drink recommendations ashore</li>
            <li><strong className="text-white">Community Reviews</strong> — real photos, honest ratings</li>
            <li><strong className="text-white">Menus</strong> — actual ship menus across cruise lines</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
