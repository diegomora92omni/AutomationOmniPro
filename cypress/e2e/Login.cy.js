/// <reference types='Cypress' />

describe('Test cases for the account creation flow', () => {
    let datosUsuario; // Variable para almacenar los datos cargados desde el JSON

    before(() => {
        // Cargar los datos desde el archivo JSON
        cy.fixture('DatosDePrueba.json').then((data) => {
            datosUsuario = data;
        });
    });

    beforeEach(() => {
    cy.visit('https://mcstaging2.kliper.cl/kliper_store_view/')
    cy.wait(1000)
    })
    
    context('Login flow', () => {
    // Test case #1: Verificar que un usuario registrado pueda iniciar sesión
    it('Verify that an unregistered user can create an account', () => {
        // Hacer clic en el botón "Iniciar sesión"
        cy.get('.panel > .header > .link > a').click({ force: true })
        // Llenar formulario de "Clientes registrados"
        cy.get('#email').type(datosUsuario.email[0])
        cy.get('#pass').type(datosUsuario.password[0])
        //Hacer clic en botón "Iniciar sesión"
        cy.get('#send2').click()
    })
    // Test case #2: Verificar que no permita ingresar cuando las credenciales son invalidas
    it.only('Verify that an unregistered user can create an account', () => {
        // Hacer clic en el botón "Iniciar sesión"
        cy.get('.panel > .header > .link > a').click({ force: true })
        // Llenar formulario de "Clientes registrados"
        cy.get('#email').type(datosUsuario.email[0])
        cy.get('#pass').type(datosUsuario.password[1])
        //Hacer clic en botón "Iniciar sesión"
        cy.get('#send2').click()
        //Verificar que aparezca mensaje de error
        cy.get('.message-error').should('exist')
    })
})
})
