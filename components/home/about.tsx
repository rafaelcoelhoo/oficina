import { Check } from 'lucide-react'
import { site } from '@/lib/site'

const commitments = [
  'Orçamento escrito antes de qualquer reparação',
  'Peças substituídas entregues ao cliente, se assim o desejar',
  'Garantia sobre peças e mão de obra',
  'Revisões que respeitam o plano de manutenção do fabricante',
  'Fatura detalhada com peças e horas de trabalho',
]

export function About() {
  const years = new Date().getFullYear() - site.foundedYear

  return (
    <section id="sobre" aria-labelledby="sobre-title" className="bg-foreground py-16 text-background md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-5">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Sobre nós
          </p>
          <h2
            id="sobre-title"
            className="font-heading text-4xl font-bold uppercase leading-none tracking-tight text-balance md:text-5xl"
          >
            Uma oficina de família com {years} anos de estrada
          </h2>
          <p className="text-lg leading-relaxed text-background/80 text-pretty">
            A {site.name} abriu portas em {site.foundedYear} em {site.address.city}. Desde então,
            passaram pelas nossas mãos milhares de viaturas de clientes que voltam porque sabem com
            o que podem contar: trabalho bem feito, prazos cumpridos e preços transparentes.
          </p>
          <p className="leading-relaxed text-background/80 text-pretty">
            Hoje somos uma equipa de mecânicos e eletricistas auto com formação contínua em
            sistemas de injeção, eletrónica e viaturas híbridas.
          </p>
        </div>

        <div className="flex flex-col gap-5 rounded-lg border border-background/20 p-6 md:p-8">
          <h3 className="font-heading text-2xl font-bold uppercase tracking-wide">
            O nosso compromisso consigo
          </h3>
          <ul className="flex flex-col gap-4">
            {commitments.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-sm bg-accent text-accent-foreground"
                >
                  <Check className="size-4" strokeWidth={3} />
                </span>
                <span className="leading-relaxed text-background/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
