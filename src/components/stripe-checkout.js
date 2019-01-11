import React from 'react'

const amount = 2500
const metaData = require(`../../gatsby-config`).siteMetadata

const StripeCheckout = class extends React.Component {
	state = {
		disabled: false,
		buttonText: `Pay with 'Stripe Checkout (Beta)'`,
		paymentMessage: ``,
	}
	resetButton() {
		this.setState({ disabled: false, buttonText: `Pay with 'Stripe Checkout (Beta)'`})
	}
	componentDidMount() {
		this.stripe = window.Stripe(metaData.stripe_public_key_test, {
			betas: ['checkout_beta_4'],
		})
	}
	async redirectToCheckout(event) {
		let loc = location.href
		event.preventDefault()
		this.setState({ disabled: true, buttonText: `GOING TO PAYMENT SCREEN...` })
		const { error } = await this.stripe.redirectToCheckout({
			items: [{ sku: 'sku_EK5cdhiGJr1PaF', quantity: 1 }],
			successUrl: loc,
			cancelUrl: loc,
		})
		if (error) {
			console.warn('Error:', error)
		}
	}
	render() {
		return (
			<div>
			<button data-testid='checkout-button' onClick={event => this.redirectToCheckout(event)} disabled={this.state.disabled}>{this.state.buttonText}</button>
			<span>{this.state.paymentMessage}</span>
			</div>
			)
		}
	}
	
	export default StripeCheckout
	