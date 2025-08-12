import { useState, useEffect } from 'react'

interface FastingSession {
  id: string
  startTime: Date
  endTime?: Date
  duration?: number
  isActive: boolean
}

interface WeightEntry {
  id: string
  date: Date
  weight: number
}

export default function App() {
  const [fastingSessions, setFastingSessions] = useState<FastingSession[]>([])
  const [currentSession, setCurrentSession] = useState<FastingSession | null>(null)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [weightEntries, setWeightEntries] = useState<WeightEntry[]>([])
  const [newWeight, setNewWeight] = useState('')

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

    // Charger les entrées de poids
    const savedWeight = localStorage.getItem('weight-entries')
    if (savedWeight) {
      const weights = JSON.parse(savedWeight).map((w: any) => ({
        ...w,
        date: new Date(w.date)
      }))
      setWeightEntries(weights)
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

  const addWeight = () => {
    if (newWeight && !isNaN(parseFloat(newWeight))) {
      const weightEntry: WeightEntry = {
        id: Date.now().toString(),
        date: new Date(),
        weight: parseFloat(newWeight)
      }
      setWeightEntries(prev => [...prev, weightEntry])
      setNewWeight('')
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

  const getDayName = (date: Date) => {
    return date.toLocaleDateString('fr-FR', { weekday: 'long' })
  }

  const getCurrentWeekDays = () => {
    const today = new Date()
    const days = []
    for (let i = 0; i < 7; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() - today.getDay() + i)
      days.push(date)
    }
    return days
  }

  // Sauvegarder les sessions et le poids
  useEffect(() => {
    localStorage.setItem('fasting-sessions', JSON.stringify(fastingSessions))
  }, [fastingSessions])

  useEffect(() => {
    localStorage.setItem('weight-entries', JSON.stringify(weightEntries))
  }, [weightEntries])

  return (
    <div className="mfe-root">
      <div className="mfe-container">
        {/* Bloc 1: Jours de la semaine */}
        <div className="mfe-card week-days-card">
          <h3 className="card-title">Jours de la semaine</h3>
          <div className="week-grid">
            {getCurrentWeekDays().map((date, index) => {
              const daySessions = fastingSessions.filter(session => {
                const sessionDate = new Date(session.startTime)
                return sessionDate.toDateString() === date.toDateString()
              })
              const hasFasting = daySessions.length > 0
              
              return (
                <div key={index} className={`day-item ${hasFasting ? 'has-fasting' : ''}`}>
                  <div className="day-name">{getDayName(date)}</div>
                  <div className="day-date">{date.getDate()}/{date.getMonth() + 1}</div>
                  {hasFasting && (
                    <div className="fasting-indicator">
                      {daySessions.length} session{daySessions.length > 1 ? 's' : ''}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Bloc 2: Compteur de jeûne */}
        <div className="mfe-card fasting-counter-card">
          <h3 className="card-title">Compteur de jeûne</h3>
          <div className="fasting-display">
            {currentSession ? (
              <>
                <div className="fasting-timer">{formatDuration(elapsedTime)}</div>
                <div className="fasting-status">Jeûne en cours</div>
                <div className="fasting-start">
                  Commencé le {formatDate(currentSession.startTime)}
                </div>
                <button className="mfe-btn stop-btn" onClick={stopFasting}>
                  Arrêter le jeûne
                </button>
              </>
            ) : (
              <>
                <div className="fasting-timer idle">--:--:--</div>
                <div className="fasting-status">Aucun jeûne actif</div>
                <button className="mfe-btn start-btn" onClick={startFasting}>
                  Commencer le jeûne
                </button>
              </>
            )}
          </div>
          
          <div className="fasting-stats">
            <div className="stat-item">
              <span className="stat-label">Total sessions:</span>
              <span className="stat-value">{fastingSessions.length}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Sessions actives:</span>
              <span className="stat-value">{fastingSessions.filter(s => s.isActive).length}</span>
            </div>
          </div>
        </div>

        {/* Bloc 3: Poids */}
        <div className="mfe-card weight-card">
          <h3 className="card-title">Poids</h3>
          <div className="weight-input">
            <input
              type="number"
              step="0.1"
              value={newWeight}
              onChange={(e) => setNewWeight(e.target.value)}
              placeholder="Entrez votre poids (kg)"
              className="weight-field"
            />
            <button className="mfe-btn add-weight-btn" onClick={addWeight}>
              Ajouter
            </button>
          </div>
          
          <div className="weight-history">
            <h4 className="weight-subtitle">Historique récent</h4>
            <div className="weight-list">
              {weightEntries.slice(-5).reverse().map((entry) => (
                <div key={entry.id} className="weight-entry">
                  <span className="weight-value">{entry.weight} kg</span>
                  <span className="weight-date">{formatDate(entry.date)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
