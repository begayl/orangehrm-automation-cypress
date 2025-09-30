describe('Employee List', () => {
  beforeEach(() => {cy.login();});

  it('EmployeeList Delete and Search', function () {
    cy.get('[href="/web/index.php/pim/viewPimModule"]').click();
    cy.url().should('include', '/pim/viewEmployeeList'); 

    cy.get('.oxd-table-card').then(rows => {const count = rows.length;
      if (count > 0) {
        const randomIndex = Cypress._.random(0, count - 1);
        const initialCount = count;
        cy.wrap(rows[randomIndex]).find('button.oxd-icon-button.oxd-table-cell-action-space').last().click();
        cy.wait(1000);
        cy.contains('button', 'Yes, Delete').click();
        cy.get('.oxd-toast', { timeout: 10000 }).should('be.visible').and('contain.text', 'Successfully Deleted');
      }
    });

    cy.get('div:nth-child(1) > .oxd-input-group > div:nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input')
      .click().should('be.visible').clear().type('test').should('have.value', 'test');

    cy.get('div:nth-child(2) > .oxd-input').click().clear().type('0418').should('have.value', '0418');

    cy.get('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    cy.get('div:nth-child(3) .oxd-select-dropdown').should('be.visible');

    cy.get('div:nth-child(4) .oxd-select-text-input').click();
    cy.get('div:nth-child(4) .oxd-select-dropdown').should('be.visible');

    cy.get('div:nth-child(6) .oxd-select-text--after .oxd-icon').click();
    cy.get('div:nth-child(6) .oxd-select-dropdown').should('be.visible');

    cy.get('div:nth-child(7) .oxd-select-text--after .oxd-icon').click();
    cy.get('div:nth-child(7) .oxd-select-dropdown').should('be.visible');

    cy.get('.orangehrm-left-space').click();
    cy.get('.oxd-table').should('be.visible');

    cy.get('[href="/web/index.php/dashboard/index"]').click();
    cy.url().should('include', '/dashboard/index');
  });
});
