import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/legal-page'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: `Informação sobre a utilização de cookies no website da ${site.name}.`,
  alternates: { canonical: '/politica-de-cookies' },
}

export default function CookiesPolicyPage() {
  return (
    <LegalPage
      title="Política de Cookies"
      intro="Esta política explica o que são cookies e como são utilizados neste website, nos termos da Lei n.º 41/2004, de 18 de agosto, na sua redação atual."
    >
      <h2>1. O que são cookies?</h2>
      <p>
        Cookies são pequenos ficheiros de texto guardados no seu dispositivo quando visita um
        website. Permitem, por exemplo, memorizar preferências ou recolher estatísticas de
        utilização.
      </p>

      <h2>2. Que cookies utilizamos?</h2>
      <p>
        Este website <strong>não utiliza cookies de publicidade, de análise estatística nem de
        redes sociais</strong>. Não instalamos qualquer cookie que exija o seu consentimento
        prévio.
      </p>
      <p>
        Poderão ser utilizados apenas cookies ou mecanismos estritamente necessários ao
        funcionamento técnico e à segurança do website, disponibilizados pelo nosso prestador de
        alojamento (Netlify). Estes cookies estão isentos de consentimento nos termos da lei.
      </p>
      <p>
        As fontes tipográficas são servidas diretamente a partir do nosso servidor, sem pedidos a
        serviços de terceiros.
      </p>

      <h2>3. Ligações para websites de terceiros</h2>
      <p>
        Este website contém ligações para serviços externos, como o Google Maps (direções), o Livro
        de Reclamações Eletrónico e entidades de resolução alternativa de litígios. Ao clicar nessas
        ligações sairá do nosso website, passando a aplicar-se as políticas de privacidade e de
        cookies dessas entidades.
      </p>

      <h2>4. Como gerir cookies no seu navegador</h2>
      <p>
        Pode, a qualquer momento, consultar, bloquear ou eliminar cookies através das definições
        do seu navegador (Chrome, Firefox, Safari, Edge, entre outros). A desativação de cookies
        estritamente necessários pode afetar o funcionamento do website.
      </p>

      <h2>5. Mais informação</h2>
      <p>
        Para saber como tratamos os seus dados pessoais, consulte a nossa{' '}
        <Link href="/politica-de-privacidade">Política de Privacidade</Link>. Para qualquer questão,
        contacte-nos através de <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  )
}
