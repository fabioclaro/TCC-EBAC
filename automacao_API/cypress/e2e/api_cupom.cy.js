/// <reference types="cypress" />

describe('Testes da API', () => {

  it('Deve listar todos os cupons cadastrados', () => {
    cy.listarCupons().then((response) => {

      expect(response.status).to.equal(200)
      expect(response.body[0]).to.have.property('code')
    })
  })

  it('Deve listar o cupon informado no ID', () => {
    var idCupom = 11754

    cy.listarCupomId(idCupom).then((response) => {

      expect(response.status).to.equal(200)
      expect(response.body.id).to.equal(idCupom)
    })
  })

  it('Deve realizar o cadastro de um novo cupom', () => {
    let cupom = `cp${Math.floor(Math.random() * 100)}`

    cy.cadastrarCupom(cupom, '20', 'Para você um cupom ' +  cupom).then((response) => {

      expect(response.status).to.equal(201)
      expect(response.body.description).to.contain('Para você um cupom ')

    })
  })

  it('Não de cadastrar cupom com nome repetido', () => {
    cy.cadastrarCupom("nota10", '20', 'Cupom novo').then((response) => {

      expect(response.status).to.equal(400)
      expect(response.body.message).to.equal("O código de cupom já existe")
  

    })
  })
})
