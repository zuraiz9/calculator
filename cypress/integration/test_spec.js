describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});

describe("The main page", () => {
  it("The page loads successfully", () => {
    cy.visit("http://127.0.0.1:5501/index.html");
  });
});

describe("Basic Operator Tests", () => {
  it("Should Check 7+2 equals 9", () => {
    // Arrange
    cy.visit("http://127.0.0.1:5501/index.html");
    // Act
    cy.get(".calc__no--2").click();
    cy.get(".btn__op__add").click();
    cy.get(".calc__no--7").click();
    cy.get(".btn__eq").click();
    // Assert
    cy.get(".display").should("have.value", 9);
  });
});

describe("Basic Operator Tests", () => {
  it("Should Check Clear button clears display", () => {
    // Arrange
    cy.visit("http://127.0.0.1:5501/index.html");
    // Act
    cy.get(".calc__no--2").click();
    cy.get(".btn__op__add").click();
    cy.get(".calc__no--7").click();
    cy.get(".btn__eq").click();
    cy.get(".btn__ac").click();
    // Assert
    cy.get(".display").should("have.value", 0);
  });
});

describe("Basic Operator Tests", () => {
  it("Should Check 2-7 equals -5", () => {
    // Arrange
    cy.visit("http://127.0.0.1:5501/index.html");
    // Act
    cy.get(".calc__no--2").click();
    cy.get(".btn__op__minus").click();
    cy.get(".calc__no--7").click();
    cy.get(".btn__eq").click();
    // Assert
    cy.get(".display").should("have.value", -5);
  });
});

describe("Basic Operator Tests", () => {
  it("Should Check 3x8 equals 24", () => {
    // Arrange
    cy.visit("http://127.0.0.1:5501/index.html");
    // Act
    cy.get(".calc__no--3").click();
    cy.get(".btn__op__multiply").click();
    cy.get(".calc__no--8").click();
    cy.get(".btn__eq").click();
    // Assert
    cy.get(".display").should("have.value", 24);
  });
});

describe("Basic Operator Tests", () => {
  it("Should Check 30/6 equals 5", () => {
    // Arrange
    cy.visit("http://127.0.0.1:5501/index.html");
    // Act
    cy.get(".calc__no--3").click();
    cy.get(".btn--zero").click();
    cy.get(".btn__op__divide").click();
    cy.get(".calc__no--6").click();
    cy.get(".btn__eq").click();
    // Assert
    cy.get(".display").should("have.value", 5);
  });
});

describe("decimal test", () => {
  it("Should Check 0.56x1.4 equals 0.784", () => {
    // Arrange
    cy.visit("http://127.0.0.1:5501/index.html");
    // Act
    cy.get(".btn--zero").click();
    cy.get(".btn__dec").click();
    cy.get(".calc__no--5").click();
    cy.get(".calc__no--6").click();
    cy.get(".btn__op__multiply").click();
    cy.get(".calc__no--1").click();
    cy.get(".btn__dec").click();
    cy.get(".calc__no--4").click();
    cy.get(".btn__eq").click();
    // Assert
    cy.get(".display").should("have.value", 0.784);
  });
});

describe("percentage test", () => {
  it("Should Check 110% equals 1.1", () => {
    // Arrange
    cy.visit("http://127.0.0.1:5501/index.html");
    // Act

    cy.get(".calc__no--1").click();
    cy.get(".calc__no--1").click();
    cy.get(".btn--zero").click();
    cy.get(".btn__func__perc").click();
    // Assert
    cy.get(".display").should("have.value", 1.1);
  });
});

describe("chaining operators", () => {
  it("Should Check 0.14x0.4+14/5 equals 2.8112", () => {
    // Arrange
    cy.visit("http://127.0.0.1:5501/index.html");
    // Act
    cy.get(".btn--zero").click();
    cy.get(".btn__dec").click();
    cy.get(".calc__no--1").click();
    cy.get(".calc__no--4").click();
    cy.get(".btn__op__multiply").click();
    cy.get(".btn--zero").click();
    cy.get(".btn__dec").click();
    cy.get(".calc__no--4").click();
    cy.get(".btn__op__add").click();
    cy.get(".calc__no--1").click();
    cy.get(".calc__no--4").click();
    cy.get(".btn__op__divide").click();
    cy.get(".calc__no--5").click();
    cy.get(".btn__eq").click();
    // Assert
    cy.get(".display").should("have.value", 2.8);
  });
});
