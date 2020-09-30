import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default ( { data } ) => {
	const post = data.allWpProject.edges[0].node

	return (
		<Layout>
			<main>
				<article
					key={ post.databaseId }
					id={ post.databaseId }
				>
					<header>
						<h2>{ post.title }</h2>
						<p>{ post.date }</p>
						<p>{ post.codepen }</p>
						<p>{ post.technologies }</p>
						<p>{ post.inspiration }</p>
					</header>
					<div
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>
				</article>
			</main>
		</Layout>
	)
}

export const query = graphql`
query($slug: String!) {
	allWpProject( filter: { slug: { eq: $slug } } ) {
		edges {
			node {
				title
				codepen
				technologies
				inspiration
				content
				slug
				date( formatString: "Do" )
			}
		}
	}
}
`