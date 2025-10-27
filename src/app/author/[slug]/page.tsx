import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { authors, getPostsByAuthor } from "@/data/posts";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";

interface AuthorPageProps {
    params: {
        slug: string;
    };
}

// Generate static params for all authors
export async function generateStaticParams() {
    return authors.map((author) => ({
        slug: author.slug,
    }));
}

// Generate metadata for each author page
export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
    const { slug } = await params;
    const author = authors.find((a) => a.slug === slug);

    if (!author) {
        return {
            title: "Autor não encontrado",
        };
    }

    const siteUrl = 'https://newbrightnotes.com';
    const authorUrl = `${siteUrl}/author/${author.slug}`;

    return {
        title: `${author.name} | New Bright Notes`,
        description: author.bio,
        alternates: {
            canonical: authorUrl,
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
            type: "profile",
            locale: 'pt_BR',
            url: authorUrl,
            siteName: 'New Bright Notes',
            title: `${author.name} | New Bright Notes`,
            description: author.bio,
        },
        twitter: {
            card: 'summary_large_image',
            title: `${author.name} | New Bright Notes`,
            description: author.bio,
        },
    };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
    const { slug } = await params;
    const author = authors.find((a) => a.slug === slug);

    if (!author) {
        notFound();
    }

    const authorPosts = getPostsByAuthor(slug);

    return (
        <section className="site-main with-right-sidebar">
            <div className="site-container">
                <div className="site-row">
                    <div className="site-content compact-view with-sidebar" id="site-content" role="main">
                        <Breadcrumb items={[{ label: "Autor" }, { label: author.name }]} />

                        {/* Author Bio */}
                        <div
                            className="author-bio"
                            style={{
                                background: "#f7f7f8",
                                padding: "2rem",
                                borderRadius: "8px",
                                marginBottom: "3rem",
                            }}
                        >
                            <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
                                {author.image && (
                                    <Image
                                        src={author.image}
                                        alt={author.name}
                                        width={120}
                                        height={120}
                                        style={{ borderRadius: "50%", objectFit: "cover" }}
                                    />
                                )}
                                <div style={{ flex: 1, minWidth: "250px" }}>
                                    <h1 style={{ marginBottom: "0.5rem" }}>{author.name}</h1>
                                    <p style={{ color: "#666", marginBottom: "1rem" }}>{author.bio}</p>
                                    {author.social && (
                                        <div style={{ display: "flex", gap: "1rem" }}>
                                            {author.social.facebook && (
                                                <a
                                                    href={author.social.facebook}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="Facebook"
                                                    style={{
                                                        padding: "0.5rem 1rem",
                                                        background: "#3b5998",
                                                        color: "white",
                                                        borderRadius: "4px",
                                                        textDecoration: "none",
                                                        fontSize: "0.9rem",
                                                    }}
                                                >
                                                    Facebook
                                                </a>
                                            )}
                                            {author.social.twitter && (
                                                <a
                                                    href={author.social.twitter}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="Twitter"
                                                    style={{
                                                        padding: "0.5rem 1rem",
                                                        background: "#1da1f2",
                                                        color: "white",
                                                        borderRadius: "4px",
                                                        textDecoration: "none",
                                                        fontSize: "0.9rem",
                                                    }}
                                                >
                                                    Twitter
                                                </a>
                                            )}
                                            {author.social.instagram && (
                                                <a
                                                    href={author.social.instagram}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="Instagram"
                                                    style={{
                                                        padding: "0.5rem 1rem",
                                                        background: "#e4405f",
                                                        color: "white",
                                                        borderRadius: "4px",
                                                        textDecoration: "none",
                                                        fontSize: "0.9rem",
                                                    }}
                                                >
                                                    Instagram
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <header className="page-header" style={{ marginBottom: "2rem" }}>
                            <h2>Artigos de {author.name}</h2>
                            <p style={{ color: "#666", marginTop: "0.5rem" }}>
                                {authorPosts.length} {authorPosts.length === 1 ? "artigo publicado" : "artigos publicados"}
                            </p>
                        </header>

                        <div className="posts-grid">
                            {authorPosts.map((post) => (
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
                                                    <span className="entry-date">
                                                        <time>{post.date}</time>
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
                                                        Leia Mais
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
    );
}
