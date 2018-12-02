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
		this.stripeHandler = window.StripeCheckout.configure({
			key: `pk_test_4D4oy79bOUIBhUNuIBEFTqak`,
			closed: () => {
				this.resetButton()
			}
		})
	}
	openStripeCheckout(event) {
		event.preventDefault()
		this.setState({ disabled: true, buttonText: `WAITING...` })
		this.stripeHandler.open({
			name: `Demo Product`,
			amount: 2500,
			description: `A product for demonstration.`,
			token: token => {
				fetch(`LAMDA_URL`, {
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
					console.log(`Transaction processed successfully.`)
					this.resetButton()
					this.setState({ paymentMessage: `Payment successful!`})
					return res
				})
				.catch(error => {
					console.error(`Error:`, error)
					this.setState({ paymentMessage: `Payment failed.`})
				})
			},
		})
	}
	render() {
		return (
			<div>
				<h4>Spend your Money!</h4>
				<p>Use any email, 4242 4242 4242 4242 as the credit card nmumber, any 3 digit number, and any future date of expiration.</p>
				<button data-testid="checkout-button" onClick={event => this.openStripeCheckout(event)} 
				disabled={this.state.disabled}>{this.state.buttonText}</button>
				<span>{this.state.paymentMessage}</span>
			</div>
		)
	}
}

export default Checkout
