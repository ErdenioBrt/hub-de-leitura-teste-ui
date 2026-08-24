describe('Funcionalidade: Contato', () => {

  beforeEach(() => {
    cy.visit('index.html')
  });

  it('Deve preencher o formulario com sucesso', () => {
    
    cy.get('[name="name"]').type('Erdenio')
    cy.get('[name="email"]').type('erdenio@teste')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    // Resultado esperado do teste
    cy.contains('Contato enviado com sucesso!').should('exist')
  });

  it("Deve validar a mensagem de erro ao enviar sem preencher nome",() => {
    cy.get('[name="name"]').clear()
    cy.get('[name="email"]').type('erdenio@teste')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    // Resultado esperado do teste
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome.')

  });
  it("Deve validar mensagem de erro ao enviar sem preencher e-mail",() => {
    cy.get('[name="name"]').type('Erdenio')
    cy.get('[name="email"]').clear()
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    // Resultado esperado do teste
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail.')
    
  });
  
  it("Deve validar mensagem de erro ao enviar sem selecionar assunto",() => {
    cy.get('[name="name"]').type('Erdenio')
    cy.get('[name="email"]').type('erdenio@teste')
    //cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    // Resultado esperado do teste
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto.')
    
  });

   it("Deve validar mensagem de erro ao enviar sem preencher mensagem",() => {
    cy.get('[name="name"]').type('Erdenio')
    cy.get('[name="email"]').type('erdenio@teste')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').clear()
    cy.get('#btn-submit').click()
    // Resultado esperado do teste
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem.')
    
  });

});