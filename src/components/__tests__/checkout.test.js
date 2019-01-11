import Checkout  from '../stripe-checkout3'
import React from 'react'
import renderer from 'react-test-renderer'

describe(`Checkout (v3)`, () =>
	it(`renders correctly with react-test-renderer`, () => {
		const tree = renderer.create(<Checkout />).toJSON()
		expect(tree).toMatchSnapshot()
	}),
)
