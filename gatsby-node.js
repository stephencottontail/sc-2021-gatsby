const path = require( 'path' )

exports.createPages = ( { graphql, actions } ) => {
	const { createPage } = actions

	return graphql(`
	{
		allWpPost( sort: { fields: [date] } ) {
			edges {
				node {
					title
					excerpt
					slug
					date
					databaseId
					author {
						node {
							name
						}
					}
				}
			}
		}
	}
	`).then( result => {
		if ( result.errors ) {
			throw result.errors
		}

		result.data.allWpPost.edges.forEach( edge => {
			createPage( {
				path: `blog/${edge.node.slug}`,
				component: path.resolve( './src/templates/blog-post.js' ),
				context: {
					slug: edge.node.slug
				}
			} )
		} )
	} )
}
