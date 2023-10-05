/// <reference types='Cypress' />

/// Escenarios de prueba propuestos por Juan Solarte ///

describe('Smoke test a ambiente Staging 2 de Kliper', () => {
    beforeEach(() => {
    cy.visit('https://mcstaging2.kliper.cl/kliper_store_view/')
    cy.viewport(1280, 720)
    cy.wait(1000)
    })
    
    context('Crear una cuenta', () => {
    // Test case #1: Verificar que un usuario no registrado se pueda dar de alta
    it('Verificar que un usuario no registrado se pueda dar de alta', () => {
        // Hacer clic en el enlace para crear una cuenta
        cy.get('.panel > .header > .link > a').click({ force: true });
    
        // Hacer clic en el botón de registro
        cy.get('.login-container .block-new-customer .action.primary').click();

        // Rellenar el formulario de registro con datos de prueba
        cy.get('input[name="firstname"]').type('Juan'); // Cambia los selectores y los datos según tu formulario
        cy.get('input[name="lastname"]').type('Solarte');
        cy.get('input[name="email"]').type('juan.solarte+test@cypress.io');
        cy.get('input[name="password"]').type('Test@1234');
        cy.get('input[name="password-confirmation"]').type('Test@1234');

        // Hacer clic en el botón de enviar del formulario de registro
        cy.get('button[type="submit"]').click();

        // Verificar que el registro fue exitoso
        // Aquí debes agregar una aserción basada en la respuesta esperada de tu aplicación tras un registro exitoso.
        // Por ejemplo, puedes verificar si la URL cambió o si aparece un mensaje de éxito en la página.
        cy.url().should('include', '/dashboard') // Cambia esto según la URL esperada
        cy.get('.message-success').should('be.visible') // Cambia esto según el mensaje o elemento que aparece tras un registro exitoso
        })
    })
})

  