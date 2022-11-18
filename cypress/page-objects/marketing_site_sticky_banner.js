import MarketingSiteIndexPage from '../page-objects/marketing_site_index_page'
require("@cypress/xpath");

class MarketingSiteStickyBanner extends MarketingSiteIndexPage {
  constructor(url, expectedText) {
    super(url, expectedText)
      }

  closeBanner(){
    cy.xpath('//*[@class="styles__CloseImage-sc-1pr6szk-3 dKTMb"]').click();
  }

  anotherOne() {
    console.log('I can see this function.')
  }

  }

export default MarketingSiteStickyBanner;