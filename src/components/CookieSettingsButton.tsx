'use client';

import { useState, useEffect } from 'react';
import CookieConsent from './CookieConsent';

export default function CookieSettingsButton() {
  const [hasConsent, setHasConsent] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Verificar se usuário já deu consentimento
    const consent = localStorage.getItem('cookieConsent');
    setHasConsent(!!consent);
  }, []);

  // Se não há consentimento ainda, não mostrar o botão (banner já está visível)
  if (!hasConsent) return null;

  return (
    <>
      {/* Botão flutuante para reabrir configurações */}
      <button
        onClick={() => setShowSettings(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#2c3e50',
          color: '#ecf0f1',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.5rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          zIndex: 9998,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#34495e';
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#2c3e50';
          e.currentTarget.style.transform = 'scale(1)';
        }}
        aria-label="Configurações de Cookies"
        title="Configurações de Cookies"
      >
        🍪
      </button>

      {/* Modal de configurações */}
      {showSettings && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
          onClick={() => setShowSettings(false)}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '2rem',
              maxWidth: '600px',
              width: '100%',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSettings(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#7f8c8d',
              }}
              aria-label="Fechar"
            >
              ×
            </button>

            <h2 style={{ marginTop: 0, color: '#2c3e50' }}>
              Configurações de Cookies
            </h2>

            <div style={{ color: '#34495e', marginBottom: '1.5rem' }}>
              <p>
                Gerencie suas preferências de cookies. Suas escolhas são salvas e aplicadas automaticamente.
              </p>
              
              <div style={{ 
                backgroundColor: '#ecf0f1', 
                padding: '1rem', 
                borderRadius: '4px',
                marginTop: '1rem'
              }}>
                <h3 style={{ marginTop: 0, fontSize: '1rem' }}>
                  📊 Cookies Analíticos
                </h3>
                <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
                  Ajudam a entender como os visitantes interagem com o site, fornecendo informações sobre métricas como número de visitantes, taxa de rejeição, fonte de tráfego, etc.
                </p>
              </div>

              <div style={{ 
                backgroundColor: '#ecf0f1', 
                padding: '1rem', 
                borderRadius: '4px',
                marginTop: '1rem'
              }}>
                <h3 style={{ marginTop: 0, fontSize: '1rem' }}>
                  📢 Cookies de Publicidade
                </h3>
                <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
                  Usados para fornecer anúncios relevantes. Também limitam o número de vezes que você vê um anúncio e ajudam a medir a eficácia das campanhas publicitárias.
                </p>
              </div>
            </div>

            <CookieConsentSettings 
              onClose={() => {
                setShowSettings(false);
                // Recarregar estado de consentimento
                setHasConsent(!!localStorage.getItem('cookieConsent'));
              }} 
            />
          </div>
        </div>
      )}
    </>
  );
}

// Componente interno para as configurações
function CookieConsentSettings({ onClose }: { onClose: () => void }) {
  const updateConsent = (settings: any) => {
    // Atualizar Google Consent Mode v2
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', settings);
    }

    // Salvar no localStorage
    localStorage.setItem('cookieConsent', JSON.stringify(settings));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    
    onClose();
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

  return (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
      <button
        onClick={declineAll}
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: 'transparent',
          color: '#2c3e50',
          border: '2px solid #2c3e50',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '0.95rem',
          fontWeight: '600',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#ecf0f1';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        Recusar Todos
      </button>

      <button
        onClick={acceptAnalyticsOnly}
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '0.95rem',
          fontWeight: '600',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#2980b9';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#3498db';
        }}
      >
        Apenas Analytics
      </button>

      <button
        onClick={acceptAll}
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#27ae60',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '0.95rem',
          fontWeight: '600',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#229954';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#27ae60';
        }}
      >
        Aceitar Todos
      </button>
    </div>
  );
}

// Declaração de tipos globais
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
