export const metadata = {
  metadataBase: new URL("https://christy.ketteringpro.com"),
  title: "Christy Kettering Hashey | AI Strategist & Founder",
  description:
    "AI-driven strategist, founder, and digital transformation consultant helping businesses bring big ideas to life. Explore ventures like KetteringWorks.AI, GroovinFly, and more.",
  openGraph: {
    title: "Christy Kettering Hashey | AI Strategist & Founder",
    description:
      "AI-driven strategist, founder, and digital transformation consultant helping businesses bring big ideas to life.",
    url: "https://christy.ketteringpro.com",
    siteName: "Christy Kettering Hashey",
    images: [
      {
        url: "/images/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Christy Kettering Hashey - Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christy Kettering Hashey | AI Strategist & Founder",
    description:
      "AI-driven strategist, founder, and digital transformation consultant helping businesses bring big ideas to life.",
    images: ["/images/social-preview.jpg"],
  },
};

import Link from "next/link";
import Image from "next/image";

function Section({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLElement> & { children: React.ReactNode }) {
  return (
    <section
      {...props}
      className={`max-w-6xl mx-auto px-6 md:px-8 bg-[#111827] rounded-2xl py-8 mb-8 ${className}`}
    >
      {children}
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 bg-slate-50">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="space-y-24 pb-24 bg-[#0B1120] text-[#E2E8F0]">
      {/* HERO */}
      <div className="bg-[#0F172A] border-b border-slate-800">
        <Section className="pt-20 pb-16">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#F1F5F9]">
                Christy Kettering Hashey
              </h1>
              <p className="mt-3 text-lg md:text-xl text-[#CBD5E1]">
                AI-Driven Strategist • Founder • Digital Transformation
                Consultant
              </p>
              <p className="mt-4 text-base md:text-lg text-[#CBD5E1] max-w-2xl">
                I lead Kettering Professional Services (KPS)—a portfolio of ventures that merge AI strategy, automation, and experience design. I bridge business strategy and technical execution, delivering pragmatic systems and products that move the needle.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="bg-[#22D3EE] text-[#0B1120] rounded-lg px-5 py-3 text-sm font-semibold hover:bg-[#38BDF8] transition"
                >
                  Let’s Connect
                </Link>
                <Link
                  href="#ventures"
                  
                  className="border border-[#22D3EE] text-[#22D3EE] rounded-lg px-5 py-3 text-sm font-semibold hover:bg-[#22D3EE] hover:text-[#0B1120] transition"
                >
                  Explore My Ventures
                </Link>
              </div>
            </div>  
            <div className="md:col-span-5">
                <Image
                  src="/images/christy.jpg"
                  alt="Christy Kettering Hashey portrait"
                  width={500}
                  height={400}
                  className="rounded-2xl object-cover glow-portrait"
                  priority
                />
            </div>
          </div>
        </Section>
      </div>

      {/* VENTURES */}
      <Section className="scroll-mt-24" id="ventures">
        <h2 className="text-2xl font-semibold text-[#F1F5F9]">Ventures</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              href: "/kais",
              title: "Kettering AI Strategies",
              status: "Active",
              blurb:
                "AI readiness & strategic planning consulting for enterprise PMOs and transformation leaders.",
            },
            {
              href: "/kwai",
              title: "KetteringWorks.AI",
              status: "Active",
              blurb:
                "Automation & workflow enablement for small businesses.",
            },
            {
              href: "/groovinfly",
              title: "GroovinFly",
              status: "Active",
              blurb:
                "Lifestyle travel & festival experiences for women who love to explore.",
            },
            {
              href: "/swipe",
              title: "Swipe-A-Shift",
              status: "Coming Soon",
              blurb:
                "Gig work marketplace for hospitality staffing and shift automation.",
            },
            {
              href: "/oravella",
              title: "Oravella",
              status: "Coming Soon",
              blurb:
                "Scheduling & operations platform for salons & spas.",
            },
            {
              href: "/dhi",
              title: "Digital Humanity Index (DHI)",
              status: "Concept",
              blurb:
                "Digital authenticity & reputation framework for creators.",
            },
          ].map((v) => (
            <Link
              key={v.href}
              href={v.href}
              className="rounded-2xl border border-slate-700 p-5 hover:bg-[#1E293B] transition block"
            >
              <div className="flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                <h3 className="text-lg font-semibold text-[#F1F5F9]">{v.title}</h3>
                <Badge>{v.status}</Badge>
              </div>
              <p className="mt-2 text-sm text-[#CBD5E1]">{v.blurb}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* BRANDS */}
      <Section>
        <h2 className="text-2xl font-semibold text-[#F1F5F9]">
          Brands & Enterprises I’ve Worked With
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <Badge>
            Capri Holdings (Michael Kors · Versace · Jimmy Choo)
          </Badge>
          <Badge>
            VF Corporation (The North Face · Vans · Timberland)
          </Badge>
          <Badge>Hitachi Vantara</Badge>
          <Badge>L.L.Bean</Badge>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <div className="rounded-2xl border border-slate-700 p-8 bg-[#1E293B]">
          <h2 className="text-2xl font-semibold text-[#FFFFFF]">
            Let’s Build Something Exceptional
          </h2>
          <p className="mt-3 text-[#E2E8F0]">
            Looking for a strategist who can help bring your next big idea to life?
          </p>
          <a
            href="mailto:christy@ketteringpro.com"
            className="mt-6 inline-block text-[#22D3EE] font-medium hover:text-[#38BDF8] transition"
          >
            Email: christy@ketteringpro.com
          </a>
        </div>
      </Section>
    </main>
  );
}