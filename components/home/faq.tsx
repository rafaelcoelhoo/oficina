import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Fazer a revisão numa oficina independente anula a garantia da marca?',
    answer:
      'Não. A legislação europeia permite que a manutenção seja feita fora da rede oficial, desde que se cumpra o plano do fabricante e se usem peças de qualidade equivalente. Registamos tudo na fatura e no livro de revisões.',
  },
  {
    question: 'Preciso de marcação?',
    answer:
      'Recomendamos marcação para revisões e reparações mais demoradas. Para pequenas verificações (luzes, pressão dos pneus, escovas) pode passar sem marcação dentro do horário de funcionamento.',
  },
  {
    question: 'O orçamento é gratuito?',
    answer:
      'Sim, o orçamento é gratuito e sem compromisso. Nos casos em que é necessário um diagnóstico eletrónico aprofundado, informamos previamente o valor, que é descontado se avançar com a reparação.',
  },
  {
    question: 'Quanto tempo demora uma revisão?',
    answer:
      'Uma revisão normal fica pronta no próprio dia. Reparações que dependem de encomenda de peças são acordadas consigo no momento do orçamento.',
  },
  {
    question: 'Que formas de pagamento aceitam?',
    answer: 'Aceitamos numerário, Multibanco, MB WAY e transferência bancária.',
  },
  {
    question: 'Podem levar o carro à inspeção?',
    answer:
      'Sim. Fazemos a pré-inspeção, corrigimos o necessário e, se desejar, levamos a viatura ao centro de inspeções e entregamo-la com o certificado.',
  },
]

export function Faq() {
  return (
    <section id="perguntas" aria-labelledby="perguntas-title" className="py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div className="flex flex-col gap-3">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Perguntas frequentes
          </p>
          <h2
            id="perguntas-title"
            className="font-heading text-4xl font-bold uppercase leading-none tracking-tight text-balance md:text-5xl"
          >
            Dúvidas comuns dos nossos clientes
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger className="py-5 text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
