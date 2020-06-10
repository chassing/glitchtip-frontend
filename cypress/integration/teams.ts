import { seedBackend, requestLogin } from "./utils";
import { organization, newTeam } from "../fixtures/variables";

describe("Create New Team", () => {
  beforeEach(() => {
    seedBackend();
    requestLogin();
  });

  it("should add and update teams", () => {
    cy.visit(`/settings/${organization.name}/teams`);
    cy.get("#new-team").click();
    cy.get("input[formcontrolname=slug]").type(newTeam.slug);
    cy.get("#create-team-submit").click();
    cy.contains(`#${newTeam.slug}`);
  });

  it("should show validation errors", () => {
    cy.visit(`/settings/${organization.name}/teams`);
    cy.get("#new-team").click();
    cy.get("input[formcontrolname=slug]").type(
      newTeam.slug + " invalid spaces"
    );
    cy.get("#create-team-submit").click();
    cy.contains("consisting of letters, numbers, underscores or hyphens.");
  });
});