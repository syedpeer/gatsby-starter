import InjectedCheckoutForm from './checkout-form'
import React from 'react'
import { Elements } from 'react-stripe-elements'

class MyCheckout extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.stripe.createToken({name: `Jenny Rosen`})
        .then(({token}) => {
            console.log('Received Stripe token:', token)
        })
    }
    render() {
        return (
            <Elements>
                <InjectedCheckoutForm />
            </Elements>
        )
    }
}

export default MyCheckout