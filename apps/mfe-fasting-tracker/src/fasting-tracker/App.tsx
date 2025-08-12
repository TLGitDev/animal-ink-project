import { useState, useEffect } from 'react'

interface FastingSession {
  id: string
  startTime: Date
  endTime?: Date
  duration?: number
  isActive: boolean
}

export default function App() {
  const [fastingSessions, setFastingSessions] = useState<FastingSession[]>([])
  const [currentSession, setCurrentSession] = useState<FastingSession | null>(null)
  const [elapsedTime, setElapsedTime] = useState(0)

  useEffect(() => {
    // Charger les sessions sauvegardées
    const saved = localStorage.getItem('fasting-sessions')
    if (saved) {
      const sessions = JSON.parse(saved).map((s: any) => ({
        ...s,
        startTime: new Date(s.startTime),
        endTime: s.endTime ? new Date(s.endTime) : undefined
      }))
      setFastingSessions(sessions)
      
      // Trouver la session active
      const active = sessions.find((s: FastingSession) => s.isActive)
      if (active) {
        setCurrentSession(active)
      }
    }
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (currentSession?.isActive) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - currentSession.startTime.getTime())
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [currentSession])

  const startFasting = () => {
    const newSession: FastingSession = {
      id: Date.now().toString(),
      startTime: new Date(),
      isActive: true
    }
    setCurrentSession(newSession)
    setElapsedTime(0)
    setFastingSessions(prev => [...prev, newSession])
  }

  const stopFasting = () => {
    if (currentSession) {
      const updatedSession = {
        ...currentSession,
        endTime: new Date(),
        isActive: false,
        duration: Date.now() - currentSession.startTime.getTime()
      }
      
      setFastingSessions(prev => 
        prev.map(s => s.id === currentSession.id ? updatedSession : s)
      )
      setCurrentSession(null)
      setElapsedTime(0)
    }
  }

  const formatDuration = (ms: number) => {
    const hours = Math.floor(ms / (1000 * 60 * 60))
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((ms % (1000 * 60)) / 1000)
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  // Sauvegarder les sessions
  useEffect(() => {
    localStorage.setItem('fasting-sessions', JSON.stringify(fastingSessions))
  }, [fastingSessions])

  return (
    <div className="mfe-root">
      <aside className="mfe-aside">
        <h3 className="mfe-title">Suivi de Jeûne</h3>
        <div className="mfe-controls">
          {!currentSession ? (
            <button className="mfe-btn start-btn" onClick={startFasting}>
              Commencer le jeûne
            </button>
          ) : (
            <button className="mfe-btn stop-btn" onClick={stopFasting}>
              Arrêter le jeûne
            </button>
          )}
        </div>
        
        <h4 className="mfe-subtitle">Sessions récentes</h4>
        <ul className="mfe-list">
          {fastingSessions.slice(-5).reverse().map((session) => (
            <li key={session.id} className={`mfe-item ${session.isActive ? 'active' : ''}`}>
              <div className="session-info">
                <div className="session-date">{formatDate(session.startTime)}</div>
                {session.duration && (
                  <div className="session-duration">
                    Durée: {formatDuration(session.duration)}
                  </div>
                )}
                {session.isActive && <span className="active-indicator">● En cours</span>}
              </div>
            </li>
          ))}
        </ul>
      </aside>

      <section className="mfe-panel">
        <div className="mfe-visual">
          {currentSession ? (
            <div className="fasting-display">
              <h2 className="fasting-title">Jeûne en cours</h2>
              <div className="fasting-timer">{formatDuration(elapsedTime)}</div>
              <div className="fasting-start">
                Commencé le {formatDate(currentSession.startTime)}
              </div>
            </div>
          ) : (
            <div className="fasting-display">
              <h2 className="fasting-title">Aucun jeûne actif</h2>
              <p className="fasting-message">
                Cliquez sur "Commencer le jeûne" pour démarrer une nouvelle session
              </p>
            </div>
          )}
        </div>
        
        <div className="mfe-controls">
          <div className="stats">
            <span className="stat-item">
              Total: {fastingSessions.length} sessions
            </span>
            <span className="stat-item">
              Actives: {fastingSessions.filter(s => s.isActive).length}
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
