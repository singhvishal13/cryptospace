describe("renders the home page", () => {
    it("renders correctly", () => {
        cy.visit("/");
        cy.get("#container").should("exist");
        cy.get("#footer").should("exist");
        cy.get('.show-more > a').click();
        cy.get('.ant-input').clear();
        cy.get('.ant-input').type('Bitcoin');
        cy.get(':nth-child(1) > a > .ant-card > .ant-card-body > :nth-child(2)').click();
        cy.get('.ant-select-selection-item').click();
        cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click();
        cy.get('.ant-col > :nth-child(3) > a').click();
        cy.get(':nth-child(4) > a').click();

    });
      it("allows to navigate news easily", () => {
          cy.visit("/news");

          cy.get(':nth-child(2) > .ant-card > .ant-card-body > a > #news-image-container > .ant-typography').click();

          cy.get('#rc_select_0').click();
          cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click();
          cy.get('.ant-select-selection-item').click();
          cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click();

      });    


});

  
