import Link from "next/link";
import { getPopularPosts } from "@/data/posts";
import Image from "next/image";

export default function NotFound() {
    const popularPosts = getPopularPosts(3);

    return (
        <section className="site-main">
            <div className="site-container">
                <div className="site-row">
                    <div className="site-content" id="site-content" role="main">
                        <div
                            style={{
                                textAlign: "center",
                                padding: "4rem 2rem",
                                maxWidth: "800px",
                                margin: "0 auto",
                            }}
                        >
                            <h1
                                style={{
                                    fontSize: "6rem",
                                    marginBottom: "1rem",
                                    color: "var(--color-primary)",
                                    fontWeight: "bold",
                                }}
                            >
                                404
                            </h1>
                            <h2
                                style={{
                                    fontSize: "2rem",
                                    marginBottom: "1rem",
                                    color: "#333",
                                }}
                            >
                                Página Não Encontrada
                            </h2>
                            <p
                                style={{
                                    fontSize: "1.1rem",
                                    color: "#666",
                                    marginBottom: "2rem",
                                    lineHeight: "1.6",
                                }}
                            >
                                Desculpe, a página que você está procurando não existe ou foi movida.
                                Que tal explorar alguns de nossos artigos populares?
                            </p>

                            <Link
                                href="/"
                                style={{
                                    display: "inline-block",
                                    padding: "1rem 2rem",
                                    background: "var(--color-primary)",
                                    color: "white",
                                    textDecoration: "none",
                                    borderRadius: "4px",
                                    fontSize: "1rem",
                                    fontWeight: "500",
                                    marginBottom: "3rem",
                                }}
                            >
                                Voltar à Página Inicial
                            </Link>

                            {/* Search Box */}
                            <div style={{ marginBottom: "3rem" }}>
                                <h3 style={{ marginBottom: "1rem" }}>Ou tente buscar:</h3>
                                <form
                                    method="get"
                                    action="/search"
                                    style={{
                                        display: "flex",
                                        gap: "0.5rem",
                                        maxWidth: "500px",
                                        margin: "0 auto",
                                    }}
                                >
                                    <input
                                        type="search"
                                        name="q"
                                        placeholder="Digite sua busca..."
                                        style={{
                                            flex: 1,
                                            padding: "0.75rem",
                                            border: "1px solid #e5e5e9",
                                            borderRadius: "4px",
                                            fontSize: "1rem",
                                        }}
                                        aria-label="Campo de busca"
                                    />
                                    <button
                                        type="submit"
                                        style={{
                                            padding: "0.75rem 1.5rem",
                                            background: "var(--color-primary)",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "4px",
                                            cursor: "pointer",
                                            fontSize: "1rem",
                                        }}
                                    >
                                        Buscar
                                    </button>
                                </form>
                            </div>

                            {/* Popular Posts */}
                            <div style={{ marginTop: "3rem" }}>
                                <h3 style={{ marginBottom: "2rem", fontSize: "1.5rem" }}>
                                    Artigos Populares
                                </h3>
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                                        gap: "2rem",
                                    }}
                                >
                                    {popularPosts.map((post) => (
                                        <article
                                            key={post.id}
                                            style={{
                                                textAlign: "left",
                                                border: "1px solid #e5e5e9",
                                                borderRadius: "8px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <Link href={`/posts/${post.slug}`}>
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    width={300}
                                                    height={200}
                                                    style={{ width: "100%", height: "auto" }}
                                                />
                                            </Link>
                                            <div style={{ padding: "1rem" }}>
                                                <h4 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
                                                    <Link
                                                        href={`/posts/${post.slug}`}
                                                        style={{ color: "inherit", textDecoration: "none" }}
                                                    >
                                                        {post.title}
                                                    </Link>
                                                </h4>
                                                <p style={{ fontSize: "0.85rem", color: "#666" }}>
                                                    {post.excerpt.substring(0, 80)}...
                                                </p>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div
                                style={{
                                    marginTop: "3rem",
                                    padding: "2rem",
                                    background: "#f7f7f8",
                                    borderRadius: "8px",
                                }}
                            >
                                <h3 style={{ marginBottom: "1rem" }}>Links Úteis</h3>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "1rem",
                                        justifyContent: "center",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <Link
                                        href="/"
                                        style={{
                                            color: "var(--color-primary)",
                                            textDecoration: "none",
                                            fontSize: "1rem",
                                        }}
                                    >
                                        Início
                                    </Link>
                                    <span style={{ color: "#ccc" }}>|</span>
                                    <Link
                                        href="/category/jardinagem-vertical-comestivel"
                                        style={{
                                            color: "var(--color-primary)",
                                            textDecoration: "none",
                                            fontSize: "1rem",
                                        }}
                                    >
                                        Jardinagem Vertical
                                    </Link>
                                    <span style={{ color: "#ccc" }}>|</span>
                                    <Link
                                        href="/sobre-nos"
                                        style={{
                                            color: "var(--color-primary)",
                                            textDecoration: "none",
                                            fontSize: "1rem",
                                        }}
                                    >
                                        Sobre Nós
                                    </Link>
                                    <span style={{ color: "#ccc" }}>|</span>
                                    <Link
                                        href="/contato"
                                        style={{
                                            color: "var(--color-primary)",
                                            textDecoration: "none",
                                            fontSize: "1rem",
                                        }}
                                    >
                                        Contato
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
