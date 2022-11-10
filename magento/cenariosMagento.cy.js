/// <reference types="cypress" />
import HomePage from '../../pages/magento/home-page'
import CreateAccountPage from '../../pages/magento/create-account-page'
import NewAddressPage from '../../pages/magento/new-address-page'
import AddressBookPage from '../../pages/magento/address-book-page'
import MyAccountPage from '../../pages/magento/my-account-page'

describe('luma ecomerce', function() {
    const home = new HomePage()
    const createAccount = new CreateAccountPage()
    const newAddress = new NewAddressPage()
    const addressBook = new AddressBookPage()
    const myAccount = new MyAccountPage()

    beforeEach(function() {
        home.access()
    })

    it('create account', function() {
        home.goToCreateAccount()
        createAccount.createAccount()
        myAccount.assertSuccessMsg()
    })

    it('create default billing address', function() {
        home.goToCreateAccount()
        createAccount.createAccount()
        myAccount.goToEditAddress()
        newAddress.registerAddress()
        addressBook.assertSuccessMsg()
        addressBook.goToMyAccount()
        myAccount.assertContactInfo()
    })

    
})