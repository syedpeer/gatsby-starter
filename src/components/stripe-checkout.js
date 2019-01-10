import React from 'react'

const amount = 2500
const metaData = require(`../../gatsby-config`).siteMetadata

const Checkout = class extends React.Component {
	state = {
		disabled: false,
		buttonText: `Pay with 'Stripe Checkout'`,
		paymentMessage: ``,
	}
	resetButton() {
		this.setState({ disabled: false, buttonText: `Pay with 'Stripe Checkout'`})
	}
	componentDidMount() {
		if((typeof window !== `undefined`) && (typeof window.StripeCheckout !== `undefined`)) {
			this.stripeHandler = window.StripeCheckout.configure({
				key: metaData.stripe_public_key_test,
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
				// do nothing for now... no 'charges' are incurred until you've got a checkout handler endpoint (in lambda or similar)
				// fetch(`https://gatsby-starter.davesabine.com/.netlify/functions/checkout-handler`, {
				// 	method: `POST`,
				// 	mode: `no-cors`,
				// 	body: JSON.stringify({
				// 		token,
				// 		amount,
				// 	}),
				// 	headers: new Headers({
				// 		'Content-Type': 'application/json',
				// 	}),
				// })
				// .then(res => {
				// 	// console.log(`Transaction processed successfully.`)
				// 	this.resetButton()
				// 	this.setState({ paymentMessage: `Payment successful!`})
				// 	return res
				// })
				// .catch(error => {
				// 	// console.error(`Error:`, error)
				// 	this.setState({ paymentMessage: `Payment failed.`})
				// })
			},
		})
	}
	render() {
		return (
			<div>
				<button data-testid='checkout-button' onClick={event => this.openStripeCheckout(event)} disabled={this.state.disabled}>{this.state.buttonText}</button>
				<span>{this.state.paymentMessage}</span>
			</div>
		)
	}
}

export default Checkout
