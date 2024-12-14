describe('login', () => {

  //é um gancho generico que vai implementar um step para todos os testes automatizados
  //executa 1 ou mais steps antes de cada teste
  beforeEach(() => {
    cy.viewport(1440, 900)

    cy.visit('https://playground.cyskills.com.br')

    cy.contains('h2', 'Faça login')
      .should('be.visible')
  })
  /*
    //executa 1 ou mais steps depois de cada teste
    afterEach(()=>{})
  
    //executa uma unica vez antes de todos os testes
    before(()=>{})
  
    //executa uma unica vez depois de todos os testes
    after(()=>{})*/

  it('Deve logar com sucesso', () => {
    //preenchimento do formulário
    cy.get('[data-cy="email"]').type('papito@cyskills.com.br')
    cy.get('[data-cy="password"]').type('showtime')

    cy.get('[data-cy="login-button"]').click()

    //validação do login
    cy.get('[data-cy="welcome-title"]')
      .should('be.visible')
      .and('have.text', 'Boas vindas ao Cypress Playground')

  })

  it('Não deve logar com senha invalida', () => {
    cy.login('papito@cyskills.com.br', 'abc123456')
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')

  })

  it('Não deve logar com email não cadastrado', () => {
    cy.login('404@cyskills.com.br', 'showtime')
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')

  })

  it('Não deve logar com email incorreto', () => {
    cy.login('wwwcyskills.com.br', 'showtime')
    cy.noticeHave('O formato do e-mail está incorreto. Por favor, verifique e tente novamente!')
  })
})

Cypress.Commands.add('login', (email, password) => {
  cy.get('[data-cy="email"]').type(email)
  cy.get('[data-cy="password"]').type(password)

  cy.get('[data-cy="login-button"]').click()
})

Cypress.Commands.add('noticeHave', (text) => {
  cy.get('.notice p')
    .should('be.visible')
    .and('have.text', text)
})