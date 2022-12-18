describe('React Test', () => {
  it('Check if add new employee is added', () => {
    cy.visit("http://localhost:3000/#");
    cy.get("[data-cy=newEmployeeButton]").click();
    cy.get("[data-cy=firstNameInput]").type("Tony");
    cy.get("[data-cy=surnameInput]").type("Angelo");
    cy.get("[data-cy=emailInput]").type("tonyangelo@gmail.com");
    cy.get("input[type=date]").click("left").type('2009-12-12',"yyyy-MM-dd") ;
    cy.get("[data-cy=statusInput]").select("Active");
    cy.get("[data-cy=jobTitleInput]").type("Teacher");
    cy.get("[data-cy=saveButton]").click();
    cy.get("[data-cy=backButton]").click();
    cy.get("[data-cy=viewEmployeesButton]").click();
    cy.get("table").should("contain","Tony");
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