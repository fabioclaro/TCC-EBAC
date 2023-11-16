Cypress.Commands.add('listarCupons', () => {
    cy.request({
        method: 'GET',
        url: '/wc/v3/coupons',
        headers: { authorization:'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy' }
    })
})

Cypress.Commands.add('listarCupomId', (idCupom) => {
    cy.request({
        method: 'GET',
        url: '/wc/v3/coupons/' + idCupom,
        headers: { authorization:'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy' }
    })
})

Cypress.Commands.add('cadastrarCupom', (nomeCupom, valor, descricao) => {
    cy.request({

        method: 'POST',
        url: '/wc/v3/coupons',
        headers: { authorization:'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy' },
        body: {
            "code": nomeCupom,
            "amount": valor,
            "discount_type": "fixed_product",
            "description": descricao
        },
        failOnStatusCode: false
    })
})