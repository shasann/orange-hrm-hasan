import PimPage from '../support/pim/pim-methods';
import { PimPageLocators } from '../support/pim/pim-locators';

describe('Orange HRM specs', () => {
  const pimPage = new PimPage()

  beforeEach(() => {
    cy.login()
  });

  afterEach(() => {
    cy.logout()
  });

  it('(E2E Test for PIM Tab): Verify Adding Employee is working / Searching Employee is working / Deleting Employee is working', () => {
    pimPage.addEmployee(({ firstName, lastName, employeeID }) => {
      expect(firstName).to.exist;
      expect(lastName).to.exist;
      expect(employeeID).to.exist;
      cy.get(PimPageLocators.saveButton).click()
      cy.contains('Personal Details').should('be.visible');
      //Search
      cy.goToEmployeeListPage()
      cy.get(PimPageLocators.firstNameFieldEmployeeList).first().type(firstName)
      cy.get(PimPageLocators.employeeIdFieldEmployeeList).type(employeeID)
      cy.get(PimPageLocators.saveButton).click()
      cy.get(PimPageLocators.resultsContainerEmployeeList).contains(firstName).should('be.visible');
      cy.get(PimPageLocators.resultsContainerEmployeeList).contains(lastName).should('be.visible');
      //Delete
      cy.get(PimPageLocators.deleteIconEmployeeList).click()
      cy.get(PimPageLocators.deleteModelButtonsEmployeeList).contains('Yes, Delete').click()
      cy.contains('Successfully Deleted').should('be.visible');
    });
  })
})