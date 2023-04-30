/// <reference types="cypress" />

describe('MovieDetails component', () => {
  it('displays movie details when data is fetched', () => {
    cy.visit('/');
    cy.get('li').first().click();

    cy.get('img[src*=loading-icon-animated-gif]').should('be.visible');

    cy.get('[class*=movie]').should('be.visible');
    cy.get('[class*=movie_title]').should('be.visible');
    cy.get('[class*=movie_info]').should('be.visible');
    cy.get('[class*=movie_title]').should('be.visible');

    cy.get('[class*=close_button]').click();

    cy.get('[class*=modal_overlay]').should('not.exist');
  });
});

export {};
