import type { Metadata } from "next";
import "./commonsense.css";

export const metadata: Metadata = {
  title: "The Common Sense Party — We Actually Looked Into It.",
  description:
    "Data over emotion. Metrics over feelings. Critical thinking over tribalism. A political platform for people who actually read the article. Built at 2am on a Tuesday because someone bothered to Google the lyrics.",
  openGraph: {
    title: "The Common Sense Party — We Actually Looked Into It.",
    description:
      "A political platform for people who actually think. Data over emotion. Metrics over feelings. Don't be a fucking idiot.",
    type: "article",
    url: "https://christy.ketteringpro.com/commonsense",
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
    title: "The Common Sense Party — We Actually Looked Into It.",
    description:
      "A political platform for people who actually think. Built at 2am on Fat Tuesday.",
    images: ["/opengraph-image.png"],
  },
};

export default function CommonSenseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
