import React from 'react';

// Mock du composant MusicPlayerWrapper
export const MockMusicPlayerWrapper: React.FC = () => {
  return (
    <div data-testid="music-player-container" className="music-player-mfe">
      <h2 className="text-xl font-semibold mb-4">Lecteur de Musique</h2>
      <iframe 
        data-testid="music-player-iframe"
        src="http://localhost:5173"
        title="Music Player MFE"
        className="w-full h-96 border-0 rounded-lg"
      />
    </div>
  );
};

// Mock du composant FastingTrackerWrapper
export const MockFastingTrackerWrapper: React.FC = () => {
  return (
    <div data-testid="fasting-tracker-container" className="fasting-tracker-mfe">
      <h2 className="text-xl font-semibold mb-4">Suivi du Jeûne</h2>
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-gray-500">Fasting Tracker MFE</div>
      </div>
    </div>
  );
};
