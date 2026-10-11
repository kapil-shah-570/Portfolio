// import type { Metadata } from 'next'
// import './globals.css'

// export const metadata: Metadata = {
//   title: {
//     default: 'Kapil Kumar Mahato — Portfolio',
//     template: '%s | Kapil Kumar Mahato',
//   },
//   description: 'Portfolio website for Kapil Kumar Mahato, Fully qualified software engineer.',
// }

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   )
// }













import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Kapil Kumar Mahato — Portfolio',
    template: '%s | Kapil Kumar Mahato',
  },
  description:
    'Portfolio website for Kapil Kumar Mahato, a software engineer building modern web and app experiences.',
  icons: {
    icon: '/profile-picture.png',
    shortcut: '/profile-picture.png',
    apple: '/profile-picture.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
