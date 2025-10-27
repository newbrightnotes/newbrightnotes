import type { Metadata } from "next";
import Script from "next/script";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso do New Bright Notes",
  alternates: {
    canonical: 'https://newbrightnotes.com/termos-de-uso',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  const siteUrl = "https://newbrightnotes.com";

  // JSON-LD for Breadcrumbs
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Termos de Uso",
        // Last item should NOT have 'item' field per Google's requirement
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <section className="site-main">
      <div className="site-container">
        <div className="site-row">
          <div className="site-content" id="site-content" role="main">
            <Breadcrumb items={[{ label: "Termos de Uso" }]} />
            <article className="post page">
              <header className="entry-header">
                <h1 className="entry-title">Termos de Uso</h1>
              </header>
              <div className="entry-content">
                <p><em>Última atualização: Janeiro de 2025</em></p>
                
                <h2>1. Aceitação dos Termos</h2>
                <p>
                  Ao acessar e usar o site New Bright Notes, você concorda em cumprir e ficar 
                  vinculado aos seguintes termos de uso. Se você não concordar com qualquer parte 
                  destes termos, não deverá usar nosso site.
                </p>

                <h2>2. Uso do Conteúdo</h2>
                <p>
                  O conteúdo deste site é fornecido apenas para fins informativos e educacionais. 
                  Você pode visualizar, baixar e imprimir páginas do site para uso pessoal e 
                  não comercial.
                </p>

                <h2>3. Propriedade Intelectual</h2>
                <p>
                  Todo o conteúdo incluído neste site, como textos, gráficos, logos, imagens e 
                  software, é propriedade do New Bright Notes ou de seus fornecedores de conteúdo 
                  e é protegido por leis de direitos autorais.
                </p>

                <h2>4. Limitação de Responsabilidade</h2>
                <p>
                  As informações fornecidas neste site são para orientação geral. Não nos 
                  responsabilizamos por quaisquer danos diretos ou indiretos resultantes do uso 
                  das informações fornecidas.
                </p>

                <h2>5. Links para Sites de Terceiros</h2>
                <p>
                  Nosso site pode conter links para sites de terceiros. Não temos controle sobre 
                  o conteúdo desses sites e não assumimos responsabilidade por eles.
                </p>

                <h2>6. Comentários e Contribuições</h2>
                <p>
                  Ao enviar comentários ou contribuições para o site, você concede ao New Bright 
                  Notes o direito de usar, modificar e distribuir esse conteúdo.
                </p>

                <h2>7. Privacidade</h2>
                <p>
                  O uso de informações pessoais é regido por nossa Política de Privacidade. 
                  Ao usar este site, você concorda com o processamento de suas informações 
                  conforme descrito na política.
                </p>

                <h2>8. Modificações dos Termos</h2>
                <p>
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                  As alterações entrarão em vigor imediatamente após a publicação no site.
                </p>

                <h2>9. Lei Aplicável</h2>
                <p>
                  Estes termos são regidos pelas leis brasileiras. Qualquer disputa relacionada 
                  a estes termos será submetida à jurisdição exclusiva dos tribunais brasileiros.
                </p>

                <h2>10. Contato</h2>
                <p>
                  Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco 
                  através do email: contato@newbrightnotes.com
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
