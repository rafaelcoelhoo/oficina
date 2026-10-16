import {
  Battery,
  CircleDot,
  ClipboardCheck,
  Cog,
  Gauge,
  Snowflake,
  Wrench,
  Waves,
  type LucideIcon,
} from 'lucide-react'

const services: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Wrench,
    title: 'Revisões e manutenção',
    description:
      'Mudança de óleo e filtros segundo o plano do fabricante, sem perder a garantia da marca.',
  },
  {
    icon: Gauge,
    title: 'Diagnóstico eletrónico',
    description:
      'Leitura de avarias, luzes no painel e testes a sensores com equipamento multimarca atualizado.',
  },
  {
    icon: CircleDot,
    title: 'Travões',
    description: 'Pastilhas, discos, maxilas e líquido de travões. Verificação gratuita em cada visita.',
  },
  {
    icon: Cog,
    title: 'Embraiagem e caixa',
    description: 'Substituição de kits de embraiagem, volantes bimassa e reparação de caixas.',
  },
  {
    icon: Waves,
    title: 'Suspensão e direção',
    description: 'Amortecedores, molas, rótulas e alinhamento de direção para uma condução segura.',
  },
  {
    icon: Snowflake,
    title: 'Ar condicionado',
    description: 'Carga de gás, deteção de fugas e higienização do circuito de climatização.',
  },
  {
    icon: Battery,
    title: 'Baterias e elétrica',
    description: 'Teste e substituição de baterias, alternadores, motores de arranque e iluminação.',
  },
  {
    icon: ClipboardCheck,
    title: 'Preparação para inspeção',
    description:
      'Pré-inspeção completa e, se desejar, levamos a viatura ao centro de inspeções por si.',
  },
]

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="py-16 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-2xl flex-col gap-3">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Serviços
            </p>
            <h2
              id="servicos-title"
              className="font-heading text-4xl font-bold uppercase leading-none tracking-tight text-balance md:text-5xl"
            >
              Tudo o que o seu carro precisa, numa só oficina
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-muted-foreground">
            Trabalhamos com todas as marcas e usamos peças de origem ou de qualidade equivalente,
            sempre à sua escolha.
          </p>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <li key={title} className="group flex flex-col gap-4 bg-card p-6 transition-colors hover:bg-secondary">
              <span
                aria-hidden="true"
                className="flex size-12 items-center justify-center rounded-md bg-foreground text-accent transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
              >
                <Icon className="size-6" />
              </span>
              <h3 className="font-heading text-xl font-bold uppercase tracking-wide">{title}</h3>
              <p className="leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
