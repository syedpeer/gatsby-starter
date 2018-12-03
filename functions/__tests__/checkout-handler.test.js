import checkoutHandler from '../checkout-handler'
jest.mock('../checkout-handler')

beforeEach(() => {
	checkoutHandler.mockClear()
})

describe(`checkout-handler`, () => {
	it(`should do something`, () => {
		expect(checkoutHandler.handler._isMockFunction).toBeTruthy()
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
		)).toBe(true)
	})
})



// const charges = function() {
// 	this.charge = {
// 		amount: null,
// 		source: null,
// 		currency: null,
// 		description: null,
// 		statement_descriptor: null
// 	}
// }
// charges.create = function(data) {
// 	this.charge = { 
// 		amount: data.amount,
// 		source: data.token,
// 		currency: data.currency,
// 		description: data.description,
// 		statement_descriptor: data.statement_descriptor.substring(0,21)
// 	 }
// 	return this
// }
// charges.then = function(chargeObject) {
// 	return this
// }
// charges.catch = function(a) {
// 	return this
// }

