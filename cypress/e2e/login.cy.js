describe('Login', () => {
  it('adminlogin', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]', { timeout: 10000 }).should('be.visible').type('Admin');
    cy.get('[name="password"]').should('be.visible').type('admin123');
    cy.get('.oxd-button').should('be.visible').click();
    cy.url().should('include', '/dashboard');
    });
    
  });
  