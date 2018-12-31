import Checkout  from '../checkout'
import React from 'react'
import { render } from 'react-testing-library'
import renderer from 'react-test-renderer'

describe(`Checkout`, () =>
	it.skip(`renders correctly with react-testing-library`, () => {
		const { getByTestId } = render(<Checkout />)
		expect(getByTestId(`checkout-button`)).toHaveTextContent(`BUY NOW`)
	}),
	it(`renders correctly with react-test-renderer`, () => {
		const tree = renderer.create(<Checkout />).toJSON()
		expect(tree).toMatchSnapshot()
	}),
)
