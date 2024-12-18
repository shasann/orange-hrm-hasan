import { PimPageLocators } from '../pim/pim-locators';

class PimPage {
    addEmployee = (callback) => {
        cy.goToPimPage();
        cy.get(PimPageLocators.addButton).click();
        cy.getRandomNames().then((data) => {
            cy.get(PimPageLocators.firstNameField).type(data.firstName);
            cy.get(PimPageLocators.lastNameField).type(data.lastName);
            cy.get(PimPageLocators.employeeIdField)
                .last()
                .should('be.visible')
                .invoke('val')
                .then((employeeID) => {
                    cy.log(`Captured Employee ID: ${employeeID}`);
                    // Passing the captured values to the callback
                    if (callback) {
                        callback({
                            firstName: data.firstName,
                            lastName: data.lastName,
                            employeeID: employeeID
                        });
                    }
                });
        });
    };
}
export default PimPage;
