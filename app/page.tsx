export const metadata = {
  metadataBase: new URL("https://christy.ketteringpro.com"),
  title: "Christy Kettering  | Founder & Writer",
  description:
    "Building a portfolio of AI-enabled ventures through ketteringPro Enterprise. Writer and producer of 'From Chaos to Clarity' — a romantic dramedy about entrepreneurship and life intertwined.",
  openGraph: {
    title: "Christy Kettering  | Founder & Writer",
    description:
      "Building a portfolio of AI-enabled ventures. Writer and producer of 'From Chaos to Clarity' — a romantic dramedy about entrepreneurship and life intertwined.",
    url: "https://christy.ketteringpro.com",
    siteName: "Christy Kettering ",
    images: [
      {
        url: "/images/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Christy Kettering  - Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christy Kettering  | Founder & Writer",
    description:
      "Building a portfolio of AI-enabled ventures. Writer and producer of 'From Chaos to Clarity' — a romantic dramedy about entrepreneurship and life intertwined.",
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

import Ventures from "./components/Ventures"; {
  const ventures = [
    {
      href: "/groovinfly",
      title: "GroovinFly",
      status: "Active",
      blurb:
        "Lifestyle travel & festival experiences for women who love to explore.",
      details:
        "Curating unique travel and festival experiences designed specifically for adventurous women seeking community and inspiration.",
      links: [
        { label: "Visit GroovinFly", url: "/groovinfly" },
      ],
    },
    {
      href: "/swipe",
      title: "Swipe-A-Shift",
      status: "Coming Soon",
      blurb:
        "Gig work marketplace for hospitality staffing and shift automation.",
      details:
        "An upcoming platform to connect hospitality workers with shifts efficiently, using AI to optimize staffing and scheduling.",
      links: [],
    },
    {
      href: "/oravella",
      title: "Oravella",
      status: "Coming Soon",
      blurb:
        "Scheduling & operations platform for salons & spas.",
      details:
        "A forthcoming solution to simplify scheduling and operations for salons and spas, enhancing customer experience and business efficiency.",
      links: [],
    },
    {
      href: "/dhi",
      title: "Digital Humanity Index (DHI)",
      status: "Concept",
      blurb:
        "Digital authenticity & reputation framework for creators.",
      details:
        "Developing a new framework to help digital creators build and maintain authentic reputations in online communities.",
      links: [],
    },
  ];

   (
    <Section className="scroll-mt-24" id="ventures">
      <h2 className="text-2xl font-semibold text-[#F1F5F9]">Ventures</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ventures.map((v) => (
          <Link
            key={v.href}
            href={v.href}
            className="group rounded-2xl border border-slate-700 p-5 hover:bg-[#1E293B] transition block relative"
          >
            <div className="flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
              <h3 className="text-lg font-semibold text-[#F1F5F9]">{v.title}</h3>
              <Badge>{v.status}</Badge>
            </div>
            <p className="mt-2 text-sm text-[#CBD5E1]">{v.blurb}</p>
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#94A3B8] text-xs max-h-40 overflow-y-auto">
              <p>{v.details}</p>
              {v.links.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {v.links.map((link) => (
                    <li key={link.url}>
                      <Link
                        href={link.url}
                        className="text-[#a855f7] hover:text-[#c084fc] underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <main className="space-y-12 pb-24 bg-[#0B1120] text-[#E2E8F0]">
      {/* HERO */}
      <div className="bg-[#0F172A] border-b border-slate-800">
        <Section className="pt-20 pb-16">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#F1F5F9]">
                Christy Kettering 
              </h1>
              <p className="mt-3 text-lg md:text-xl text-[#CBD5E1]">
                Founder & CEO, ketteringPro Enterprise • Writer & Producer
              </p>
              <p className="mt-4 text-base md:text-lg text-[#CBD5E1] max-w-2xl">
                Building a portfolio of ventures that merge AI, lifestyle, and service innovation — from automation tools to festival travel experiences. I also write and produce "From Chaos to Clarity," a romantic dramedy inspired by the chaos of building multiple companies while actually living life. Turns out bringing clarity to business problems doesn't mean your personal life follows a strategic plan.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="bg-[#a855f7] text-[#0B1120] rounded-lg px-5 py-3 text-sm font-semibold hover:bg-[#c084fc] transition"
                >
                  Let’s Connect
                </Link>
                <Link
                  href="#ventures"
                  
                  className="border border-[#a855f7] text-[#a855f7] rounded-lg px-5 py-3 text-sm font-semibold hover:bg-[#a855f7] hover:text-[#0B1120] transition"
                >
                  Explore My Ventures
                </Link>
              </div>
            </div>  
            <div className="md:col-span-5">
                <Image
                  src="/images/christy.jpg"
                  alt="Christy Kettering  portrait"
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
      <Ventures />

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
            className="mt-6 inline-block text-[#a855f7] font-medium hover:text-[#c084fc] transition"
          >
            Email: christy@ketteringpro.com
          </a>
        </div>
      </Section>
    </main>
  );
}