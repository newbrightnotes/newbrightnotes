import Image from "next/image";
import Link from "next/link";
import { posts, getPostsByPage, getTotalPages, POSTS_PER_PAGE } from "@/data/posts";
import BannerCarousel from "@/components/BannerCarousel";
import Pagination from "@/components/Pagination";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const carouselPosts = posts.slice(0, 5);
  const gridPosts = getPostsByPage(1, POSTS_PER_PAGE);
  const totalPages = getTotalPages();

  return (
    <>
      <BannerCarousel posts={carouselPosts} />
      <section className="site-main with-right-sidebar">
        <div className="site-container">
          <div className="site-row">
            <div className="site-content compact-view with-sidebar" id="site-content" role="main">
              {gridPosts.map((post) => (
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
                          <Link href={`/posts/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h2>
                        <div className="entry-meta">
                          <span className="entry-author">
                            By <Link href={`/author/${post.authorSlug}`} title={`Posts de ${post.author}`} rel="author">
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
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=https://newbrightnotes.com/posts/${post.slug}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
                              <span>f</span>
                            </a>
                            <a href={`https://twitter.com/intent/tweet?url=https://newbrightnotes.com/posts/${post.slug}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
                              <span>𝕏</span>
                            </a>
                            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://newbrightnotes.com/posts/${post.slug}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
                              <span>in</span>
                            </a>
                            <a href={`https://pinterest.com/pin/create/button/?url=https://newbrightnotes.com/posts/${post.slug}&description=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Pinterest">
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
              <Pagination currentPage={1} totalPages={totalPages} basePath="" />
            </div>
            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
}
