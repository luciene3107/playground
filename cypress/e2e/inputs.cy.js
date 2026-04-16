describe('Input Fields', () => {
    it('deve preencher o campo texto', () => {
        cy.visit('https://playground.cyskills.com.br')

        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()
    })
})