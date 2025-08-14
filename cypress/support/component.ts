// Import commands.js using ES2015 syntax:
import './commands';

// Configuration pour les tests de composants
import { mount } from 'cypress/react18';

// Expose mount globalement pour les tests de composants
Cypress.Commands.add('mount', mount);

// Configuration des timeouts pour les tests de composants
Cypress.config('defaultCommandTimeout', 5000);
Cypress.config('requestTimeout', 5000);
Cypress.config('responseTimeout', 5000);
