describe('textarea', () => {
    beforeEach(() => {
        cy.goHome()
    })

    it('deve preencher o campo texto', () => {
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()
        cy.goTo('/textarea', 'Textarea')
        cy.get('textarea[name=message]').type("Boas vindas")
    })


})
