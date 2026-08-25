/// <reference types="cypress" />

describe("Funcionalide: Cadastro no Hub de Leitura", () => {

    beforeEach(() => {
        cy.visit('register.html');
    
    });

    it('Deve realizar o cadastro com sucesso', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.get('#name').type('Maria')
        cy.get('#email').type(email)
        cy.get('#phone').type('213890123')
        cy.get('#password').type('senha123')
        cy.get('#confirm-password').type('senha123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //resultado esperado do registro
        cy.url().should('include', 'dashboard')
    });

});