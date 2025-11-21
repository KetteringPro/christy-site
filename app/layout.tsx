import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://christy.ketteringpro.com"),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Christy Kettering Hashey | AI Strategist & Founder",
    description:
      "Founder of KetteringPro Enterprise (KPE) — AI, automation, and digital transformation strategy for businesses and creative professionals.",
    url: "https://christy.ketteringpro.com",
    siteName: "Christy Kettering Hashey",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Christy Kettering Hashey",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christy Kettering Hashey | AI Strategist & Founder",
    description:
      "Founder of KetteringPro Enterprise (KPE) — AI, automation, and digital transformation strategy for businesses and creative professionals.",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LBENESCPH0"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LBENESCPH0');
            `,
          }}
        />
      </head>
      <body
        className={`${urbanist.variable} font-sans antialiased`}
      >
        {children}

        <footer className="text-center text-[#94A3B8] mt-16 mb-6 text-sm">
        © {new Date().getFullYear()} KetteringPro Enterprise ·
        <a
          href="https://ketteringpro.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#22D3EE] hover:text-[#38BDF8] ml-1"
        >
          ketteringpro.com
        </a>
      </footer>
      </body>
    </html>
  );
}
