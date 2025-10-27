import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostsByTag, getAllTags } from "@/data/posts";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import Script from "next/script";

interface TagPageProps {
    params: {
        slug: string;
    };
}

// Generate static params for all tags
export async function generateStaticParams() {
    const allTags = getAllTags();
    return allTags.map((tag) => ({
        slug: encodeURIComponent(tag),
    }));
}

// Generate metadata for each tag page
export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
    const { slug } = await params;
    const tag = decodeURIComponent(slug);
    const siteUrl = 'https://newbrightnotes.com';
    const tagUrl = `${siteUrl}/tag/${encodeURIComponent(tag)}`;

    return {
        title: `Tag: ${tag} | New Bright Notes`,
        description: `Explore todos os artigos relacionados a ${tag} no New Bright Notes`,
        alternates: {
            canonical: tagUrl,
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
        openGraph: {
            type: 'website',
            locale: 'pt_BR',
            url: tagUrl,
            siteName: 'New Bright Notes',
            title: `Tag: ${tag} | New Bright Notes`,
            description: `Explore todos os artigos relacionados a ${tag} no New Bright Notes`,
        },
        twitter: {
            card: 'summary_large_image',
            title: `Tag: ${tag} | New Bright Notes`,
            description: `Explore todos os artigos relacionados a ${tag} no New Bright Notes`,
        },
    };
}

export default async function TagPage({ params }: TagPageProps) {
    const { slug } = await params;
    const tag = decodeURIComponent(slug);
    const tagPosts = getPostsByTag(tag);

    if (tagPosts.length === 0) {
        notFound();
    }

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
                name: "Tags",
                item: `${siteUrl}/tag`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: tag,
                // Last item should NOT have 'item' field per Google's requirement
            },
        ],
    };

    // JSON-LD for Collection
    const collectionStructuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: `Tag: ${tag}`,
        description: `Explore todos os artigos relacionados a ${tag} no New Bright Notes`,
        url: `${siteUrl}/tag/${encodeURIComponent(tag)}`,
        mainEntity: {
            "@type": "ItemList",
            itemListElement: tagPosts.map((post, index) => ({
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

            <section className="site-main with-right-sidebar">
            <div className="site-container">
                <div className="site-row">
                    <div className="site-content compact-view with-sidebar" id="site-content" role="main">
                        <Breadcrumb items={[{ label: "Tags" }, { label: tag }]} />

                        <header className="page-header" style={{ marginBottom: "3rem" }}>
                            <h1 className="page-title">Tag: {tag}</h1>
                            <p style={{ color: "#666", marginTop: "1rem" }}>
                                {tagPosts.length} {tagPosts.length === 1 ? "artigo encontrado" : "artigos encontrados"}
                            </p>
                        </header>

                        <div className="posts-grid">
                            {tagPosts.map((post) => (
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
                            ))}
                        </div>
                    </div>
                    <Sidebar />
                </div>
            </div>
        </section>
        </>
    );
}
