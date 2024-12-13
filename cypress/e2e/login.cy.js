describe('login', () => {
  it('Deve logar com sucesso', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://playground.cyskills.com.br')

    //validação para saber se está na página correta
    cy.contains('h2', 'Faça login')
      .should('be.visible') 

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
    cy.viewport(1920, 1080)
    cy.visit('https://playground.cyskills.com.br')

    //validação para saber se está na página correta
    cy.contains('h2', 'Faça login')
      .should('be.visible') 

    //preenchimento do formulário
    cy.get('[data-cy="email"]').type('papito@cyskills.com.br')
    cy.get('[data-cy="password"]').type('abc123456')

    cy.get('[data-cy="login-button"]').click()

    //validação do login
    cy.get('.notice p')
      .should('be.visible')
      .and('have.text', 'E-mail ou senha incorretos. Por favor, tente novamente!')

  })

  it('Não deve logar com email não cadastrado', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://playground.cyskills.com.br')

    //validação para saber se está na página correta
    cy.contains('h2', 'Faça login')
      .should('be.visible') 

    //preenchimento do formulário
    cy.get('[data-cy="email"]').type('404@cyskills.com.br')
    cy.get('[data-cy="password"]').type('showtime')

    cy.get('[data-cy="login-button"]').click()

    //validação do login
    cy.get('.notice p')
      .should('be.visible')
      .and('have.text', 'E-mail ou senha incorretos. Por favor, tente novamente!')

  })

  it('Não deve logar com email não cadastrado', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://playground.cyskills.com.br')

    //validação para saber se está na página correta
    cy.contains('h2', 'Faça login')
      .should('be.visible') 

    //preenchimento do formulário
    cy.get('[data-cy="email"]').type('wwwcyskills.com.br')
    cy.get('[data-cy="password"]').type('showtime')

    cy.get('[data-cy="login-button"]').click()

    //validação do login
    cy.get('.notice p')
      .should('be.visible')
      .and('have.text', 'O formato do e-mail está incorreto. Por favor, verifique e tente novamente!')

  })
})