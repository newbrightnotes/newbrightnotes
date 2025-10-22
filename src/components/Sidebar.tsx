import Link from "next/link";
import Image from "next/image";
import { getPopularPosts, posts, categories, getAllTags } from "@/data/posts";
import NewsletterForm from "./NewsletterForm";
import SearchBox from "./SearchBox";

export default function Sidebar() {
    const popularPosts = getPopularPosts(5);
    const recentPosts = posts.slice(0, 5);
    const allTags = getAllTags().slice(0, 15);

    return (
        <aside className="site-sidebar" id="sidebar" role="complementary">
            {/* Search Widget */}
            <div className="widget widget_search">
                <h3 className="widget-title">Buscar</h3>
                <SearchBox />
            </div>

            {/* Newsletter Widget */}
            <div className="widget widget_newsletter">
                <h3 className="widget-title">Newsletter</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: '#666' }}>
                    Receba dicas e novidades sobre jardins verticais
                </p>
                <NewsletterForm variant="sidebar" />
            </div>

            {/* Popular Posts Widget */}
            <div className="widget widget_popular_posts">
                <h3 className="widget-title">Posts Populares</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {popularPosts.map((post) => (
                        <li
                            key={post.id}
                            style={{
                                marginBottom: '1.5rem',
                                paddingBottom: '1.5rem',
                                borderBottom: '1px solid #e5e5e9',
                            }}
                        >
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <Link href={`/posts/${post.slug}`} style={{ flexShrink: 0 }}>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={80}
                                        height={60}
                                        style={{
                                            borderRadius: '4px',
                                            objectFit: 'cover',
                                            width: '80px',
                                            height: '60px',
                                        }}
                                    />
                                </Link>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>
                                        <Link
                                            href={`/posts/${post.slug}`}
                                            style={{ color: 'inherit', textDecoration: 'none' }}
                                        >
                                            {post.title}
                                        </Link>
                                    </h4>
                                    <span style={{ fontSize: '0.8rem', color: '#666' }}>
                                        {post.views} visualizações
                                    </span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Categories Widget */}
            <div className="widget widget_categories">
                <h3 className="widget-title">Categorias</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {categories.map((category) => (
                        <li
                            key={category.slug}
                            style={{
                                marginBottom: '0.75rem',
                                paddingLeft: '1rem',
                                position: 'relative',
                            }}
                        >
                            <Link
                                href={`/category/${category.slug}`}
                                style={{
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    display: 'block',
                                    padding: '0.5rem 0',
                                }}
                            >
                                <span
                                    style={{
                                        position: 'absolute',
                                        left: 0,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        color: 'var(--color-primary)',
                                    }}
                                >
                                    ›
                                </span>
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tags Cloud Widget */}
            <div className="widget widget_tag_cloud">
                <h3 className="widget-title">Tags Populares</h3>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                    }}
                >
                    {allTags.map((tag) => (
                        <Link
                            key={tag}
                            href={`/tag/${encodeURIComponent(tag)}`}
                            style={{
                                display: 'inline-block',
                                padding: '0.4rem 0.8rem',
                                background: '#f7f7f8',
                                borderRadius: '4px',
                                fontSize: '0.85rem',
                                color: '#666',
                                textDecoration: 'none',
                                border: '1px solid #e5e5e9',
                                transition: 'all 0.2s',
                            }}
                        >
                            {tag}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Recent Posts Widget */}
            <div className="widget widget_recent_posts">
                <h3 className="widget-title">Posts Recentes</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {recentPosts.map((post) => (
                        <li
                            key={post.id}
                            style={{
                                marginBottom: '1rem',
                                paddingBottom: '1rem',
                                borderBottom: '1px solid #e5e5e9',
                            }}
                        >
                            <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>
                                <Link
                                    href={`/posts/${post.slug}`}
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                >
                                    {post.title}
                                </Link>
                            </h4>
                            <span style={{ fontSize: '0.8rem', color: '#666' }}>{post.date}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Ad Placeholder Widget */}
            <div className="widget widget_ad">
                <h3 className="widget-title">Publicidade</h3>
                <div
                    style={{
                        background: '#f7f7f8',
                        padding: '2rem',
                        textAlign: 'center',
                        borderRadius: '4px',
                        border: '2px dashed #e5e5e9',
                        minHeight: '250px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#999',
                    }}
                >
                    <div>
                        <p style={{ margin: 0, fontSize: '0.9rem' }}>
                            Espaço para anúncios
                        </p>
                        <p style={{ margin: '0.5rem 0 0', fontSize: '0.8rem' }}>
                            300 x 250
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
