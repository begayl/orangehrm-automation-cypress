### OrangeHRM Automation with Cypress 🌸

This repository contains automated tests for the **OrangeHRM application** using Cypress.  
The goal is to ensure functionality and stability of the application through automated UI testing.  
This project is still a **work in progress** and will add with more test cases over time.

---
### Introduction
OrangeHRM is a popular open-source Human Resource Management system.  
This project automates different functionalities of the OrangeHRM application using Cypress.  
It focuses on validating flows like login and employee management to streamline testing and reduce regression issues.

---

### Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (LTS version recommended)
- npm (comes with Node.js)

---
### Installation
Clone the repository:
```bash
git clone https://github.com/begayl/orangehrm-automation-cypress.git
cd orangehrm-automation-cypress
```
---
Install dependencies:
```bash
npm install
```
---
To open Cypress Test Runner:
```bash
npx cypress open
```
---
To run in headless mode:
```bash
npx cypress run
```
---
Folder Structure

The project follows the standard Cypress folder structure:
```bash
orangehrm-automation-cypress/
├── cypress/
│   ├── e2e/                     # Test specifications
│   │   ├── login.cy.js          # Login test cases
│   │   ├── addEmployee.cy.js    # Add employee test cases
│   │   ├── employeeList.cy.js   # Employee list test cases
│   │   ├── sidebar.cy.js        # Sidebar navigation test cases
│   ├── fixtures/                # Test data (optional)
│   ├── support/                 # Custom commands & configs
├── cypress.config.js            # Cypress configuration file
├── package.json                 # Project dependencies and scripts
└── README.md                    # Documentation
```
---
### Contributing

Contributions are welcome! If you’d like to improve this project:

1. Fork the repository

2. Create a new branch:
```bash
git checkout -b feature/YourFeature
```
3. Make your changes

4. Commit:
```bash
git commit -m "Add some feature"
```
5. Push to your branch:
```bash
git push origin feature/YourFeature
```

