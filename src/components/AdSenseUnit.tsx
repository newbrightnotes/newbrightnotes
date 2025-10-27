'use client';

import { useEffect } from 'react';

/**
 * Componente AdSense Unit para Google AdSense
 * 
 * IMPORTANTE PARA APROVAÇÃO:
 * - Durante o processo de aprovação do AdSense, NÃO use slot IDs
 * - O Google detecta automaticamente os espaços de anúncio com data-ad-format="auto"
 * - Após aprovação, você pode adicionar slot IDs específicos para cada posição
 * 
 * USO DURANTE APROVAÇÃO:
 * <AdSenseUnit format="rectangle" responsive={true} />
 * 
 * USO APÓS APROVAÇÃO (opcional):
 * <AdSenseUnit slot="1234567890" format="rectangle" responsive={true} />
 */

type AdFormat = 'leaderboard' | 'sidebar' | 'in-article' | 'rectangle';

interface AdSenseUnitProps {
  slot?: string; // Opcional: deixe vazio durante aprovação do AdSense
  format?: AdFormat;
  responsive?: boolean;
  className?: string;
}

const formatStyles: Record<AdFormat, { width: string; height: string; display: string }> = {
  leaderboard: { width: '728px', height: '90px', display: 'inline-block' },
  sidebar: { width: '300px', height: '600px', display: 'inline-block' },
  'in-article': { width: '100%', height: 'auto', display: 'block' },
  rectangle: { width: '300px', height: '250px', display: 'inline-block' },
};

export default function AdSenseUnit({
  slot,
  format = 'in-article',
  responsive = true,
  className = '',
}: AdSenseUnitProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  const styles = formatStyles[format];

  return (
    <div className={`adsense-container ${className}`} style={{ textAlign: 'center', margin: '20px 0' }}>
      <ins
        className="adsbygoogle"
        style={
          responsive
            ? { display: 'block', width: '100%', height: 'auto' }
            : { display: styles.display, width: styles.width, height: styles.height }
        }
        data-ad-client="ca-pub-8502616335999449"
        {...(slot && { 'data-ad-slot': slot })} // Apenas adiciona slot se fornecido
        data-ad-format={responsive ? 'auto' : undefined}
        data-full-width-responsive={responsive ? 'true' : undefined}
      />
    </div>
  );
}
