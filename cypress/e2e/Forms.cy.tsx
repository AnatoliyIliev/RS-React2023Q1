/// <reference types="cypress" />

describe('Form submission', () => {
  it('Successfully submit the form with valid data', () => {
    cy.visit('/form');

    cy.get('[name="name"]').type('John Smith');
    cy.get('[name="phone"]').type('+1-202-555-0136');
    cy.get('[name="date"]').type('1990-01-01');
    cy.get('[value="Male"]').check();
    cy.get('select[name="genre"]').select('action');
    cy.get('[type="file"]').attachFile('../../src/assets/img/loading-icon-animated-gif-20.jpg');
    cy.get('[type="checkbox"]').check();
    cy.get('[type="submit"]').click();
    cy.contains('The data has been saved');
    cy.get('[class*=card]').should('be.visible');
    cy.get('[class*=image]').should('be.visible');
  });
});

export {};
