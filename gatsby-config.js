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
				verbose: true
			}
		}
	]
}
