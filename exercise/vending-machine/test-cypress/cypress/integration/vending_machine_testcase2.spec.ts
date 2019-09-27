const url = 'http://localhost:8081'
const coins = [10, 5, 2, 1]
const product = 'Pepsi Max'
const change = [{
    coin: 2,
    unit: 1
},
{
    coin: 1,
    unit: 1
}]

describe('Test case 2', () => {
    it('Go to url', () => {
        cy.visit(url)
    })
    it('Insert coin', () => {
        cy.wrap(coins).each((coin) => {
            if (coin == 10) {
                cy.get('[alt="coin-10"]').click()
            } else if (coin == 5) {
                cy.get('[alt="coin-5"]').click()
            } else if (coin == 2) {
                cy.get('[alt="coin-2"]').click()
            } else {
                cy.get('[alt="coin-1"]').click()
            }
        })
    })
    it('Select product and get product', () => {
        cy.get('[class="row product-list"]>div').each($list => {
            if (
                $list.context.childNodes[2].innerHTML == product
            ) {
                $list.find('button').click()
            }
        })
        cy.get('[class="animate title"]').contains(product)
    })
    it('Receive change', () => {
        cy.get('[class="btn btn-success btn-block text text-white m-3"]').click()
        cy.wrap(change).each((el) => {
            if (el.coin == 10) {
                cy.get('[alt="change-10"]').should('be.visible')
                cy.get('[class="console-change"]').children().contains(el.unit)
            } else if (el.coin == 5) {
                cy.get('[alt="change-5"]').should('be.visible')
                cy.get('[class="console-change"]').children().contains(el.unit)
            } else if (el.coin == 2) {
                cy.get('[alt="change-2"]').should('be.visible')
                cy.get('[class="console-change"]').children().contains(el.unit)
            } else {
                cy.get('[alt="change-1"]').should('be.visible')
                cy.get('[class="console-change"]').children().contains(el.unit)
            }
        })
    })
})