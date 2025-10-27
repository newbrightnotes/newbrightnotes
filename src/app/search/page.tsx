"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useSearchParams } from "next/navigation";
import { posts, categories } from "@/data/posts";
import Breadcrumb from "@/components/Breadcrumb";

function SearchContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";
    const categoryFilter = searchParams.get("category") || "";

    const [searchResults, setSearchResults] = useState(posts);
    const [filteredResults, setFilteredResults] = useState(posts);

    useEffect(() => {
        // Search logic
        if (query) {
            const lowerQuery = query.toLowerCase();
            const results = posts.filter((post) => {
                return (
                    post.title.toLowerCase().includes(lowerQuery) ||
                    post.excerpt.toLowerCase().includes(lowerQuery) ||
                    post.category.toLowerCase().includes(lowerQuery) ||
                    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
                    post.author.toLowerCase().includes(lowerQuery)
                );
            });
            setSearchResults(results);
        } else {
            setSearchResults(posts);
        }
    }, [query]);

    useEffect(() => {
        // Category filter logic
        if (categoryFilter) {
            const filtered = searchResults.filter(
                (post) => post.categorySlug === categoryFilter
            );
            setFilteredResults(filtered);
        } else {
            setFilteredResults(searchResults);
        }
    }, [searchResults, categoryFilter]);

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
                name: "Busca",
                // Last item should NOT have 'item' field per Google's requirement
            },
        ],
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

            <section className="site-main">
            <div className="site-container">
                <div className="site-row">
                    <div className="site-content" id="site-content" role="main">
                        <Breadcrumb items={[{ label: "Busca" }]} />

                        <header className="page-header" style={{ marginBottom: "3rem" }}>
                            <h1 className="page-title">
                                {query
                                    ? `Resultados da busca por: "${query}"`
                                    : "Buscar artigos"}
                            </h1>
                            <p style={{ color: "#666", marginTop: "1rem" }}>
                                {filteredResults.length} {filteredResults.length === 1 ? "resultado encontrado" : "resultados encontrados"}
                            </p>
                        </header>

                        {/* Search Form */}
                        <form
                            method="get"
                            action="/search"
                            style={{
                                marginBottom: "3rem",
                                padding: "2rem",
                                background: "#f7f7f8",
                                borderRadius: "8px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    gap: "1rem",
                                    flexWrap: "wrap",
                                    alignItems: "flex-end",
                                }}
                            >
                                <div style={{ flex: "1", minWidth: "250px" }}>
                                    <label
                                        htmlFor="search-input"
                                        style={{
                                            display: "block",
                                            marginBottom: "0.5rem",
                                            fontWeight: "500",
                                        }}
                                    >
                                        Pesquisar:
                                    </label>
                                    <input
                                        type="text"
                                        id="search-input"
                                        name="q"
                                        defaultValue={query}
                                        placeholder="Digite sua busca..."
                                        style={{
                                            width: "100%",
                                            padding: "0.75rem",
                                            border: "1px solid #e5e5e9",
                                            borderRadius: "4px",
                                            fontSize: "1rem",
                                        }}
                                    />
                                </div>
                                <div style={{ minWidth: "200px" }}>
                                    <label
                                        htmlFor="category-filter"
                                        style={{
                                            display: "block",
                                            marginBottom: "0.5rem",
                                            fontWeight: "500",
                                        }}
                                    >
                                        Categoria:
                                    </label>
                                    <select
                                        id="category-filter"
                                        name="category"
                                        defaultValue={categoryFilter}
                                        style={{
                                            width: "100%",
                                            padding: "0.75rem",
                                            border: "1px solid #e5e5e9",
                                            borderRadius: "4px",
                                            fontSize: "1rem",
                                            background: "white",
                                        }}
                                    >
                                        <option value="">Todas as categorias</option>
                                        {categories.map((cat) => (
                                            <option key={cat.slug} value={cat.slug}>
                                                {cat.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    style={{
                                        padding: "0.75rem 2rem",
                                        background: "var(--color-primary)",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "4px",
                                        fontSize: "1rem",
                                        cursor: "pointer",
                                        fontWeight: "500",
                                    }}
                                >
                                    Buscar
                                </button>
                            </div>
                        </form>

                        {/* Search Results */}
                        {filteredResults.length === 0 ? (
                            <div
                                style={{
                                    textAlign: "center",
                                    padding: "3rem",
                                    background: "#f7f7f8",
                                    borderRadius: "8px",
                                }}
                            >
                                <h2 style={{ marginBottom: "1rem" }}>Nenhum resultado encontrado</h2>
                                <p style={{ color: "#666", marginBottom: "2rem" }}>
                                    Tente usar palavras-chave diferentes ou remover filtros.
                                </p>
                                <Link
                                    href="/"
                                    style={{
                                        display: "inline-block",
                                        padding: "0.75rem 2rem",
                                        background: "var(--color-primary)",
                                        color: "white",
                                        textDecoration: "none",
                                        borderRadius: "4px",
                                    }}
                                >
                                    Voltar à página inicial
                                </Link>
                            </div>
                        ) : (
                            <div className="posts-grid">
                                {filteredResults.map((post) => (
                                    <article
                                        key={post.id}
                                        className="post type-post status-publish format-standard has-post-thumbnail entry entry-center"
                                        style={{ marginBottom: "2rem" }}
                                    >
                                        <div className="entry-row">
                                            <div className="entry-full-center">
                                                <div className="entry-header">
                                                    <div className="entry-meta">
                                                        <span className="entry-cat">
                                                            <Link
                                                                href={`/category/${post.categorySlug}`}
                                                                rel="category tag"
                                                            >
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
                                                            Leia Mais
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={
            <section className="site-main">
                <div className="site-container">
                    <div className="site-row">
                        <div className="site-content" id="site-content" role="main">
                            <div style={{ textAlign: 'center', padding: '3rem' }}>
                                <p>Carregando busca...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        }>
            <SearchContent />
        </Suspense>
    );
}
