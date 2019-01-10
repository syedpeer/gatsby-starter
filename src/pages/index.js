import AppDescription from '../components/appdescription'
import Checkout from '../components/stripe-checkout'
import MyCheckout from '../components/my-checkout'
import HtmlHead from '../components/htmlhead'
import Layout from '../components/layout'
import React from 'react'
import AllSitePages from '../components/allsitepages'

export const IndexMarkup = props => (
	<Layout>
		<HtmlHead title='Home' />
		<header>
			<h1>Hello world!</h1>
		</header>
		<main>
			<AppDescription />
			<AllSitePages />
			<h3>Stripe Tools</h3>
			<p>Depending on the level of customization required, you may decide to use "Stripe Checkout", or "Stripe Elements".</p>
			<p>The plugins are installed.  Configure with your own key and form handler.</p>
			<p><strong>To see these tools in action:</strong> use any email address, 4242 4242 4242 4242 as the credit card number, any 3 numbers for CVC, and any future date of expiration.</p>
			<h4>Stripe Checkout Demo</h4>
			<Checkout />
			<p>Stripe Checkout is simple.  You pass it an amount and a description, and it does the rest.</p>
			<h4>Stripe Elements Demo (Using &lt;CardElement /&gt;)</h4>
			<MyCheckout />
			<p>Stripe Elements are not styled but allow for custom forms, such as the Name and Amount fields above.</p>
		</main>
	</Layout>
)

export default IndexMarkup
