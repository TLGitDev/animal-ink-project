import { useState, useRef, useEffect } from 'react'
import './App.css'

interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  cover: string;
  src?: string; // audio/video source (optionnel)
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
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(mockTracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.load();
      audioRef.current.volume = volume;
    }
  }, [currentTrack]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePrev = () => {
    const nextIndex = (currentIndex - 1 + mockTracks.length) % mockTracks.length;
    setCurrentIndex(nextIndex);
    setCurrentTrack(mockTracks[nextIndex]);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % mockTracks.length;
    setCurrentIndex(nextIndex);
    setCurrentTrack(mockTracks[nextIndex]);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleSelectTrack = (index: number) => {
    setCurrentIndex(index);
    setCurrentTrack(mockTracks[index]);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration || 0);
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
    if (audioRef.current) audioRef.current.volume = newVolume;
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="music-player layout">
      {/* Lecture audio sous-jacente */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        onLoadedMetadata={handleTimeUpdate}
      />

      {/* Colonne gauche: Playlist */}
      <aside className="playlist">
        <h3 className="playlist-title">Playlist</h3>
        <div className="playlist-list">
          {mockTracks.map((track, idx) => (
            <button
              key={track.id}
              className={`playlist-item ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => handleSelectTrack(idx)}
              aria-current={currentIndex === idx}
            >
              <img src={track.cover} alt={track.title} className="playlist-cover" />
              <div className="playlist-info">
                <div className="playlist-track">{track.title}</div>
                <div className="playlist-artist">{track.artist}</div>
              </div>
              <div className="playlist-duration">{track.duration}</div>
            </button>
          ))}
        </div>
      </aside>

      {/* Colonne droite: Lecteur */}
      <section className="player-panel">
        {/* Zone vidéo/visuel */}
        <div className="video-container" aria-label="Aperçu vidéo">
          {/* Placez ici une vidéo si souhaité */}
          <div className="video-placeholder">Aperçu vidéo</div>
        </div>

        {/* Contrôles principaux */}
        <div className="controls-row">
          <button className="control-btn prev-btn" onClick={handlePrev} aria-label="Piste précédente">⏮</button>
          <button className="control-btn play-btn" onClick={handlePlayPause} aria-label={isPlaying ? 'Pause' : 'Lecture'}>
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button className="control-btn next-btn" onClick={handleNext} aria-label="Piste suivante">⏭</button>
        </div>

        {/* Barre de progression + temps */}
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

        {/* Volume */}
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

        {/* Infos piste */}
        {currentTrack && (
          <div className="current-track">
            <img src={currentTrack.cover} alt={currentTrack.title} className="track-cover" />
            <div className="track-info">
              <h3 className="track-title">{currentTrack.title}</h3>
              <p className="track-artist">{currentTrack.artist}</p>
              <p className="track-duration">{currentTrack.duration}</p>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export default App
