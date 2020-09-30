import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout'

export default ( { data } ) => {
	const post = data.allWpPost.edges[0].node

	return (
		<Layout>
			<Helmet
				title={ post.title }
				meta={[
					{
						'name': 'description',
						'content': post.excerpt
					},
					{
						'name': 'og:title',
						'content': post.title
					},
					{
						'name': 'og:description',
						'content': post.excerpt
					},
					{
						'name': 'og:type',
						'content': 'website'
					},
					{
						'name': 'og:image',
						'content': (
							post.featuredImage &&
							post.featureImage.node.sourceUrl
						)
					}
				]}
			/>
			<main>
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
			</main>
		</Layout>
	)
}

export const query = graphql`
query($slug: String!) {
	allWpPost( filter: { slug: { eq: $slug } } ) {
		edges {
			node {
				title
				content
				excerpt
				slug
				date(formatString: "MMMM D YYYY")
				featuredImage {
					node {
						srcSet
						sourceUrl
					}
				}
			}
		}
	}
}
`
