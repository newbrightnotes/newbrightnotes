'use client';

import { useEffect } from 'react';

// Tipos para o gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function ConsentManager() {
  useEffect(() => {
    // Inicializar dataLayer se não existir
    window.dataLayer = window.dataLayer || [];
    
    // Função gtag para comunicar com Google Tag Manager
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    // Verificar se já existe consentimento salvo
    const savedConsent = localStorage.getItem('cookieConsent');
    
    if (savedConsent) {
      // Aplicar consentimento salvo
      const consentData = JSON.parse(savedConsent);
      gtag('consent', 'default', {
        ad_storage: consentData.ad_storage || 'denied',
        analytics_storage: consentData.analytics_storage || 'denied',
        ad_user_data: consentData.ad_user_data || 'denied',
        ad_personalization: consentData.ad_personalization || 'denied',
        wait_for_update: 500, // Espera 500ms por updates antes de enviar dados
      });
    } else {
      // Sem consentimento salvo - definir tudo como 'denied' por padrão (GDPR compliance)
      gtag('consent', 'default', {
        ad_storage: 'denied',
        analytics_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        wait_for_update: 500,
      });
    }
  }, []);

  return null; // Componente não renderiza nada
}
