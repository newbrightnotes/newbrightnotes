'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
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
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
      }}
      role="dialog"
      aria-label="Consentimento de Cookies"
      aria-describedby="cookie-consent-description"
    >
      <div style={{ flex: '1 1 300px' }} id="cookie-consent-description">
        <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
          🍪 Este site usa cookies para melhorar sua experiência de navegação e exibir anúncios relevantes. 
          Ao continuar navegando, você concorda com nossa{' '}
          <Link 
            href="/politica-de-cookies" 
            style={{ color: '#3498db', textDecoration: 'underline' }}
          >
            Política de Cookies
          </Link>
          {' '}e{' '}
          <Link 
            href="/politica-de-privacidade" 
            style={{ color: '#3498db', textDecoration: 'underline' }}
          >
            Política de Privacidade
          </Link>
          .
        </p>
      </div>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <button
          onClick={declineCookies}
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
        >
          Recusar
        </button>
        <button
          onClick={acceptCookies}
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
        >
          Aceitar Cookies
        </button>
      </div>
    </div>
  );
}
