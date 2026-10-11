import type { ReactNode } from 'react'

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <header className="section pb-0">
      <div className="container-x">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-4 text-3xl font-bold md:text-5xl">{title}</h1>
        {subtitle ? <p className="mt-3 max-w-2xl text-base text-slate-400 md:text-lg">{subtitle}</p> : null}
      </div>
    </header>
  )
}

export function Section({
  title,
  subtitle,
  actions,
  children,
}: {
  title?: string
  subtitle?: string
  actions?: ReactNode
  children: ReactNode
}) {
  return (
    <section className="section">
      <div className="container-x">
        {(title || subtitle || actions) && (
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              {title ? <h2 className="text-2xl font-bold md:text-3xl">{title}</h2> : null}
              {subtitle ? <p className="mt-1 text-slate-400">{subtitle}</p> : null}
            </div>
            {actions ? <div>{actions}</div> : null}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export function Badge({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-border bg-white/5 px-2.5 py-1 text-xs text-slate-300">{children}</span>
}

export function Empty({ text }: { text: string }) {
  return <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-center text-slate-400">{text}</div>
}
