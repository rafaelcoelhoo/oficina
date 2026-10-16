import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/legal-page'
import { legalLinks, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Termos e Condições',
  description: `Termos de utilização, informação legal e resolução alternativa de litígios da ${site.name}.`,
  alternates: { canonical: '/termos-e-condicoes' },
}

const newTab = <span className="sr-only"> (abre numa nova janela)</span>

export default function TermsPage() {
  return (
    <LegalPage
      title="Termos e Condições"
      intro="Ao utilizar este website, aceita os presentes termos e condições. Recomendamos a sua leitura atenta."
    >
      <h2>1. Identificação do prestador</h2>
      <p>
        Em cumprimento do Decreto-Lei n.º 7/2004, de 7 de janeiro (comércio eletrónico),
        informamos:
      </p>
      <ul>
        <li>
          <strong>Denominação:</strong> {site.legalName}
        </li>
        <li>
          <strong>NIPC:</strong> {site.nif}
        </li>
        <li>
          <strong>Sede:</strong> {site.address.street}, {site.address.postalCode}{' '}
          {site.address.city}, {site.address.country}
        </li>
        <li>
          <strong>Registo:</strong> {site.registry}, sob o n.º único de matrícula e identificação
          fiscal {site.nif}
        </li>
        <li>
          <strong>Capital social:</strong> {site.capital}
        </li>
        <li>
          <strong>Contactos:</strong> <a href={`mailto:${site.email}`}>{site.email}</a> · Tel.{' '}
          {site.phoneDisplay} (chamada para a rede fixa nacional)
        </li>
      </ul>

      <h2>2. Objeto do website</h2>
      <p>
        Este website tem caráter meramente informativo e institucional, destinando-se a divulgar os
        serviços de reparação e manutenção automóvel prestados pela {site.shortName} e a permitir o
        contacto para pedidos de informação, marcações e orçamentos. Não são efetuadas vendas
        online através deste website.
      </p>

      <h2>3. Orçamentos e preços</h2>
      <p>
        A informação apresentada no website não constitui uma proposta contratual. Os orçamentos
        são elaborados após avaliação da viatura e comunicados por escrito ao cliente. Nenhuma
        reparação é iniciada sem a aprovação expressa do cliente. Todos os preços indicados
        incluem IVA à taxa legal em vigor, salvo indicação em contrário.
      </p>

      <h2>4. Propriedade intelectual</h2>
      <p>
        Todos os conteúdos deste website – textos, imagens, logótipos e grafismo – são propriedade
        da {site.legalName} ou utilizados com autorização, estando protegidos pela legislação de
        direitos de autor e propriedade industrial. As marcas automóveis eventualmente
        mencionadas pertencem aos respetivos titulares e são referidas apenas para fins
        informativos.
      </p>

      <h2>5. Responsabilidade</h2>
      <p>
        Esforçamo-nos por manter a informação do website correta e atualizada, não podendo, no
        entanto, garantir a ausência de erros. Não nos responsabilizamos pelo conteúdo de websites
        de terceiros para os quais existam ligações.
      </p>

      <h2>6. Proteção de dados</h2>
      <p>
        O tratamento de dados pessoais rege-se pela nossa{' '}
        <Link href="/politica-de-privacidade">Política de Privacidade</Link> e pela{' '}
        <Link href="/politica-de-cookies">Política de Cookies</Link>.
      </p>

      <h2>7. Livro de Reclamações</h2>
      <p>
        Nos termos do Decreto-Lei n.º 156/2005, de 15 de setembro, na redação atual, dispomos de
        Livro de Reclamações nas nossas instalações. Pode também apresentar a sua reclamação
        através do{' '}
        <a href={legalLinks.livroReclamacoes} target="_blank" rel="noopener noreferrer">
          Livro de Reclamações Eletrónico
          {newTab}
        </a>
        .
      </p>

      <h2 id="resolucao-de-litigios">8. Resolução alternativa de litígios</h2>
      <p>
        Em caso de litígio de consumo, o consumidor pode recorrer a uma Entidade de Resolução
        Alternativa de Litígios de Consumo, nos termos da Lei n.º 144/2015, de 8 de setembro. A
        entidade competente para o setor automóvel é:
      </p>
      <ul>
        <li>
          <strong>{legalLinks.ralEntity.name}</strong> –{' '}
          <a href={legalLinks.ralEntity.url} target="_blank" rel="noopener noreferrer">
            www.arbitragemauto.pt
            {newTab}
          </a>
        </li>
      </ul>
      <p>
        Mais informações sobre as entidades de resolução alternativa de litígios disponíveis estão
        disponíveis no Portal do Consumidor –{' '}
        <a href={legalLinks.consumerPortal} target="_blank" rel="noopener noreferrer">
          www.consumidor.gov.pt
          {newTab}
        </a>
        .
      </p>

      <h2>9. Lei aplicável e foro</h2>
      <p>
        Os presentes termos regem-se pela lei portuguesa. Sem prejuízo do recurso às entidades de
        resolução alternativa de litígios, é competente o foro da comarca de {site.address.city},
        salvo disposição legal imperativa em contrário.
      </p>
    </LegalPage>
  )
}
