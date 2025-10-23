import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getRelatedPosts } from "@/data/posts";
import Script from "next/script";

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

  // JSON-LD structured data for Article
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: imageUrl,
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Person",
      name: post.author,
      url: `${siteUrl}/author`,
    },
    publisher: {
      "@type": "Organization",
      name: "New Bright Notes",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/cropped-LOGOTIPO-2.png`,
      },
    },
    description: post.excerpt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
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
        item: postUrl,
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
                      By <Link href={`/author/${post.authorSlug}`} title={`Posts de ${post.author}`} rel="author">
                        {post.author}
                      </Link>
                    </span>
                    <span className="entry-date">
                      {" "}on <time>{post.date}</time>
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
