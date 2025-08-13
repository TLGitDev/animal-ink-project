'use client';

import { useEffect, useState } from 'react';

interface TemplateWrapperProps {
  className?: string;
  variant?: 'card' | 'fullscreen';
}

export default function TemplateWrapper({ className = '', variant = 'card' }: TemplateWrapperProps) {
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

    if (customElements.get('mfe-template')) {
      setScriptLoaded(true);
      setIsLoading(false);
      setWebComponentReady(true);
      return;
    }

    const isProd = process.env.NODE_ENV === 'production';
    const scriptUrl = isProd
      ? '/mfe/mfe-template.es.js'
      : 'http://localhost:5180/src/main.tsx';

    const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
    if (existingScript) {
      return;
    }

    const script = document.createElement('script');
    script.src = scriptUrl;
    script.type = 'module';
    script.async = true;

    script.onload = () => {
      setScriptLoaded(true);
      setIsLoading(false);
      setWebComponentReady(true);
    };

    script.onerror = () => {
      setError('Erreur de chargement');
      setIsLoading(false);
    };

    document.head.appendChild(script);
  }, [isClient, scriptLoaded]);

  const containerBase = variant === 'fullscreen'
    ? 'w-full h-full p-0 m-0 bg-transparent rounded-none shadow-none min-w-0'
    : 'w-full p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-yellow-600/20';

  const webComponentHtml = variant === 'fullscreen'
    ? '<mfe-template style="display:block;box-sizing:border-box;width:100%;max-width:100%;height:100%;max-height:100%;overflow:hidden"></mfe-template>'
    : '<mfe-template></mfe-template>';

  if (!isClient) {
    return (
      <div className={`${containerBase} ${className}`}>
        {variant !== 'fullscreen' && (
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
              Template MFE
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Micro-frontend template int&eacute;gr&eacute; dans le shell Next.js
            </p>
          </div>
        )}
        <div className={variant === 'fullscreen' ? 'min-h-[200px] flex items-center justify-center' : 'min-h-[300px] flex items-center justify-center'}>
          <div className="text-gray-500 dark:text-gray-400">Chargement...</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${containerBase} ${className}`}>
      {variant !== 'fullscreen' && (
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
            Template MFE
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Micro-frontend template int&eacute;gr&eacute; dans le shell Next.js
          </p>
        </div>
      )}

      {isLoading && (
        <div className={variant === 'fullscreen' ? 'min-h-[200px] flex items-center justify-center' : 'min-h-[300px] flex items-center justify-center'}>
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <div className="text-gray-500 dark:text-gray-400">Chargement du MFE template...</div>
          </div>
        </div>
      )}

      {webComponentReady && (
        <div className={variant === 'fullscreen' ? 'h-full min-w-0' : undefined}
          dangerouslySetInnerHTML={{ __html: webComponentHtml }}
        />
      )}

      {error && (
        <div className={variant === 'fullscreen' ? 'min-h-[200px] flex items-center justify-center' : 'min-h-[300px] flex items-center justify-center'}>
          <div className="text-center p-8 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <div className="text-red-600 dark:text-red-400 text-lg font-medium mb-2">Erreur de chargement</div>
            <div className="text-red-500 dark:text-red-400 text-sm">Impossible de charger le MFE template.</div>
            <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
              Dev: vérifiez que <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">npm run dev</code> tourne dans <code>apps/mfe-template</code> (port 5180).
            </div>
            <button
              onClick={() => { setError(null); setIsLoading(true); setScriptLoaded(false); setWebComponentReady(false); }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Réessayer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


