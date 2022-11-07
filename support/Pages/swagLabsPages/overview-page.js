export default class OverviewPage{
    finish = '[data-test="finish"]'
    header = '.complete-header'
    title = '.title'

    finalizarCompraSucesso(){
        cy.get(this.finish).click()
        //cy.get(this.header).should('have.text','THANK YOU FOR YOUR ORDER')
        cy.get(this.title).should('have.text','Checkout: Complete!')
    }
}