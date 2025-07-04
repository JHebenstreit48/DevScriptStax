/// <reference types="cypress" />

describe('Angular Introduction Page Content', () => {
    beforeEach(() => {
      // Visit Home and bypass splash
      cy.visit('/');
      cy.contains('Enter').click();
  
      // Confirm nav bar loads before interacting
      cy.get('nav.mainNav').should('exist');
  
      // Navigate directly to Angular Intro from dropdowns
      cy.contains('Front End').click();
      cy.contains('Angular').click();
      cy.contains('Basics').click();
      cy.contains('Fundamentals').click();
      cy.contains('Introduction').click();
  
      // Wait until markdown content finishes rendering
      cy.get('.markdownContent', { timeout: 10000 }).should('not.be.empty');
  
      // Confirm heading is in the DOM (existence, not visibility)
      cy.contains('Introduction to Angular', { timeout: 8000 }).should('exist');
    });
  
    it('includes the What is Angular section', () => {
      cy.contains('What is Angular?').should('exist');
      cy.contains('TypeScript-based front-end framework').should('exist');
    });
  
    it('lists reasons to use Angular', () => {
      const reasons = [
        'Component-Based Architecture',
        'Two-Way Data Binding',
        'Dependency Injection (DI)',
        'Built-in Routing & HTTP Services',
        'Reactive Forms & RxJS',
        'Optimized for Performance'
      ];
      reasons.forEach(reason => {
        cy.contains(reason).should('exist');
      });
    });
  
    it('displays the Core Angular Concepts section', () => {
      cy.contains('Core Angular Concepts').should('exist');
      const concepts = [
        'Components',
        'Modules',
        'Services & Dependency Injection',
        'Directives',
        'Routing',
        'Forms',
        'State Management (RxJS)'
      ];
      concepts.forEach(concept => {
        cy.contains(concept).should('exist');
      });
    });
  
    it('includes the Angular vs. Other Frameworks comparison table', () => {
      cy.contains('Angular vs. Other Frameworks').should('exist');
      cy.contains('Key Differences Between Angular and React JS').should('exist');
      cy.contains('TypeScript').should('exist');
      cy.contains('JavaScript (JSX)').should('exist');
    });
  
    it('has a final takeaway section', () => {
      cy.contains('When to Choose Angular vs. React JS').should('exist');
      cy.contains('enterprise-scale applications').should('exist');
      cy.contains('lightweight, flexible projects').should('exist');
      cy.contains('out of the box').should('exist');
      cy.contains('third-party libraries').should('exist');
    });
  });
  