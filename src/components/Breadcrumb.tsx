import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol style={{ 
        display: 'flex', 
        gap: '0.5rem', 
        listStyle: 'none', 
        padding: '1rem 0',
        flexWrap: 'wrap',
        fontSize: '0.9rem'
      }}>
        <li>
          <Link href="/">Início</Link>
        </li>
        {items.map((item, index) => (
          <li key={index} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span aria-hidden="true">/</span>
            {item.href && index < items.length - 1 ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
