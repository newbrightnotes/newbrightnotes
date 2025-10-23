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
                
                <h2>Quem Somos</h2>
                <p>
                  Somos uma equipe de entusiastas da jardinagem urbana, especialistas em cultivo vertical 
                  e sustentabilidade. Nossa equipe é liderada por Leandro Guimarães, especialista em 
                  jardinagem urbana com mais de 10 anos de experiência em transformar espaços reduzidos 
                  em prósperos jardins verticais.
                </p>
                <p>
                  Nosso time combina expertise técnica em horticultura, design de espaços verdes e 
                  educação ambiental para criar conteúdo prático, confiável e acessível a todos que 
                  desejam cultivar suas próprias plantas em casa.
                </p>
                
                <h2>Nossa História</h2>
                <p>
                  O New Bright Notes nasceu em 2020 da paixão por jardinagem e sustentabilidade urbana. 
                  Percebemos que muitas pessoas desejavam cultivar suas próprias plantas, mas não sabiam 
                  por onde começar ou achavam que não tinham espaço suficiente.
                </p>
                <p>
                  Durante a pandemia, vimos um crescente interesse em jardinagem doméstica e autocultivo 
                  de alimentos. Foi então que decidimos criar uma plataforma dedicada exclusivamente a 
                  jardins verticais - uma solução perfeita para quem vive em apartamentos ou possui 
                  espaços limitados.
                </p>
                <p>
                  Desde então, já ajudamos milhares de pessoas a iniciarem seus próprios jardins verticais, 
                  compartilhando conhecimento prático, dicas testadas e soluções criativas para os desafios 
                  da jardinagem em ambientes urbanos.
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
                  Visualizamos um mundo onde cada apartamento, cada varanda, cada parede vazia se 
                  transforma em um espaço produtivo e verde. Queremos democratizar o acesso à 
                  jardinagem, tornando-a acessível a todos, independentemente do espaço disponível.
                </p>
                
                <h2>Nossos Valores</h2>
                <ul>
                  <li><strong>Sustentabilidade:</strong> Promovemos práticas de cultivo eco-friendly e uso consciente de recursos</li>
                  <li><strong>Acessibilidade:</strong> Oferecemos soluções práticas e econômicas para todos os orçamentos</li>
                  <li><strong>Educação:</strong> Compartilhamos conhecimento baseado em experiências reais e pesquisas</li>
                  <li><strong>Comunidade:</strong> Construímos uma rede de jardineiros urbanos que se apoiam mutuamente</li>
                  <li><strong>Inovação:</strong> Buscamos constantemente novas técnicas e soluções criativas</li>
                </ul>
                
                <h2>Localização e Contato</h2>
                <p>
                  Estamos baseados no Brasil e atendemos toda a comunidade de língua portuguesa. 
                  Nossa equipe está sempre disponível para responder suas dúvidas e ajudar em sua 
                  jornada de jardinagem vertical.
                </p>
                <p>
                  <strong>Email:</strong> contato@newbrightnotes.com<br/>
                  <strong>Redes Sociais:</strong> Siga-nos no Facebook, Instagram e Pinterest para dicas diárias
                </p>
                
                <h2>Compromisso com a Qualidade</h2>
                <p>
                  Todo o conteúdo publicado no New Bright Notes passa por rigorosa verificação técnica. 
                  Testamos técnicas, validamos informações e nos baseamos em práticas comprovadas de 
                  horticultura e jardinagem urbana.
                </p>
                <p>
                  Estamos comprometidos em fornecer informações precisas, atualizadas e práticas que 
                  realmente funcionam na vida real, não apenas na teoria.
                </p>
                
                <h2>Junte-se à Nossa Comunidade</h2>
                <p>
                  Convidamos você a fazer parte desta jornada verde! Vamos juntos transformar paredes 
                  em jardins e espaços cinzas em oásis urbanos. Comece hoje mesmo seu jardim vertical 
                  e descubra a satisfação de cultivar suas próprias plantas em casa.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
