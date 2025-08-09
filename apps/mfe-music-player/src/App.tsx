import { useState, useRef, useEffect } from 'react'
import './App.css'

interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  cover: string;
}

const mockTracks: Track[] = [
  {
    id: '1',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    duration: '5:55',
    cover: 'https://via.placeholder.com/60x60/1f2937/ffffff?text=Q'
  },
  {
    id: '2',
    title: 'Hotel California',
    artist: 'Eagles',
    duration: '6:30',
    cover: 'https://via.placeholder.com/60x60/1f2937/ffffff?text=E'
  },
  {
    id: '3',
    title: 'Stairway to Heaven',
    artist: 'Led Zeppelin',
    duration: '8:02',
    cover: 'https://via.placeholder.com/60x60/1f2937/ffffff?text=L'
  }
];

function App() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.load();
      setDuration(audioRef.current.duration || 0);
    }
  }, [currentTrack]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTrackSelect = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="music-player" style={{ width: '100%', height: '100%' }}>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        onLoadedMetadata={handleTimeUpdate}
      />
      
      {/* Header du lecteur */}
      <div className="player-header">
        <h2 className="player-title">Lecteur de Musique</h2>
        <p className="player-subtitle">Micro-frontend intégré</p>
      </div>

      {/* Contrôles principaux */}
      <div className="player-controls">
        <div className="control-buttons">
          <button 
            className="control-btn prev-btn"
            onClick={() => {/* Navigation précédente */}}
            disabled
          >
            ⏮
          </button>
          <button 
            className="control-btn play-btn"
            onClick={handlePlayPause}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button 
            className="control-btn next-btn"
            onClick={() => {/* Navigation suivante */}}
            disabled
          >
            ⏭
          </button>
        </div>
        
        {/* Barre de progression */}
        <div className="progress-container">
          <span className="time-display">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="progress-bar"
          />
          <span className="time-display">{formatTime(duration)}</span>
        </div>

        {/* Contrôle du volume */}
        <div className="volume-control">
          <span className="volume-icon">🔊</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-bar"
          />
        </div>
      </div>

      {/* Informations de la piste actuelle */}
      {currentTrack && (
        <div className="current-track">
          <img 
            src={currentTrack.cover} 
            alt={currentTrack.title}
            className="track-cover"
          />
          <div className="track-info">
            <h3 className="track-title">{currentTrack.title}</h3>
            <p className="track-artist">{currentTrack.artist}</p>
            <p className="track-duration">{currentTrack.duration}</p>
          </div>
        </div>
      )}

      {/* Liste des pistes */}
      <div className="track-list">
        <h3 className="track-list-title">Pistes disponibles</h3>
        {mockTracks.map((track) => (
          <div
            key={track.id}
            className={`track-item ${currentTrack?.id === track.id ? 'active' : ''}`}
            onClick={() => handleTrackSelect(track)}
          >
            <img 
              src={track.cover} 
              alt={track.title}
              className="track-item-cover"
            />
            <div className="track-item-info">
              <h4 className="track-item-title">{track.title}</h4>
              <p className="track-item-artist">{track.artist}</p>
            </div>
            <span className="track-item-duration">{track.duration}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
