/// <reference types='cypress'/>
import MarketingSiteIndexPage from '../page-objects/marketing_site_index_page'
const  QA_MARKETING_SITE_URL = Cypress.env("QA_MARKETING_SITE_URL");

describe('View the bundles that Revix currently has', ()=>{
    const marketingSiteIndexPage = new MarketingSiteIndexPage(QA_MARKETING_SITE_URL, 'marketing');

    before(()=>{
        cy.viewport(1280, 720);
        marketingSiteIndexPage.navigate()
    })    

     it('should click on Products', ()=>{
        
        cy.xpath('//div[@class="Content__Wrapper-sc-1y5b3jo-0 bdVXwv"]/div/div[1]/button').click()
        
    })
    
    it('should click on the "Crypto Bundles" ', ()=>{
        
        cy.xpath('//h6[.="Diversify with one investment"]').click()
        cy.url().should("contain", "RVX10");
    })
})