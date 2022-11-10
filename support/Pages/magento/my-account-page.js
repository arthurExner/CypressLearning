export default class MyAccountPage {
    divMsg = "[data-bind$='(message.text)']"
    btnEditAddress = "[data-ui-id='default-billing-edit-link']"
    spanInfoTitle = ".box-information .box-title span"

    assertSuccessMsg() {
        cy.get(this.divMsg).should('have.text', 'Thank you for registering with Fake Online Clothing Store.')
    }

    goToEditAddress() {
        cy.get(this.btnEditAddress).click()
    }

    assertContactInfo() {
        cy.get(this.spanInfoTitle).should('have.text', 'Contact Information')
    }

}