const url = 'http://localhost:8081'
const coins = [10, 10, 2]
const product = ''
const change = [
    {
        coin: 10,
        unit: 2
    },
    {
        coin: 2,
        unit: 1
    }
]

describe('Test case 5', () => {
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
            console.log($list.context.childNodes[2].innerHTML)
            if (
                $list.context.childNodes[2].innerHTML == product
            ) {
                $list.find('button').click()
            }
        })
        cy.get('[class="product-pic animate bottom-position"]').should('not.exist');
    });
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