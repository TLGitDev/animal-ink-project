import React from 'react';
import { Button } from '../../packages/ui/src/lib/Button';

describe('Button Component', () => {
  it('devrait rendre le bouton avec le texte par défaut', () => {
    cy.mount(<Button>Cliquez-moi</Button>);
    
    cy.get('button')
      .should('contain.text', 'Cliquez-moi')
      .and('be.visible');
  });

  it('devrait appliquer les classes CSS par défaut', () => {
    cy.mount(<Button>Bouton</Button>);
    
    cy.get('button')
      .should('have.class', 'bg-blue-500')
      .and('have.class', 'hover:bg-blue-600')
      .and('have.class', 'text-white')
      .and('have.class', 'font-medium')
      .and('have.class', 'py-2')
      .and('have.class', 'px-4')
      .and('have.class', 'rounded');
  });

  it('devrait appliquer la variante secondary', () => {
    cy.mount(<Button variant="secondary">Bouton Secondaire</Button>);
    
    cy.get('button')
      .should('have.class', 'bg-gray-500')
      .and('have.class', 'hover:bg-gray-600');
  });

  it('devrait appliquer la variante outline', () => {
    cy.mount(<Button variant="outline">Bouton Outline</Button>);
    
    cy.get('button')
      .should('have.class', 'border')
      .and('have.class', 'border-blue-500')
      .and('have.class', 'text-blue-500')
      .and('have.class', 'hover:bg-blue-500')
      .and('have.class', 'hover:text-white');
  });

  it('devrait appliquer la taille large', () => {
    cy.mount(<Button size="lg">Bouton Large</Button>);
    
    cy.get('button')
      .should('have.class', 'px-6')
      .and('have.class', 'py-3')
      .and('have.class', 'text-lg');
  });

  it('devrait appliquer la taille petite', () => {
    cy.mount(<Button size="sm">Bouton Petit</Button>);
    
    cy.get('button')
      .should('have.class', 'px-2')
      .and('have.class', 'py-1')
      .and('have.class', 'text-sm');
  });

  it('devrait gérer les clics', () => {
    const onClickSpy = cy.spy().as('onClickSpy');
    cy.mount(<Button onClick={onClickSpy}>Bouton Cliquable</Button>);
    
    cy.get('button').click();
    cy.get('@onClickSpy').should('have.been.calledOnce');
  });

  it('devrait être désactivé quand disabled est true', () => {
    cy.mount(<Button disabled>Bouton Désactivé</Button>);
    
    cy.get('button')
      .should('be.disabled')
      .and('have.class', 'opacity-50')
      .and('have.class', 'cursor-not-allowed');
  });

  it('devrait appliquer les classes personnalisées', () => {
    cy.mount(<Button className="custom-class">Bouton Personnalisé</Button>);
    
    cy.get('button').should('have.class', 'custom-class');
  });

  it('devrait afficher l\'icône quand fournie', () => {
    const Icon = () => <span data-testid="icon">🎵</span>;
    cy.mount(<Button icon={<Icon />}>Bouton avec Icône</Button>);
    
    cy.get('[data-testid="icon"]').should('be.visible');
    cy.get('button').should('contain.text', 'Bouton avec Icône');
  });

  it('devrait afficher l\'état de chargement', () => {
    cy.mount(<Button loading>Chargement...</Button>);
    
    cy.get('button')
      .should('be.disabled')
      .and('have.class', 'opacity-75');
  });

  it('devrait être accessible', () => {
    cy.mount(<Button aria-label="Bouton d'action">Action</Button>);
    
    cy.get('button')
      .should('have.attr', 'aria-label', 'Bouton d\'action');
  });
});
