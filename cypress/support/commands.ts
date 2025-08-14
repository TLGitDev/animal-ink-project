/// <reference types="cypress" />

// Commandes personnalisées pour Cypress

// Commande pour attendre que l'application soit prête
Cypress.Commands.add('waitForAppReady', () => {
  cy.get('[data-testid="app-ready"]', { timeout: 10000 }).should('exist');
});

// Commande pour vérifier qu'un composant est chargé
Cypress.Commands.add('checkComponentLoaded', (componentName: string) => {
  cy.get(`[data-testid="${componentName}"]`).should('be.visible');
});

// Commande pour simuler un clic sur un élément avec retry
Cypress.Commands.add('clickWithRetry', (selector: string, options = {}) => {
  cy.get(selector, options).should('be.visible').click();
});

// Commande pour attendre qu'un élément soit visible et cliquable
Cypress.Commands.add('waitAndClick', (selector: string, options = {}) => {
  cy.get(selector, options).should('be.visible').should('not.be.disabled').click();
});

// Commande pour vérifier qu'un composant MFE est chargé
Cypress.Commands.add('checkMFELoaded', (mfeName: string) => {
  cy.get(`[data-mfe="${mfeName}"]`).should('exist');
  cy.get(`[data-mfe="${mfeName}"]`).should('be.visible');
});

// Commande pour vérifier la navigation
Cypress.Commands.add('checkNavigation', (expectedPath: string) => {
  cy.url().should('include', expectedPath);
});

// Commande pour vérifier qu'un composant audio est fonctionnel
Cypress.Commands.add('checkAudioComponent', () => {
  cy.get('[data-testid="audio-player"]').should('exist');
  cy.get('[data-testid="play-button"]').should('be.visible');
  cy.get('[data-testid="pause-button"]').should('be.visible');
});

// Commande pour vérifier qu'un composant de suivi est fonctionnel
Cypress.Commands.add('checkTrackingComponent', () => {
  cy.get('[data-testid="tracking-form"]').should('exist');
  cy.get('[data-testid="start-button"]').should('be.visible');
  cy.get('[data-testid="stop-button"]').should('be.visible');
});

// Déclaration des types pour TypeScript
declare global {
  namespace Cypress {
    interface Chainable {
      waitForAppReady(): Chainable<void>;
      checkComponentLoaded(componentName: string): Chainable<void>;
      clickWithRetry(selector: string, options?: any): Chainable<void>;
      waitAndClick(selector: string, options?: any): Chainable<void>;
      checkMFELoaded(mfeName: string): Chainable<void>;
      checkNavigation(expectedPath: string): Chainable<void>;
      checkAudioComponent(): Chainable<void>;
      checkTrackingComponent(): Chainable<void>;
    }
  }
}
