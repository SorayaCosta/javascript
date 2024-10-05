describe('Carrinho', () => {
    describe('Carrinho - Sucesso', () => {

    it('Adicionar um produto ao carrinho com sucesso', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()

        cy.get('[data-test=shopping-cart-badge]').should('contain.text', '1')

    }),
        
    it('Verificar se o produto correto foi adicionado ao carrinho', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()

        cy.get('[data-test="shopping-cart-badge"]').click()

        cy.get('[data-test="inventory-item-name"]').should('contain.text', 'Sauce Labs Backpack')
    }),
        
    it('Adicionar três produtos ao carrinho com sucesso', () => {
            cy.visit('https://www.saucedemo.com/')
            cy.get('[data-test="username"]').type('standard_user')
            cy.get('[data-test="password"]').type('secret_sauce')
            cy.get('[data-test="login-button"]').click()
    
            cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
            cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click()
            cy.get('[data-test=add-to-cart-sauce-labs-bolt-t-shirt]').click()

            cy.get('[data-test=shopping-cart-badge]').should('contain.text', '3')
    }),
        
    it('Verificar se os três produtos corretos foram adicionados ao carrinho', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
        cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click()
        cy.get('[data-test=add-to-cart-sauce-labs-bolt-t-shirt]').click()
        
        cy.get('[data-test="inventory-item-name"]').should('contain.text', 'Sauce Labs Backpack')
        cy.get('[data-test="inventory-item-name"]').should('contain.text', 'Sauce Labs Bike Light')
        cy.get('[data-test="inventory-item-name"]').should('contain.text', 'Sauce Labs Bolt T-Shirt')
        })
    })
})
