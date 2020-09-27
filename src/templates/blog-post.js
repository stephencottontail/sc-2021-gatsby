import React from "react"
import { graphql } from "gatsby"

export default ( { data } ) => {
	const post = data.allWpPost.edges[0].node

	return (
		<article
			key={ post.databaseId }
			id={ post.databaseId }
		>
			<header>
				<h2>{ post.title }</h2>
				<p>{ post.date }</p>
			</header>
			<div
				dangerouslySetInnerHTML={{ __html: post.content }}
			/>
		</article>
	)
}

export const query = graphql`
query($slug: String!) {
	allWpPost( filter: { slug: { eq: $slug } } ) {
		edges {
			node {
				title
				content
				slug
				date( formatString: "Do" )
				author {
					node {
						name
					}
				}
			}
		}
	}
}
`
