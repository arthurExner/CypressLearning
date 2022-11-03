///  <reference types="cypress" />
import Contact from "../../support/Pages/contactus/acoes";

describe('Tela contact us', function(){
     const contact = new Contact()  
     it('Mensagem email válido', function(){
        contact.visitar() 
        contact.preencherFormularioValido()
        contact.submeterFormulario()
        contact.assercao() 
    })
})