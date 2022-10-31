/// <reference types="cypress" />

//função describe do Mocha
describe('tela about us', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php')
    })
    it('Acessar about us', () => {
        cy.get('a[title="About us"]').click()
        cy.get('h1.page-heading').should('have.text', 'About us')        
    })
} )