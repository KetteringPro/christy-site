import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "The Coastal Fork | New England Food Media",
  description:
    "New England's food story, told right. Real restaurants, real food, real stories worth sharing.",
};

export default function CoastalForkPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-[#E2E8F0] px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* HERO */}
        <div className="bg-[#111827] border border-slate-700 rounded-2xl p-10 shadow-lg">
          <div className="grid md:grid-cols-2 gap-2 items-center content-center">
            {/* Left Column - Title + Text + Buttons */}
            <div className="flex flex-col justify-center h-full text-center md:text-left space-y-0">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium mb-4 mx-auto md:mx-0">
                  Active
                </div>
                <h1 className="text-4xl font-semibold text-[#F1F5F9] mb-2">
                  The Coastal Fork
                </h1>
                <p className="text-[#CBD5E1] leading-relaxed max-w-md mx-auto md:mx-0 mb-6">
                  New England&apos;s food story, told right.
                </p>
                <section className="max-w-md mx-0">
                  <h2 className="text-xl font-semibold text-white mb-4">The Problem</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Most great local restaurants never get the attention they deserve. Food
                    media chases trends, algorithms, and aesthetics over authenticity. The
                    Coastal Fork exists to fix that — finding the places worth talking about
                    and telling their story in a way people want to share.
                  </p>
                </section>
              </div>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-6">
                <a
                  href="https://thecoastalfork.com"
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
              <div className="absolute inset-0 rounded-lg bg-linear-to-t from-[#0B1120]/60 to-transparent z-10" />
              <Image
                src="/images/coastal-fork-hero.jpeg"
                alt="The Coastal Fork — New England food media"
                width={600}
                height={500}
                className="relative rounded-lg object-contain shadow-2xl w-full h-[340px] md:h-[440px] brightness-110 contrast-110"
                priority
              />
            </div>
          </div>
        </div>

        {/* THE SOLUTION */}
        <section className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">The Solution</h2>
          <p className="text-[#CBD5E1] leading-relaxed">
            A photo-first, story-driven food guide for the New England coast. Restaurants
            partner with us to have their story told right — real photos, authentic
            write-ups, and content people actually share.
          </p>
        </section>

        {/* WHAT'S INSIDE */}
        <section className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">What&apos;s Inside</h2>
          <ul className="list-disc list-inside text-[#CBD5E1] space-y-2 max-w-3xl">
            <li><strong className="text-white">Featured Restaurant Profiles</strong> — partner spotlights with real photos and authentic storytelling</li>
            <li><strong className="text-white">Hidden Gems</strong> — underrated spots the food media ignores</li>
            <li><strong className="text-white">Coastal Market Coverage</strong> — Maine, New Hampshire, and Massachusetts seacoast</li>
            <li><strong className="text-white">Photo Library</strong> — hundreds of original food photos across three markets</li>
            <li><strong className="text-white">The Story Behind the Dish</strong> — context, history, and what makes each place worth the drive</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
