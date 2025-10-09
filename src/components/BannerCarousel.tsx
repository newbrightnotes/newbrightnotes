"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Post } from "@/data/posts";

interface BannerCarouselProps {
  posts: Post[];
}

export default function BannerCarousel({ posts }: BannerCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [posts.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
  };

  return (
    <div className="site-banner banner-non-fluid">
      <div className="site-container">
        <div className="site-row">
          <div className="site-column-12">
            <div className="site-banner-carousel" id="site-banner-carousel">
              {posts.map((post, index) => (
                <div
                  key={post.id}
                  className="banner-item"
                  style={{
                    display: index === currentIndex ? "flex" : "none",
                  }}
                >
                  <div
                    className="banner-media"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="banner-text">
                    <div className="site-container">
                      <span className="banner-text-cat">
                        <Link
                          href={`/category/${post.categorySlug}`}
                          rel="category tag"
                        >
                          {post.category.toUpperCase()}
                        </Link>
                      </span>
                      <h2 className="banner-text-title">
                        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <span className="banner-text-author">
                        By{" "}
                        <Link
                          href="/author"
                          title={`Posts de ${post.author}`}
                          rel="author"
                        >
                          {post.author}
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="carousel-arrow carousel-arrow-prev"
                aria-label="Previous slide"
              >
                ‹
              </button>
              <button
                onClick={goToNext}
                className="carousel-arrow carousel-arrow-next"
                aria-label="Next slide"
              >
                ›
              </button>

              {/* Dots Navigation */}
              <div className="carousel-dots">
                {posts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`carousel-dot ${
                      index === currentIndex ? "active" : ""
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
