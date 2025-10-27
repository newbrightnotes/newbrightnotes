import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com o New Bright Notes. Estamos aqui para ajudar com suas dúvidas sobre jardins verticais.",
  alternates: {
    canonical: 'https://newbrightnotes.com/contato',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <section className="site-main">
      <div className="site-container">
        <div className="site-row">
          <div className="site-content" id="site-content" role="main">
            <Breadcrumb items={[{ label: "Contato" }]} />
            <article className="post page">
              <header className="entry-header">
                <h1 className="entry-title">Contato</h1>
              </header>
              <div className="entry-content">
                <p>
                  Tem alguma dúvida, sugestão ou quer compartilhar seu projeto de jardim vertical? 
                  Adoraríamos ouvir de você!
                </p>
                
                <ContactForm />
                
                <h2 style={{ marginTop: '3rem' }}>Outras Formas de Contato</h2>
                <p>
                  <strong>Email:</strong> contato@newbrightnotes.com
                </p>
                
                <h2>Perguntas Frequentes</h2>
                <p>
                  Antes de entrar em contato, que tal conferir nossas seções de artigos? 
                  Talvez você encontre a resposta para sua pergunta:
                </p>
                <ul>
                  <li><Link href="/category/cuidados-e-manutencao">Cuidados e Manutenção</Link></li>
                  <li><Link href="/category/tipos-de-jardins-verticais">Tipos de Jardins Verticais</Link></li>
                  <li><Link href="/category/jardinagem-vertical-comestivel">Jardinagem Vertical Comestível</Link></li>
                </ul>
                
                <p>
                  Respondemos todas as mensagens o mais rápido possível. Obrigado pelo seu interesse 
                  no New Bright Notes!
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
