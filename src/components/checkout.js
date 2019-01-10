import React from 'react'

const amount = 2500

const Checkout = class extends React.Component {
	state = {
		disabled: false,
		buttonText: `BUY NOW`,
		paymentMessage: ``,
	}
	resetButton() {
		this.setState({ disabled: false, buttonText: `BUY NOW`})
	}
	componentDidMount() {
		if((typeof window !== `undefined`) && (typeof window.StripeCheckout !== `undefined`)) {
			this.stripeHandler = window.StripeCheckout.configure({
				key: `pk_test_4D4oy79bOUIBhUNuIBEFTqak`,
				closed: () => {
					this.resetButton()
				}
			})
		}
	}
	openStripeCheckout(event) {
		event.preventDefault()
		this.setState({ disabled: true, buttonText: `WAITING...` })
		this.stripeHandler.open({
			name: `Demo Product`,
			amount: 2500,
			description: `A product for demonstration.`,
			token: token => {
				fetch(`https://gatsby-starter.davesabine.com/.netlify/functions/checkout.js`, {
					method: `POST`,
					mode: `no-cors`,
					body: JSON.stringify({
						token,
						amount,
					}),
					headers: new Headers({
						'Content-Type': 'application/json',
					}),
				})
				.then(res => {
					// console.log(`Transaction processed successfully.`)
					this.resetButton()
					this.setState({ paymentMessage: `Payment successful!`})
					return res
				})
				.catch(error => {
					// console.error(`Error:`, error)
					this.setState({ paymentMessage: `Payment failed.`})
				})
			},
		})
	}
	render() {
		return (
			<div>
				<h4>Stripe payment tools!</h4>
				<button data-testid='checkout-button' onClick={event => this.openStripeCheckout(event)} disabled={this.state.disabled}>{this.state.buttonText}</button>
				<span>{this.state.paymentMessage}</span>
				<p>The plugins are installed.  Configure with your own key and form handler.  Hint for testing: use any email address, 4242 4242 4242 4242 as the credit card number, any 3 digit number, and any future date of expiration.</p>
			</div>
		)
	}
}

export default Checkout
