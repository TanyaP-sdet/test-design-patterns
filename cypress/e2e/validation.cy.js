describe('Magento 2 stores tests', () => {
  it('Add product to cart', () => {
    cy.visit('/fusion-backpack.html')
  })
  cy.url().should('include', 'fusion-backpack.html');
})