// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    cy.visit('/web/index.php/auth/login');
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('logout', () => {
    cy.get('.oxd-userdropdown-icon').click()
    cy.get('a[href="/web/index.php/auth/logout"]').click();
});

Cypress.Commands.add('goToPimPage', () => {
    cy.visit('web/index.php/pim/viewEmployeeList')
});

Cypress.Commands.add('goToEmployeeListPage', () => {
    cy.visit('web/index.php/pim/viewEmployeeList')
    cy.reload()
});

Cypress.Commands.add('getRandomNames', () => {
    const firstNames = [
        'Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Helen', 'Ian', 'Jack',
        'Kathy', 'Liam', 'Mia', 'Nate', 'Olivia', 'Paul', 'Quinn', 'Rita', 'Sam', 'Tina',
        'Uma', 'Victor', 'Wendy', 'Xander', 'Yara', 'Zane'
    ];

    const lastNames = [
        'Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor',
        'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Roberts',
        'Clark', 'Rodriguez', 'Lewis', 'Walker', 'Young'
    ];

    // Function to get a random name from a given array
    function getRandom(namesArray) {
        const randomIndex = Math.floor(Math.random() * namesArray.length);
        return namesArray[randomIndex];
    }

    // Generating random first and last names separately
    const firstName = getRandom(firstNames);
    const lastName = getRandom(lastNames);

    // Returning both names as an object
    return { firstName, lastName };
});


