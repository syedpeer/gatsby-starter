import React from 'react'
import { PaymentRequestButtonElement, CardElement, injectStripe } from 'react-stripe-elements'

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

class PaymentRequestForm extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	const paymentRequest = props.stripe.paymentRequest({
	// 		country: 'CA',
	// 		currency: 'cad',
	// 		total: {
	// 			label: 'Demo total',
	// 			amount: 1000,
	// 		},
	// 	})
	// 	paymentRequest.on('token', ({complete, token, ...data}) => {
	// 		console.log('Received Stripe token: ', token)
	// 		console.log('Received customer information: ', data)
	// 		complete('success')
	// 	})
	// 	paymentRequest.canMakePayment().then((result) => {
	// 		this.setState({canMakePayment: !!result})
	// 	})
	// 	this.state = {
	// 		canMakePayment: false,
	// 		paymentRequest,
	// 	}
	// }  
	render() {
		return (
			<PaymentRequestButtonElement paymentRequest={this.state.paymentRequest} className='PaymentRequestButton'/>
		)
	}
}

// export default injectStripe(CheckoutForm)
export default injectStripe(PaymentRequestForm)
