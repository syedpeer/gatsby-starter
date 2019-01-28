import HtmlHead from '../components/htmlhead'
import Layout from '../components/layout.js'
import React from 'react'
import { Link } from 'gatsby'

export const FourOhFourMarkup = props => (
	<Layout>
		<HtmlHead title='Ooops.' />
		<main>
			<h2>Page not found</h2>
			<p>You might find what you're looking for at <Link to='/'>the index page</Link>.</p>
			<p>Note: this 404 page overrides Gatsby's built-in 404.</p>
		</main>
	</Layout>
)

export default FourOhFourMarkup
