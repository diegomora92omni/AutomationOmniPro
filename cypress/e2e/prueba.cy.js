describe('Test cases for Login flow', () => {
    let dataUser; // Variable para almacenar los datos cargados desde el JSON
  
    before(() => {
      // Cargar los datos desde el archivo JSON
      cy.fixture('DataKomax.json').then((data) => {
        dataUser = data;
      });
    });
  
    beforeEach(() => {
      cy.visit('https://mcstaging2.kliper.cl/kliper_store_view/')
    })
  
    context('Login flow', () => {
 // ADDP-001: Verificar que permita añadir un Producto al Carrito desde la Página de categorias (PLP) - Guest
 it.only('ADDP-001: Verify that it allows you to add a Product to the Cart from the Category Page (PLP) - Guest', () => {
 
  //Dar clic en el Menú
  cy.get('.fa').click()
  cy.wait(1000)
  //Dar clic en la categoría
  cy.get('.ammenu-text').contains('Bebidas').click()

  //Guardo el nombre del producto
  cy.get('.product-item-actions').find('input').filter((index, element) => element.value === '317').parent().invoke('attr', 'data-product-sku').as('saveNameTest')

  //Dar clic en "Agregar al carrito"
  cy.get('.product-item-actions').find('input').filter((index, element) => element.value === '317').parent().contains('Agregar al carrito').click();

  //cy.get('#product-item-info_323 > .details > :nth-child(3) > .product > .actions-primary > form > .action').click()

  //Abrir carrito de compra
  cy.wait(2000)

  cy.get('.counter-number').then(($string) => {
      const value = parseFloat($string.text());
      // Asegúrate de que la conversión fue exitosa y que tienes un número
      expect(value).to.be.a('number');
      // Verificar que el valor es mayor a 0
      expect(value).to.be.greaterThan(0); 
  });

  cy.get('.showcart').click()

  //Verificar que el producto se haya agregado
  cy.get('@saveNameTest').then((nameText) => {
      cy.get('.minicart-items-wrapper').find('a').contains(nameText)
  });
})
    })
  })
  