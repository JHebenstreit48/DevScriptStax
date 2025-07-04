/// <reference types="cypress" />


describe('Front End to Back End Main Tabs Dropdown Behavior', () => {
    it('opens Front End and Back End dropdowns from top tabs', () => {
      cy.visit('/');
      cy.contains('Enter').click();
  
      // Open Front End tab and verify it expands
      cy.contains('Front End').click();
      cy.contains('Angular').should('be.visible'); // Confirm dropdown content
  
      // Open Back End tab and verify it expands
      cy.contains('Back End').click();
      cy.contains('APIs').should('be.visible'); // Replace with a real item
    });
  });
  