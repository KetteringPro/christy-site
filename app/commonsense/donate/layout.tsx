import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redirecting to The Redesign Party — Donate",
  description: "This page has moved to redesignparty.com/donate",
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
