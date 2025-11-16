import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "KetteringProductions.com | From Chaos to Clarity",
  description:
    "Producing 'From Chaos to Clarity' — a romantic dramedy following the founder/CEO as she brings clarity to businesses while navigating the chaos of building ventures and life intertwined.",
};

export default function KetteringProductionsPage() {
  return (
    <main className="min-h-screen bg-[#1A0B2E] text-[#E2E8F0] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-[#F1F5F9]">
                From Chaos to Clarity
              </h1>
            </div>
            <p className="text-lg text-[#94A3B8] mb-2">
              A KetteringProductions.com Original Series
            </p>
            <p className="mt-4 text-lg text-[#CBD5E1]">
              A romantic dramedy that captures the dual meaning of "chaos to
              clarity" — bringing order to businesses while living through the
              beautiful mess of building multiple ventures and navigating wild
              personal life. The same strength that made sense of corporate noise,
              now unfolding on screen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="https://ketteringproductions.com"
                target="_blank"
                className="bg-[#EC4899] text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#DB2777] transition"
              >
                Watch the Series
              </Link>
              <Link
                href="/#ventures"
                className="border border-[#EC4899] text-[#EC4899] px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#EC4899] hover:text-white transition"
              >
                ← Back to Ventures
              </Link>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#EC4899]/40 to-[#8B5CF6]/30 blur-3xl rounded-2xl"></div>
            <div className="relative rounded-2xl bg-[#1E293B] border border-[#EC4899]/30 p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">The Series</h3>
              <div className="space-y-3 text-[#CBD5E1]">
                <p className="text-sm">
                  <span className="font-semibold text-white">Title:</span>{" "}
                  From Chaos to Clarity
                </p>
                <p className="text-sm">
                  <span className="font-semibold text-white">Format:</span>{" "}
                  Romantic Dramedy / Reality Series
                </p>
                <p className="text-sm">
                  <span className="font-semibold text-white">Genre:</span>{" "}
                  Unscripted Entrepreneurship + Personal Life
                </p>
                <p className="text-sm">
                  <span className="font-semibold text-white">Theme:</span>{" "}
                  Making sense of the noise — in business and in life
                </p>
                <p className="text-sm">
                  <span className="font-semibold text-white">Style:</span> Raw,
                  authentic, no polish
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <section className="bg-[#22103D] rounded-2xl p-8 border border-[#3B1E6D] mb-10">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">
            From Chaos to Clarity: The Dual Meaning
          </h2>
          <p className="text-[#CBD5E1] leading-relaxed mb-6">
            The title isn&apos;t just clever wordplay—it&apos;s the truth of what
            happens on screen. "From Chaos to Clarity" reflects both the
            professional superpower and the personal reality.
          </p>
          <div className="bg-[#1E293B] rounded-lg p-6 border border-white/10 mb-6">
            <h3 className="font-semibold text-white mb-3">
              The Professional Side: Making Sense of the Noise
            </h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              This is the strength that built a career in the corporate world—the
              ability to take complex, chaotic situations and distill them into
              clarity. Whether it&apos;s enterprise AI strategy, project
              management chaos, or transformation initiatives drowning in noise,
              the skill is the same: cut through the mess, find the signal, deliver
              clarity. This is what the tech companies do for businesses. This is
              what clients pay for.
            </p>
          </div>
          <div className="bg-[#1E293B] rounded-lg p-6 border border-white/10 mb-6">
            <h3 className="font-semibold text-white mb-3">
              The Personal Side: Living Through the Chaos
            </h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              Then there&apos;s the other side—the wild personal life that
              doesn&apos;t follow a strategic plan. Building multiple companies
              while navigating relationships, romance, friendships, and all the
              messy human stuff that can&apos;t be project-managed. The chaos of
              trying to build an empire while your heart and personal life are
              equally demanding attention. The series captures both—the
              professional clarity-bringer living through personal chaos.
            </p>
          </div>
          <p className="text-[#CBD5E1] leading-relaxed">
            This isn&apos;t another glossy founder documentary where everything is
            perfectly curated. This is the real story of someone who brings clarity
            to Fortune 500 companies while trying to make sense of their own life.
            The irony, the humanity, the authenticity—that&apos;s what makes it
            worth watching.
          </p>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              Why This Story Matters
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We&apos;re done with the sanitized founder narrative. The one where
              personal life doesn&apos;t exist or is perfectly compartmentalized.
              Real founders are complex humans who excel professionally while
              stumbling personally, who bring clarity to clients while navigating
              their own chaos. That&apos;s the story worth telling. That&apos;s
              "From Chaos to Clarity."
            </p>
          </section>
        </section>

        {/* The Ventures in the Show */}
        <section className="bg-[#22103D] rounded-2xl p-8 border border-[#3B1E6D] mb-10">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">
            The Businesses You&apos;ll See
          </h2>
          <p className="text-[#CBD5E1] mb-6">
            Throughout the series, you&apos;ll get an inside look at the actual
            ventures being built:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#1E293B] rounded-lg p-4 border border-white/10">
              <h3 className="font-semibold text-white mb-2">
                Kettering AI Strategies
              </h3>
              <p className="text-sm text-gray-400">
                Enterprise AI consulting—the client calls, the strategy sessions,
                the high-stakes presentations
              </p>
            </div>
            <div className="bg-[#1E293B] rounded-lg p-4 border border-white/10">
              <h3 className="font-semibold text-white mb-2">
                KetteringWorks.AI
              </h3>
              <p className="text-sm text-gray-400">
                Building automation tools for small businesses while actually
                running multiple small businesses
              </p>
            </div>
            <div className="bg-[#1E293B] rounded-lg p-4 border border-white/10">
              <h3 className="font-semibold text-white mb-2">Groovin&apos; Fly</h3>
              <p className="text-sm text-gray-400">
                Curating travel experiences while somehow finding time to actually
                go on adventures
              </p>
            </div>
            <div className="bg-[#1E293B] rounded-lg p-4 border border-white/10">
              <h3 className="font-semibold text-white mb-2">Swipe-A-Shift</h3>
              <p className="text-sm text-gray-400">
                Launching a hospitality staffing platform—the development, the
                fundraising, the launch chaos
              </p>
            </div>
          </div>
        </section>

        {/* Production Details */}
        <section className="bg-[#22103D] rounded-2xl p-8 border border-[#3B1E6D]">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">
            Production Approach
          </h2>
          <div className="space-y-4 text-[#CBD5E1]">
            <div>
              <h3 className="font-semibold text-white mb-2">Unscripted Reality</h3>
              <p>
                No manufactured drama, no scripted confrontations. Just real life
                happening in real time, captured as authentically as possible.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Documentary Style</h3>
              <p>
                Mixing documentary filmmaking with reality TV pacing. The
                storytelling is structured, but the events are real.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">No Corporate Polish</h3>
              <p>
                You&apos;ll see the hoodie, not the suit. The late-night coding
                sessions, not just the boardroom victories. The real person behind
                the founder persona.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Business + Personal</h3>
              <p>
                Equal weight given to both the business journey and the personal
                story. Because trying to separate them is artificial—they&apos;re
                intertwined whether we admit it or not.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
