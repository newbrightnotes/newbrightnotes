import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostsByPage, getTotalPages, POSTS_PER_PAGE } from "@/data/posts";
import Pagination from "@/components/Pagination";
import BannerCarousel from "@/components/BannerCarousel";
import { posts } from "@/data/posts";

interface PageProps {
    params: {
        page: string;
    };
}

// Generate static params for all pages
export async function generateStaticParams() {
    const totalPages = getTotalPages();
    return Array.from({ length: totalPages }, (_, i) => ({
        page: (i + 1).toString(),
    }));
}

// Generate metadata for each page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { page } = await params;
    const pageNumber = parseInt(page);
    const totalPages = getTotalPages();

    if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > totalPages) {
        return {
            title: "Página não encontrada",
        };
    }

    return {
        title: `Página ${pageNumber} | New Bright Notes`,
        description: `Explore nossa coleção de artigos sobre jardinagem vertical, sustentabilidade e vida urbana - Página ${pageNumber}`,
        robots: {
            index: pageNumber <= 5, // Only index first 5 pages to avoid duplicate content issues
            follow: true,
        },
        alternates: {
            canonical: `https://newbrightnotes.com/page/${pageNumber}`,
        },
    };
}

export default async function Page({ params }: PageProps) {
    const { page } = await params;
    const pageNumber = parseInt(page);
    const totalPages = getTotalPages();

    if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > totalPages) {
        notFound();
    }

    // Redirect page 1 to homepage
    if (pageNumber === 1) {
        notFound(); // In Next.js 15, we use notFound for redirects in generateStaticParams
    }

    const pagePosts = getPostsByPage(pageNumber, POSTS_PER_PAGE);
    const carouselPosts = posts.slice(0, 5);

    return (
        <>
            {pageNumber === 1 && <BannerCarousel posts={carouselPosts} />}
            <section className="site-main with-right-sidebar">
                <div className="site-container">
                    <div className="site-row">
                        <div className="site-content compact-view with-sidebar" id="site-content" role="main">
                            {pagePosts.map((post) => (
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
                                                        By{" "}
                                                        <Link
                                                            href={`/author/${post.authorSlug}`}
                                                            title={`Posts de ${post.author}`}
                                                            rel="author"
                                                        >
                                                            {post.author}
                                                        </Link>
                                                    </span>
                                                    <span className="entry-date">
                                                        {" "}on <Link href="#">{post.date}</Link>
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
                                                        Continue Reading
                                                    </Link>
                                                    <div className="entry-social-share">
                                                        <a
                                                            href={`https://www.facebook.com/sharer/sharer.php?u=https://newbrightnotes.com/posts/${post.slug}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            aria-label="Share on Facebook"
                                                        >
                                                            <span>f</span>
                                                        </a>
                                                        <a
                                                            href={`https://twitter.com/intent/tweet?url=https://newbrightnotes.com/posts/${post.slug}&text=${encodeURIComponent(
                                                                post.title
                                                            )}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            aria-label="Share on Twitter"
                                                        >
                                                            <span>𝕏</span>
                                                        </a>
                                                        <a
                                                            href={`https://www.linkedin.com/shareArticle?mini=true&url=https://newbrightnotes.com/posts/${post.slug}&title=${encodeURIComponent(
                                                                post.title
                                                            )}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            aria-label="Share on LinkedIn"
                                                        >
                                                            <span>in</span>
                                                        </a>
                                                        <a
                                                            href={`https://pinterest.com/pin/create/button/?url=https://newbrightnotes.com/posts/${post.slug}&description=${encodeURIComponent(
                                                                post.title
                                                            )}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            aria-label="Share on Pinterest"
                                                        >
                                                            <span>P</span>
                                                        </a>
                                                        <a href="#" aria-label="Comments">
                                                            <span>💬 0</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                            <Pagination currentPage={pageNumber} totalPages={totalPages} basePath="" />
                        </div>
                        <div className="site-sidebar" id="sidebar" role="complementary"></div>
                    </div>
                </div>
            </section>
        </>
    );
}
