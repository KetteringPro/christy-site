import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/groovinfly-logo.png";

export const metadata = {
  title: "GroovinFly | Lifestyle Travel & Festival Experiences",
  description:
    "GroovinFly curates lifestyle travel and festival adventures for women who love to explore. Join upcoming trips, yacht weeks, and music festivals across the globe.",
};

export default function GroovinFlyPage() {
  return (
    <main className="min-h-screen bg-[#1A0B2E] text-[#E2E8F0] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/images/groovinfly-logo.png"
                alt="GroovinFly logo"
                width={80}
                height={80}
                className="rounded-md"
              />
              <h1 className="text-4xl md:text-5xl font-bold text-[#F1F5F9]">
                GroovinFly
              </h1>
            </div>
            <p className="mt-4 text-lg text-[#CBD5E1]">
              Lifestyle travel and festival experiences for women who love to
              explore — curated trips, yacht weeks, and festival packages that
              blend adventure, music, and community.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="https://groovinfly.com"
                target="_blank"
                className="bg-[#22D3EE] text-[#0B1120] px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#38BDF8] transition"
              >
                Visit GroovinFly
              </Link>
              <Link
                href="/#ventures"
                className="border border-[#22D3EE] text-[#22D3EE] px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#22D3EE] hover:text-[#0B1120] transition"
              >
                ← Back to Ventures
              </Link>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FF5ACD]/40 to-[#FBDA61]/30 blur-3xl rounded-2xl"></div>
            <Image
              src="/images/groovinfly-home-hero.jpg"
              alt="GroovinFly homepage hero — lifestyle travel and festival adventures"
              width={600}
              height={400}
              className="relative rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Overview Section */}
        <section className="bg-[#22103D] rounded-2xl p-8 border border-[#3B1E6D] mb-10">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">
            What We’re Building
          </h2>
          <p className="text-[#CBD5E1] leading-relaxed">
            GroovinFly connects women with unforgettable travel and festival
            adventures — from Coachella and Stagecoach to Yacht Week in Croatia
            and Greece. Each trip is curated for fun, freedom, and connection,
            with all logistics handled by our team so guests can focus on
            enjoying the experience.
          </p>
          <section className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">The Problem</h2>
            <p className="text-gray-300 leading-relaxed">
              You’ve got the freedom, curiosity, and desire to travel — but planning it all, finding the right people, and coordinating the details alone can be daunting. The problem isn’t possibility — it’s the planning. <strong className="text-white">GroovinFly</strong> takes care of the logistics — the tickets, the lodging, the coordination — so you can just arrive, find your tribe, and enjoy the vibe.
            </p>
          </section>
        
        
        </section>

        {/* Tech Stack Section */}
        <section className="bg-[#22103D] rounded-2xl p-8 border border-[#3B1E6D]">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">
            Tech & Tools
          </h2>
          <ul className="list-disc list-inside text-[#CBD5E1] space-y-2">
            <li>Built with Next.js 14 + TypeScript + Tailwind CSS</li>
            <li>Supabase backend for reservations, logins, and wishlists</li>
            <li>Stripe integration for payments and installments</li>
            <li>Netlify hosting with automated deployments</li>
          </ul>
        </section>
      </div>
    </main>
  );
}