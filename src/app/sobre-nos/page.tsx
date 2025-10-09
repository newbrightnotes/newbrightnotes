import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description: "Conheça o New Bright Notes - seu guia completo sobre jardins verticais e jardinagem urbana.",
};

export default function AboutPage() {
  return (
    <section className="site-main">
      <div className="site-container">
        <div className="site-row">
          <div className="site-content" id="site-content" role="main">
            <Breadcrumb items={[{ label: "Sobre Nós" }]} />
            <article className="post page">
              <header className="entry-header">
                <h1 className="entry-title">Sobre Nós</h1>
              </header>
              <div className="entry-content">
                <p>
                  Bem-vindo ao <strong>New Bright Notes</strong>, seu guia completo sobre jardins verticais 
                  e jardinagem urbana!
                </p>
                <p>
                  Nossa missão é inspirar e capacitar pessoas a transformarem espaços urbanos em 
                  oásis verdes, independente do tamanho ou localização. Acreditamos que todos 
                  merecem ter contato com a natureza, mesmo morando em apartamentos ou casas com 
                  espaço limitado.
                </p>
                <h2>Nossa História</h2>
                <p>
                  Nascemos da paixão por jardinagem e sustentabilidade urbana. Percebemos que 
                  muitas pessoas desejavam cultivar suas próprias plantas, mas não sabiam por 
                  onde começar ou achavam que não tinham espaço suficiente.
                </p>
                <p>
                  Assim surgiu o New Bright Notes: um espaço dedicado a compartilhar conhecimento, 
                  dicas práticas e inspiração para que qualquer pessoa possa criar e manter seu 
                  próprio jardim vertical.
                </p>
                <h2>O Que Oferecemos</h2>
                <ul>
                  <li><strong>Guias Práticos:</strong> Passo a passo detalhados para iniciantes e experientes</li>
                  <li><strong>Dicas de Cultivo:</strong> Informações sobre as melhores plantas para cada ambiente</li>
                  <li><strong>Sustentabilidade:</strong> Técnicas eco-friendly e uso de materiais reciclados</li>
                  <li><strong>Inspiração:</strong> Ideias criativas para transformar seu espaço</li>
                </ul>
                <h2>Nossa Visão</h2>
                <p>
                  Acreditamos em um futuro onde cidades são mais verdes, sustentáveis e conectadas 
                  com a natureza. Cada jardim vertical é um pequeno passo nessa direção, trazendo 
                  benefícios ambientais, estéticos e até alimentares para as famílias.
                </p>
                <p>
                  Junte-se a nós nessa jornada verde! Vamos juntos transformar paredes em jardins 
                  e espaços cinzas em oásis urbanos.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
