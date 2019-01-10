import React from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'

class CheckoutForm extends React.Component {
	handleSubmit = (event) => {
		event.preventDefault()
		this.props.stripe.createToken({name: `Jenny Rosen`})
		// this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'})
		// this.props.stripe.createSource({type: 'card', owner: { name: 'Jenny Rosen'}})
		.then(({token}) => {
			alert('Received Stripe token:')
			console.log(token)
		})
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				{/* <AddressSection /> */}
				<label>
					Card details
					<CardElement />
				</label>
				<button>Confirm order</button>
			</form>
		)
	}
}

export default injectStripe(CheckoutForm)
