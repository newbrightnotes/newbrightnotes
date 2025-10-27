import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade do New Bright Notes",
  alternates: {
    canonical: 'https://newbrightnotes.com/politica-de-privacidade',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="site-main">
      <div className="site-container">
        <div className="site-row">
          <div className="site-content" id="site-content" role="main">
            <Breadcrumb items={[{ label: "Política de Privacidade" }]} />
            <article className="post page">
              <header className="entry-header">
                <h1 className="entry-title">Política de Privacidade</h1>
              </header>
              <div className="entry-content">
                <p><em>Última atualização: Janeiro de 2025</em></p>
                
                <h2>1. Informações que Coletamos</h2>
                <p>
                  O New Bright Notes coleta informações para fornecer melhores serviços aos nossos 
                  usuários. As informações coletadas incluem:
                </p>
                <ul>
                  <li>Dados de navegação através de cookies e tecnologias similares</li>
                  <li>Informações de análise de tráfego via Google Analytics</li>
                  <li>Informações fornecidas voluntariamente através de formulários de contato</li>
                </ul>

                <h2>2. Como Usamos as Informações</h2>
                <p>
                  Utilizamos as informações coletadas para:
                </p>
                <ul>
                  <li>Melhorar a experiência de navegação em nosso site</li>
                  <li>Analisar o uso do site e suas funcionalidades</li>
                  <li>Responder a perguntas e solicitações</li>
                  <li>Enviar atualizações e newsletters (mediante consentimento)</li>
                </ul>

                <h2>3. Cookies</h2>
                <p>
                  Utilizamos cookies para melhorar sua experiência em nosso site. Cookies são 
                  pequenos arquivos de texto armazenados em seu dispositivo. Você pode configurar 
                  seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades 
                  do site.
                </p>

                <h2>4. Google Analytics e AdSense</h2>
                <p>
                  Utilizamos o Google Analytics para análise de tráfego e o Google AdSense para 
                  exibição de anúncios. Essas ferramentas podem coletar informações sobre sua 
                  visita ao site conforme suas respectivas políticas de privacidade.
                </p>
                <h3>Google Analytics</h3>
                <p>
                  O Google Analytics coleta informações anônimas sobre como os visitantes usam nosso site, 
                  incluindo páginas visitadas, tempo de permanência e origem do tráfego. Essas informações 
                  nos ajudam a melhorar o conteúdo e a experiência do usuário.
                </p>
                <h3>Google AdSense</h3>
                <p>
                  O Google AdSense usa cookies para exibir anúncios relevantes com base em suas visitas 
                  anteriores ao nosso site e outros sites. Você pode optar por não receber anúncios 
                  personalizados visitando as Configurações de Anúncios do Google.
                </p>
                <p>
                  Para mais informações sobre como o Google usa dados quando você usa nosso site, 
                  visite: www.google.com/policies/privacy/partners/
                </p>

                <h2>5. Compartilhamento de Informações</h2>
                <p>
                  Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros 
                  sem o seu consentimento, exceto quando exigido por lei.
                </p>

                <h2>6. Segurança</h2>
                <p>
                  Implementamos medidas de segurança adequadas para proteger suas informações 
                  pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>

                <h2>7. Links Externos</h2>
                <p>
                  Nosso site pode conter links para sites externos. Não somos responsáveis pelas 
                  práticas de privacidade ou conteúdo desses sites.
                </p>

                <h2>8. Direitos do Usuário</h2>
                <p>
                  Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. 
                  Para exercer esses direitos, entre em contato conosco através do email 
                  contato@newbrightnotes.com.
                </p>

                <h2>9. Alterações nesta Política</h2>
                <p>
                  Podemos atualizar esta política de privacidade periodicamente. Recomendamos 
                  que você revise esta página regularmente para se manter informado sobre como 
                  protegemos suas informações.
                </p>

                <h2>10. Contato</h2>
                <p>
                  Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato 
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
