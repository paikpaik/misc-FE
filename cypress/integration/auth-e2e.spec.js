import cy from "cypress";

describe("Auth (e2e)", () => {
  it("should load and redirect to /signin", () => {
    cy.visit("http://localhost:3001/");

    cy.url().should("include", "signin");
  });

  it("should have default initial state", () => {
    const initialAppState = {
      auth: {
        user: null,
        jwt: null,
        isAuthenticated: false,
        isLoading: false,
        isSuccess: false,
        isError: false,
      },
    };

    cy.window()
      .its("store")
      .invoke("getState")
      .should("deep.equal", initialAppState);
  });

  const randomInt = Math.floor(Math.random() * 100000);
  const name = `user-${randomInt}`;
  const email = `user-${randomInt}@gamil.com`;
  const password = "password";

  it("should navigate to sign-in upon registering", () => {
    cy.get("#register-link").click();

    cy.get("#name").click().type(name);
    cy.get("#email").click().type(email);
    cy.get("#password").click().type(password);
    cy.get("#confirmPassword").click().type(password);
  });
});
