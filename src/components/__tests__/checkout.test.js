import Checkout  from '../checkout'
import React from 'react'
import renderer from 'react-test-renderer'

describe(`Checkout`, () =>
	it(`renders correctly with react-test-renderer`, () => {
		const tree = renderer.create(<Checkout />).toJSON()
		expect(tree).toMatchSnapshot()
	}),
)
