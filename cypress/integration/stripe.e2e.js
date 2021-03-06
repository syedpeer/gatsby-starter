const pages = require(`../../nav-config`).pages

describe(`stripe.js - via gatsby-plugin-stripe`, () => {
	for (const pageData in pages) {
		it(`is used in page: `+ pages[pageData].path, () => {
			cy.request(pages[pageData].path)
			.should((xhr) => {
				expect(xhr.body).to.contain(`js.stripe.com/v3`)
			})
		})
	}
})

describe(`stripe checkout.js via gatsby-plugin-stripe-checkout`, () => {
	for (const pageData in pages) {
		it(`is used in page: `+ pages[pageData].path, () => {
			cy.request(pages[pageData].path)
			.should((xhr) => {
				expect(xhr.body).to.contain(`checkout.stripe.com/checkout.js`)
			})
		})
	}
	it(`opens a visible checkout iframe when button click triggers StripeHandler.open()`, () => {
		cy.visit(`/plugins/`)
		cy.get(`button[data-testid=checkout-button-v3]`).click()
		cy.get(`iframe[name=stripe_checkout_app]`).should(`be.visible`)
	})
})
