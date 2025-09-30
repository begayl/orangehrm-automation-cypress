import { faker } from '@faker-js/faker';
import 'cypress-file-upload';

export const loginFlow = () => {cy.login();};

export const sidebarFlow = () => {
  cy.get('[href="/web/index.php/admin/viewAdminModule"] .oxd-text').click();
  cy.get('h6.oxd-text--h6').should('contain', 'Admin');

  cy.get('[href="/web/index.php/pim/viewPimModule"] .oxd-text').click();
  cy.get('h6.oxd-text--h6').should('contain', 'PIM');

  cy.get('[href="/web/index.php/leave/viewLeaveModule"] .oxd-text').click();
  cy.get('h6.oxd-text--h6').should('contain', 'Leave');

  cy.get('[href="/web/index.php/time/viewTimeModule"]').click();
  cy.get('h6.oxd-text--h6').should('contain', 'Time');

  cy.get('[href="/web/index.php/recruitment/viewRecruitmentModule"] .oxd-text').click();
  cy.get('h6.oxd-text--h6').should('contain', 'Recruitment');

  cy.get('[href="/web/index.php/pim/viewMyDetails"] .oxd-text').click();
  cy.get('h6.oxd-text--h6').should('contain', 'Personal Details');

  cy.get('[href="/web/index.php/performance/viewPerformanceModule"] .oxd-text').click();
  cy.get('h6.oxd-text--h6').should('contain', 'Performance');

  cy.get('[href="/web/index.php/dashboard/index"] .oxd-text').click();
  cy.url().should('include', '/dashboard/index');

  cy.get('[href="/web/index.php/directory/viewDirectory"] .oxd-text').click();
  cy.get('h6.oxd-text--h6').should('contain', 'Directory');

  cy.get('[href="/web/index.php/maintenance/viewMaintenanceModule"] .oxd-text').click();
  cy.get('h6.oxd-text--h6').should('contain', 'Administrator Access');
  cy.get('.oxd-button--ghost').click();

  cy.get('[href="/web/index.php/claim/viewClaimModule"]').click();
  cy.get('h6.oxd-text--h6').should('contain', 'Claim');

  cy.get('[href="/web/index.php/buzz/viewBuzz"] .oxd-text').click();
  cy.get('h6.oxd-text--h6').should('contain', 'Buzz');

  cy.get('[href="/web/index.php/dashboard/index"]').click();
  cy.url().should('include', '/dashboard/index');
};

export const addEmployeeFlow = () => {
  const firstName = faker.person.firstName();
  const middleName = faker.person.middleName();
  const lastName = faker.person.lastName();

  cy.get('[href="/web/index.php/pim/viewPimModule"]').click();
  cy.contains('a', 'Add Employee').click();

  cy.get('input[name="firstName"]').type(firstName);
  cy.get('input[name="middleName"]').type(middleName);
  cy.get('input[name="lastName"]').type(lastName);

  cy.get('input[type="file"]').attachFile('testlogo.png');

  cy.contains('button', 'Save').click();
  cy.get('.orangehrm-card-container').should('be.visible');

  Cypress.env('createdEmployee', firstName);
};


export const employeeListFlow = () => {
  const firstName = Cypress.env('createdEmployee') || 'Test';


  cy.get('[href="/web/index.php/pim/viewPimModule"]').click();
  cy.contains('a', 'Employee List').click();


  cy.get('input[placeholder="Type for hints..."]')
    .first()
    .clear()
    .type(firstName);


  cy.contains('button', 'Search').click();

  cy.intercept('GET', '**/api/v2/pim/employees**').as('getEmployees');
  cy.wait('@getEmployees');
  
  cy.get('.oxd-table-body', { timeout: 10000 }).within(() => {
    cy.contains('.oxd-table-card', firstName).should('be.visible');
  });

  cy.contains('.oxd-table-card', firstName)
    .parents('.oxd-table-card')
    .within(() => {
      cy.get('.bi-trash').click();
    });

 
  cy.get('.oxd-dialog-container').should('be.visible');
  cy.contains('button', 'Yes, Delete').click();

  cy.get('.oxd-toast').should('be.visible').and('contain', 'Success');
};
