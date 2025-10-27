import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getRelatedPosts } from "@/data/posts";
import Script from "next/script";
import AdSenseUnit from "@/components/AdSenseUnit";

interface PostPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all posts
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each post
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post não encontrado",
    };
  }

  const siteUrl = "https://newbrightnotes.com";
  const postUrl = `${siteUrl}/posts/${post.slug}`;
  const imageUrl = `${siteUrl}${post.image}`;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [`jardins verticais`, `${post.category}`, post.title, "jardinagem urbana", "cultivo vertical"],
    authors: [{ name: post.author }],
    creator: post.author,
    publisher: "New Bright Notes",
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url: postUrl,
      siteName: "New Bright Notes",
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: imageUrl,
          width: 780,
          height: 520,
          alt: post.title,
        },
      ],
      publishedTime: new Date().toISOString(),
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
      creator: "@newbrightnotes",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const siteUrl = "https://newbrightnotes.com";
  const postUrl = `${siteUrl}/posts/${post.slug}`;
  const imageUrl = `${siteUrl}${post.image}`;

  // Get related posts
  const relatedPosts = getRelatedPosts(post, 3);

  // JSON-LD structured data for Article and BlogPosting
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 780,
      height: 520
    },
    datePublished: new Date("2025-05-19").toISOString(),
    dateModified: new Date("2025-05-19").toISOString(),
    author: {
      "@type": "Person",
      name: post.author,
      url: `${siteUrl}/author/${post.authorSlug}`,
      description: "Especialista em jardinagem urbana e cultivo vertical"
    },
    publisher: {
      "@type": "Organization",
      name: "New Bright Notes",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.png`
      }
    },
    description: post.excerpt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl
    },
    articleSection: post.category,
    keywords: post.tags.join(", "),
    wordCount: post.excerpt.split(" ").length * 10, // Approximate
    inLanguage: "pt-BR",
    isFamilyFriendly: true,
    about: {
      "@type": "Thing",
      name: "Jardinagem Vertical",
      description: "Técnicas e práticas de cultivo vertical para ambientes urbanos"
    }
  };

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
        name: post.category,
        item: `${siteUrl}/category/${post.categorySlug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <Script
        id="article-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
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
              {/* Breadcrumbs */}
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <ol style={{ display: 'flex', gap: '0.5rem', listStyle: 'none', padding: '1rem 0' }}>
                  <li>
                    <Link href="/">Início</Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href={`/category/${post.categorySlug}`}>{post.category}</Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page">{post.title}</li>
                </ol>
              </nav>

              <article className="post type-post status-publish format-standard has-post-thumbnail entry">
                <header className="entry-header">
                  <div className="entry-meta">
                    <span className="entry-cat">
                      <Link href={`/category/${post.categorySlug}`} rel="category tag">
                        {post.category.toUpperCase()}
                      </Link>
                    </span>
                  </div>
                  <h1 className="entry-title">{post.title}</h1>
                  <div className="entry-meta">
                    <span className="entry-author">
                      Por <Link href={`/author/${post.authorSlug}`} title={`Posts de ${post.author}`} rel="author">
                        {post.author}
                      </Link>
                    </span>
                    <span className="entry-date">
                      {" "}em <time dateTime={post.date}>{post.date}</time>
                    </span>
                  </div>
                </header>

                <div className="entry-media">
                  <Image
                    width={780}
                    height={520}
                    src={post.image}
                    alt={post.title}
                    priority
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>

                <div className="entry-content">
                  {/* Introduction */}
                  <p>{post.excerpt}</p>

                  {/* AdSense In-Article Ad */}
                  <AdSenseUnit 
                    format="in-article"
                    responsive={true}
                    className="in-article-ad"
                  />
                  
                  {/* Main Content - Expanded and unique for each category */}
                  {post.categorySlug === "jardinagem-vertical-comestivel" && (
                    <>
                      <h2>Por Que Escolher Jardinagem Vertical Comestível?</h2>
                      <p>
                        A jardinagem vertical comestível revolucionou a forma como cultivamos alimentos em ambientes urbanos. 
                        Com o crescimento das cidades e a redução dos espaços disponíveis, essa técnica permite que qualquer 
                        pessoa, independentemente do tamanho de sua casa ou apartamento, possa ter acesso a alimentos frescos 
                        e saudáveis cultivados por suas próprias mãos.
                      </p>
                      <p>
                        Além dos benefícios nutricionais de ter acesso a vegetais e ervas frescas, a jardinagem vertical 
                        oferece vantagens ambientais significativas. Reduz a pegada de carbono ao eliminar a necessidade 
                        de transporte de alimentos, melhora a qualidade do ar no ambiente doméstico e promove a biodiversidade 
                        urbana ao criar habitats para insetos benéficos.
                      </p>

                      <h2>Benefícios da Jardinagem Vertical</h2>
                      <ul>
                        <li><strong>Aproveitamento máximo do espaço vertical:</strong> Ideal para apartamentos, varandas pequenas e áreas urbanas limitadas</li>
                        <li><strong>Acesso fácil para manutenção e colheita:</strong> Plantas na altura dos olhos facilitam o cuidado diário e a colheita</li>
                        <li><strong>Melhor controle de pragas e doenças:</strong> A circulação de ar melhorada reduz problemas com fungos e pragas</li>
                        <li><strong>Estética agradável e decorativa:</strong> Transforma paredes vazias em verdadeiros jardins vivos</li>
                        <li><strong>Produção de alimentos frescos em casa:</strong> Reduz custos com compras e garante alimentos sem agrotóxicos</li>
                        <li><strong>Melhoria da qualidade do ar:</strong> Plantas absorvem CO₂ e liberam oxigênio, purificando o ambiente</li>
                        <li><strong>Redução da temperatura ambiente:</strong> Jardins verticais ajudam a regular a temperatura interna</li>
                      </ul>

                      <h2>Planejamento e Escolha de Localização</h2>
                      <p>
                        O sucesso do seu jardim vertical comestível começa com um planejamento cuidadoso. Antes de começar, 
                        avalie o espaço disponível e a quantidade de luz solar que ele recebe ao longo do dia. A maioria das 
                        hortaliças e ervas necessita de pelo menos 4-6 horas de luz solar direta para se desenvolver adequadamente.
                      </p>
                      <p>
                        Considere também a proximidade de uma fonte de água para facilitar a irrigação regular. Varandas, 
                        paredes externas bem iluminadas e até mesmo áreas internas próximas a janelas grandes podem ser 
                        locais ideais para seu jardim vertical.
                      </p>

                      <h3>Fatores Importantes a Considerar:</h3>
                      <ul>
                        <li>Luminosidade: Mínimo de 4-6 horas de sol direto para a maioria das plantas comestíveis</li>
                        <li>Ventilação: Boa circulação de ar previne doenças fúngicas</li>
                        <li>Acesso à água: Facilita a irrigação regular necessária</li>
                        <li>Peso da estrutura: Certifique-se de que a parede ou suporte pode aguentar o peso</li>
                        <li>Proteção contra intempéries: Considere cobertura parcial se a área for muito exposta</li>
                      </ul>

                      <h2>Escolha do Sistema de Cultivo Vertical</h2>
                      <p>
                        Existem diversos sistemas de cultivo vertical disponíveis, desde soluções comerciais prontas até 
                        projetos DIY (faça você mesmo) usando materiais reciclados. A escolha dependerá do seu orçamento, 
                        espaço disponível e habilidades manuais.
                      </p>

                      <h3>Principais Tipos de Estruturas Verticais:</h3>
                      <ul>
                        <li><strong>Torres de cultivo:</strong> Estruturas modulares empilháveis, ideais para espaços pequenos</li>
                        <li><strong>Painéis de parede:</strong> Fixados diretamente na parede, economizam espaço no chão</li>
                        <li><strong>Treliças e suportes:</strong> Perfeitos para plantas trepadeiras como tomates e pepinos</li>
                        <li><strong>Vasos suspensos em escada:</strong> Solução versátil e de fácil manutenção</li>
                        <li><strong>Paletes reutilizados:</strong> Opção econômica e sustentável</li>
                        <li><strong>Calhas e canos de PVC:</strong> Sistema hidropônico ou semi-hidropônico</li>
                      </ul>

                      <h2>Preparação do Substrato</h2>
                      <p>
                        O substrato é o meio de cultivo onde suas plantas desenvolverão suas raízes. Para jardins verticais, 
                        é essencial usar um substrato leve, porém nutritivo, com boa capacidade de retenção de água e drenagem 
                        adequada. Um substrato muito pesado pode sobrecarregar a estrutura vertical.
                      </p>

                      <h3>Composição Ideal do Substrato:</h3>
                      <ul>
                        <li>40% de terra vegetal de qualidade</li>
                        <li>30% de húmus de minhoca ou composto orgânico</li>
                        <li>20% de fibra de coco ou casca de pinus (para aeração)</li>
                        <li>10% de vermiculita ou perlita (para drenagem)</li>
                      </ul>

                      <h2>Irrigação e Manutenção</h2>
                      <p>
                        A irrigação adequada é crucial para o sucesso do jardim vertical. Devido à disposição vertical, 
                        a água tende a escorrer rapidamente, especialmente nos níveis superiores. Sistemas de irrigação 
                        por gotejamento são ideais, mas a rega manual também funciona bem se feita com atenção.
                      </p>

                      <h3>Dicas de Irrigação:</h3>
                      <ul>
                        <li>Regue preferencialmente pela manhã ou final da tarde</li>
                        <li>Verifique a umidade do substrato regularmente (toque com o dedo)</li>
                        <li>Níveis superiores podem precisar de mais água que os inferiores</li>
                        <li>Evite encharcar - a drenagem deve ser eficiente</li>
                        <li>No verão, a frequência de rega pode precisar ser diária</li>
                      </ul>

                      <h2>Nutrição e Adubação</h2>
                      <p>
                        Como o espaço para raízes é limitado em sistemas verticais, a reposição regular de nutrientes 
                        é essencial. Use adubos orgânicos como húmus de minhoca, bokashi ou composto líquido (chorume) 
                        a cada 15-30 dias durante a fase de crescimento ativo das plantas.
                      </p>

                      <h2>Controle de Pragas e Doenças</h2>
                      <p>
                        Jardins verticais bem ventilados tendem a ter menos problemas com pragas e doenças do que canteiros 
                        tradicionais. No entanto, é importante fazer inspeções regulares e agir rapidamente ao primeiro 
                        sinal de problemas.
                      </p>

                      <h3>Métodos de Controle Natural:</h3>
                      <ul>
                        <li>Óleo de neem para pulgões e cochonilhas</li>
                        <li>Solução de sabão neutro para ácaros</li>
                        <li>Calda bordalesa para fungos</li>
                        <li>Plantas companheiras que repelem pragas (manjericão, hortelã, calêndula)</li>
                        <li>Remoção manual de pragas visíveis</li>
                      </ul>

                      <h2>Colheita e Renovação</h2>
                      <p>
                        A colheita regular não só fornece alimentos frescos, mas também estimula as plantas a produzirem mais. 
                        Ervas aromáticas, por exemplo, ficam mais cheias quando podadas regularmente. Hortaliças folhosas 
                        podem ser colhidas folha por folha, permitindo que a planta continue crescendo.
                      </p>
                      <p>
                        Após cada ciclo de cultivo, renove o substrato parcialmente, adicione composto orgânico e planeje 
                        a rotação de culturas para manter o solo saudável e produtivo.
                      </p>

                      <h2>Conclusão</h2>
                      <p>
                        Criar e manter um jardim vertical comestível é uma jornada gratificante que combina sustentabilidade, 
                        saúde e beleza estética. Com planejamento adequado, escolha correta de plantas e cuidados regulares, 
                        você terá acesso a alimentos frescos, orgânicos e nutritivos durante todo o ano, transformando 
                        espaços vazios em verdadeiros oásis verdes produtivos.
                      </p>
                      <p>
                        Comece pequeno, aprenda com a experiência e vá expandindo gradualmente seu jardim vertical. 
                        A satisfação de colher seus próprios alimentos, mesmo em um apartamento urbano, é incomparável!
                      </p>
                    </>
                  )}

                  {post.categorySlug === "cuidados-e-manutencao" && (
                    <>
                      <h2>A Importância da Manutenção Adequada</h2>
                      <p>
                        Um jardim vertical bem cuidado não apenas cresce de forma saudável e vigorosa, mas também 
                        permanece bonito e produtivo por muito mais tempo. A manutenção regular previne problemas 
                        antes que se tornem graves e garante que suas plantas recebam exatamente o que precisam 
                        para prosperar.
                      </p>
                      <p>
                        Jardins verticais apresentam desafios únicos de manutenção devido à sua estrutura vertical, 
                        densidade de plantio e exposição variada aos elementos. Dominar técnicas específicas de cuidado 
                        garante que seu investimento de tempo e recursos resulte em um jardim exuberante durante todo o ano.
                      </p>

                      <h2>Sistemas de Irrigação e Gestão de Água</h2>
                      <p>
                        A irrigação adequada é o pilar fundamental de qualquer jardim vertical bem-sucedido. Ao contrário 
                        de jardins tradicionais no solo, jardins verticais enfrentam desafios únicos relacionados à 
                        drenagem acelerada pela gravidade e distribuição desigual de água entre diferentes níveis.
                      </p>
                      <p>
                        Sistemas de gotejamento são ideais para jardins verticais, pois fornecem água diretamente às 
                        raízes de forma consistente e econômica. Um sistema bem planejado pode reduzir o consumo de água 
                        em até 70% comparado à rega manual, ao mesmo tempo em que garante que cada planta receba a 
                        quantidade exata necessária.
                      </p>

                      <h3>Configuração do Sistema de Gotejamento</h3>
                      <ul>
                        <li><strong>Timer programável:</strong> Essencial para automação e consistência</li>
                        <li><strong>Pressão adequada:</strong> 1-2 bar para emissores funcionarem corretamente</li>
                        <li><strong>Filtro de água:</strong> Previne entupimento dos emissores</li>
                        <li><strong>Emissores ajustáveis:</strong> 2-4 litros/hora por planta</li>
                        <li><strong>Distribuição por níveis:</strong> Compensação para diferenças de altura</li>
                      </ul>

                      <h2>Nutrição e Fertilização</h2>
                      <p>
                        Plantas em jardins verticais dependem muito mais de fertilização regular do que plantas em solo 
                        convencional. O volume limitado de substrato significa que os nutrientes se esgotam rapidamente, 
                        especialmente com irrigação frequente que pode lixiviar minerais solúveis.
                      </p>
                      <p>
                        Soluções nutritivas balanceadas, aplicadas através da fertirrigação ou pulverização foliar, 
                        garantem que suas plantas recebam todos os macronutrientes (NPK) e micronutrientes essenciais 
                        para crescimento vigoroso e produção abundante.
                      </p>

                      <h3>Programa de Fertilização Recomendado</h3>
                      <ul>
                        <li><strong>Vegetais folhosos:</strong> NPK 10-10-10, aplicação semanal diluída</li>
                        <li><strong>Plantas frutíferas:</strong> NPK 5-10-10 durante floração e frutificação</li>
                        <li><strong>Ervas aromáticas:</strong> Fertilização leve, quinzenal para concentrar óleos</li>
                        <li><strong>Composto orgânico:</strong> Aplicação mensal para manter vida microbiana</li>
                      </ul>

                      <h2>Controle de Pragas e Doenças</h2>
                      <p>
                        Jardins verticais, quando bem ventilados, tendem a ter menos problemas com doenças fúngicas. 
                        No entanto, a densidade de plantio pode facilitar a propagação rápida de pragas. Monitoramento 
                        regular e intervenção precoce são fundamentais para manter seu jardim saudável.
                      </p>
                      <p>
                        Métodos de controle biológico são preferíveis, utilizando insetos benéficos como joaninhas para 
                        controlar pulgões, e vespas parasitoides para lagartas. Tratamentos orgânicos como óleo de neem, 
                        calda de alho e sabão inseticida são eficazes e seguros para plantas comestíveis.
                      </p>

                      <h3>Identificação Visual de Problemas Comuns</h3>
                      <ul>
                        <li><strong>Folhas amareladas:</strong> Pode indicar deficiência de nitrogênio ou excesso de água</li>
                        <li><strong>Manchas escuras:</strong> Possível doença fúngica, melhorar ventilação</li>
                        <li><strong>Folhas retorcidas:</strong> Presença de pulgões ou ácaros</li>
                        <li><strong>Crescimento lento:</strong> Falta de nutrientes ou luz inadequada</li>
                        <li><strong>Murchamento apesar de irrigação:</strong> Possível podridão de raízes</li>
                      </ul>

                      <h2>Poda e Treinamento</h2>
                      <p>
                        A poda regular não é apenas estética - é fundamental para maximizar produção e manter plantas 
                        saudáveis em espaços verticais limitados. Remover folhas velhas, galhos improdutivos e direcionar 
                        o crescimento garante que a energia da planta seja focada onde você quer.
                      </p>
                      <p>
                        Técnicas de treinamento, como amarração e tutoramento, permitem que plantas trepadeiras e 
                        frutíferas cresçam verticalmente de forma organizada, aproveitando ao máximo o espaço disponível 
                        e facilitando colheita e manutenção.
                      </p>

                      <h3>Técnicas de Poda por Tipo de Planta</h3>
                      <ul>
                        <li><strong>Tomates:</strong> Remover brotos laterais, manter 1-2 hastes principais</li>
                        <li><strong>Ervas aromáticas:</strong> Pinçar pontas regularmente para estimular arbustamento</li>
                        <li><strong>Folhosas:</strong> Colheita de folhas externas estimula novo crescimento</li>
                        <li><strong>Plantas frutíferas:</strong> Poda de formação e remoção de frutos em excesso</li>
                      </ul>

                      <h2>Manutenção Sazonal</h2>
                      <p>
                        Cada estação traz desafios e oportunidades únicas para jardins verticais. Adaptar seus cuidados 
                        ao ciclo natural das estações garante que suas plantas prosperem durante todo o ano, aproveitando 
                        as melhores condições de cada período.
                      </p>
                      <p>
                        Primavera e outono são ideais para plantio e renovação. Verão exige atenção especial à irrigação 
                        e sombreamento. Inverno requer proteção contra frio e redução de fertilização. Planejar com 
                        antecedência permite transições suaves entre estações.
                      </p>

                      <h3>Cuidados por Estação</h3>
                      <ul>
                        <li><strong>Primavera:</strong> Renovação de substrato, plantio de anuais, aumento gradual de fertilização</li>
                        <li><strong>Verão:</strong> Irrigação intensiva, sombreamento parcial, monitoramento de pragas</li>
                        <li><strong>Outono:</strong> Colheita final, preparação para frio, redução de irrigação</li>
                        <li><strong>Inverno:</strong> Proteção contra geadas, manutenção mínima, planejamento para primavera</li>
                      </ul>

                      <h2>Ferramentas Essenciais</h2>
                      <p>
                        Ter as ferramentas certas facilita enormemente a manutenção do jardim vertical. Investir em 
                        equipamentos de qualidade adequados para trabalho em altura e espaços confinados economiza tempo, 
                        reduz esforço e produz resultados profissionais.
                      </p>

                      <h3>Kit Básico de Ferramentas</h3>
                      <ul>
                        <li><strong>Tesouras de poda:</strong> Pequena (precisão) e média (ramos até 1,5cm)</li>
                        <li><strong>Medidor de umidade:</strong> Para irrigação precisa</li>
                        <li><strong>Pulverizador:</strong> Aplicação de tratamentos foliares</li>
                        <li><strong>Podador de altura:</strong> Para alcançar áreas elevadas com segurança</li>
                        <li><strong>Kit de teste de pH:</strong> Monitorar condições do substrato</li>
                        <li><strong>Luvas de jardinagem:</strong> Proteção para poda e manuseio</li>
                      </ul>

                      <h2>Monitoramento e Registro</h2>
                      <p>
                        Manter registros detalhados de atividades de manutenção, observações de crescimento e problemas 
                        encontrados permite identificar padrões, otimizar práticas e prevenir repetição de erros. 
                        Fotos semanais documentam progresso e ajudam a diagnosticar problemas comparando com períodos anteriores.
                      </p>

                      <h2>Conclusão</h2>
                      <p>
                        Manutenção adequada transforma um jardim vertical de uma coleção de plantas em um sistema produtivo 
                        e sustentável. Com irrigação automatizada, nutrição balanceada, controle preventivo de pragas e 
                        cuidados sazonais apropriados, seu jardim vertical prosperará, proporcionando colheitas abundantes 
                        e beleza estética durante todo o ano.
                      </p>
                      <p>
                        Lembre-se: consistência é mais importante que perfeição. Estabeleça uma rotina de manutenção semanal, 
                        observe suas plantas atentamente e ajuste práticas conforme necessário. Com o tempo, você desenvolverá 
                        intuição e seu jardim vertical se tornará cada vez mais fácil de manter!
                      </p>
                    </>
                  )}

                  {post.categorySlug === "tipos-de-jardins-verticais" && (
                    <>
                      <h2>Diversidade de Opções</h2>
                      <p>
                        Existem inúmeros tipos de jardins verticais, cada um com suas características, vantagens 
                        e requisitos específicos. Conhecer essas opções permite escolher a melhor solução para 
                        seu espaço, clima e objetivos de cultivo.
                      </p>
                      <p>
                        A escolha do tipo de jardim vertical ideal depende de vários fatores: espaço disponível, 
                        orçamento, experiência com jardinagem, tipo de plantas desejadas e tempo disponível para 
                        manutenção. Cada sistema tem suas particularidades e entender essas diferenças é fundamental 
                        para o sucesso do seu projeto.
                      </p>

                      <h2>Jardins Verticais Modulares</h2>
                      <p>
                        Sistemas modulares são compostos por unidades independentes que se encaixam ou empilham, 
                        oferecendo máxima flexibilidade. Você pode começar pequeno e expandir gradualmente, 
                        reorganizar módulos conforme necessário e até mesmo mover o jardim inteiro se necessário.
                      </p>
                      <p>
                        Cada módulo funciona como um vaso individual, facilitando manutenção, substituição de plantas 
                        e personalização. São ideais para iniciantes que querem experimentar antes de investir em 
                        sistemas maiores e permanentes.
                      </p>

                      <h3>Vantagens dos Sistemas Modulares</h3>
                      <ul>
                        <li><strong>Versatilidade total:</strong> Reorganize, adicione ou remova módulos facilmente</li>
                        <li><strong>Manutenção simplificada:</strong> Cada planta tem seu espaço independente</li>
                        <li><strong>Ideal para locatários:</strong> Sistema portátil, sem instalação permanente</li>
                        <li><strong>Expansão gradual:</strong> Comece com poucos módulos, expanda conforme experiência</li>
                        <li><strong>Substituição fácil:</strong> Troque plantas sem afetar as vizinhas</li>
                      </ul>

                      <h2>Jardins de Feltro e Tecido</h2>
                      <p>
                        Painéis de feltro criam verdadeiros tapetes verdes vivos. O tecido não-tecido retém umidade 
                        enquanto permite drenagem adequada, sendo leve o suficiente para instalação em qualquer parede. 
                        O visual moderno e limpo é perfeito para ambientes internos sofisticados.
                      </p>
                      <p>
                        Este sistema é particularmente eficiente em termos de espaço, permitindo alta densidade de plantio. 
                        A irrigação pode ser automatizada com sistema de gotejamento integrado, tornando manutenção 
                        extremamente prática.
                      </p>

                      <h3>Características dos Jardins de Feltro</h3>
                      <ul>
                        <li><strong>Extremamente leves:</strong> Não sobrecarregam estruturas</li>
                        <li><strong>Boa retenção de umidade:</strong> Reduz frequência de irrigação</li>
                        <li><strong>Estética clean:</strong> Visual moderno e minimalista</li>
                        <li><strong>Alta densidade:</strong> Muitas plantas em pouco espaço</li>
                        <li><strong>Instalação simples:</strong> Pendure como um quadro</li>
                      </ul>

                      <h2>Jardins com Paletes</h2>
                      <p>
                        Paletes de madeira reciclados são a solução mais econômica e sustentável para jardins verticais. 
                        Com mínimo investimento e criatividade, você transforma um material descartado em um jardim 
                        rústico e charmoso, perfeito para estilo farmhouse ou industrial.
                      </p>
                      <p>
                        A estrutura natural das ripas horizontais cria prateleiras ideais para vasos ou bolsões de plantio. 
                        O visual orgânico e artesanal adiciona personalidade única ao espaço, além de ser um projeto DIY 
                        acessível para qualquer nível de habilidade.
                      </p>

                      <h3>Benefícios dos Jardins com Paletes</h3>
                      <ul>
                        <li><strong>Custo baixíssimo:</strong> Paletes frequentemente gratuitos ou muito baratos</li>
                        <li><strong>Sustentabilidade:</strong> Reutilização de material que iria para o lixo</li>
                        <li><strong>Charme rústico:</strong> Visual natural e aconchegante</li>
                        <li><strong>Projeto DIY:</strong> Fácil de customizar e personalizar</li>
                        <li><strong>Versatilidade:</strong> Pode ser pintado, envernizado ou deixado natural</li>
                      </ul>

                      <h2>Jardins Hidropônicos Verticais</h2>
                      <p>
                        Sistemas hidropônicos eliminam completamente o uso de solo, cultivando plantas em solução nutritiva. 
                        O resultado é crescimento acelerado, maior produtividade e zero sujeira - perfeito para ambientes 
                        internos e espaços modernos.
                      </p>
                      <p>
                        Tecnicamente mais avançados, esses sistemas requerem conhecimento de nutrição vegetal e monitoramento 
                        de pH e condutividade elétrica. O investimento inicial é maior, mas os resultados em termos de 
                        produção e eficiência de água são incomparáveis.
                      </p>

                      <h3>Vantagens da Hidroponia Vertical</h3>
                      <ul>
                        <li><strong>Crescimento 30% mais rápido:</strong> Nutrientes otimizados constantemente disponíveis</li>
                        <li><strong>Economia de água 90%:</strong> Sistema fechado recircula água</li>
                        <li><strong>Zero sujeira:</strong> Ideal para ambientes internos limpos</li>
                        <li><strong>Maior produtividade:</strong> Condições perfeitamente controladas</li>
                        <li><strong>Sem pragas de solo:</strong> Elimina problemas comuns de substrato</li>
                      </ul>

                      <h2>Jardins com Garrafas PET</h2>
                      <p>
                        A reutilização de garrafas PET para criar jardins verticais é uma das soluções mais sustentáveis 
                        e acessíveis disponíveis. Com criatividade e poucos materiais, você transforma lixo plástico em 
                        um jardim funcional e produtivo.
                      </p>
                      <p>
                        Perfeito para projetos educacionais com crianças e para quem quer começar sem investimento. 
                        As garrafas são leves, fáceis de trabalhar e podem ser organizadas de múltiplas formas criativas.
                      </p>

                      <h3>Benefícios dos Jardins com PET</h3>
                      <ul>
                        <li><strong>Custo zero:</strong> Reutiliza material que você já tem</li>
                        <li><strong>Educativo:</strong> Ótimo para ensinar sustentabilidade</li>
                        <li><strong>Leve:</strong> Não sobrecarrega estruturas</li>
                        <li><strong>Versátil:</strong> Pode ser pintado e decorado</li>
                        <li><strong>Fácil de fazer:</strong> Projeto DIY simples para todos</li>
                      </ul>

                      <h2>Jardins de Bambu</h2>
                      <p>
                        Bambu traz elegância natural e sustentabilidade ao jardim vertical. O material cresce rapidamente, 
                        é extremamente resistente e cria estruturas com visual zen e sofisticado. Perfeito para quem busca 
                        harmonia estética e conexão com natureza.
                      </p>
                      <p>
                        Estruturas de bambu podem ser tão simples quanto uma treliça básica ou tão elaboradas quanto 
                        torres complexas com múltiplos níveis. O material é biodegradável, renovável e traz autenticidade 
                        orgânica ao espaço.
                      </p>

                      <h3>Características dos Jardins de Bambu</h3>
                      <ul>
                        <li><strong>Sustentável:</strong> Material de crescimento rápido e renovável</li>
                        <li><strong>Resistente:</strong> Suporta peso significativo apesar de leve</li>
                        <li><strong>Estética zen:</strong> Visual natural e tranquilo</li>
                        <li><strong>Versátil:</strong> Pode ser cortado e adaptado facilmente</li>
                        <li><strong>Durável:</strong> Com tratamento adequado, dura muitos anos</li>
                      </ul>

                      <h2>Jardins Suspensos</h2>
                      <p>
                        Plantas suspensas criam jardins aéreos que flutuam no espaço, liberando completamente o chão. 
                        São perfeitos para apartamentos pequenos e criam efeito visual impressionante com plantas 
                        pendentes que caem graciosamente.
                      </p>
                      <p>
                        Macramês, correntes decorativas e suportes elegantes transformam vasos simples em esculturas 
                        vivas. A variedade de alturas cria profundidade visual e permite aproveitar espaços aéreos 
                        normalmente desperdiçados.
                      </p>

                      <h3>Vantagens dos Jardins Suspensos</h3>
                      <ul>
                        <li><strong>Libera o chão:</strong> Espaço completamente livre</li>
                        <li><strong>Efeito decorativo:</strong> Plantas parecem flutuar</li>
                        <li><strong>Ideal para pendentes:</strong> Jibóias, samambaias brilham</li>
                        <li><strong>Fácil limpeza:</strong> Sem vasos no chão</li>
                        <li><strong>Boa ventilação:</strong> Ar circula por todos os lados</li>
                      </ul>

                      <h2>Jardins com Suculentas</h2>
                      <p>
                        Suculentas são as rainhas da baixa manutenção. Com formas escultóricas, cores vibrantes e 
                        necessidade mínima de água, são perfeitas para quem tem vida corrida ou está começando na jardinagem. 
                        Criam composições artísticas de tirar o fôlego.
                      </p>
                      <p>
                        Quadros vivos de suculentas são verdadeiras obras de arte. A variedade de texturas, cores e formas 
                        permite criar mosaicos vivos que mudam lentamente ao longo das estações, mantendo beleza durante 
                        todo o ano.
                      </p>

                      <h3>Benefícios dos Jardins de Suculentas</h3>
                      <ul>
                        <li><strong>Baixíssima manutenção:</strong> Rega espaçada, mínimos cuidados</li>
                        <li><strong>Visual moderno:</strong> Formas geométricas e cores vibrantes</li>
                        <li><strong>Crescimento lento:</strong> Mantém composição por longo tempo</li>
                        <li><strong>Variedade incrível:</strong> Centenas de espécies disponíveis</li>
                        <li><strong>Ideal para viajantes:</strong> Aguentam bem períodos sem água</li>
                      </ul>

                      <h2>Jardins para Ambientes Internos</h2>
                      <p>
                        Levar natureza para dentro de casa melhora qualidade do ar, reduz stress e cria ambientes mais 
                        acolhedores. Jardins verticais internos requerem seleção cuidadosa de plantas tolerantes à sombra 
                        e sistemas de irrigação que não causem vazamentos.
                      </p>
                      <p>
                        Iluminação artificial com lâmpadas LED full spectrum compensa falta de luz natural, permitindo 
                        cultivar ampla variedade de plantas mesmo em ambientes sem janelas. O resultado é um oásis verde 
                        que transforma completamente a atmosfera do espaço.
                      </p>

                      <h3>Plantas Ideais para Ambientes Internos</h3>
                      <ul>
                        <li><strong>Sombra total:</strong> Jibóia, samambaia, lírio-da-paz</li>
                        <li><strong>Meia-sombra:</strong> Peperômia, filodendro, maranta</li>
                        <li><strong>Purificadoras:</strong> Espada-de-são-jorge, dracena</li>
                        <li><strong>Baixa manutenção:</strong> Zamioculca, pothos</li>
                      </ul>

                      <h2>Jardins Aromáticos</h2>
                      <p>
                        Ter temperos frescos ao alcance da mão na cozinha é o sonho de qualquer entusiasta culinário. 
                        Jardins verticais aromáticos trazem manjericão, alecrim, hortelã e outras ervas sempre disponíveis, 
                        além de perfumar naturalmente o ambiente.
                      </p>
                      <p>
                        A colheita regular não só fornece ingredientes frescos, mas também estimula as plantas a produzirem 
                        mais. O resultado é um ciclo virtuoso de crescimento contínuo e sabor incomparável em suas receitas.
                      </p>

                      <h3>Ervas Essenciais para Cozinha</h3>
                      <ul>
                        <li><strong>Manjericão:</strong> Para massas, pizzas e saladas</li>
                        <li><strong>Alecrim:</strong> Carnes, batatas e pães</li>
                        <li><strong>Hortelã:</strong> Chás, drinks e sobremesas</li>
                        <li><strong>Salsinha:</strong> Tempero universal</li>
                        <li><strong>Cebolinha:</strong> Omeletes e sopas</li>
                        <li><strong>Tomilho:</strong> Legumes assados</li>
                      </ul>

                      <h2>Escolhendo o Tipo Ideal para Você</h2>
                      <p>
                        A escolha do tipo de jardim vertical ideal depende de uma análise honesta de suas condições, 
                        objetivos e recursos disponíveis. Considere espaço físico, orçamento, tempo para manutenção, 
                        experiência com plantas e resultado estético desejado.
                      </p>
                      <p>
                        Não tenha medo de começar simples e evoluir. Muitos jardineiros começam com garrafas PET ou 
                        paletes e, conforme ganham experiência e confiança, migram para sistemas mais sofisticados. 
                        O importante é começar e aprender fazendo!
                      </p>

                      <h2>Conclusão</h2>
                      <p>
                        Cada tipo de jardim vertical tem personalidade única e se adequa a diferentes necessidades e estilos. 
                        Desde soluções econômicas com materiais reciclados até sistemas hidropônicos high-tech, existe uma 
                        opção perfeita para cada espaço, orçamento e nível de experiência.
                      </p>
                      <p>
                        O mais importante é escolher um sistema que você consiga manter com consistência e que traga alegria 
                        ao seu dia a dia. Seu jardim vertical deve ser fonte de satisfação, não de stress. Escolha sabiamente, 
                        comece com entusiasmo e prepare-se para transformar seu espaço em um oásis verde vertical!
                      </p>
                    </>
                  )}
                </div>

                <footer className="entry-footer">
                  <div className="entry-footer-top">
                    {/* Social share removed - no active social media accounts */}
                  </div>
                </footer>
              </article>

              {/* Related Posts */}
              <section className="related-posts" style={{ marginTop: '3rem' }}>
                <h2>Artigos Relacionados</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                  {relatedPosts.map((relatedPost) => (
                    <article key={relatedPost.id} className="related-post-card">
                      <Link href={`/posts/${relatedPost.slug}`}>
                        <Image
                          width={300}
                          height={200}
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          style={{ width: '100%', height: 'auto' }}
                        />
                        <h3>{relatedPost.title}</h3>
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
