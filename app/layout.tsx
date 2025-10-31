import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://christy.ketteringpro.com"),
  title: "Christy Kettering Hashey | AI Strategist & Founder",
  description:
    "Founder of Kettering Professional Services (KPS) — building innovative AI-driven solutions across strategy, automation, and experience design.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-180.png", sizes: "180x180", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: { url: "/favicon-180.png" },
  },
  openGraph: {
    title: "Christy Kettering Hashey | AI Strategist & Founder",
    description:
      "Founder of Kettering Professional Services (KPS) — AI, automation, and digital transformation strategy for businesses and creative professionals.",
    url: "https://christy.ketteringpro.com",
    siteName: "Christy Kettering Hashey",
    images: [
      {
        url: "/favicon-512.png",
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
      "Founder of Kettering Professional Services (KPS) — AI, automation, and digital transformation strategy for businesses and creative professionals.",
    images: ["/favicon-512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <footer className="text-center text-[#94A3B8] mt-16 mb-6 text-sm">
        © {new Date().getFullYear()} Kettering Professional Services ·
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
