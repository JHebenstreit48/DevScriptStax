/// <reference types="cypress" />

/// <reference types="cypress" />

describe('Home Page Content & Structure', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.contains('Enter').click();
    });
  
    it('shows the navigation bar', () => {
      cy.get('nav.mainNav').should('exist');
    });
  
    it('displays the Code Quest heading', () => {
      cy.contains('Code Quest').should('be.visible'); // Adjust based on actual heading
    });
  
    it('contains the welcome paragraph or intro message', () => {
      cy.contains('personal reference site for full stack web development'); // Or other identifying text
    });
  
    it('displays the top nav tabs', () => {
      const tabs = ['Front End', 'Back End', 'Cloud Services', 'Testing', 'Tools', 'Web Languages', 'GraphQL & Apollo'];
      tabs.forEach(tab => {
        cy.contains(tab).should('be.visible');
      });
    });
  });
  