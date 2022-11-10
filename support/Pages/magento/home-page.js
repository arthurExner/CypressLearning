export default class HomePage {
    url = 'https://magento.softwaretestingboard.com/'
    h2HotSellers = 'h2.title'
    btnHomeCreateAccount = 'a[href$="create/"]' //retorna 3 elementos
    
    access() {
        cy.visit(this.url)
        cy.get(this.h2HotSellers).should('have.text', 'Hot Sellers')
    }

    goToCreateAccount() {
        cy.get(this.btnHomeCreateAccount).first().click()
    }
}