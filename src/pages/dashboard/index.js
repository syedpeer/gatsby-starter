import HtmlHead from '../../components/htmlhead'
import Layout from '../../components/layout'
import React from 'react'
import { handleLogin, isLoggedIn } from "../../utils/auth"
import { navigate } from "gatsby"
import { Router } from '@reach/router'

const pageData = require(`../../../nav-config`).pages.dashboard

export class Dashboard extends React.Component {
	render() {
		const { children } = this.props
		return (
			<Layout>
				<HtmlHead title={pageData.title} />
				<main>
					<h2>Dashboard</h2>
					<Router>
						<PrivateRoute path='/dashboard/profile' component={Profile} />
						<PublicRoute path='/dashboard'>
							<PrivateRoute path='/' component={Main} />
							<Login path='/login' />
						</PublicRoute>
					</Router>
				</main>
			</Layout>
		)
	}
}

export default Dashboard

function PublicRoute(props) {
	return <>{props.children}</>
}

class PrivateRoute extends React.Component {
	componentDidMount = () => {
	const { location } = this.props
		if (!isLoggedIn() && location.pathname !== `/dashboard/login`) {
			navigate(`/dashboard/login`)
			return null
		}
	}
	render() {
		const { component: Component, location, ...rest } = this.props
		return isLoggedIn() ? <Component {...rest} /> : null
	}
}

class Main extends React.Component {
	render() {
		return (
			<>This is "main".</>
		)
	}
}

class Profile extends React.Component {
	render() {
		return (
			<>This is "profile".</>
		)
	}
}

class Login extends React.Component {
	handleSubmit = () => {
		handleLogin(user => navigate(`/dashboard/profile`))
	}
	render() {
		return (
			<>
				<h1>Log in</h1>
				<button onClick={this.handleSubmit}>log in</button>
			</>
		)
	}
}
