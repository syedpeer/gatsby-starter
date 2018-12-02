const pages = require(`../../nav-config`).pages

describe(`stripe.js`, () => {
	for (const pageData in pages) {
		it(`is used in page: `+ pages[pageData].path, () => {
			cy.request(pages[pageData].path)
			.should((xhr) => {
				expect(xhr.body).to.contain(`js.stripe.com/v3`)
			})
		})
	}
})

describe(`stripe checkout.js`, () => {
	for (const pageData in pages) {
		it(`is used in page: `+ pages[pageData].path, () => {
			cy.request(pages[pageData].path)
			.should((xhr) => {
				expect(xhr.body).to.contain(`checkout.stripe.com/checkout.js`)
			})
		})
	}
})
