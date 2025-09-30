import { faker } from '@faker-js/faker';
import 'cypress-file-upload';

describe('EmployeeCRUD', () => {

  beforeEach(() => {cy.login();});

  it('AddEmployee', () => {
    const firstName = faker.person.firstName();
    const middleName = faker.person.middleName();
    const lastName = faker.person.lastName();

    cy.get('a[href="/web/index.php/pim/viewPimModule"]') .should('be.visible').click();
    cy.get('h6.oxd-text.oxd-text--h6').should('contain.text', 'PIM');

    cy.contains('a', 'Add Employee').should('be.visible').click();

    cy.get('input[name="firstName"]').should('be.visible').type(firstName);
    cy.get('input[name="middleName"]').type(middleName);
    cy.get('input[name="lastName"]').type(lastName);

    cy.get('input[type="file"]').attachFile('testlogo.png');

    cy.contains('button', 'Save').click();
    cy.get('.orangehrm-card-container').should('be.visible');
    cy.wait(1000);
    cy.get('a[href*="contactDetails"]').should('be.visible').click();
    cy.contains('h6', 'Contact Details', { timeout: 10000 }).should('be.visible');

    cy.get('form .oxd-input.oxd-input--active').eq(0).type(faker.location.streetAddress());
    cy.get('form .oxd-input.oxd-input--active').eq(1).type(faker.location.secondaryAddress());
    cy.get('form .oxd-input.oxd-input--active').eq(2).type(faker.location.city());
    cy.get('form .oxd-input.oxd-input--active').eq(3).type(faker.location.zipCode());

    cy.contains('label', 'Country').parents('.oxd-input-group').find('.oxd-select-text').click();
    cy.get('.oxd-select-dropdown .oxd-select-option').then($options => {const randomIndex = Math.floor(Math.random() * $options.length);
    cy.wrap($options[randomIndex]).click();
   });
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-toast').should('be.visible').and('contain', 'Success');

    cy.get('[href="/web/index.php/dashboard/index"]').click();
    cy.url().should('include', '/dashboard/index');
  });
});
