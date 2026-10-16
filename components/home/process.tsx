const steps = [
  {
    title: 'Marque a visita',
    description: 'Ligue-nos ou envie o formulário. Respondemos no próprio dia útil.',
  },
  {
    title: 'Diagnóstico e orçamento',
    description: 'Avaliamos a viatura e enviamos um orçamento detalhado, sem compromisso.',
  },
  {
    title: 'Reparação aprovada',
    description: 'Só avançamos com a sua autorização. Se surgir algo novo, ligamos primeiro.',
  },
  {
    title: 'Entrega explicada',
    description: 'Mostramos o que foi feito, entregamos as peças antigas e a fatura detalhada.',
  },
]

export function Process() {
  return (
    <section id="como-funciona" aria-labelledby="processo-title" className="border-b border-border py-16 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:px-6">
        <div className="flex max-w-2xl flex-col gap-3">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Como funciona
          </p>
          <h2
            id="processo-title"
            className="font-heading text-4xl font-bold uppercase leading-none tracking-tight text-balance md:text-5xl"
          >
            Sem surpresas na hora de pagar
          </h2>
        </div>

        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-3 border-t-4 border-foreground pt-5">
              <span className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
                Passo {index + 1}
              </span>
              <h3 className="font-heading text-2xl font-bold uppercase leading-tight tracking-wide">
                {step.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
