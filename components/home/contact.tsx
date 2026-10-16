import { Clock, Mail, MapPin, Phone, Smartphone } from 'lucide-react'
import { site } from '@/lib/site'
import { ContactForm } from './contact-form'

export function Contact() {
  return (
    <section id="contactos" aria-labelledby="contactos-title" className="border-t border-border bg-secondary py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Contactos
            </p>
            <h2
              id="contactos-title"
              className="font-heading text-4xl font-bold uppercase leading-none tracking-tight text-balance md:text-5xl"
            >
              Peça já o seu orçamento
            </h2>
            <p className="leading-relaxed text-muted-foreground text-pretty">
              Preencha o formulário ou fale diretamente connosco. Respondemos a todos os pedidos
              no prazo de um dia útil.
            </p>
          </div>

          <ul className="flex flex-col gap-5">
            <li className="flex items-start gap-4">
              <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-md bg-foreground text-accent">
                <Phone className="size-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Telefone</span>
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="text-lg font-bold underline-offset-4 hover:underline">
                  {site.phoneDisplay}
                </a>
                <span className="text-sm text-muted-foreground">Chamada para a rede fixa nacional</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-md bg-foreground text-accent">
                <Smartphone className="size-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Telemóvel</span>
                <a href={`tel:${site.mobile.replace(/\s/g, '')}`} className="text-lg font-bold underline-offset-4 hover:underline">
                  {site.mobileDisplay}
                </a>
                <span className="text-sm text-muted-foreground">Chamada para a rede móvel nacional</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-md bg-foreground text-accent">
                <Mail className="size-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Email</span>
                <a href={`mailto:${site.email}`} className="text-lg font-bold break-all underline-offset-4 hover:underline">
                  {site.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-md bg-foreground text-accent">
                <MapPin className="size-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Morada</span>
                <span className="text-lg font-bold">{site.address.street}</span>
                <span>
                  {site.address.postalCode} {site.address.city}
                </span>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 w-fit font-semibold text-primary underline underline-offset-4 hover:no-underline"
                >
                  Obter direções<span className="sr-only"> (abre o Google Maps numa nova janela)</span>
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-md bg-foreground text-accent">
                <Clock className="size-5" />
              </span>
              <div className="flex flex-1 flex-col gap-1">
                <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Horário</span>
                <dl className="flex flex-col gap-1">
                  {site.hours.map((row) => (
                    <div key={row.days} className="flex flex-col sm:flex-row sm:gap-2">
                      <dt className="font-semibold">{row.days}:</dt>
                      <dd>{row.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
