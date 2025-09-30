import { loginFlow, sidebarFlow, addEmployeeFlow, employeeListFlow } from '../support/flow.js';

describe('OrangeHRM Full Flow', () => {
  it('should run login → sidebar → add employee → employee list', () => {
    loginFlow();
    sidebarFlow();
    addEmployeeFlow();
    employeeListFlow();
  });
});
