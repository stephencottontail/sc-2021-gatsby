var env = require( 'dotenv' )
var mode = 'development' || process.env.NODE_ENV

env.config( {
	path: `.env.${mode}`
} )

module.exports = {
	plugins: [
		{
			resolve: 'gatsby-source-wordpress-experimental',
			options: {
				url: process.env.WORDPRESS_URL,
				verbose: true,
				/**
				 * Netlify will provide these environment variables
				 * on production
				 */
				auth: {
					htaccess: {
						username: process.env.HTUSER,
						password: process.env.HTPASSWD
					}
				}
			}
		},
		{
			resolve: 'gatsby-plugin-sass'
		},
		{
			resolve: 'gatsby-image'
		},
		{
			resolve: 'gatsby-transformer-sharp',
		},
		{
			resolve: 'gatsby-plugin-sharp'
		}
	]
}
