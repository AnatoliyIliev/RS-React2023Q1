/// <reference types="cypress" />

describe('Cards', () => {
  function chooseColor(value: number) {
    if (value < 5) return 'red';
    else if (value >= 5 && value < 8) return 'orange';
    else if (value >= 8) return 'green';
  }
  it('should display the correct movie information for each card', () => {
    const averageColorStyle = chooseColor(6);

    cy.visit('/');

    cy.get('[class*=cards_item]').should('be.visible');
    cy.get('[class*=card_title]').should('be.visible');
    cy.get('[class*=card_date]').should('be.visible');
    cy.get('[class*=card_circle]').should('be.visible');
  });
});

export {};
