/// <reference types='Cypress'/>
import MarketingSiteIndexPage from '../page-objects/marketing_site_index_page'
const STAGING_MARKETING_SITE_URL = Cypress.env("STAGING_MARKETING_SITE_URL");
require("@cypress/xpath");

describe('Testing the marketing site index page', ()=>{

  const marketingSiteIndexPage = new MarketingSiteIndexPage(
    STAGING_MARKETING_SITE_URL,
    "marketing"
  );  

    it('should open the marketing index page', ()=>{
       marketingSiteIndexPage.navigate()      
        })  
        
    it('should ensure that the Transcact section icons are displayed.', ()=>{
        marketingSiteIndexPage.ensureThatTheTranactIconsAreDisplayed()
          })

    it('should accept the cookie settings', ()=>{
        marketingSiteIndexPage.acceptCookieSettings()
      
    })

    it('ensure that the marketing sticky banner is displayed', ()=>{
        marketingSiteIndexPage.ensureStickyBannerIsDisplayed()
                  
    })  

        });
  

  
   

    
