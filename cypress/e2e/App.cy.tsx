/// <reference types="cypress" />

describe('App navigation', () => {
  it('should navigate to different pages', () => {
    cy.visit('/');
    cy.contains('Home Page');
    cy.get('a[href="/about"]').click();
    cy.contains('About Us');
    cy.get('a[href="/form"]').click();
    cy.contains('Form');
  });
});
