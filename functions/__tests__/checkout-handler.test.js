import checkoutHandler from '../checkout-handler'

describe(`checkout-handler`, () => {
	it(`should return empty object ?`, () => {
		expect(checkoutHandler.handler).toBeTruthy()
		const event = {
			body: JSON.stringify({
				amount: 1,
				token: {
					id: 1
				}
			})
		}
		expect(checkoutHandler.handler(
			event,
			null,
			(errors,response) => {
				return response
			},
		)).toBeDefined()
	})
})
