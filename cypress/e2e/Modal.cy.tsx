/// <reference types="cypress" />

describe('Card', () => {
  it('opens modal when clicked', () => {
    cy.visit('/');
    cy.get('li').first().click();

    cy.get('[class*=modal_content]').should('be.visible');
  });

  it('close modal when clicked cross button', () => {
    cy.visit('/');
    cy.get('li').first().click();
    cy.get('[class*=close_button]').click();

    cy.get('[class*=modal_content]').should('not.exist');
  });

  it('close modal when clicked by overlay', () => {
    cy.visit('/');
    cy.get('li').first().click();

    cy.get('[class*=modal_content]').should('be.visible');

    cy.get('[class*=modal_overlay]').click('topLeft');
    cy.get('[class*=modal_overlay]').should('not.exist');
  });
});

export {};
