const elements = require('./elements').ELEMENTS;

class Contact {
    visitar(){
        cy.visit('http://automationpractice.com/index.php')        
        cy.get(elements.pg).click()
    }
    formularioValido(){ 
        cy.get(elements.id).select('Customer service')
        cy.get(elements.email).type('xpto@teste.com')
        cy.get(elements.messageText).type('produto lindo')  
    }
    formularioMailInvalido(){ 
        cy.get(elements.id).select('Customer service')
        cy.get(elements.email).type('xptocom')
        cy.get(elements.messageText).type('produto feio')  
    }  
    submeterFormulario(){   
        cy.get(elements.submit).click() 
    }   
    assercaoFormularioValido(){  
        cy.get(elements.successMessage).should('have.text', 'Your message has been successfully sent to our team.')
    }
    assercaoMailInvalido(){
        cy.get(elements.dangerMessage).should('have.text', 'Invalid email address.')
    }
}

export default Contact