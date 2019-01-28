import HtmlHead from '../components/htmlhead'
import Layout from '../components/layout'
import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

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
						<HtmlHead title='Home' />
						<main>
							<h2>Plugins UseD in this Starter</h2>
							<ul>
								{plugins.edges.map(({ node: plugin }) => (
									<Li plugin={plugin} />
								))}
							</ul>
						</main>
					</Layout>
				)}
			/>
		)
	}
}

export default PluginsMarkup

class Li extends React.Component {
	render() {
		const plugin = this.props.plugin
		if(plugin.pluginFilepath.indexOf(`gatsby/dist`) === -1) {
			return (
				<li id={plugin.id}>{plugin.name}</li>
			)
		} else {
			return null
		}
	}
}
