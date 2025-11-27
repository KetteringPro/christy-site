import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "ketteringPro Enterprise | Strategic Holding Company",
  description:
    "ketteringPro Enterprise is a strategic holding company cultivating ventures at the intersection of AI, lifestyle, and service innovation.",
};

export default function KetteringProEnterprisePage() {
  return (
    <main className="min-h-screen bg-[#1A0B2E] text-[#E2E8F0] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="flex-1">
            <div className="mb-6">
              <Image
                src="/images/kpe-logo.png"
                alt="ketteringPro Enterprise"
                width={280}
                height={280}
                className="rounded-xl"
              />
            </div>
            <p className="text-lg text-[#CBD5E1]">
              Strategic holding company cultivating ventures at the intersection
              of AI, lifestyle, and service innovation. Building a diversified
              portfolio of technology and experience-driven businesses that
              empower people and organizations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="https://ketteringpro.com"
                target="_blank"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition"
              >
                Visit KPE Site
              </Link>
              <Link
                href="/#ventures"
                className="border border-[#a855f7] text-[#a855f7] px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#a855f7] hover:text-white transition"
              >
                ← Back to Ventures
              </Link>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#a855f7]/40 to-[#ec4899]/30 blur-3xl rounded-2xl"></div>
            <div className="relative rounded-2xl bg-[#1E293B] border border-[#a855f7]/30 p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                The Portfolio
              </h3>
              <ul className="space-y-3 text-[#CBD5E1]">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  Swipe-A-Shift
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  Groovin&apos; Fly
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                  Oravella
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                  Digital Humanity Index
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <section className="bg-[#22103D] rounded-2xl p-8 border border-[#3B1E6D] mb-10">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">
            The Vision
          </h2>
          <p className="text-[#CBD5E1] leading-relaxed mb-6">
            ketteringPro Enterprise operates as a strategic holding company,
            building and nurturing a portfolio of ventures across AI
            consulting, automation tools, lifestyle experiences, and innovative
            service platforms. Each venture addresses specific market needs
            while contributing to a larger ecosystem of technology-enabled
            solutions.
          </p>
          <p className="text-[#CBD5E1] leading-relaxed">
            The company&apos;s approach combines deep technical expertise with
            entrepreneurial execution, creating businesses that solve real
            problems for enterprise clients, small businesses, and individual
            consumers. From AI strategy consulting for Fortune 500 companies to
            festival travel experiences for adventure-seeking women, each
            venture operates independently while benefiting from shared
            leadership, strategic vision, and operational infrastructure.
          </p>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              The Opportunity
            </h2>
            <p className="text-gray-300 leading-relaxed">
              In an era of rapid technological change and evolving consumer
              expectations, there&apos;s never been a better time to build
              multiple ventures under one strategic umbrella. The digital
              transformation happening across every industry creates
              opportunities for AI-enabled solutions, automation tools, and
              experience-driven businesses. ketteringPro Enterprise positions
              itself at these intersections, building companies that leverage
              emerging technologies while staying deeply connected to human
              needs and authentic experiences.
            </p>
          </section>
        </section>

        {/* Philosophy Section */}
        <section className="bg-[#22103D] rounded-2xl p-8 border border-[#3B1E6D]">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">
            Our Philosophy
          </h2>
          <div className="space-y-4 text-[#CBD5E1]">
            <div>
              <h3 className="font-semibold text-white mb-2">
                Build for Real Problems
              </h3>
              <p>
                Every venture starts with a genuine market need, not a solution
                looking for a problem. We build businesses that solve tangible
                pain points for real customers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">
                Technology Serves Humans
              </h3>
              <p>
                AI and automation should empower people, not replace humanity.
                Our ventures use technology to enhance human capabilities and
                free people to focus on what matters most.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">
                Authenticity Over Polish
              </h3>
              <p>
                We reject the sanitized founder narrative. Building companies is
                messy, personal, and full of real stakes. We embrace that truth
                rather than hiding behind corporate facades.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">
                Portfolio Thinking
              </h3>
              <p>
                Diversification creates resilience. By building across different
                markets and revenue models, we create a portfolio that can
                weather market changes while capitalizing on emerging
                opportunities.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
