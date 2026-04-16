describe('Input Fields', () => {
    beforeEach(() => {
        cy.goHome()
    })

    it('deve preencher o campo texto', () => {
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.get('nav a[href="/input-fields"]').click()
        cy.contains('h2', 'Input Fields').should('be.visible')

        cy.get('[data-cy="fullname"]').type('Luciene')
        cy.get('[data-cy="email"]').type('abc@teste.com')
        cy.get('input[name=number]').type('54899')
        cy.get('input[name=date]').type('2026-02-05')
    })
})