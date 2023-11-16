/// <reference types="cypress" />

describe("Funcionalidade Página de produtos", () => {
  beforeEach(() => {
    cy.visit('produtos');
  });

  it("Adicionar 3 Produtos diferentes ao Carrinho", () => {
    var quantidade = 1

    cy.selecaoProdutos('Frankie Sweatshirt', 'XS', 'Green', quantidade)
    cy.selecaoProdutos('Abominable Hoodie', 'S', 'Blue', quantidade)
    cy.selecaoProdutos('Bruno Compete Hoodie', 'S', 'Black', quantidade)

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', '3')

  })
})