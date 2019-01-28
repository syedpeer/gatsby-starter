import AppDescription from '../components/appdescription'
import StripeCheckout from '../components/stripe-checkout'
import StripeCheckout3 from '../components/stripe-checkout3'
import MyCheckout from '../components/my-checkout'
import HtmlHead from '../components/htmlhead'
import Layout from '../components/layout'
import React from 'react'

export const IndexMarkup = props => (
	<Layout>
		<HtmlHead title='Home' />
		<main>
			<AppDescription />
			{/* <h3>Stripe Tools</h3>
			<p>Depending on the level of customization required, you may decide to use "Stripe Checkout", or "Stripe Elements".</p>
			<p>The plugins are installed.  Configure with your own key and form handler.</p>
			<p><strong>To see these tools in action:</strong> use any email address, 4242 4242 4242 4242 as the credit card number, any 3 numbers for CVC, and any future date of expiration.</p>
			<h4>Stripe Checkout(Beta) Demo</h4>
			<StripeCheckout />
			<p>Stripe Checkout (Beta) is simple.  You pass it some info and it takes your customer through a payment form fully-hosted by Stripe.  (A lot like the ease of PayPal circa 2001.)</p>
			<h4>Stripe Checkout(v3) Demo</h4>
			<StripeCheckout3 />
			<p>Stripe Checkout (v3) is medium-simple.  You pass it an amount and a description, and it validates the Credit Card and delivers you a token.  You must also produce a self-hosted lambda-like function to actually interact with your Stripe account — like performing charges.</p>
			<h4>Stripe Elements Demo (Using &lt;CardElement /&gt;)</h4>
			<MyCheckout />
			<p>Stripe Elements are not styled but allow for custom forms, such as the Name and Amount fields above.</p> */}
		</main>
	</Layout>
)

export default IndexMarkup
