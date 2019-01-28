import HtmlHead from '../components/htmlhead'
import Layout from '../components/layout'
import MyCheckout from '../components/my-checkout'
import React from 'react'
import StripeCheckout from '../components/stripe-checkout'
import StripeCheckout3 from '../components/stripe-checkout3'
import { css } from '@emotion/core'
import { Link, graphql, StaticQuery } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const pageData = require(`../../nav-config`).pages.plugins

class PluginsMarkup extends React.Component {
	state = {}
	render() {
		return (
			<StaticQuery
				query={graphql`
					query sitePlugins {
						plugins: allSitePlugin {
							edges {
								node{
									id
									name
									pluginFilepath
								}
							}
						}
					}
					`
				}
				render={({ plugins }) => (
					<Layout>
						<HtmlHead title={pageData.title} />
						<main>
							<h2>Plugins UseD in this Starter</h2>
								{plugins.edges.map(({ node: plugin }) => (
									<PluginList plugin={plugin} />
								))}
						</main>
					</Layout>
				)}
			/>
		)
	}
}

export default PluginsMarkup

class PluginList extends React.Component {
	render() {
		const plugin = this.props.plugin
		if(plugin.pluginFilepath.indexOf(`gatsby/dist`) === -1) {
			return (
				<article>
					<PluginArticle pluginName={plugin.name} plugin={plugin} />
				</article>
			)
		} else {
			return null
		}
	}
}

