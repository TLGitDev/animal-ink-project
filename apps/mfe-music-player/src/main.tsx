import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import indexCss from './index.css?inline'
import appCss from './App.css?inline'

// Créer un composant Web personnalisé
class MusicPlayerElement extends HTMLElement {
  private root: any | null = null;

  connectedCallback() {
    // Créer un shadow DOM pour l'isolation
    const shadow = this.attachShadow({ mode: 'open' });
    
    // Créer un conteneur pour React
    const container = document.createElement('div');
    container.id = 'music-player-root';
    container.style.width = '100%';
    container.style.height = '100%';
    shadow.appendChild(container);

    // Ajouter les styles CSS au Shadow DOM
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      :host { display: block; width: 100%; height: 100%; max-width: 100%; }
      #music-player-root { width: 100%; height: 100%; max-width: 100%; }
    ` + indexCss + '\n' + appCss;
    shadow.appendChild(styleSheet);

    // Rendre l'application React
    this.root = ReactDOM.createRoot(container);
    this.root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
  }
}

// Définir le composant Web personnalisé
customElements.define('music-player', MusicPlayerElement);
