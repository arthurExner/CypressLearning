const elements = require('./elements').ELEMENTS;

class Contact {
    visitar(){
        cy.visit('http://automationpractice.com/index.php')        
        cy.get(elements.pg).click()
    }
    preencherFormularioValido(){ 
        cy.get(elements.id).select('Customer service')
        cy.get(elements.email).type('xpto@teste.com')
        cy.get(elements.messageText).type('produto lindo')  
    }  
    submeterFormulario(){   
        cy.get(elements.submit).click() 
    }   
    assercao(){  
        cy.get(elements.assertMessage).should('have.text', 'Your message has been successfully sent to our team.')
    } 
}

export default Contact