/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import cadastroPage from "../support/pages/cadastro-page";

describe("Funcionalide: Cadastro no Hub de Leitura", () => {

    beforeEach(() => {
        cadastroPage.visitarPaginaCadastro()

    });

    it('Deve realizar o cadastro com sucesso, usando função JS', () => {
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

    it('Deve fazer cadastro com sucesso, usando faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('213890123')
        cy.get('#password').type('senha123')
        cy.get('#confirm-password').type('senha123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //resultado esperado do registro
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)
    });

    it('Deve fazer cadastro com sucesso, usando comando customizado', () => {
        let email = `teste${Date.now()}@teste.com`
        let nome = faker.person.fullName({sex: 'female'})
        cy.preenncherCadastro(
            nome,
            email,
            '11999999999',
            'Teste@123',
            'Teste@123',
        )
        cy.url().should('include', 'dashboard')
    });

    it('Deve fazer cadastroc com sucesso - usando Page Objects', () => {
        let email = `teste${Date.now()}@teste.com`
        cadastroPage.preencherCadastro('Maria Silva', email, '11999999999', 'senha123', 'senha123')
        cy.url().should('include', 'dashboard')
    });

    it.only('Deve validar mensagem ao tentar cadastrar sem preencher nome', () => {
        cadastroPage.preencherCadastro('', 'mario@teste.com', '11999999999', 'senha123', 'senha123')
        cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')
    });

});