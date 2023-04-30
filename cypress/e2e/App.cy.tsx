/// <reference types="cypress" />

function currentPage(loc: string) {
  if (loc === '/about') {
    return 'About Us';
  }

  if (loc === '/form') {
    return 'Form';
  }

  return 'Home';
}

describe('App', () => {
  it('should navigate to HomePage when URL is /', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'Home Page');
  });

  it('should navigate to AboutUsPage when URL is /about', () => {
    cy.visit('/about');
    cy.get('h1').should('contain', 'About Us');
  });

  it('should navigate to FormsPage when URL is /form', () => {
    cy.visit('/form');
    cy.get('h1').should('contain', 'Form');
  });

  it('should navigate to NotFoundPage when URL is invalid', () => {
    cy.visit('/invalid');
    cy.get('h1').should('contain', '404 Page not found');
  });
  it('returns the correct page name based on the location', () => {
    expect(currentPage('/')).to.equal('Home');
    expect(currentPage('/about')).to.equal('About Us');
    expect(currentPage('/form')).to.equal('Form');
    expect(currentPage('/other-page')).to.equal('Home');
  });
});

export {};
