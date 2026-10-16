import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/legal-page'
import { legalLinks, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: `Como a ${site.name} recolhe, utiliza e protege os seus dados pessoais, nos termos do RGPD.`,
  alternates: { canonical: '/politica-de-privacidade' },
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Política de Privacidade"
      intro="A proteção dos seus dados pessoais é importante para nós. Esta política explica que dados recolhemos através deste website, para que fins e quais os seus direitos, em conformidade com o Regulamento Geral sobre a Proteção de Dados (Regulamento (UE) 2016/679 – RGPD) e a Lei n.º 58/2019, de 8 de agosto."
    >
      <h2>1. Responsável pelo tratamento</h2>
      <p>
        O responsável pelo tratamento dos seus dados pessoais é a {site.legalName}, pessoa
        coletiva n.º {site.nif}, com sede em {site.address.street}, {site.address.postalCode}{' '}
        {site.address.city}. Para qualquer questão relacionada com os seus dados pode contactar-nos
        através do email <a href={`mailto:${site.email}`}>{site.email}</a> ou do telefone{' '}
        {site.phoneDisplay}.
      </p>

      <h2>2. Dados pessoais recolhidos</h2>
      <p>Através do formulário de contacto recolhemos apenas os dados que nos fornece:</p>
      <ul>
        <li>Nome;</li>
        <li>Número de telefone;</li>
        <li>Endereço de email;</li>
        <li>Matrícula da viatura (opcional);</li>
        <li>Assunto e conteúdo da mensagem.</li>
      </ul>
      <p>
        Pedimos que não inclua na mensagem dados sensíveis (por exemplo, dados de saúde) nem dados
        de terceiros sem a respetiva autorização.
      </p>

      <h2>3. Finalidades e fundamento jurídico</h2>
      <p>Os dados são tratados para as seguintes finalidades:</p>
      <ul>
        <li>
          Responder ao seu pedido de informação, marcação ou orçamento – com fundamento no seu
          consentimento (artigo 6.º, n.º 1, alínea a) do RGPD) e em diligências pré-contratuais a seu
          pedido (artigo 6.º, n.º 1, alínea b) do RGPD);
        </li>
        <li>
          Cumprimento de obrigações legais, nomeadamente fiscais, caso venha a ser celebrado um
          contrato de prestação de serviços (artigo 6.º, n.º 1, alínea c) do RGPD).
        </li>
      </ul>
      <p>
        Não utilizamos os seus dados para envio de comunicações de marketing nem para decisões
        automatizadas ou definição de perfis.
      </p>

      <h2>4. Prazo de conservação</h2>
      <p>
        Os dados enviados através do formulário de contacto são conservados pelo período
        necessário para responder ao seu pedido e, no máximo, durante 12 meses após o último
        contacto, sendo depois eliminados. Caso se torne nosso cliente, os dados constantes de
        faturas são conservados pelo prazo legalmente exigido (atualmente 10 anos, nos termos da
        legislação fiscal).
      </p>

      <h2>5. Destinatários e subcontratantes</h2>
      <p>
        Os seus dados não são vendidos nem cedidos a terceiros para fins comerciais. Para o
        funcionamento do website recorremos aos seguintes prestadores, que atuam como
        subcontratantes e tratam os dados apenas segundo as nossas instruções:
      </p>
      <ul>
        <li>
          <strong>Netlify, Inc.</strong> – alojamento do website e receção das mensagens do
          formulário de contacto.
        </li>
      </ul>
      <p>
        Alguns prestadores podem estar sediados fora do Espaço Económico Europeu, nomeadamente nos
        Estados Unidos da América. Nesses casos, a transferência é efetuada com base em garantias
        adequadas previstas no RGPD, como o Quadro de Privacidade de Dados UE-EUA ou cláusulas
        contratuais-tipo aprovadas pela Comissão Europeia.
      </p>

      <h2>6. Os seus direitos</h2>
      <p>Nos termos do RGPD, tem direito a:</p>
      <ul>
        <li>Aceder aos dados pessoais que lhe dizem respeito;</li>
        <li>Solicitar a retificação de dados inexatos ou incompletos;</li>
        <li>Solicitar o apagamento dos seus dados;</li>
        <li>Solicitar a limitação do tratamento;</li>
        <li>Opor-se ao tratamento;</li>
        <li>Solicitar a portabilidade dos dados;</li>
        <li>
          Retirar o consentimento a qualquer momento, sem comprometer a licitude do tratamento
          efetuado até essa data.
        </li>
      </ul>
      <p>
        Para exercer estes direitos, envie um email para{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>. Responderemos no prazo máximo de um mês.
      </p>
      <p>
        Tem ainda o direito de apresentar reclamação junto da autoridade de controlo, a Comissão
        Nacional de Proteção de Dados (CNPD) –{' '}
        <a href={legalLinks.cnpd} target="_blank" rel="noopener noreferrer">
          www.cnpd.pt
          <span className="sr-only"> (abre numa nova janela)</span>
        </a>
        .
      </p>

      <h2>7. Segurança</h2>
      <p>
        Adotamos medidas técnicas e organizativas adequadas para proteger os seus dados contra
        perda, acesso não autorizado ou divulgação, incluindo a transmissão cifrada (HTTPS) de
        todos os dados enviados através deste website.
      </p>

      <h2>8. Cookies</h2>
      <p>
        Para informação sobre a utilização de cookies, consulte a nossa{' '}
        <Link href="/politica-de-cookies">Política de Cookies</Link>.
      </p>

      <h2>9. Alterações a esta política</h2>
      <p>
        Esta política pode ser atualizada a qualquer momento. A versão em vigor está sempre
        disponível nesta página, com indicação da data da última atualização.
      </p>
    </LegalPage>
  )
}
