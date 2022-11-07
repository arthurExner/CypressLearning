/// <reference types="cypress" />
import CartPage from '../../pages/cart-page';
import LoginPage from '../../pages/login-page';
import ProductsPage from '../../pages/products-page';
import InformationPage from '../../pages/information-page'
import OverviewPage from '../../pages/overview-page'

describe('swag-labs', function(){
    const login = new LoginPage();
    const products = new ProductsPage();
    const cart = new CartPage();
    const information = new InformationPage();
    const overview = new OverviewPage();

    beforeEach(function(){
        login.acessar();
    })

    it('Mensagem de erro formulario vazio', function(){
       login.formularioEmBranco();
    })

    it('Mensagem de erro senha vazia', function(){
        login.senhaVazia();
    })

    it('Mensagem de erro usuario nao cadastrado', function(){
        login.usuarioNaoCadastrado();
    })

    it('Login com sucesso', function(){
        login.loginComSucessoBtn();
    })

    it('Login com sucesso com enter', function(){
        login.loginComSucessoEnter();
    })

    it('Testar adicao de um item ao carrinho', function(){
        login.loginComEnter('standard_user','secret_sauce');
        products.addOneItemToCart();        
    })
    
    it('Testar adicao dois itens ao carrinho', function(){
        login.login('standard_user','secret_sauce')
        products.addTwoItemsToCart();
    }) 

    it('Testar remoção de um item do carrinho', function(){
        login.loginComSucessoBtn();
        products.removeItemFromCart();
    })

    it('realizar checkout', function(){
        login.loginComSucessoBtn();
        products.addOneItemToCart();
        cart.realizarCheckout();
    })

    it('preencher informacoes', function(){
        login.loginComSucessoBtn();
        products.addOneItemToCart();
        cart.realizarCheckout();
        information.preencherInfoCompra();
    })

    it('finalizar compra com sucesso', function(){
        login.loginComSucessoBtn();
        products.addOneItemToCart();
        cart.realizarCheckout();
        information.preencherInfoCompra();
        overview.finalizarCompraSucesso();
    })
})