require("@cypress/xpath");

class MarketingSiteIndexPage {
  constructor(url, expectedText) {
    this.url = url;
    this.expectedText = expectedText;
  }

  navigate() {
    cy.visit(this.url);
    cy.url().should("contain", this.expectedText);
  }

  ensureThatTheTranactIconsAreDisplayed() {
    cy.xpath("//*[@viewBox='0 0 27 35'][1]").should("be.visible");
  }

  acceptCookieSettings() {
    cy.get(
      ".styles__Cookie-sc-1se6gy0-0 > div > .ant-btn-primary > span"
    ).click();
  }

  ensureStickyBannerIsDisplayed() {
    cy.get("span").contains("Invest now").should("be.visible");
  }
}

export default MarketingSiteIndexPage;
