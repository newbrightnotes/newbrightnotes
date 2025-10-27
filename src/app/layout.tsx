import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import MobileNav from "@/components/MobileNav";
import CookieConsent from "@/components/CookieConsent";
import ConsentManager from "@/components/ConsentManager";
import CookieSettingsButton from "@/components/CookieSettingsButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://newbrightnotes.com'),
  title: {
    default: "New Bright Notes - Jardins Verticais e Jardinagem Urbana",
    template: "%s | New Bright Notes",
  },
  description: "Aprenda a criar jardins verticais comestíveis em apartamentos. Dicas práticas de cultivo urbano, hortas em varandas e paredes. Guia completo de jardinagem vertical sustentável.",
  keywords: [
    "jardim vertical",
    "horta urbana",
    "cultivo em apartamento",
    "plantas comestíveis",
    "jardinagem vertical",
    "legumes verticais",
    "horticultura urbana",
    "sustentabilidade",
    "jardim comestível",
    "horta em casa"
  ],
  authors: [{ name: "New Bright Notes", url: "https://newbrightnotes.com/sobre-nos" }],
  creator: "New Bright Notes",
  publisher: "New Bright Notes",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
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
    type: "website",
    locale: "pt_BR",
    url: "https://newbrightnotes.com",
    siteName: "New Bright Notes",
    title: "New Bright Notes - Jardins Verticais e Jardinagem Urbana",
    description: "Aprenda a criar jardins verticais comestíveis em apartamentos. Dicas práticas de cultivo urbano, hortas em varandas e paredes.",
    images: [
      {
        url: "/images/logo.png",
        
        alt: "New Bright Notes - Jardins Verticais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Bright Notes - Jardins Verticais e Jardinagem Urbana",
    description: "Aprenda a criar jardins verticais comestíveis em apartamentos. Dicas práticas de cultivo urbano, hortas em varandas e paredes.",
    creator: "@newbrightnotes",
    images: ["/images/logo.png"],
  },
  verification: {
    google: "SyRIBZUdMgwdfPAOEzd9nDkDLUZxouobkKWxV14SeJ8",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "New Bright Notes",
  },
  alternates: {
    canonical: "https://newbrightnotes.com",
    types: {
      'application/rss+xml': 'https://newbrightnotes.com/feed.xml',
    },
  },
  category: 'Jardinagem',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = 'https://newbrightnotes.com';

  // JSON-LD for Organization
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "New Bright Notes",
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    description: "Seu guia completo sobre jardins verticais e jardinagem urbana",
    contactPoint: {
      "@type": "ContactPoint",
      email: "contato@newbrightnotes.com",
      contactType: "Customer Service",
      availableLanguage: ["Portuguese"],
    },
  };

  // JSON-LD for WebSite
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "New Bright Notes",
    url: siteUrl,
    description: "Explore nossa coleção de artigos sobre jardinagem, sustentabilidade e vida urbana.",
    publisher: {
      "@type": "Organization",
      name: "New Bright Notes",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.png`,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-adsense-account" content="ca-pub-8502616335999449" />
      </head>
      <body>
        {/* Consent Manager - DEVE carregar PRIMEIRO para configurar Consent Mode v2 */}
        <ConsentManager />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GT-NMDMW88Q"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GT-NMDMW88Q');
          `}
        </Script>

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8502616335999449"
          crossOrigin="anonymous"
        ></script>

        {/* Structured Data - Organization */}
        <Script
          id="organization-structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />

        {/* Structured Data - WebSite */}
        <Script
          id="website-structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />

        <MobileNav />
        
        <div className="site-mobile-navigation"></div>
        <div className="site-wrapper shadow-wrapper">
          {/* Header */}
          <header id="site-header" className="site-header" role="banner">
            <div className="site-header-top">
              <div className="site-container">
                <div className="site-row">
                  <div className="site-header-top-left site-column-9">
                    <nav className="primary-navigation" id="primary-navigation" role="navigation" aria-label="Menu Principal">
                      <ul id="menu-menu-cabecalho">
                        <li className="menu-item current-menu-item">
                          <Link href="/">Início</Link>
                        </li>
                        <li className="menu-item">
                          <Link href="/category/cuidados-e-manutencao">
                            Cuidados e Manutenção
                          </Link>
                        </li>
                        <li className="menu-item">
                          <Link href="/category/tipos-de-jardins-verticais">
                            Tipos de Jardins Verticais
                          </Link>
                        </li>
                        <li className="menu-item">
                          <Link href="/category/jardinagem-vertical-comestivel">
                            Jardinagem Vertical Comestível
                          </Link>
                        </li>
                        <li className="menu-item">
                          <Link href="/sobre-nos">Sobre Nós</Link>
                        </li>
                        <li className="menu-item">
                          <Link href="/contato">Contato</Link>
                        </li>
                      </ul>
                    </nav>
                    <Link href="/" className="mobile-navigation-toggle" aria-label="Toggle navigation"></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="site-header-bottom">
              <div className="site-container">
                <div className="site-row">
                  <div className="site-header-middle-center">
                    <div className="site-brand">
                      <h1 className="site-logo">
                        <Link href="/" className="custom-logo-link" rel="home">
                          <Image
                            width={900}
                            height={294}
                            src="/images/logo.png"
                            className="custom-logo"
                            alt="New Bright Notes"
                          />
                        </Link>
                      </h1>
                      <Link href="/" className="mobile-navigation-toggle" aria-label="Menu"></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main id="site-main" role="main">
            {children}
          </main>

          {/* Footer */}
          <footer id="site-footer" className="site-footer" role="contentinfo">
            <div className="site-footer-top">
              <div className="site-container">
                <div className="site-row">
                  <div className="site-column-4">
                    <div className="widget widget_nav_menu widget-ver">
                      <div className="menu-menu-rodape-container">
                        <nav aria-label="Menu do Rodapé">
                          <ul id="menu-menu-rodape" className="menu">
                          <li className="menu-item">
                            <Link href="/politica-de-privacidade">
                              Política de Privacidade
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link href="/termos-de-uso">Termos de Uso</Link>
                          </li>
                          <li className="menu-item">
                            <Link href="/politica-de-cookies">
                              Política de Cookies
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link href="/sobre-nos">Sobre Nós</Link>
                          </li>
                          <li className="menu-item">
                            <Link href="/contato">Contato</Link>
                          </li>
                        </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-footer-bottom">
              <div className="site-container">
                <div className="site-info">
                  <p>© 2025 New Bright Notes. Todos os direitos reservados.</p>
                </div>
              </div>
            </div>
          </footer>
        </div>

        {/* Cookie Consent Banner */}
        <CookieConsent />

        {/* Cookie Settings Button - Permite revisitar escolha */}
        <CookieSettingsButton />
      </body>
    </html>
  );
}
