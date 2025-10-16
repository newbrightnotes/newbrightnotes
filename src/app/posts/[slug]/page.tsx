import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
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
                      By <Link href="/author" title={`Posts de ${post.author}`} rel="author">
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
                  <p>{post.excerpt}</p>
                  
                  {/* Placeholder for full content - you can expand this later */}
                  <p>
                    {post.category === "Jardinagem Vertical Comestível" && (
                      <>
                        Cultivar em jardins verticais é uma solução inteligente para quem deseja ter uma horta 
                        em casa mas tem pouco espaço disponível. Esta técnica permite maximizar o uso do espaço 
                        vertical, seja em varandas, paredes externas ou até mesmo em ambientes internos bem iluminados.
                      </>
                    )}
                  </p>

                  <h2>Benefícios da Jardinagem Vertical</h2>
                  <ul>
                    <li>Aproveitamento máximo do espaço disponível</li>
                    <li>Acesso fácil para manutenção e colheita</li>
                    <li>Melhor controle de pragas e doenças</li>
                    <li>Estética agradável e decorativa</li>
                    <li>Produção de alimentos frescos em casa</li>
                  </ul>

                  <h2>Dicas Importantes</h2>
                  <p>
                    Para ter sucesso com jardins verticais, é essencial escolher as plantas certas, 
                    garantir boa drenagem, usar substrato de qualidade e manter uma rotina de cuidados. 
                    A iluminação adequada é fundamental, assim como a rega regular sem encharcar.
                  </p>

                  <p>
                    Lembre-se de que cada planta tem suas necessidades específicas. Pesquise sobre 
                    os requisitos de luz, água e nutrientes de cada espécie que você deseja cultivar 
                    para garantir os melhores resultados.
                  </p>
                </div>

                <footer className="entry-footer">
                  <div className="entry-footer-top">
                    <div className="entry-social-share">
                      <a 
                        href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Compartilhar no Facebook"
                      >
                        <span className="fa fa-facebook"></span>
                      </a>
                      <a 
                        href={`https://twitter.com/intent/tweet?url=${postUrl}&text=${encodeURIComponent(post.title)}`}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Compartilhar no Twitter"
                      >
                        <span className="fa fa-twitter"></span>
                      </a>
                      <a 
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${postUrl}&title=${encodeURIComponent(post.title)}`}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Compartilhar no LinkedIn"
                      >
                        <span className="fa fa-linkedin"></span>
                      </a>
                      <a 
                        href={`https://pinterest.com/pin/create/button/?url=${postUrl}&description=${encodeURIComponent(post.title)}`}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Compartilhar no Pinterest"
                      >
                        <span className="fa fa-pinterest-p"></span>
                      </a>
                    </div>
                  </div>
                </footer>
              </article>

              {/* Related Posts */}
              <section className="related-posts" style={{ marginTop: '3rem' }}>
                <h2>Artigos Relacionados</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                  {posts
                    .filter((p) => p.categorySlug === post.categorySlug && p.id !== post.id)
                    .slice(0, 3)
                    .map((relatedPost) => (
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
