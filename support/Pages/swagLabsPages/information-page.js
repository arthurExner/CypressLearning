export default class InformationPage {
    firstName = '[data-test="firstName"]'
    lastName = '[data-test="lastName"]'
    postalCode = '[data-test="postalCode"]'
    continue = '[data-test="continue"]'
    title = '.title'

    preencherInfoCompra(){
        cy.get(this.firstName).type('Arthur')
        cy.get(this.lastName).type('Exner')
        cy.get(this.postalCode).type('99999')
        cy.get(this.continue).click()
        cy.get(this.title).should('have.text','Checkout: Overview')
    }
}