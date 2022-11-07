export default class LoginPage {
    inputUsername = '[type="text"]'
    inputPassword = '[type="password"]'
    btnLogin = '[data-test="login-button"]'
    urlHome = 'https://www.saucedemo.com/'
    error = '[data-test="error"]'
    title = '.title'

    acessar(){
        cy.visit(this.urlHome)
        cy.url().should('include','saucedemo')
    }
    login(username, password) {
        if(username) cy.get(this.inputUsername).type(username)
        if(password) cy.get(this.inputPassword).type(password)
        cy.get(this.btnLogin).click()
    }
    loginComEnter(username, password){
        cy.get(this.inputUsername).type(username)
        cy.get(this.inputPassword).type(`${password}{enter}`)
    }
    formularioEmBranco(){
        this.login('','');
        cy.get(this.error).should('have.text','Epic sadface: Username is required')
    }
    senhaVazia(){
        this.login('userr','')
        cy.get(this.error).should('have.text','Epic sadface: Password is required')
    }
    usuarioNaoCadastrado(){
        this.login('user', 'secret_sauce')
        cy.get(this.error).should('have.text','Epic sadface: Username and password do not match any user in this service')
    }
    loginComSucessoBtn(){
        this.login('standard_user','secret_sauce')
        //cy.url().should('include','inventory.html')
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        cy.get(this.title).should('have.text','Products')
    }
    loginComSucessoEnter(){
        this.loginComEnter('standard_user','secret_sauce')
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        cy.get(this.title).should('have.text','Products')
    }    
}