describe('login', () => {
  it('Deve logar com sucesso', () => {
    //cy.viewport(1920, 1080)
    cy.visit('https://playground.cyskills.com.br')

    //preenchimento do formulário
    cy.get('[data-cy="email"]').type('papito@cyskills.com.br')
    cy.get('[data-cy="password"]').type('showtime')

    cy.get('[data-cy="login-button"]').click()

    //validação do login
    cy.get('[data-cy="welcome-title"]').should('be.visible').and('have.text', 'Boas vindas ao Cypress Playground')


  })
})