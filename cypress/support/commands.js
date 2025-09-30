
Cypress.Commands.add('login', () => {
  cy.visit('/web/index.php/auth/login') 
  cy.get('[name="username"]').type('Admin')
  cy.get('[name="password"]').type('admin123')
  cy.get('.oxd-button').click()
  cy.url().should('include', '/dashboard')
})
