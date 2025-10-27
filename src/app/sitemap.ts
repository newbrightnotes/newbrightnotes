import { MetadataRoute } from 'next'
import { posts, categories, authors, getAllTags, getTotalPages, getPostsByCategory } from '@/data/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://newbrightnotes.com'

  // Static pages
  const staticPages = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/sobre-nos`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/search`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${siteUrl}/politica-de-privacidade`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${siteUrl}/termos-de-uso`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${siteUrl}/politica-de-cookies`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]

  // Pagination pages (start from page 2, page 1 redirects to homepage)
  const totalPages = getTotalPages();
  const paginationPages = totalPages > 1 ? Array.from({ length: totalPages - 1 }, (_, i) => ({
    url: `${siteUrl}/page/${i + 2}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  })) : []

  // Category pages (including pagination)
  const categoryPages: Array<{
    url: string;
    lastModified: Date;
    changeFrequency: 'weekly' | 'daily';
    priority: number;
  }> = [];
  
  categories.forEach((category) => {
    // Add main category page
    categoryPages.push({
      url: `${siteUrl}/category/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    });
    
    // Add paginated category pages (page 2+)
    const { totalPages } = getPostsByCategory(category.slug, 1);
    if (totalPages > 1) {
      for (let i = 2; i <= totalPages; i++) {
        categoryPages.push({
          url: `${siteUrl}/category/${category.slug}/page/${i}`,
          lastModified: new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        });
      }
    }
  })

  // Post pages
  const postPages = posts.map((post) => ({
    url: `${siteUrl}/posts/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Author pages
  const authorPages = authors.map((author) => ({
    url: `${siteUrl}/author/${author.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Tag pages
  const allTags = getAllTags();
  const tagPages = allTags.map((tag) => ({
    url: `${siteUrl}/tag/${encodeURIComponent(tag)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  return [...staticPages, ...paginationPages, ...categoryPages, ...postPages, ...authorPages, ...tagPages]
}
