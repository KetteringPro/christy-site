import type { Metadata } from "next";
import "./donate.css";

export const metadata: Metadata = {
  title: "Show the Receipts — Common Sense Party",
  description:
    "Every dollar in. Every dollar out. Full transparency. No PACs, no dark money, no corporate sponsors. This is what accountability looks like.",
  openGraph: {
    title: "Show the Receipts — Common Sense Party",
    description:
      "Every dollar in. Every dollar out. Full transparency. This is what accountability looks like.",
    type: "article",
    url: "https://christy.ketteringpro.com/commonsense/donate",
    siteName: "Christy Kettering",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "The Common Sense Party",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Show the Receipts — Common Sense Party",
    description:
      "Every dollar in. Every dollar out. Full transparency. No dark money. No corporate sponsors.",
    images: ["/opengraph-image.png"],
  },
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
