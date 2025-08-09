'use client';

import { useEffect, useState } from 'react';

interface MusicPlayerWrapperProps {
  className?: string;
  variant?: 'card' | 'fullscreen';
}

export default function MusicPlayerWrapper({ className = '', variant = 'card' }: MusicPlayerWrapperProps) {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [webComponentReady, setWebComponentReady] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || scriptLoaded) return;

    if (customElements.get('music-player')) {
      setScriptLoaded(true);
      setIsLoading(false);
      setWebComponentReady(true);
      return;
    }

    const isProd = process.env.NODE_ENV === 'production';
    const scriptUrl = isProd
      ? '/mfe/music-player.es.js'
      : 'http://localhost:5173/src/main.tsx';

    const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
    if (existingScript) {
      console.log('Script MFE déjà en cours de chargement');
      return;
    }

    const script = document.createElement('script');
    script.src = scriptUrl;
    script.type = 'module';
    script.async = true;
    
    script.onload = () => {
      console.log('MFE Music Player chargé avec succès');
      setScriptLoaded(true);
      setIsLoading(false);
      setWebComponentReady(true);
    };
    
    script.onerror = () => {
      console.error('Erreur lors du chargement du MFE Music Player');
      setError('Erreur de chargement');
      setIsLoading(false);
    };

    document.head.appendChild(script);
  }, [isClient, scriptLoaded]);

  const containerBase = variant === 'fullscreen'
    ? 'w-full h-full flex flex-col p-0 m-0 bg-transparent rounded-none shadow-none min-h-0 overflow-hidden'
    : 'w-full p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg';

  const webComponentHtml = variant === 'fullscreen'
    ? '<music-player variant="fullscreen" style="display:block;width:100%;max-width:100%;height:100%"></music-player>'
    : '<music-player></music-player>';

  if (!isClient) {
    return (
      <div 
        className={`${containerBase} ${className}`}
      >
        {variant !== 'fullscreen' && (
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Lecteur de Musique
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Micro-frontend int&eacute;gr&eacute; dans le shell Next.js
            </p>
          </div>
        )}
        <div className={variant === 'fullscreen' ? 'flex-1 min-h-0 flex items-center justify-center' : 'min-h-[400px] flex items-center justify-center'}>
          <div className="text-gray-500 dark:text-gray-400">Chargement...</div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`${containerBase} ${className}`}
    >
      {variant !== 'fullscreen' && (
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Lecteur de Musique
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Micro-frontend int&eacute;gr&eacute; dans le shell Next.js
          </p>
        </div>
      )}

      {isLoading && (
        <div className={variant === 'fullscreen' ? 'flex-1 min-h-0 flex items-center justify-center' : 'min-h-[400px] flex items-center justify-center'}>
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <div className="text-gray-500 dark:text-gray-400">
              Chargement du lecteur de musique...
            </div>
          </div>
        </div>
      )}

      {webComponentReady && (
        <div className={variant === 'fullscreen' ? 'flex-1 min-h-0 w-full' : 'min-h-[400px]'}
          dangerouslySetInnerHTML={{ __html: webComponentHtml }}
        />
      )}

      {error && (
        <div className={variant === 'fullscreen' ? 'flex-1 min-h-0 flex items-center justify-center' : 'min-h-[400px] flex items-center justify-center'}>
          <div className="text-center p-8 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <div className="text-red-600 dark:text-red-400 text-lg font-medium mb-2">
              Erreur de chargement
            </div>
            <div className="text-red-500 dark:text-red-400 text-sm">
              Impossible de charger le lecteur de musique. Assurez-vous que le MFE est d&eacute;marr&eacute;.
            </div>
            <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
              V&eacute;rifiez que <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">npm run dev:music-player</code> est en cours d&#39;ex&eacute;cution.
            </div>
            <button 
              onClick={() => {
                setError(null);
                setIsLoading(true);
                setScriptLoaded(false);
                setWebComponentReady(false);
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              R&eacute;essayer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
