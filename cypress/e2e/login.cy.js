/// <reference types="cypress" />
import user from "../fixtures/usuario.json"

describe("Funcionalidade: Login no Hub de Leitura", () => {

    beforeEach(() => {
        cy.visit('login.html');

    });

    it('Deve realizar login com sucesso', () => {
        cy.get('#email').type('teste@teste.com')
        cy.get('#password').type('teste123')
        cy.get('#login-btn').click()
        cy.url().should('include', 'dashboard')
    });

    it('Deve fazer login com sucesso - Usando comando customizado', () => {
        cy.login('teste@teste.com', 'teste123')


    });

    it('Deve fazer o login com sucesso com conta admin - Usando comando customizados', () => {
        cy.login('admin@biblioteca.com', 'admin123')
    
    });

    it.only('Deve fazer login com sucesso - Usando importação de massa de dados', () => {
        cy.login(user.email, user.senha)
    });
});