/// <reference types='Cypress' />

describe('Test cases for Add To Cart flow', () => {
    let dataUser;

    before(() => {
      cy.fixture('DataKomax.json').then((data) => {
        dataUser = data;
      });
    });

    beforeEach(() => {
        cy.visit('https://mcstaging2.kliper.cl/kliper_store_view/')
        })

    context('Add to cart flow', () => {
    //Test case #2: Verificar que permita añadir un Producto al Carrito desde la Página de Detalle de Producto (PDP) - Guest
      it('ADDP-002: Verify that you can add a Product to the Cart from the Product Detail Page (PDP) - Guest', () => {

        // Obtener el valor inicial del contador del carrito a través de comando getInitialCartCount (Revisar archivo commands.js)
        cy.getInitialCartCount().then((initialCount) => {

          // Hacer clic en la categoría ubicada dentro del body del Home
          cy.get('img.pagebuilder-mobile-hidden[alt="Chaquetas de marcas Outdoor"]').click({ force: true })

          // Hacer clic en un producto en la cuadrícula de productos (PLP)
          cy.get('#amasty-shopby-product-list > div.products.wrapper.grid.products-grid')
            .find('.item.product.product-item')
            .eq(0).click()

          // Hacer clic en una talla en el detalle del producto (PDP)
          cy.get('.swatch-opt > .swatch-attribute > .swatch-attribute-options')
            .find('.swatch-option')
            .eq(0).click()

          // Hacer clic en el botón "Agregar al carrito"
          cy.get('#product-addtocart-button').click()

          // Esperar a que el modal del carrito sea visible
          cy.get('#modal-title-30').should('be.visible')
          cy.get('#modal-content-30').should('be.visible')

          // Utilizar el comando personalizado para verificar que el contador del carrito se ha actualizado
          cy.checkCartCounter(initialCount + 1)
        });
      });

    //Test case #4: Verificar que permita añadir Múltiples Unidades de un Producto al Carrito - Guest   
    it.only('ADDP-004: Verify that multiple units of a product can be added to the cart - Guest', () => {

        // Obtener el valor inicial del contador del carrito
        cy.getInitialCartCount().then((initialCount) => {
          let totalProductsAdded = 1 // Comienza con 1 producto añadido

          // Hacer clic en la categoría ubicada dentro del body del Home
          cy.get('img.pagebuilder-mobile-hidden[alt="Chaquetas de marcas Outdoor"]').click({ force: true })

          // Hacer clic en un producto en la cuadrícula de productos (PLP)
          cy.get('#amasty-shopby-product-list > div.products.wrapper.grid.products-grid')
            .find('.item.product.product-item')
            .eq(0).click()

          // Hacer clic en una talla en el detalle del producto (PDP)
          cy.get('.swatch-opt > .swatch-attribute > .swatch-attribute-options')
            .find('.swatch-option')
            .eq(0).click()

          // Hacer clic en el botón "Agregar al carrito"
          cy.get('#product-addtocart-button').click()

          // Esperar a que el modal del carrito sea visible
          cy.get('#modal-title-30').should('be.visible')
          cy.get('#modal-content-30').should('be.visible')

          // Cerrar el modal del carrito y navegar a la página del carrito
          cy.get('.buttons > .secondary').click();

          // Incrementar la cantidad del producto en el carrito, en este caso se hace doble click y se aumenta a un total de 3
          cy.get('.plus').dblclick().then(() => {
            totalProductsAdded += 1 // Aumentar la cantidad de productos añadidos
          });

          // Verificar que el contador del carrito se ha actualizado al total esperado
          cy.checkCartCounter(initialCount + totalProductsAdded)

        })
      })
    })
})
