import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { site } from '@/lib/site'

export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string
  intro?: string
  children: React.ReactNode
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-20">
      <Link
        href="/"
        className="inline-flex items-center gap-1 rounded-md text-sm font-semibold text-primary underline-offset-4 hover:underline"
      >
        <ChevronLeft className="size-4" aria-hidden="true" />
        Voltar à página inicial
      </Link>
      <header className="mt-6 flex flex-col gap-3 border-b-4 border-foreground pb-6">
        <h1 className="font-heading text-4xl font-bold uppercase leading-none tracking-tight text-balance md:text-6xl">
          {title}
        </h1>
        {intro && <p className="text-lg leading-relaxed text-muted-foreground">{intro}</p>}
        <p className="text-sm text-muted-foreground">Última atualização: {site.legalUpdated}</p>
      </header>
      <div className="legal-prose">{children}</div>
    </article>
  )
}
