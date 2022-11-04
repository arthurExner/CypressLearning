///  <reference types="cypress" />
import Contact from "../../support/Pages/contactus/acoes";

describe('Tela contact us', function(){
     const contact = new Contact()

     beforeEach(function(){
        contact.visitar()
     })  

     it('Mensagem formulario válido', function(){
        contact.formularioValido()
        contact.submeterFormulario()
        contact.assercaoFormularioValido() 
    })
    
    it('Mensagem email invalido', function(){
        contact.formularioMailInvalido()
        contact.submeterFormulario()
        contact.assercaoMailInvalido()
    })
})