describe(`typography.js`, () => {

	const urls = [
		`/`,
		`/404/`
	]

	urls.forEach(element => {
		it(`is used in page: `+ element, () => {
			cy.request(element)
			.should((xhr) => {
				expect(xhr.body).to.contain(`typography.js`)
			})
		})
	})
})