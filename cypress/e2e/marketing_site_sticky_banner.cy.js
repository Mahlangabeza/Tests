/// <reference types='Cypress'/>
const STAGING_MARKETING_SITE_URL = Cypress.env("STAGING_MARKETING_SITE_URL");
import MarketingSiteStickyBanner from '../page-objects/marketing_site_sticky_banner'
require("@cypress/xpath");

describe('Test the marketing site sticky banner', ()=>{
    let _closeBanner
    const marketingSiteStickyBanner = new MarketingSiteStickyBanner(
      STAGING_MARKETING_SITE_URL,
      "marketing",
      _closeBanner
    );

    before(()=>{
        marketingSiteStickyBanner.navigate();
    })

    it('Ensure that the sticky banner is displayed', ()=>{
        marketingSiteStickyBanner.ensureStickyBannerIsDisplayed();
        
    })

    it('should close the sticky banner', ()=>{
        marketingSiteStickyBanner.closeBanner()
        
       })

    it('ensure that the sticky banner is displayed after reloading page', ()=>{
        cy.reload()
        marketingSiteStickyBanner.ensureStickyBannerIsDisplayed();
    })
    
    })

