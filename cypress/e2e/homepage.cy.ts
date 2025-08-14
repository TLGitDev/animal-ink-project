describe('Page d\'accueil', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('devrait afficher la page d\'accueil avec tous les éléments', () => {
    // Vérifier le titre principal
    cy.get('h1').should('contain.text', 'Animal-Ink Project');
    
    // Vérifier la description
    cy.get('p').should('contain.text', 'Monorepo microfrontend');
    
    // Vérifier que la page est prête
    cy.get('main').should('be.visible');
  });

  it('devrait charger le composant lecteur de musique', () => {
    // Vérifier que le composant MFE est chargé
    cy.checkMFELoaded('music-player');
    
    // Vérifier le titre du composant
    cy.get('[data-testid="music-player-container"] h2')
      .should('contain.text', 'Lecteur de Musique');
    
    // Vérifier que l\'iframe est présent
    cy.get('[data-testid="music-player-iframe"]')
      .should('be.visible')
      .and('have.attr', 'src', 'http://localhost:5173');
  });

  it('devrait charger le composant suivi de jeûne', () => {
    // Vérifier que le composant MFE est chargé
    cy.checkMFELoaded('fasting-tracker');
    
    // Vérifier le titre du composant
    cy.get('[data-testid="fasting-tracker-container"] h2')
      .should('contain.text', 'Suivi de Jeûne');
    
    // Vérifier que l\'iframe est présent
    cy.get('[data-testid="fasting-tracker-iframe"]')
      .should('be.visible')
      .and('have.attr', 'src', 'http://localhost:5174');
  });

  it('devrait avoir une mise en page responsive', () => {
    // Vérifier la mise en page sur desktop
    cy.viewport(1280, 720);
    cy.get('[data-testid="content-section"]')
      .should('have.class', 'container')
      .and('have.class', 'mx-auto');
    
    // Vérifier la mise en page sur mobile
    cy.viewport(375, 667);
    cy.get('[data-testid="content-section"]')
      .should('be.visible');
  });

  it('devrait avoir des styles visuels corrects', () => {
    // Vérifier les classes CSS des composants
    cy.get('[data-testid="music-player-container"]')
      .should('have.class', 'bg-white')
      .and('have.class', 'rounded-lg')
      .and('have.class', 'shadow-lg');
    
    cy.get('[data-testid="fasting-tracker-container"]')
      .should('have.class', 'bg-white')
      .and('have.class', 'rounded-lg')
      .and('have.class', 'shadow-lg');
  });

  it('devrait gérer les erreurs de chargement des MFE', () => {
    // Simuler une erreur de chargement (test de robustesse)
    cy.intercept('GET', 'http://localhost:5173', { statusCode: 500 });
    cy.intercept('GET', 'http://localhost:5174', { statusCode: 500 });
    
    cy.reload();
    
    // Vérifier que la page reste fonctionnelle même avec des erreurs
    cy.get('h1').should('be.visible');
    cy.get('main').should('be.visible');
  });
});
