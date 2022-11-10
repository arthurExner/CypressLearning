import { faker } from '@faker-js/faker';

export default class CreateAccountPage {
    baseText = ".base"
    inputFirstName = "[name=firstname]"
    inputLastName = "[name=lastname]"
    inputEmail = "#email_address"
    inputPassword = "#password"
    inputPasswordConfirmation = "[name=password_confirmation]"
    btnCreateAccount = "[title='Create an Account']"
    password = faker.internet.password()

    createAccount() {
        cy.get(this.baseText).should('have.text', 'Create New Customer Account')
        cy.get(this.inputFirstName).type(faker.name.firstName())
        cy.get(this.inputLastName).type(faker.name.lastName())
        cy.get(this.inputEmail).type(faker.internet.email())
        cy.get(this.inputPassword).type(this.password)
        cy.get(this.inputPasswordConfirmation).type(this.password)
        cy.get(this.btnCreateAccount).click()
    }

}