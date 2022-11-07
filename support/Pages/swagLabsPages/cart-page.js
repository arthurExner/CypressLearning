export default class CartPage{
    cartItem = '.cart_item'
    checkout = '[data-test="checkout"]'
    title = '.title'

    realizarCheckout(){
        cy.get(this.checkout).click()
        cy.get(this.title).should('have.text','Checkout: Your Information')
    }
}