export default class ProductsPage {
    addJacket = '[data-test="add-to-cart-sauce-labs-fleece-jacket"]'
    removeJacket = '[data-test="remove-sauce-labs-fleece-jacket"]'
    bikeLight = '[data-test="add-to-cart-sauce-labs-bike-light"]'
    acessarCarrinho = '.shopping_cart_link'
    cartQuantity = '.cart_quantity'
    cartItem = '.cart_item'
    itemName = '.inventory_item_name'

    addOneItemToCart(){
        cy.get(this.addJacket).click()
        cy.get(this.acessarCarrinho).click()
        cy.get(this.cartQuantity).should('have.text','1')
        cy.get(this.cartItem).should('have.length', 1) //cada vez que adiciono um item ao carrinho uma <div .cart_item> novo aparece na tela
        cy.get(this.itemName).should('have.text','Sauce Labs Fleece Jacket')
    }
    addTwoItemsToCart(){
        cy.get(this.addJacket).click()
        cy.get(this.bikeLight).click()
        cy.get(this.acessarCarrinho).click()
        cy.get(this.cartItem).should('have.length', 2)//o seletor $$('.cart_item') encontra um array com 2 itens
        cy.get('#item_5_title_link div').should('have.text','Sauce Labs Fleece Jacket')
        cy.get('#item_0_title_link div').should('have.text','Sauce Labs Bike Light')
    }
    removeItemFromCart(){
        cy.get(this.addJacket).click()
        cy.get(this.removeJacket).should('have.length', 1);
        cy.get(this.removeJacket).click()
        cy.get(this.removeJacket).should('have.length', 0);
    }
}