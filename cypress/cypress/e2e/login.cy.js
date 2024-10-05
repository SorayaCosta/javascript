describe('Login', () => {
    describe('Login - Sucesso', () => {
        it('Realizar um login com sucesso', () => {
        // arrange - pré condições
        cy.visit('https://www.saucedemo.com/')
 
        // act - ações a serem validadas
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        // assert - validação do que está sendo testado
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        })
    })        

    describe('Login - Insucesso', () => {
        it('Realizar um login com insucesso - usuário inexistente', () => {
        // arrange - pré condições
        cy.visit('https://www.saucedemo.com/')

        // act - ações a serem validadas
        cy.get('[data-test="username"]').type('unknown_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        // assert - validação do que está sendo testado
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service') 
        }),
 
        it('Realizar um login com insucesso - senha incorreta', () => {
        // arrange - pré condições
        cy.visit('https://www.saucedemo.com/')

        // act - ações a serem validadas
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('unknown_password')
        cy.get('[data-test="login-button"]').click()

        // assert - validação do que está sendo testado
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service') 
        }),

        it('Realizar um login com insucesso - usuário bloqueado', () => {
            // arrange - pré condições
            cy.visit('https://www.saucedemo.com/')
    
            // act - ações a serem validadas
            cy.get('[data-test="username"]').type('locked_out_user')
            cy.get('[data-test="password"]').type('secret_sauce')
            cy.get('[data-test="login-button"]').click()
    
            // assert - validação do que está sendo testado
            cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.') 
        })
    })
})