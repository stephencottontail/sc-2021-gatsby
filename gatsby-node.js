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

		const postsPerPage = 2;
		const allPosts = result.data.post.edges;
		const allProjects = result.data.project.edges;
		const numPostPages = Math.ceil( allPosts.length / postsPerPage );
		const numProjectPages = Math.ceil( allProjects.length / postsPerPage );

		Array.from( { length: numPostPages } ).forEach( ( _, i ) => {
			allPosts.forEach( edge => {
				createPage( {
					path: 0 === i ? `blog` : `blog/${i + 1}`,
					component: path.resolve( './src/templates/blog-archive.js' ),
					/**
					 * these are available both to GraphQL and also as the
					 * `pageContext` prop. none of the docs or tutorials i
					 * read mentioned that second part.
					 */
					context: {
						limit: postsPerPage,
						skip: i * postsPerPage,
						numPostPages,
						currentPostPage: i + 1
					}
				} )
			} )
		} );

		allPosts.forEach( edge => {
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

		Array.from( { length: numProjectPages } ).forEach( ( _, i ) => {
			allProjects.forEach( edge => {
				createPage( {
					path: 0 === i ? `project` : `project/${i + 1}`,
					component: path.resolve( './src/templates/project-archive.js' ),
					context: {
						limit: postsPerPage,
						skip: i * postsPerPage,
						numProjectPages,
						currentProjectPage: i + 1
					}
				} );
			} );
		} );

		allProjects.forEach( edge => {
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
