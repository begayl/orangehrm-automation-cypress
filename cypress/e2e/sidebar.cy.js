describe('SidebarTest', () => {
  beforeEach(() => {cy.login();});

  it('sidebar', function() {
    cy.get('[href="/web/index.php/admin/viewAdminModule"] .oxd-text').click();
    cy.get('h6.oxd-text.oxd-text--h6').should('contain', 'Admin');

    cy.get('[href="/web/index.php/pim/viewPimModule"] .oxd-text').click();
    cy.get('h6.oxd-text.oxd-text--h6').should('contain', 'PIM');

    cy.get('[href="/web/index.php/leave/viewLeaveModule"] .oxd-text').click();
    cy.get('h6.oxd-text.oxd-text--h6').should('contain', 'Leave');

    cy.get('[href="/web/index.php/time/viewTimeModule"]').click();
    cy.get('h6.oxd-text.oxd-text--h6').should('contain', 'Time');

    cy.get('[href="/web/index.php/recruitment/viewRecruitmentModule"] .oxd-text').click();
    cy.get('h6.oxd-text.oxd-text--h6').should('contain', 'Recruitment');

    cy.get('[href="/web/index.php/pim/viewMyDetails"] .oxd-text').click();
    cy.get('h6.oxd-text.oxd-text--h6').should('contain', 'Personal Details');

    cy.get('[href="/web/index.php/performance/viewPerformanceModule"] .oxd-text').click();
    cy.get('h6.oxd-text.oxd-text--h6').should('contain', 'Performance');

    cy.get('[href="/web/index.php/dashboard/index"] .oxd-text').click();
    cy.url().should('include', '/dashboard/index');

    cy.get('[href="/web/index.php/directory/viewDirectory"] .oxd-text').click();
    cy.get('h6.oxd-text.oxd-text--h6').should('contain', 'Directory');

    cy.get('[href="/web/index.php/maintenance/viewMaintenanceModule"] .oxd-text').click();
    cy.get('h6.oxd-text.oxd-text--h6').should('contain', 'Administrator Access');
    cy.get('.oxd-button--ghost').click()

    cy.get('[href="/web/index.php/claim/viewClaimModule"]').click();
    cy.get('h6.oxd-text.oxd-text--h6').should('contain', 'Claim');
    
    cy.get('[href="/web/index.php/buzz/viewBuzz"] .oxd-text').click();
    cy.get('h6.oxd-text.oxd-text--h6').should('contain', 'Buzz');
    cy.get('[href="/web/index.php/dashboard/index"]').click();
    cy.url().should('include', '/dashboard/index');
  });
});
