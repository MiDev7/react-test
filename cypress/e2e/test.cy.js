import { mockData }from "../fixtures/mockData";
 

describe('React Test', () => {
  it('Check if add new employee is added', () => {
    cy.visit("http://localhost:3000/#");
    cy.get("[data-cy=newEmployeeButton]").click();
    mockData.map(detail => {
      cy.get("[data-cy=firstNameInput]").type(detail.firstName);
      cy.get("[data-cy=surnameInput]").type(detail.surname);
      cy.get("[data-cy=emailInput]").type(detail.email);
      cy.get("input[type=date]").click("left").type(detail.birthDate,"yyyy-MM-dd") ;
      cy.get("[data-cy=statusInput]").select(detail.status);
      cy.get("[data-cy=jobTitleInput]").type(detail.jobTitle);
      cy.get("[data-cy=saveButton]").click();
      cy.wait(2100)
    });
    
    cy.get("[data-cy=backButton]").click();
    cy.get("[data-cy=viewEmployeesButton]").click();
    cy.get("[data-cy=page15]").click();
    cy.get("table").should("contain","Cart");
  }),
  it('Check if change is applied', () => {
    cy.visit("http://localhost:3000/#");
    cy.get("[data-cy=viewEmployeesButton]").click();
    cy.get("table").should("contain","Abe");
    cy.get("[data-cy=edit]").click();
    cy.get("[data-cy=firstNameInput]").type("John");
    cy.get("[data-cy=updateButton]").click();
    cy.get("table").should("contain","John");
  })
})