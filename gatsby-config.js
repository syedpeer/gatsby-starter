const sitesConfig = {
	sites: {
		default: {
			siteMetadata: {
				defaultTitle: `Hello world!`,
				description: `Gatsby Starter Hello World`,
				lang: `en`,
				locale: `en-CA`,
				icon: `src/images/512px-Home_font_awesome.svg.png`,
				siteUrl: `http://localhost`, //No trailing slash allowed
				titleTemplate: `%s | Default!`,
			 	twitterCreator: `@davesabine`
			}
		},
	}
}

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: {
        prefixes: [`/dashboard/*`]
      }
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      }
    },
		{
      resolve: `gatsby-plugin-google-analytics`,
			options: {
        anonymize: true,
				exclude: ["/preview/**", "/do-not-track/me/too/"],
				head: true,
				respectDNT: true,
				trackingId: `UA-125425021-1`,
			}
		},
		{
			resolve: `gatsby-plugin-google-tagmanager`,
			options: {
				id: `GTM-W9DNBKC`,
				includeInDevelopment: true,
				gtmAuth: `9qdcleHZMeragP2aZTYTpw`,
				gtmPreview: `env-5`,
			},
		},
		{
      resolve: `gatsby-plugin-manifest`,
	 		options: {
        background_color: `#242943`,
				display: `minimal-ui`,
				icon: `src/images/512px-Home_font_awesome.svg.png`,
				name: `Gatsby Starter Hello World for TDD`,
				orientation: `any`,
				short_name: `Hello World`,
				start_url: `/`,
				theme_color: `#ffffff`,
			}
		},
		`gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-stripe`,
		`gatsby-plugin-stripe-checkout`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			}
		},
		`gatsby-plugin-offline`,
		{
			resolve: `gatsby-source-stripe`,
			options: {
				objects: [`Balance`],
				secretKey: `sk_test_N5gHqJ1BCHIxPiSGfRbvmGtH`,
			}
		},
  ],
	siteMetadata: sitesConfig.sites[`default`].siteMetadata,
}