class PluginArticle extends React.Component {
	render() {
		const thisHeading = <h3 id={this.props.plugin.id}>{this.props.plugin.name}</h3>
		const thisArticle = this.props.plugin.name
		switch(thisArticle) {
			case `gatsby-plugin-create-client-paths`:
				return (
					<div>
						{thisHeading}
						<p>This plugin is useful when creating <em>App</em>-like behaviour which you do not want rendered statically.  For example, maybe you have a <Link to='/dashboard/'>Customer Dashboard</Link> which displays sensitive information and reports and you:</p>
						<ul>
							<li>want the data dynamically generated</li>
							<li>want the information kept private from search bots</li>
						</ul>
					</div>
				)
			case `gatsby-plugin-emotion`:
				return (
					<div>
						{thisHeading}
						<p><OutboundLink href='https://emotion.sh/'>emotion</OutboundLink> is a CSS-in-JS library.  Gatsby tutorials about styled-components demonstrate the use of emotion, so I've included and used this technique in this starter.</p>
						<p>Regarding CSS: this starter uses Typography.js and emotion for styled components... only.  I am exploring a possible future without the bulk of bootstrap.css (or similar).</p>
					</div>
				)
			case `gatsby-plugin-google-analytics`:
				return (
					<div>
						{thisHeading}
						<p>This plugin simply takes a UA code and a few options, then injects the appropriate JavaScript into the DOM on every page of your site.</p>
					</div>
				)
			case `gatsby-plugin-google-tagmanager`:
				return (
					<div>
						{thisHeading}
						<p>This plugin simply takes your GTM code and a few options, then injects the appropriate JavaScript into the DOM on every page of your site.</p>
						<p>This starter uses Google Tagmanager to track navigation actions, but also to inject JavaScript functions into the DOM — a feature I didn't realize was possible.  (For example, from your Google Tagmnager UI, you can write and inject JavaScript code which will execute in this page.)</p>
					</div>
				)
			case `gatsby-plugin-manifest`:
				return (
					<div>
						{thisHeading}
						<p>This plugin produces appropriate code and assets to produce the web app manifest.</p>
					</div>
				)
			case `gatsby-plugin-react-helmet`:
				return (
					<div>
						{thisHeading}
						<p>This plugin is essential.  With it, this starter produces all the important meta tags and such in the document's &lt;HEAD&gt;.</p>
						<p>His starter also include and example Cypress test to verify that Helmet is working as you need.</p>
					</div>
				)
			case `gatsby-plugin-robots-txt`:
				return (
					<div>
						{thisHeading}
						<p>This plugin simply produces a robots.txt file during build.</p>
					</div>
				)
			case `gatsby-plugin-sitemap`:
				return (
					<div>
						{thisHeading}
						<p>This plugin simply produces a sitemap.xml file during build.</p>
					</div>
				)
			case `gatsby-plugin-stripe`:
				return (
					<div>
						{thisHeading}
						<p>This plugin provides an API to use and manipulate Stripe 'Elements'.  If you want to produce a payment form for use with Stripe, this plugin is wonderful.</p>
						<div>
							<h4>Demo</h4>
							<p>This demo shows how &lt;CardElement /&gt; operates.  (<OutboundLink href='//stripe.com/payments/elements'>Other elements are documented by Stripe here.</OutboundLink>)</p>
							<blockquote css={css`
								border: solid 1px #ccc;
								background-color: #f1f1f1;
								padding: 2em;
								`}>
								<p>To try:</p>
								<ol>
									<li>Fill out the form below</li>
									<li>Use card number: <code>4242 4242 4242 4242</code></li>
									<li>Use any future month/year</li>
									<li>Use any 3 numbers for CVC and any zip code</li>
									<li>Submit!</li>
								</ol>
								<p>The form will ping Stripe's server using my 'test' key and will return a valid token.</p>
								<MyCheckout />
							</blockquote>
						</div>
					</div>
				)
			case `gatsby-plugin-stripe-checkout`:
				return (
					<div>
						{thisHeading}
						<p>If all you need is a simple checkout form, for a simple product without discounts, options, shipping addresses, customer names... then this plugin is excellent.</p>
						<h4>Version: Beta 4</h4>
						<p>There are two <em>flavours</em> of the Stripe Checkout currently — this version is still in beta.</p>
						<p>The compelling reason to use it (rather than the older version) is that this version does not require any backend functionality on your part.  You don't need to create a serverless lambda function or a other RESTful endpoint.  All the heavy-lifting is done by Stripe at their end, on their servers.  (A lot like PayPal <em>circa 2001</em>.)</p>
						<p>Stripe Checkout (Beta) is simple.  You pass it some info and it takes your customer through a payment form fully-hosted by Stripe.  (A lot like the ease of PayPal circa 2001.)</p>
						<blockquote css={css`
								border: solid 1px #ccc;
								background-color: #f1f1f1;
								padding: 2em;
							`}>
							<p>To try:</p>
							<ol>
								<li>Click the button below</li>
								<li>Note, you'll be directed to Stripe's servers</li>
								<li>Use card number: <code>4242 4242 4242 4242</code></li>
								<li>Use any future month/year</li>
								<li>Use any 3 numbers for CVC and any zip code</li>
								<li>You will be returned to this page</li>
							</ol>
							<StripeCheckout />
						</blockquote>
						<h4>Version 3</h4>
						<p>Stripe Checkout (v3) is <em>not</em> simple.  It looks slick, but it takes work.</p>
						<p>Basically, you pass it an amount and a description then Stripe validates the Credit Card and delivers you a token.</p>
						<p>To <em>do</em> anything useful with that token, you must produce a self-hosted lambda-like function and charge the credit card, record the customer's info, update your inventory, send email and so on.</p>
						<blockquote css={css`
								border: solid 1px #ccc;
								background-color: #f1f1f1;
								padding: 2em;
							`}>
							<p>To try:</p>
							<ol>
								<li>Click the button below</li>
								<li>A payment modal will appear</li>
								<li>Use card number: <code>4242 4242 4242 4242</code></li>
								<li>Use any future month/year</li>
								<li>Use any 3 numbers for CVC and any zip code</li>
								<li>When the modal closes, the token is available to us</li>
							</ol>
							<StripeCheckout3 />
						</blockquote>
					</div>
				)
			case `gatsby-plugin-typography`:
				return (
					<div>
						{thisHeading}
						<p>Typography.js is an interesting approach to creating global CSS rules for HTML elements.  As the name implies, it's <em>sweet spot</em> is typography — the style of text and textual elements (blockquotes, headings, and so on).</p>
					</div>
				)
			case `gatsby-plugin-offline`:
				return (
					<div>
						{thisHeading}
						<p>This plugin helps manage state for Progressive Web Apps when internet connections are intermittent.</p>
						<p>Just add it to your gatsby-config.js... no additional work required.</p>
					</div>
				)
			case `gatsby-source-stripe`:
				return (
					<div>
						{thisHeading}
						<p>This plugin provides your app access to Stripe objects: such as products, skus, discounts, customers, invoices, and so on.</p>
						<p>I use this plugin at <OutboundLink href='//davidsabine.ca'>another site to list my upcoming Scrum training classes</OutboundLink>.  I don't yet have a good example in this starter.</p>
					</div>
				)
			default:
				return null
		}
	}
}
