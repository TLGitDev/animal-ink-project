import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="mfe-root">
      <aside className="mfe-aside">
        <h3 className="mfe-title">Template</h3>
        <ul className="mfe-list">
          {Array.from({ length: 12 }).map((_, i) => (
            <li key={i} className="mfe-item">Élément {i + 1}</li>
          ))}
        </ul>
      </aside>

      <section className="mfe-panel">
        <div className="mfe-visual">
          Zone visuelle responsive
        </div>
        <div className="mfe-controls">
          <button className="mfe-btn" onClick={() => setCount(c => c + 1)}>Bouton</button>
          <span className="mfe-count">{count}</span>
        </div>
      </section>
    </div>
  )
}


