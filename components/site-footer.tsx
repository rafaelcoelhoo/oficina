import Link from 'next/link'
import { BookOpen, ExternalLink, Scale } from 'lucide-react'
import { legalLinks, navItems, site } from '@/lib/site'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div aria-hidden="true" className="hazard-stripe h-2" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <p className="font-heading text-2xl font-bold uppercase tracking-wide">
            {site.shortName}
          </p>
          <address className="flex flex-col gap-1 not-italic leading-relaxed text-background/80">
            <span>{site.address.street}</span>
            <span>
              {site.address.postalCode} {site.address.city}
            </span>
            <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="underline-offset-4 hover:underline">
              Tel. {site.phoneDisplay}
            </a>
            <span className="text-sm text-background/65">
              (Chamada para a rede fixa nacional)
            </span>
            <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
              {site.email}
            </a>
          </address>
        </div>

        <nav aria-label="Rodapé" className="flex flex-col gap-3">
          <p className="font-heading text-lg font-semibold uppercase tracking-wide text-accent">
            Navegação
          </p>
          <ul className="flex flex-col gap-2 text-background/80">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="underline-offset-4 hover:text-background hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Informação legal" className="flex flex-col gap-3">
          <p className="font-heading text-lg font-semibold uppercase tracking-wide text-accent">
            Informação legal
          </p>
          <ul className="flex flex-col gap-2 text-background/80">
            <li>
              <Link href="/politica-de-privacidade" className="underline-offset-4 hover:text-background hover:underline">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/politica-de-cookies" className="underline-offset-4 hover:text-background hover:underline">
                Política de Cookies
              </Link>
            </li>
            <li>
              <Link href="/termos-e-condicoes" className="underline-offset-4 hover:text-background hover:underline">
                Termos e Condições
              </Link>
            </li>
            <li>
              <Link href="/termos-e-condicoes#resolucao-de-litigios" className="underline-offset-4 hover:text-background hover:underline">
                Resolução Alternativa de Litígios
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-3">
          <p className="font-heading text-lg font-semibold uppercase tracking-wide text-accent">
            Defesa do consumidor
          </p>
          <a
            href={legalLinks.livroReclamacoes}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-md border-2 border-background/80 bg-background px-4 py-3 text-foreground transition-colors hover:bg-background/90"
          >
            <BookOpen className="size-6 shrink-0 text-destructive" aria-hidden="true" />
            <span className="flex flex-col leading-tight">
              <span className="font-bold">Livro de Reclamações</span>
              <span className="text-sm">Eletrónico</span>
            </span>
            <ExternalLink className="ml-auto size-4" aria-hidden="true" />
            <span className="sr-only">(abre numa nova janela)</span>
          </a>
          <a
            href={legalLinks.ralEntity.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 rounded-md border border-background/30 px-4 py-3 text-background/85 transition-colors hover:bg-background/10"
          >
            <Scale className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <span className="text-sm leading-relaxed">
              Em caso de litígio, o consumidor pode recorrer ao {legalLinks.ralEntity.name}.
            </span>
            <span className="sr-only">(abre numa nova janela)</span>
          </a>
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-background/70 md:flex-row md:items-center md:justify-between md:px-6">
          <p>
            © {year} {site.legalName}. Todos os direitos reservados.
          </p>
          <p>NIF {site.nif}</p>
        </div>
      </div>
    </footer>
  )
}
