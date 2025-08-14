describe('Composants MFE', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Lecteur de Musique MFE', () => {
    it('devrait être correctement intégré dans le shell', () => {
      cy.get('[data-testid="music-player-container"]')
        .should('be.visible')
        .and('have.attr', 'data-mfe', 'music-player');
      
      cy.get('[data-testid="music-player-iframe"]')
        .should('be.visible')
        .and('have.attr', 'title', 'Music Player MFE');
    });

    it('devrait avoir les bonnes dimensions et styles', () => {
      cy.get('[data-testid="music-player-iframe"]')
        .should('have.class', 'w-full')
        .and('have.class', 'h-96')
        .and('have.class', 'border-0')
        .and('have.class', 'rounded-lg');
    });

    it('devrait pointer vers le bon port de développement', () => {
      cy.get('[data-testid="music-player-iframe"]')
        .should('have.attr', 'src', 'http://localhost:5173');
    });
  });

  describe('Suivi de Jeûne MFE', () => {
    it('devrait être correctement intégré dans le shell', () => {
      cy.get('[data-testid="fasting-tracker-container"]')
        .should('be.visible')
        .and('have.attr', 'data-mfe', 'fasting-tracker');
      
      cy.get('[data-testid="fasting-tracker-iframe"]')
        .should('be.visible')
        .and('have.attr', 'title', 'Fasting Tracker MFE');
    });

    it('devrait avoir les bonnes dimensions et styles', () => {
      cy.get('[data-testid="fasting-tracker-iframe"]')
        .should('have.class', 'w-full')
        .and('have.class', 'h-96')
        .and('have.class', 'border-0')
        .and('have.class', 'rounded-lg');
    });

    it('devrait pointer vers le bon port de développement', () => {
      cy.get('[data-testid="fasting-tracker-iframe"]')
        .should('have.attr', 'src', 'http://localhost:5174');
    });
  });

  describe('Intégration des MFE', () => {
    it('devrait charger tous les MFE sans erreur', () => {
      // Vérifier que tous les conteneurs MFE sont présents
      cy.get('[data-mfe]').should('have.length', 2);
      
      // Vérifier que les iframes sont chargés
      cy.get('iframe').should('have.length', 2);
      
      // Vérifier qu'il n\'y a pas d\'erreurs dans la console
      cy.window().then((win) => {
        const consoleErrors = win.console.error;
        expect(consoleErrors).to.not.be.called;
      });
    });

    it('devrait maintenir la mise en page avec tous les MFE', () => {
      // Vérifier que la mise en page reste cohérente
      cy.get('[data-testid="content-section"]')
        .should('be.visible');
      
      // Vérifier l\'espacement entre les composants
      cy.get('[data-testid="music-player-container"]')
        .should('have.class', 'mb-8');
      
      cy.get('[data-testid="fasting-tracker-container"]')
        .should('have.class', 'mb-8');
    });

    it('devrait être accessible avec les lecteurs d\'écran', () => {
      // Vérifier les attributs d\'accessibilité
      cy.get('[data-testid="music-player-iframe"]')
        .should('have.attr', 'title');
      
      cy.get('[data-testid="fasting-tracker-iframe"]')
        .should('have.attr', 'title');
      
      // Vérifier la structure sémantique
      cy.get('h2').should('have.length', 2);
    });
  });
});
