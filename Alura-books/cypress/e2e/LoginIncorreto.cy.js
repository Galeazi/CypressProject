describe('Página de Login', () => {
    it('Preencher os campos do formulário incorretamente para validar menssagem Erro', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get('.oxd-button').click();
      cy.get('.oxd-button').click();
      // cy.contains('Required').should('be.visible');
      cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').contains('Required').should('be.visible')
      cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').contains('Required').should('be.visible')

     
    })
  })