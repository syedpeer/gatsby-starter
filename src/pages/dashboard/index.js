import { Router } from '@reach/router'
import HtmlHead from '../../components/htmlhead'
import Layout from '../../components/layout'
import React from 'react'
import { Link } from 'gatsby'

const Profile = () => (
	<>
		<h1>Your profile</h1>
		<ul>
			<li>You</li>
			<li>are you.</li>
		</ul>
	</>
)
const Login = () => (
	<>
		<h1>Login</h1>
		<ul>
			<li>Who</li>
			<li>are you?</li>
		</ul>
	</>
)

export class Dashboard extends React.Component {
	render() {
		const { children } = this.props
		return (
			<Layout>
				<HtmlHead title='Dashboard' />
				<main>
					<h2>Dashboard</h2>
					<ul>
						<li><Link to='/dashboard/'>Client-Only Path</Link>
							<ul>
								<li><Link to='/dashboard/login'>Login</Link>: just a placeholder component</li>
								<li><Link to='/dashboard/profile'>Profile</Link>: just a placeholder component</li>
							</ul>
						</li>
					</ul>
					<Router>
						<Profile path='/dashboard/profile' />
						<Login path='/dashboard/login' />
					</Router>
				</main>
			</Layout>
		)
	}
}

export default Dashboard
