/// <reference types="cypress" />
it('baseUrl set dynamically', () => {
  expect(Cypress.config()).to.have.property('baseUrl', 'https://google.com')
})
