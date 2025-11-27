import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KPE Strategic Plan 2025-2035',
  description: 'Confidential strategic plan for ketteringPro Enterprise',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    nosnippet: true,
  },
}

export default function StrategyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
