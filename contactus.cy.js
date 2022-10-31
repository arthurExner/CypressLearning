/// <reference types="cypress" />

//função describe do Mocha
describe('tela contact us', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php')
        //cy.visit('http://automationpractice.com/index.php?controller=contact')
        cy.get('#contact-link > a').click()        
    })
    it('Mensagem formulário válido', () => {
        //Pré condição: 
        cy.get('#id_contact').select('Customer service')
        cy.get('#email').type('xpto@teste.com')
        cy.get('#message').type('produto lindo')
        //Ação:
        cy.get('#submitMessage > span').click()
        //Asserção/validação
        cy.get('#center_column > p').should('have.text', 'Your message has been successfully sent to our team.')                
    })
    it('Mensagem Email inválido', () => {
        //Pré condição: 
        cy.get('#id_contact').select('Customer service')
        cy.get('#email').type('emailInvalido@com')
        cy.get('#message').type('produto lindo')
        //Ação:
        cy.get('#submitMessage > span').click()
        //Asserção/validação
        cy.get('#center_column > div > ol > li').should('have.text', 'Invalid email address.') 
        //cy.get('ol > li').should('have.text', 'Invalid email address.')
        //cy.get('#center_column li').should('have.text', 'Invalid email address.')           
    })
})