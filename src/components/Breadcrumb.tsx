import Link from "next/link";
import Script from "next/script";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const siteUrl = "https://newbrightnotes.com";
  
  // Build breadcrumb structured data
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
      ...items.map((item, index) => {
        const isLast = index === items.length - 1;
        return {
          "@type": "ListItem",
          position: index + 2,
          name: item.label,
          // Last item should NOT have 'item' field per Google's requirement
          ...(!isLast && item.href && { item: `${siteUrl}${item.href}` }),
        };
      }),
    ],
  };

  return (
    <>
      <Script
        id={`breadcrumb-${items.map(i => i.label).join('-')}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <nav className="breadcrumbs" aria-label="Breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
        <ol style={{ 
          display: 'flex', 
          gap: '0.5rem', 
          listStyle: 'none', 
          padding: '1rem 0',
          flexWrap: 'wrap',
          fontSize: '0.9rem'
        }}>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" itemProp="item">
              <span itemProp="name">Início</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          {items.map((item, index) => (
            <li 
              key={index} 
              style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              <span aria-hidden="true">/</span>
              {item.href && index < items.length - 1 ? (
                <>
                  <Link href={item.href} itemProp="item">
                    <span itemProp="name">{item.label}</span>
                  </Link>
                  <meta itemProp="position" content={String(index + 2)} />
                </>
              ) : (
                <>
                  <span aria-current="page" itemProp="name">{item.label}</span>
                  <meta itemProp="position" content={String(index + 2)} />
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
