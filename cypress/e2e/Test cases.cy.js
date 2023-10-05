/// <reference types='Cypress' />

///Escenarios de prueba propuestos por Juan Solarte///

describe('Smoke test a ambiente Staging 2 de Kliper', () => {
    beforeEach(() => {
        cy.visit('https://mcstaging2.kliper.cl/kliper_store_view/')
        cy.viewport(1280,720)
        cy.wait(1000)
    })

context('Crear una cuenta', () => {
    ///Test case #1
    it('Verificar que un usuario no registrado se pueda dar de alta', () => {
        cy.get('.panel > .header > .link > a').click({force: true});
        cy.get('.login-container .block-new-customer .action.primary').click()
    })
})
})


