# Cypress Automation Assignment for OrangeHRM

This repository contains an automated end-to-end test case for the [OrangeHRM demo application](https://opensource-demo.orangehrmlive.com/) using **Cypress**, a modern JavaScript-based end-to-end testing framework. The test case demonstrates the functionality of adding, searching, and deleting an employee within the application.

## Features of the Automation Script

1. **End-to-End Testing Workflow**  
   - Add a new employee with dynamically generated data.
   - Verify the added employee's details by searching for the same record.
   - Delete the employee and validate the success message.

2. **Page Object Model (POM)**  
   The script follows a clean POM architecture.  
   - **Locators** and **methods** are organized in separate files for reusability and maintainability.

3. **Dynamic Data Generation**  
   Randomized first names, last names, and employee IDs are used to simulate real-world scenarios.

4. **Custom Selectors**  
   Handles challenging scenarios where IDs or classes are missing, using CSS selectors to locate elements dynamically.

5. **Validation**  
   The script performs assertions to ensure proper functionality, such as confirming employee creation, search accuracy, and successful deletion.

## Prerequisites

To execute this project, ensure you have the following installed:
- **Node.js** (v14 or higher recommended)
- **NPM** (comes with Node.js)
- **Cypress** (installed via this project's dependencies)

## Setup Instructions

1. **Clone this repository:**
   ```bash
   git clone https://github.com/shasann/orange-hrm-hasan.git
   cd orange-hrm-hasan

2. **Install dependencies:**

   Run this command to install the necessary dependencies:

   ```bash
   npm install

3. **Open Cypress Test Runner:**
   After installation, open Cypress to run the test interactively:
   ```bash
   npx cypress open

4. **Run Cypress in headless mode (optional):**
   Alternatively, you can run Cypress tests in headless mode:
   ```bash
   npx cypress run

## Project Structure

- **cypress/e2e/orange-hrm.cy.js**: The main test file containing the end-to-end workflow.
- **cypress/support/pim/**:
   - `pim-methods.js`: Reusable methods for employee-related actions (Add, Search, Delete).
   - `pim-locators.js`: Locators for all elements in the application.
- **cypress.config.js**: Configuration file for Cypress setup.
- **package.json**: Contains project metadata and dependencies.
