/// <reference types="cypress"/>
const API_URL = Cypress.env('DEV_BASE_URL')

describe('smoke test for the mobile app', ()=>{

    let token = 'Bearer ';
    let customerId;

    it('should login', ()=>{

       cy.request(
         "POST",
         "https://auth.dev.edge.revix.com/authentication/login",
         {
           clientCode: "APP",
           username: 'Martin.M@revix.com',
           password: "Thisisatest1",
           recaptcha: "string"
         }
       ).should((response) => {
        expect(response.status).to.eql(200)
        expect(response.body.success).to.eql(true)
        expect(response.body.token).not.equal(null)
        token += response.body.token;
               });
    })

    it('should retrieve customerId', ()=>{
      cy.request({
        method: "GET",
        url: `${API_URL}/signup/getProfile`,
        headers: { accept: "application/json", Authorization: token},
      }).should((response)=>{
      expect(response.status).eql(200);
      customerId = response.body.id;
          })
    })

    it('should buy BTC', ()=>{
      cy.request({
        method: "POST",
        url: `${API_URL}/buy`,
        headers: { accept: "application/json", Authorization: token },
        body: {"customerId":`${customerId}`,"fromProductCode":"GBP","toProductCode":"BTC","fromAmountAsUnits":13,"estimatePrice":0,"quotedToAmount":0,"quotedFeeAmount":0}
      }).should((response)=>{
        expect(response.status).to.eql(200)
        expect(response.body.smartTradeResult.actualPrice).not.eql(null);
        expect(response.body.fromAmountInFunctionalProduct).not.eql(null);
        expect(response.body.toAmount).not.eql(null);

      })     
      
      })
      it('should buy the top ten bundle', ()=>{
       cy.wait(3000)
       cy.request({
         method: "POST",
         url: `${API_URL}/buy`,
         headers: { accept: "application/json", Authorization: token },
         body: {
           customerId: `${customerId}`,
           fromProductCode: "GBP",
           toProductCode: "RVX10",
           fromAmountAsUnits: 10,
           estimatePrice: 0,
           quotedToAmount: 0,
           quotedFeeAmount: 0,
         },
       }).should((response)=>{
        expect(response.status).to.eql(200)
        expect(response.body.smartTradeResult.actualPrice).not.eql(null);
        expect(response.body.fromAmountInFunctionalProduct).not.eql(null);
        expect(response.body.toAmount).not.eql(null);
       })   
      })

      it('should sell BTC to ETH', ()=>{
        cy.wait(3000)
       cy.request({
         method: "POST",
         url: `${API_URL}/buy`,
         headers: { accept: "application/json", Authorization: token },
         body: {"customerId":`${customerId}`,
         "fromProductCode":"BTC",
         "toProductCode":"ETH",
         "fromAmountAsUnits":0.00066,
         "estimatePrice":0,
         "quotedToAmount":0,
         "quotedFeeAmount":0}

      }).should(({status, body})=>{
        expect(status).eql(200)
        expect(body.smartTradeResult.actualPrice).not.eql(null);
        expect(body.fromAmountInFunctionalProduct).not.eql(null);
        expect(body.toAmount).not.eql(null);

      })
      

    })

  })
