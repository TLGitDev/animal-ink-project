import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './template/App.tsx'
import baseCss from './template/base.css?inline'

class MFETemplateElement extends HTMLElement {
  private root: React.Root | null = null

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' })

    const container = document.createElement('div')
    container.id = 'mfe-template-root'
    container.style.width = '100%'
    container.style.height = '100%'
    shadow.appendChild(container)

    const styleSheet = document.createElement('style')
    styleSheet.textContent = `
      :host { display: block; width: 100%; height: 100%; max-width: 100%; max-height: 100%; }
      #mfe-template-root { width: 100%; height: 100%; max-width: 100%; max-height: 100%; }
    ` + baseCss
    shadow.appendChild(styleSheet)

    this.root = ReactDOM.createRoot(container)
    this.root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount()
      this.root = null
    }
  }
}

customElements.define('mfe-template', MFETemplateElement)


