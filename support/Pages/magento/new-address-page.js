import {faker} from '@faker-js/faker'

export default class NewAddressPage {
    inputStreet = "#street_1"
    inputCity = "[name=city]"
    inputPhone = "#telephone"
    selectRegion = "#region_id"    
    inputPostCode = "[name=postcode]"
    selectCountry = "#country"
    btnSaveAddress = "[data-action=save-address]"
    
    
    //cy.get(elements.id).select('Customer service')
    registerAddress() {
        cy.get(this.inputStreet).type(faker.address.street())
        cy.get(this.inputCity).type(faker.address.city())
        cy.get(this.inputPhone).type(faker.phone.number())
        cy.get(this.selectRegion).select('Nebraska')
        cy.get(this.inputPostCode).type(faker.address.zipCode())
        cy.get(this.selectCountry).select('United States')
        cy.get(this.btnSaveAddress).click()        
    }
}