describe('Página de Forgot your password', () => {
    it('Preencher os campos do formulário incorretamente para validar menssagem Erro', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get('.orangehrm-login-forgot > .oxd-text').click()
      cy.get('.oxd-button--secondary').click()
      cy.get('.oxd-input-group > .oxd-text').contains('Required').should('be.visible')
     
    })
  })