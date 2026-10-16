import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react'
import { site } from '@/lib/site'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-16">
        <div className="flex flex-col gap-6">
          <p className="inline-flex w-fit items-center gap-2 rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold text-foreground">
            <span aria-hidden="true" className="size-2 rounded-full bg-primary" />
            Oficina multimarca em {site.address.city}
          </p>
          <h1
            id="hero-title"
            className="font-heading text-5xl font-bold uppercase leading-[0.95] tracking-tight text-balance md:text-7xl"
          >
            Mecânica honesta, <span className="text-primary">explicada</span> antes de reparar.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Revisões, diagnóstico, travões, embraiagens e preparação para a inspeção. Recebe um
            orçamento claro antes de qualquer intervenção e só avançamos com a sua aprovação.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contactos"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Pedir orçamento
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-foreground px-6 py-3 font-bold transition-colors hover:bg-foreground hover:text-background"
            >
              <Phone className="size-4" aria-hidden="true" />
              Ligar {site.phoneDisplay}
            </a>
          </div>
        </div>

        <aside
          aria-label="Ficha da oficina"
          className="overflow-hidden rounded-lg border-2 border-foreground bg-card shadow-[8px_8px_0_0_var(--foreground)]"
        >
          <div aria-hidden="true" className="hazard-stripe h-3" />
          <div className="flex items-center justify-between border-b-2 border-dashed border-border px-6 py-4">
            <p className="font-heading text-xl font-bold uppercase tracking-wide">Ficha de oficina</p>
            <p className="font-heading text-sm font-semibold uppercase text-muted-foreground">
              N.º {site.foundedYear}
            </p>
          </div>
          <dl className="flex flex-col divide-y divide-border">
            <div className="flex gap-4 px-6 py-4">
              <dt className="flex items-start gap-2 pt-0.5">
                <Clock className="size-5 text-primary" aria-hidden="true" />
                <span className="sr-only">Horário</span>
              </dt>
              <dd className="flex flex-1 flex-col gap-1.5">
                {site.hours.map((row) => (
                  <span key={row.days} className="flex flex-col justify-between gap-x-4 sm:flex-row">
                    <span className="font-semibold">{row.days}</span>
                    <span className="text-muted-foreground">{row.time}</span>
                  </span>
                ))}
              </dd>
            </div>
            <div className="flex gap-4 px-6 py-4">
              <dt className="pt-0.5">
                <MapPin className="size-5 text-primary" aria-hidden="true" />
                <span className="sr-only">Morada</span>
              </dt>
              <dd className="flex flex-1 flex-col">
                <span className="font-semibold">{site.address.street}</span>
                <span className="text-muted-foreground">
                  {site.address.postalCode} {site.address.city}
                </span>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 w-fit font-semibold text-primary underline underline-offset-4 hover:no-underline"
                >
                  Ver no mapa<span className="sr-only"> (abre numa nova janela)</span>
                </a>
              </dd>
            </div>
          </dl>
          <ul aria-label="Viaturas que reparamos" className="flex flex-wrap gap-2 border-t border-border px-6 py-4">
            {['Ligeiros', 'Comerciais', 'Diesel', 'Gasolina', 'Híbridos'].map((tag) => (
              <li
                key={tag}
                className="rounded-sm border border-border bg-secondary px-2.5 py-1 text-sm font-semibold"
              >
                {tag}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
