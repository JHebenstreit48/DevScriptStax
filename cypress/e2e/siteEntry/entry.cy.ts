/// <reference types="cypress" />

describe('Site Entry via Splash Screen', () => {
    it('loads splash and enters the site', () => {
      cy.visit('/');
  
      // Confirm splash content
      cy.contains('Welcome to DexScriptStax');
      cy.contains('Enter').should('be.visible').click();
  
      // Confirm we're now past splash (you can also check for nav visibility)
      cy.contains('DevScriptStax'); // Replace with header or hero on home
      cy.get('nav.mainNav').should('exist');
    });
  });
  