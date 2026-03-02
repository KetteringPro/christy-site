import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redirecting to The Redesign Party",
  description: "This page has moved to redesignparty.com",
};

export default function CommonSenseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
