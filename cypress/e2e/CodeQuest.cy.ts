/// <reference types="cypress" />

describe('CodeQuest Navigation: Angular Basics', () => {
    it('navigates to Angular Basics > Fundamentals > Introduction', () => {
      cy.visit('/');
  
      // Bypass splash screen
      cy.contains('Enter').click();
  
      // Confirm nav is rendered
      cy.get('nav.mainNav').should('exist');
  
      // Click through each level of the dropdown
      cy.contains('Front End').click();
      cy.contains('Angular').click();
      cy.contains('Basics').click();
      cy.contains('Fundamentals').click();
      cy.contains('Introduction').click();
  
      // Confirm path
      cy.url().should('include', '/angular/basics/fundamentals/intro');
  
      // Confirm page content exists
      cy.contains('Introduction'); // Or whatever heading/text appears on the page
    });
  });
  