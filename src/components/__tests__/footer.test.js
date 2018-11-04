import React from 'react'
import renderer from 'react-test-renderer'
// import { render } from 'react-testing-library'
import Footer from '../footer'

describe(`Footer`, () =>
  it(`renders correctly -- according to react-test-renderer`, () => {
    const tree = renderer.create(<Footer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
)
