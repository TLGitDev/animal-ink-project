'use client';

import { useState } from 'react';
import MusicPlayerWrapper from '../components/MusicPlayerWrapper';
import TemplateWrapper from '../components/TemplateWrapper';

type MFEView = 'grid' | 'music-player' | 'template';

export default function Home() {
  const [currentView, setCurrentView] = useState<MFEView>('grid');

  const handleMFEClick = (mfeType: MFEView) => {
    setCurrentView(mfeType);
  };

  const handleBackClick = () => {
    setCurrentView('grid');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header (fixe) */}
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Animal Ink</h1>
          </div>
        </div>
      </header>

      {/* Corps de page (seule zone qui change) */}
      <main className={currentView === 'grid' ? 'w-full flex-1 py-8 md:py-12' : 'w-full flex-1 p-0 min-h-0 flex flex-col overflow-hidden'}>
        {currentView === 'grid' ? (
          <>
            {/* Grille des MFE */}
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {/* Bouton MFE Template (ajouté avant Music Player) */}
                <button
                  onClick={() => handleMFEClick('template')}
                  className="group bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 h-full"
                >
                  <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    MFE Template
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Base générique (React+Vite) prête à dupliquer
                  </p>
                </button>

                {/* Bouton Lecteur de Musique */}
                <button
                  onClick={() => handleMFEClick('music-player')}
                  className="group bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 h-full"
                >
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM21 16c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Lecteur de Musique
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Micro-frontend React avec Vite, intégré dans le shell Next.js
                  </p>
                </button>

                {/* Placeholders pour futurs MFE */}
                <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-6 mx-auto">
                      <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Nouveau MFE à venir...</p>
                  </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-6 mx-auto">
                      <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Nouveau MFE à venir...</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : currentView === 'music-player' ? (
          <div className="w-full flex-1 min-h-0 flex flex-col min-w-0">
            {/* Bouton Retour (dans le main) */}
            <div className="p-4 flex-shrink-0">
              <button
                onClick={handleBackClick}
                className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Retour
              </button>
            </div>

            {/* Contenu du MFE, doit remplir l’espace disponible sans dépasser */}
            <div className="flex-1 min-h-0 w-full min-w-0">
              <MusicPlayerWrapper variant="fullscreen" />
            </div>
          </div>
        ) : (
          <div className="w-full flex-1 min-h-0 flex flex-col min-w-0">
            {/* Bouton Retour (dans le main) */}
            <div className="p-4 flex-shrink-0">
              <button
                onClick={handleBackClick}
                className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Retour
              </button>
            </div>

            {/* Contenu du MFE Template */}
            <div className="flex-1 min-h-0 w-full min-w-0">
              <TemplateWrapper variant="fullscreen" />
            </div>
          </div>
        )}
      </main>

      {/* Footer (fixe) */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2025 Animal Ink.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
