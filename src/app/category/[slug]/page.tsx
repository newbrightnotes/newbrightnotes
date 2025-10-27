import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getPostsByCategory } from "@/data/posts";
import Pagination from "@/components/Pagination";
import Script from "next/script";

interface CategoryPageProps {
  params: {
    slug: string;
  };
  searchParams?: {
    page?: string;
  };
}

// Define all categories
// Generate static params for all categories
export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

// Generate metadata for each category
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: "Categoria não encontrada",
    };
  }

  const siteUrl = "https://newbrightnotes.com";
  const categoryUrl = `${siteUrl}/category/${category.slug}`;

  return {
    title: `${category.name} | New Bright Notes`,
    description: category.description,
    keywords: ["jardins verticais", category.name, "jardinagem urbana", "cultivo vertical", "horticultura"],
    alternates: {
      canonical: categoryUrl,
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: categoryUrl,
      siteName: "New Bright Notes",
      title: `${category.name} | New Bright Notes`,
      description: category.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} | New Bright Notes`,
      description: category.description,
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

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  // Get page number from search params
  const sp = await searchParams;
  const pageNumber = parseInt(sp?.page || "1");
  
  // Filter posts by category with pagination
  const { posts: categoryPosts, totalPages, totalPosts } = getPostsByCategory(slug, pageNumber);

  const siteUrl = "https://newbrightnotes.com";
  const categoryUrl = `${siteUrl}/category/${category.slug}`;

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
        name: category.name,
      },
    ],
  };

  // JSON-LD for Collection
  const collectionStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.name,
    description: category.description,
    url: categoryUrl,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: categoryPosts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteUrl}/posts/${post.slug}`,
        name: post.title,
      })),
    },
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
      <Script
        id="collection-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionStructuredData),
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
                  <li aria-current="page">{category.name}</li>
                </ol>
              </nav>

              {/* Category Header */}
              <header className="category-header" style={{ marginBottom: '3rem' }}>
                <h1 className="category-title">{category.name}</h1>
                <p className="category-description">{category.description}</p>
                <p style={{ marginTop: '1rem', color: '#666' }}>
                  {totalPosts} {totalPosts === 1 ? 'artigo' : 'artigos'} encontrados
                </p>
              </header>

              {/* Posts Grid */}
              <div className="posts-grid">
                {categoryPosts.length === 0 ? (
                  <p>Nenhum post encontrado nesta categoria.</p>
                ) : (
                  categoryPosts.map((post) => (
                    <article
                      key={post.id}
                      className="post type-post status-publish format-standard has-post-thumbnail entry entry-center"
                    >
                      <div className="entry-row">
                        <div className="entry-full-center">
                          <div className="entry-header">
                            <div className="entry-meta">
                              <span className="entry-cat">
                                <Link href={`/category/${post.categorySlug}`} rel="category tag">
                                  {post.category.toUpperCase()}
                                </Link>
                              </span>
                            </div>
                            <h2 className="entry-title">
                              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                            </h2>
                            <div className="entry-meta">
                              <span className="entry-author">
                                Por{" "}
                                <Link
                                  href={`/author/${post.authorSlug}`}
                                  title={`Posts de ${post.author}`}
                                  rel="author"
                                >
                                  {post.author}
                                </Link>
                              </span>
                              <span className="entry-date">
                                {" "}em <time dateTime={post.date}>{post.date}</time>
                              </span>
                            </div>
                          </div>
                          <div className="entry-media">
                            <Link
                              href={`/posts/${post.slug}`}
                              className="entry-thumb"
                              title={post.title}
                            >
                              <Image
                                width={780}
                                height={520}
                                src={post.image}
                                alt={post.title}
                                loading="lazy"
                              />
                            </Link>
                          </div>
                          <div className="entry-content">
                            <p>{post.excerpt}</p>
                          </div>
                          <div className="entry-footer">
                            <div className="entry-footer-top">
                              <Link
                                href={`/posts/${post.slug}`}
                                title={post.title}
                                className="entry-button"
                              >
                                Continuar Lendo
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))
                )}
              </div>
              {totalPages > 1 && (
                <Pagination 
                  currentPage={pageNumber} 
                  totalPages={totalPages} 
                  basePath={`/category/${slug}`} 
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
