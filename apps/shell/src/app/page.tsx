'use client';

import { useState } from 'react';
import MusicPlayerWrapper from '../components/MusicPlayerWrapper';
import FastingTrackerWrapper from '../components/FastingTrackerWrapper';

type MFEView = 'grid' | 'music-player' | 'fasting-tracker';

export default function Home() {
  const [currentView, setCurrentView] = useState<MFEView>('grid');

  const handleMFEClick = (mfeType: MFEView) => {
    setCurrentView(mfeType);
  };

  const handleBackClick = () => {
    setCurrentView('grid');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-yellow-900 dark:from-black dark:via-gray-900 dark:to-yellow-900">
      {/* Corps de page (seule zone qui change) */}
      <main className={currentView === 'grid' ? 'w-full flex-1 py-4 md:py-8 lg:py-12 overflow-y-auto' : 'w-full flex-1 p-0 min-h-0 flex flex-col overflow-hidden'}>
        {currentView === 'grid' ? (
          <>
            {/* Grille des MFE */}
            <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-stretch">
                {/* Bouton Lecteur de Musique */}
                <button
                  onClick={() => handleMFEClick('music-player')}
                  className="group bg-white dark:bg-gray-900 p-4 md:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-red-200 dark:border-red-700 h-full"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-red-100 dark:bg-red-900 rounded-xl flex items-center justify-center mb-4 md:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM21 16c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    Lecteur de Musique
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
                    Micro-frontend React avec Vite, intégré dans le shell Next.js
                  </p>
                </button>

                {/* Bouton Suivi du Jeûne */}
                <button
                  onClick={() => handleMFEClick('fasting-tracker')}
                  className="group bg-white dark:bg-gray-900 p-4 md:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-yellow-200 dark:border-yellow-700 h-full"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-100 dark:bg-yellow-900 rounded-xl flex items-center justify-center mb-4 md:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                    Suivi du Jeûne
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
                    Suivez vos périodes de jeûne et vos objectifs de santé
                  </p>
                </button>

                {/* Placeholders pour futurs MFE */}
                <div className="bg-gray-100 dark:bg-gray-800 p-4 md:p-6 lg:p-8 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-4 md:mb-6 mx-auto">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">Nouveau MFE à venir...</p>
                  </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 md:p-6 lg:p-8 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-4 md:mb-6 mx-auto">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">Nouveau MFE à venir...</p>
                  </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 md:p-6 lg:p-8 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-4 md:mb-6 mx-auto">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">Nouveau MFE à venir...</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : currentView === 'music-player' ? (
          <div className="w-full flex-1 min-h-0 flex flex-col min-w-0 relative">
            {/* Bouton Retour avec icône 'A' et z-index élevé */}
            <button
              onClick={handleBackClick}
              className="absolute top-4 right-4 z-50 w-12 h-12 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-xl font-bold hover:scale-110"
              style={{ zIndex: 9999 }}
            >
              A
            </button>

            {/* Contenu du MFE, doit remplir l'espace disponible sans dépasser */}
            <div className="flex-1 min-h-0 w-full min-w-0">
              <MusicPlayerWrapper variant="fullscreen" />
            </div>
          </div>
        ) : (
          <div className="w-full flex-1 min-h-0 flex flex-col min-w-0 relative">
            {/* Bouton Retour avec icône 'A' et z-index élevé */}
            <button
              onClick={handleBackClick}
              className="absolute top-4 right-4 z-50 w-12 h-12 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-xl font-bold hover:scale-110"
              style={{ zIndex: 9999 }}
            >
              A
            </button>

            {/* Contenu du MFE Fasting Tracker */}
            <div className="flex-1 min-h-0 w-full min-w-0">
              <FastingTrackerWrapper variant="fullscreen" />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
