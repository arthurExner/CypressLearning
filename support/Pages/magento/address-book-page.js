export default class AddressBookPage {
    divMessage = "[data-bind$='(message.text)']"
    linkMyAccount = ".nav.item [href$='account/']"

    assertSuccessMsg(){
        cy.get(this.divMessage).should('have.text', 'You saved the address.')
    }

    goToMyAccount() {
        cy.get(this.linkMyAccount).click()
    }
}