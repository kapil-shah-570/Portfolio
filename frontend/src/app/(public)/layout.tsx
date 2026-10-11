import type { ReactNode } from 'react'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
