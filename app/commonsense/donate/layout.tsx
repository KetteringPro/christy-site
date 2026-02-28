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
  },
  twitter: {
    card: "summary_large_image",
    title: "Show the Receipts — Common Sense Party",
    description:
      "Every dollar in. Every dollar out. Full transparency. No dark money. No corporate sponsors.",
  },
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
