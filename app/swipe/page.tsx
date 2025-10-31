// /app/swipe/page.tsx
import Image from "next/image";
import Link from "next/link";
import swipeLogo from "@/public/images/swipe-logo.png";

export const metadata = {
  title: "Swipe-A-Shift | Hospitality Staffing Marketplace",
  description:
    "Gig marketplace connecting restaurants with qualified on-demand staff.",
};

export default function SwipePage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-[#E2E8F0] px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* HERO */}
        <div className="bg-[#111827] border border-slate-700 rounded-2xl p-10 shadow-lg">
          <div className="grid md:grid-cols-2 gap-2 items-center content-center">
            {/* Left Column - Logo + Text + Buttons */}
            <div className="flex flex-col justify-center h-full text-center md:text-left space-y-0">
              <div>
                <Image
                  src={swipeLogo}
                  alt="Swipe-A-Shift logo"
                  width={240}
                  height={240}
                  className="mx-auto md:mx-0 drop-shadow-xl -mt-4 mb-1"
                  style={{ marginTop: "-1rem", marginBottom: "0.25rem" }}
                />
                <h1 className="text-4xl font-semibold text-[#F1F5F9] mb-2">
                  Swipe-A-Shift
                </h1>
                <p className="text-[#CBD5E1] leading-relaxed max-w-md mx-auto md:mx-0">
                  Gig marketplace connecting restaurants with on-demand staff for seamless
                  shift coverage and flexible scheduling.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-6">
                <a
                  href="https://swipeashift.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#22D3EE] text-[#0B1120] px-6 py-3 rounded-lg font-semibold hover:bg-[#38BDF8] transition"
                >
                  Visit Site
                </a>
                <Link
                  href="/"
                  className="inline-block border border-[#22D3EE] text-[#22D3EE] px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#22D3EE] hover:text-[#0B1120] transition"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative w-full">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0B1120]/60 to-transparent z-10" />
              <Image
                src="/images/swipe-hero-v2.jpg"
                alt="Swipe-A-Shift hospitality staff platform"
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
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">Our Mission</h2>
          <p className="text-[#CBD5E1] leading-relaxed">
            Swipe-A-Shift empowers restaurants and hospitality teams with the
            flexibility and freedom of the modern gig economy. We believe great
            service thrives when workers and businesses have choice,
            transparency, and respect built into every shift.
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#F1F5F9] mb-4">How It Works</h2>
          <ul className="list-disc list-inside text-[#CBD5E1] space-y-2 max-w-3xl">
            <li>Businesses post open shifts with flexible pay rates.</li>
            <li>Qualified workers claim shifts that fit their schedule.</li>
            <li>Everyone wins — reliable coverage, fair pay, and freedom.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}