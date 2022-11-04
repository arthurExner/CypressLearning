///  <reference types="cypress" />
import Contact from "../../support/Pages/contactus/acoes";

describe('Tela contact us', function(){
     const contact = new Contact()  
     it('Mensagem formulario válido', function(){
        contact.visitar() 
        contact.formularioValido()
        contact.submeterFormulario()
        contact.assercaoFormularioValido() 
    })
    it('Mensagem email invalido', function(){
        contact.visitar()
        contact.formularioMailInvalido()
        contact.submeterFormulario()
        contact.assercaoMailInvalido()
    })
})