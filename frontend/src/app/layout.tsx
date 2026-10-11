import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Kapil Kumar Mahato — Portfolio',
    template: '%s | Kapil Kumar Mahato',
  },
  description: 'Portfolio website for Kapil Kumar Mahato, Fully qualified software engineer.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
