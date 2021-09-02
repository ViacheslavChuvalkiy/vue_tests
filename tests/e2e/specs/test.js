
describe('My e2e Test', () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });
  it("load the app", () => {
    cy.get("#app").should("be.visible").and('contain', 'to do list');
  });

  it("input new task", () => {
    cy.get("[newTaskInput]")
      .type("Task 1",{delay: 500})
      .should("have.value", "Task 1");
    cy.get("[newTaskInput]").type("{enter}");
    cy.get("[taskItem] p").should('contain', 'Task 1');
    cy.get("[toDoList]").should('have.length', '1');
    cy.wait(500);
  });

  it("there is empty title", () => {
    cy.get("[toDoList] h2")
      .should("contain", "добавьте задачи к выполнению!!!");
    cy.wait(500);
  });

  it("add empty task", () => {
    cy.get("[newTaskInput]").type("{enter}");
    cy.wait(300);
    cy.get("[toDoList] h2")
      .should("contain", "добавьте задачи к выполнению!!!");
    cy.wait(500);
  });

  it("set status completed to task", () => {
    cy.get("[newTaskInput]")
      .type("Task 1",{delay: 500});
    cy.get("[newTaskInput]").type("{enter}");
    cy.wait(1000);
    cy.get("[taskItem] label").click();
  });

  it("delete the task", () => {
    cy.get("[newTaskInput]")
      .type("Task 1",{delay: 500});
    cy.get("[newTaskInput]").type("{enter}");
    cy.wait(1000);
    cy.get("[taskItem] button").click();
    cy.get("[toDoList] h2")
      .should("contain", "добавьте задачи к выполнению!!!");
    cy.wait(500);
  });

  it("filter completed the tasks", () => {
    cy.get("[newTaskInput]")
      .type("Task 1",{delay: 500});
    cy.get("[newTaskInput]").type("{enter}");
    cy.get("[taskItem] label").click();
    cy.wait(1000);
    cy.get("[newTaskInput]")
      .type("Task 2",{delay: 500});
    cy.get("[newTaskInput]").type("{enter}");
    cy.wait(2000);
    cy.get("[filterButtons] label").last().click();
    cy.get("[toDoList]").should('have.length', '1');
    cy.wait(2000);
    cy.get("[filterButtons] label").first().click();
    cy.wait(500);
    cy.get("[taskItem] button").last().click();
    cy.wait(500);
    cy.get("[toDoList] label").should('have.length', '1');
  });

  it("filter active the tasks", () => {
    cy.get("[newTaskInput]")
      .type("Task 1",{delay: 500});
    cy.get("[newTaskInput]").type("{enter}");
    cy.get("[taskItem] label").click();
    cy.wait(300);
    cy.get("[newTaskInput]")
      .type("Task 2",{delay: 500});
    cy.get("[newTaskInput]").type("{enter}");
    cy.wait(300);
    cy.get("[newTaskInput]")
      .type("Task 3",{delay: 500});
    cy.get("[newTaskInput]").type("{enter}");
    cy.wait(300);
    cy.get("[filterButtons] label").first().next().click();
    cy.get("[toDoList] label").should('have.length', '2');
    cy.wait(1000);
    cy.get("[filterButtons] label").first().click();
    cy.wait(500);
    cy.get("[taskItem] button").last().click();
    cy.wait(500);
    cy.get("[toDoList] label").should('have.length', '2');
  });


});
