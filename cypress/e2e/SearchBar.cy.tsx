/// <reference types="cypress" />

describe('SearchBar', () => {
  it('should search for a term when submitted', () => {
    cy.visit('/');

    cy.get('[class*=SearchForm]').should('be.visible');
    cy.get('[class*=SearchForm_input]').should('be.visible');
    cy.get('[class*=SearchForm_button]').should('be.visible');

    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.get('[class*=SearchForm_input]').type('dog').should('have.value', 'dog');
    cy.get('[class*=SearchForm_button]').should('be.visible').click();
  });

  it('should display an error message when no search term is entered', () => {
    cy.visit('/');
    cy.get('[class*=SearchForm_button]').should('be.visible').click();
    cy.contains('Enter something to search');
  });
});

export {};
