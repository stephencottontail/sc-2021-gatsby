const path = require( 'path' )

exports.createPages = ( { graphql, actions } ) => {
	const { createPage } = actions

	return graphql(`
	{
		post: allWpPost( sort: { fields: [date] } ) {
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
				previous {
					slug
				}
				next {
					slug
				}
			}
		},
		theme: allWpThemePost( sort: { fields: [date] } ) {
			edges {
				node {
					title
					content
					slug
					date(formatString: "Do")
					databaseId
				}
				previous {
					slug
				}
				next {
					slug
				}
			}
		},
		project: allWpProject( sort: { fields: [date] } ) {
			edges {
				node {
					title
					codepen
					technologies
					inspiration
					content
					slug
					date(formatString: "Do")
					databaseId
				}
				previous {
					slug
				}
				next {
					slug
				}
			}
		}
	}
	`).then( result => {
		if ( result.errors ) {
			throw result.errors
		}

		result.data.post.edges.forEach( edge => {
			createPage( {
				path: `blog/${edge.node.slug}`,
				component: path.resolve( './src/templates/blog-post.js' ),
				context: {
					slug: edge.node.slug,
					prev: edge.previous ? edge.previous.slug : '',
					next: edge.next ? edge.next.slug : '',
				}
			} )
		} )

		result.data.theme.edges.forEach( edge => {
			createPage( {
				path: `theme/${edge.node.slug}`,
				component: path.resolve( './src/templates/theme-post.js' ),
				context: {
					slug: edge.node.slug,
					prev: edge.previous ? edge.previous.slug : '',
					next: edge.next ? edge.next.slug : '',
				}
			} )
		} )

		result.data.project.edges.forEach( edge => {
			createPage( {
				path: `project/${edge.node.slug}`,
				component: path.resolve( './src/templates/project-post.js' ),
				context: {
					slug: edge.node.slug,
					prev: edge.previous ? edge.previous.slug : '',
					next: edge.next ? edge.next.slug : '',
				}
			} )
		} )
	} )
}
