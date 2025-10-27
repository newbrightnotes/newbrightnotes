import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de Cookies do New Bright Notes",
  alternates: {
    canonical: 'https://newbrightnotes.com/politica-de-cookies',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiePolicyPage() {
  return (
    <section className="site-main">
      <div className="site-container">
        <div className="site-row">
          <div className="site-content" id="site-content" role="main">
            <Breadcrumb items={[{ label: "Política de Cookies" }]} />
            <article className="post page">
              <header className="entry-header">
                <h1 className="entry-title">Política de Cookies</h1>
              </header>
              <div className="entry-content">
                <p><em>Última atualização: Janeiro de 2025</em></p>
                
                <h2>O Que São Cookies?</h2>
                <p>
                  Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo 
                  quando você visita um site. Eles são amplamente utilizados para fazer os sites 
                  funcionarem de forma mais eficiente e fornecer informações aos proprietários 
                  do site.
                </p>

                <h2>Como Usamos os Cookies</h2>
                <p>
                  O New Bright Notes utiliza cookies para:
                </p>
                <ul>
                  <li>Melhorar a funcionalidade e desempenho do site</li>
                  <li>Analisar como os visitantes usam nosso site</li>
                  <li>Personalizar sua experiência de navegação</li>
                  <li>Lembrar suas preferências</li>
                  <li>Exibir anúncios relevantes através do Google AdSense</li>
                </ul>

                <h2>Tipos de Cookies Que Usamos</h2>
                
                <h3>1. Cookies Essenciais</h3>
                <p>
                  Esses cookies são necessários para o funcionamento básico do site e não podem 
                  ser desativados em nossos sistemas.
                </p>

                <h3>2. Cookies de Análise</h3>
                <p>
                  Utilizamos o Google Analytics para entender como os visitantes interagem com 
                  nosso site. Essas informações nos ajudam a melhorar nosso conteúdo e 
                  experiência do usuário.
                </p>

                <h3>3. Cookies de Publicidade</h3>
                <p>
                  Utilizamos o Google AdSense, que pode usar cookies para exibir anúncios 
                  relevantes com base em suas visitas a este e outros sites.
                </p>

                <h2>Cookies de Terceiros</h2>
                <p>
                  Além dos nossos próprios cookies, podemos também usar vários cookies de 
                  terceiros para relatar estatísticas de uso do site e fornecer anúncios em 
                  nosso site:
                </p>
                <ul>
                  <li><strong>Google Analytics:</strong> Para análise de tráfego</li>
                  <li><strong>Google AdSense:</strong> Para publicidade</li>
                </ul>

                <h2>Gerenciando Cookies</h2>
                <p>
                  Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir 
                  todos os cookies que já estão no seu computador e configurar a maioria dos 
                  navegadores para impedir que eles sejam colocados.
                </p>
                <p>
                  No entanto, se você fizer isso, pode ser necessário ajustar manualmente algumas 
                  preferências sempre que visitar o site, e alguns serviços e funções podem não 
                  funcionar.
                </p>

                <h3>Como Desativar Cookies</h3>
                <p>
                  A maioria dos navegadores web permite algum controle da maioria dos cookies 
                  através das configurações do navegador. Para saber mais sobre cookies, 
                  incluindo como ver quais cookies foram definidos e como gerenciá-los e 
                  excluí-los, visite www.aboutcookies.org ou www.allaboutcookies.org.
                </p>

                <h2>Alterações nesta Política</h2>
                <p>
                  Podemos atualizar esta Política de Cookies periodicamente. Recomendamos que 
                  você revise esta página regularmente para se manter informado sobre como 
                  usamos cookies.
                </p>

                <h2>Mais Informações</h2>
                <p>
                  Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato 
                  conosco através do email: contato@newbrightnotes.com
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
