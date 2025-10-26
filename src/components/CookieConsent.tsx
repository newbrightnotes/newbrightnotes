'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Tipos de consentimento para Consent Mode v2
interface ConsentSettings {
  ad_storage: 'granted' | 'denied';
  analytics_storage: 'granted' | 'denied';
  ad_user_data: 'granted' | 'denied';
  ad_personalization: 'granted' | 'denied';
}

interface CookieConsentProps {
  onSettingsClick?: () => void;
}

export default function CookieConsent({ onSettingsClick }: CookieConsentProps = {}) {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const updateConsent = (settings: ConsentSettings) => {
    // Atualizar Google Consent Mode v2
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', settings);
    }

    // Salvar no localStorage
    localStorage.setItem('cookieConsent', JSON.stringify(settings));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    
    setShowBanner(false);
  };

  const acceptAll = () => {
    updateConsent({
      ad_storage: 'granted',
      analytics_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    });
  };

  const acceptAnalyticsOnly = () => {
    updateConsent({
      ad_storage: 'denied',
      analytics_storage: 'granted',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  };

  const declineAll = () => {
    updateConsent({
      ad_storage: 'denied',
      analytics_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  };

  if (!showBanner) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#2c3e50',
        color: '#ecf0f1',
        padding: '1.5rem',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
      role="dialog"
      aria-label="Consentimento de Cookies"
      aria-describedby="cookie-consent-description"
    >
      <div id="cookie-consent-description">
        <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
          🍪 Este site usa cookies para melhorar sua experiência de navegação e exibir anúncios relevantes. 
          Você pode escolher aceitar todos os cookies, apenas cookies essenciais e analíticos, ou recusar todos os cookies opcionais.
          {' '}
          <Link 
            href="/politica-de-cookies" 
            style={{ color: '#3498db', textDecoration: 'underline' }}
          >
            Saiba mais
          </Link>
        </p>
      </div>
      
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <button
          onClick={declineAll}
          style={{
            padding: '0.6rem 1.25rem',
            backgroundColor: 'transparent',
            color: '#ecf0f1',
            border: '1px solid #ecf0f1',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '500',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#34495e';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
          aria-label="Recusar todos os cookies opcionais"
        >
          Recusar Todos
        </button>

        <button
          onClick={acceptAnalyticsOnly}
          style={{
            padding: '0.6rem 1.25rem',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '500',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#2980b9';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#3498db';
          }}
          aria-label="Aceitar apenas cookies analíticos"
        >
          Apenas Analytics
        </button>

        <button
          onClick={acceptAll}
          style={{
            padding: '0.6rem 1.25rem',
            backgroundColor: '#27ae60',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '500',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#229954';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#27ae60';
          }}
          aria-label="Aceitar todos os cookies"
        >
          Aceitar Todos
        </button>
      </div>

      <div style={{ fontSize: '0.85rem', color: '#bdc3c7' }}>
        <p style={{ margin: 0 }}>
          Leia nossa{' '}
          <Link 
            href="/politica-de-privacidade" 
            style={{ color: '#3498db', textDecoration: 'underline' }}
          >
            Política de Privacidade
          </Link>
          {' '}e{' '}
          <Link 
            href="/politica-de-cookies" 
            style={{ color: '#3498db', textDecoration: 'underline' }}
          >
            Política de Cookies
          </Link>
          {' '}para mais informações.
        </p>
      </div>
    </div>
  );
}

// Declaração de tipos globais
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
